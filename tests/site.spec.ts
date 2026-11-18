import { test, expect, type Page } from "@playwright/test";
import { servicos } from "../src/content/servicos";

const rotas = [
  "/",
  "/servicos",
  "/quem-somos",
  "/regioes",
  "/contato",
  "/politica-de-privacidade",
  ...servicos.map((s) => `/servicos/${s.slug}`),
];

function coletarErros(page: Page) {
  const erros: string[] = [];
  page.on("console", (m) => m.type() === "error" && erros.push(m.text()));
  page.on("pageerror", (e) => erros.push(String(e)));
  page.on("response", (r) => {
    if (r.status() >= 400 && new URL(r.url()).origin === new URL(page.url() || r.url()).origin) erros.push(`${r.status()} ${r.url()}`);
  });
  return erros;
}

for (const rota of rotas) {
  test(`carrega sem erro e com SEO básico: ${rota}`, async ({ page }) => {
    const erros = coletarErros(page);
    const resp = await page.goto(rota);
    expect(resp?.status()).toBe(200);

    // Um único H1, title e description presentes, canonical apontando para a rota
    await expect(page.locator("h1")).toHaveCount(1);
    expect((await page.title()).length).toBeGreaterThan(10);
    const desc = await page.locator('meta[name="description"]').getAttribute("content");
    expect(desc && desc.length).toBeGreaterThan(50);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toMatch(new RegExp(`${rota === "/" ? "/?$" : rota + "$"}`));
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");

    // JSON-LD válido (parseável) e sem avaliações inventadas
    const blocos = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(blocos.length).toBeGreaterThan(0);
    for (const b of blocos) {
      const json = JSON.parse(b);
      expect(JSON.stringify(json)).not.toMatch(/AggregateRating|"Review"/);
    }

    // Sem rolagem horizontal
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);

    // Imagens/SVG com papel de imagem têm nome acessível
    const semNome = await page.locator('svg[role="img"]:not([aria-label])').count();
    expect(semNome).toBe(0);

    await page.waitForTimeout(300);
    expect(erros).toEqual([]);
  });
}

test("títulos e descrições são únicos entre as páginas", async ({ page }) => {
  const titulos = new Set<string>();
  const descricoes = new Set<string>();
  for (const rota of rotas) {
    await page.goto(rota);
    titulos.add(await page.title());
    descricoes.add((await page.locator('meta[name="description"]').getAttribute("content")) ?? "");
  }
  expect(titulos.size).toBe(rotas.length);
  expect(descricoes.size).toBe(rotas.length);
});

test("todos os links internos respondem 200", async ({ page, request }) => {
  const links = new Set<string>();
  for (const rota of rotas) {
    await page.goto(rota);
    const hrefs = await page.locator("a[href^='/']").evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).getAttribute("href")!));
    hrefs.forEach((h) => links.add(h.split("#")[0].split("?")[0] || "/"));
  }
  for (const l of links) {
    const r = await request.get(l);
    expect(r.status(), l).toBe(200);
  }
});

test("rota inexistente devolve 404 com página própria", async ({ page }) => {
  const r = await page.goto("/servicos/nao-existe");
  expect(r?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("não leva a lugar nenhum");
});

test("sitemap, robots, manifest e ícones", async ({ request }) => {
  const sm = await request.get("/sitemap.xml");
  expect(sm.status()).toBe(200);
  const xml = await sm.text();
  for (const rota of rotas.filter((r) => r !== "/")) expect(xml).toContain(rota);
  const rb = await request.get("/robots.txt");
  expect(await rb.text()).toContain("Sitemap:");
  expect((await request.get("/manifest.webmanifest")).status()).toBe(200);
  expect((await request.get("/icon.svg")).status()).toBe(200);
  expect((await request.get("/apple-icon.png")).status()).toBe(200);
  expect((await request.get("/opengraph-image.png")).status()).toBe(200);
});

test("menu do celular abre, navega e fecha com Esc", async ({ page, isMobile }) => {
  test.skip(!isMobile, "só no celular");
  await page.goto("/");
  const botao = page.getByRole("button", { name: "Abrir menu" });
  await botao.click();
  await expect(page.locator("#menu-movel")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#menu-movel")).toBeHidden();
  await botao.click();
  await page.locator("#menu-movel").getByRole("link", { name: /Quem somos/ }).click();
  await expect(page).toHaveURL(/\/quem-somos$/);
  await expect(page.locator("#menu-movel")).toBeHidden();
});

test("barra de contato fixa existe no celular e não cobre o rodapé", async ({ page, isMobile }) => {
  test.skip(!isMobile, "só no celular");
  await page.goto("/");
  const barra = page.getByTestId("barra-contato");
  await expect(barra).toBeVisible();
  const caixa = await barra.boundingBox();
  expect(caixa!.height).toBeGreaterThanOrEqual(56);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const copyright = page.locator("footer").getByText(/©/);
  const c = await copyright.boundingBox();
  const b = await barra.boundingBox();
  expect(c!.y + c!.height).toBeLessThanOrEqual(b!.y + 1);
});

test("FAQ abre e fecha pelo teclado", async ({ page }) => {
  await page.goto("/");
  const primeira = page.locator("details.faq").first();
  await primeira.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(primeira).toHaveAttribute("open", "");
});

test("formulário valida campos e mostra erros acessíveis", async ({ page }) => {
  await page.goto("/contato");
  await page.getByRole("button", { name: /Enviar pelo WhatsApp/ }).click();
  const alerta = page.getByRole("alert").filter({ hasText: "Confira" });
  await expect(alerta).toBeVisible();
  await expect(alerta).toContainText("5 campos");
  await expect(page.locator('[aria-invalid="true"]')).toHaveCount(5);
});

test("formulário completo: abre o WhatsApp ou avisa honestamente que o canal não está pronto", async ({ page }) => {
  await page.goto("/contato?servico=hidrojateamento");
  await expect(page.locator('select[name="servico"]')).toHaveValue("hidrojateamento");
  await page.locator('input[name="nome"]').fill("Maria Teste");
  await page.locator('input[name="telefone"]').fill("41999998888");
  await expect(page.locator('input[name="telefone"]')).toHaveValue("(41) 99999-8888");
  await page.locator('select[name="cidade"]').selectOption("Pinhais");
  await page.locator('textarea[name="descricao"]').fill("Cano da cozinha entupindo toda semana.");
  await page.waitForTimeout(2600); // tempo mínimo anti-spam
  const popup = page.waitForEvent("popup", { timeout: 3000 }).catch(() => null);
  await page.getByRole("button", { name: /Enviar pelo WhatsApp/ }).click();
  const janela = await popup;
  if (janela) {
    expect(janela.url()).toMatch(/wa\.me\/\d+\?text=/);
    expect(decodeURIComponent(janela.url())).toContain("Hidrojateamento");
  } else {
    // WhatsApp ainda não configurado em empresa.ts: o site precisa dizer que NÃO enviou
    await expect(page.getByText("Sua mensagem não foi enviada")).toBeVisible();
  }
});

test("botões de contato nunca usam número inventado", async ({ page }) => {
  for (const rota of ["/", "/contato", `/servicos/${servicos[0].slug}`]) {
    await page.goto(rota);
    const wa = await page.locator("a[href*='wa.me']").evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href));
    for (const href of wa) expect(href).toMatch(/wa\.me\/55\d{10,11}\?text=/);
  }
});

test("com movimento reduzido todo o conteúdo fica visível", async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto("/");
  await page.waitForTimeout(800);
  const escondidos = await page.locator("[data-revela]").evaluateAll((els) =>
    els.filter((e) => Number(getComputedStyle(e).opacity) < 1).length,
  );
  expect(escondidos).toBe(0);
  await ctx.close();
});
