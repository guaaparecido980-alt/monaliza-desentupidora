// Tira screenshots de página inteira nas larguras obrigatórias e aponta overflow horizontal
// e erros de console. Uso: node scripts/screenshots.mjs [rota1 rota2 ...] [--larguras=375,1440]
// Saída: test-results/screens/<rota>-<largura>.png
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://localhost:3200";
const args = process.argv.slice(2);
const flagL = args.find((a) => a.startsWith("--larguras="));
const larguras = flagL
  ? flagL.split("=")[1].split(",").map(Number)
  : [320, 360, 375, 390, 414, 430, 768, 1024, 1440, 1920];
const rotas = args.filter((a) => !a.startsWith("--"));
if (!rotas.length) rotas.push("/");
const reduzido = args.includes("--reduzido");

mkdirSync("test-results/screens", { recursive: true });
const browser = await chromium.launch();
let problemas = 0;

for (const rota of rotas) {
  for (const w of larguras) {
    const ctx = await browser.newContext({
      viewport: { width: w, height: w < 768 ? 800 : 900 },
      deviceScaleFactor: 1,
      reducedMotion: reduzido ? "reduce" : "no-preference",
    });
    const page = await ctx.newPage();
    const erros = [];
    page.on("console", (m) => m.type() === "error" && erros.push(m.text()));
    page.on("pageerror", (e) => erros.push(String(e)));
    await page.goto(BASE + rota, { waitUntil: "load", timeout: 90000 });
    // Rola até o fim para disparar as animações de entrada, depois volta ao topo
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 90));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1600);
    const overflow = await page.evaluate(() => {
      const largura = document.documentElement.clientWidth;
      const culpados = [];
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > largura + 1 && getComputedStyle(el).position !== "fixed") {
          culpados.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 50)} → ${Math.round(r.right)}`);
        }
      });
      return { scroll: document.documentElement.scrollWidth > largura, culpados: culpados.slice(0, 5) };
    });
    const nome = (rota === "/" ? "home" : rota.replace(/^\//, "").replace(/\//g, "_")) + `-${w}${reduzido ? "-rm" : ""}`;
    await page.screenshot({ path: `test-results/screens/${nome}.png`, fullPage: true });
    if (overflow.scroll || erros.length) problemas++;
    console.log(
      `${nome}: ${overflow.scroll ? "OVERFLOW " + JSON.stringify(overflow.culpados) : "ok"}${erros.length ? " | ERROS: " + erros.join(" || ").slice(0, 400) : ""}`,
    );
    await ctx.close();
  }
}
await browser.close();
process.exit(problemas ? 1 : 0);
