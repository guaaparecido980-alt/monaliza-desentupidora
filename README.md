# Monaliza Desentupidora — site

Site institucional novo da Monaliza Desentupidora (Next.js 16 + Tailwind 4 + GSAP + Playwright).

## Como começar a construção (nova conversa do Claude Code)
1. Abra o Claude Code **dentro desta pasta**: `cd C:\Users\User\Projetos\monaliza-desentupidora` e depois `claude`.
2. Cole o texto de `docs/PROMPT-MASTER.md` (ou só escreva: "Leia o CLAUDE.md e execute o docs/PROMPT-MASTER.md de ponta a ponta").
3. O Claude já encontra as skills em `.claude/skills/`, as regras no `CLAUDE.md`, os dados em `docs/` e a logo em `marca/`.

## Rodar
- `npm run dev` → http://localhost:3200
- `npx playwright install chromium` (uma vez) e depois `npx playwright test`

## Pastas
- `docs/`: briefing (PROMPT-MASTER), dados da empresa, serviços, skills, plano completo do ChatGPT
- `marca/`: logo (foto original + recorte provisório)
- `referencias/site-maxima/`: site antigo do mesmo dono, **só para levantar serviços**
- `src/config/empresa.ts`: todos os dados de contato num lugar só
