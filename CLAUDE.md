@AGENTS.md

# Monaliza Desentupidora — site institucional

Projeto **separado** de qualquer outro (não tem nada a ver com o Barberos OS). Dono do projeto: Gustavo (fala português simples; explique sem jargão).

## Leia antes de qualquer coisa
1. `docs/PROMPT-MASTER.md` — o briefing completo (é a especificação do site; siga tudo).
2. `docs/DADOS-DA-EMPRESA.md` — o que é **confirmado** e o que é **pendente**. Nunca publique informação pendente como se fosse verdade.
3. `docs/SERVICOS-REFERENCIA.md` — serviços levantados no site Máxima (mesmo dono).
4. `docs/REFERENCIAS-E-SKILLS.md` — quais skills usar em cada fase.
5. `marca/` — logo (foto de celular + recorte provisório). Precisa virar **SVG vetorizado** fiel ao original.

## Fatos-chave
- Cliente: o mesmo dono da **Máxima Desentupidora** (maximadesentupidoradias.com, Curitiba/PR). O código desse site é do Gustavo (repo `guaaparecido980-alt/Desentupidora`) e uma cópia está em `referencias/site-maxima/` **só para levantar serviços**. Não copiar visual, textos, imagens nem estrutura.
- A Monaliza é uma **segunda marca**, com logo e cores próprias. Os dois sites competem na mesma cidade, então **todo texto tem que ser original**. Conteúdo duplicado entre os dois sites prejudica os dois no Google.
- Telefone/WhatsApp visto no print da logo: **+55 41 9820-6609**. No print falta um dígito (celular tem 9 dígitos), então **confirmar com o Gustavo antes de publicar**. Fica só em `src/config/empresa.ts`.
- A logo diz **"Desde 1996"**. É dado da marca, mas confirmar antes de usar em texto ou schema (`foundingDate`).
- Cores medidas na logo (aproximadas, pois vêm de foto): marinho `#2F4F7A`, azul-claro `#63A0C2`, fundo branco-gelo. A paleta final sai no DESIGN.md com contraste testado (WCAG AA).

## Regras inegociáveis
- **Não inventar**: anos, nº de clientes, equipe, garantias, 24h, tempo de chegada, cidades, avaliações, preços, endereço, CNPJ. O que faltar fica em `src/config/empresa.ts` com `null` e o componente some quando o dado não existe.
- Não usar `AggregateRating`/`Review` no schema sem avaliações reais.
- Não colocar ID falso de GA4/Search Console. Deixar por variável de ambiente (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`), carregando só com consentimento.
- Foto de banco de imagem nunca é apresentada como trabalho da empresa. Registrar a origem e a licença de cada imagem em `docs/IMAGENS.md`.
- Formulário sem backend → encaminhar para o WhatsApp com a mensagem montada (alternativa real), sem fingir "enviado".
- Respeitar `prefers-reduced-motion`; conteúdo nunca escondido para buscadores (o texto está no HTML; a animação só revela).
- Next.js 16 (App Router), React 19, Tailwind 4, GSAP + @gsap/react, Playwright. Ler `node_modules/next/dist/docs/` antes de usar uma API do Next (metadata, sitemap, robots, ícones, imagens).

## Fluxo de trabalho
- **Primeiro só no localhost** (`npm run dev` → http://localhost:3200). Porta 3200 de propósito: a 3000 tem o service worker do Barberos preso no navegador do Gustavo e mostra "Sem internet". Publicar só quando o Gustavo pedir.
- A publicação ainda não está definida. Opções: a VPS Hostinger que já roda outros sites dele, ou um build estático (`output: 'export'`) no GitHub Pages, como o site Máxima. Perguntar antes de publicar.
- Ciclo obrigatório: construir → screenshots com Playwright (320, 360, 375, 390, 414, 430, 768, 1024, 1440, 1920) → olhar cada print → corrigir → repetir pelo menos 2 vezes. Lighthouse (performance, SEO, acessibilidade) antes de dizer que está pronto. Nunca inventar resultado de teste.
- Git: repo privado `guaaparecido980-alt/monaliza-desentupidora`. Antes de commitar, conferir que não vai nenhum `.env*` nem segredo. Commits pequenos, em português.

## Comandos
- `npm run dev`: servidor local.
- `npm run build && npm start`: teste de produção.
- `npx playwright test`: testes (configurar em `playwright.config.ts` / `tests/`).
- `npx playwright install chromium` na primeira vez.
