# Monaliza Desentupidora — site

Site institucional da Monaliza Desentupidora (Curitiba/PR). Next.js 16 (App Router, tudo estático) + React 19 + Tailwind 4 + GSAP + Playwright.

## Rodar
- `npm run dev` → http://localhost:3200 (desenvolvimento)
- `npm run build && npx next start -p 3201` → teste de produção em http://localhost:3201
- `npx playwright test` → testes automáticos (sobe o servidor de produção sozinho; rode `npm run build` antes)
- `node scripts/screenshots.mjs / /contato` → prints nas 10 larguras em `test-results/screens/` (use `BASE_URL=http://localhost:3201` para o build de produção; no Git Bash, `MSYS_NO_PATHCONV=1`)

## Onde mexer
| Quero mudar… | Arquivo |
|---|---|
| WhatsApp, telefone, cidades, horário, diferenciais, domínio | `src/config/empresa.ts` (único lugar) |
| Textos dos serviços (cada página de serviço sai daqui) | `src/content/servicos.ts` |
| Perguntas frequentes gerais e etapas do atendimento | `src/content/geral.ts` |
| Cores, fontes, botões | `src/app/globals.css` (tokens) e `docs/DESIGN.md` |
| Logo | `src/components/marca/Emblema.tsx` |
| Desenhos técnicos | `src/components/ilustracoes/` |
| Schema / metadados | `src/lib/seo.ts` |

## Documentos
- `docs/PROMPT-MASTER.md` — briefing
- `docs/PESQUISA.md` — mercado, matriz de serviços, mapa de palavras-chave
- `docs/DESIGN.md` — Design DNA, paleta com contraste medido, tipografia, movimento
- `docs/IMAGENS.md` — origem e licença de cada imagem
- `docs/DADOS-DA-EMPRESA.md` — o que é confirmado e o que é pendente
- `docs/PENDENCIAS-E-PUBLICACAO.md` — o que falta o cliente passar, checklist de publicação e resultados dos testes

## Páginas
`/` · `/servicos` · `/servicos/[8 serviços]` · `/quem-somos` · `/regioes` · `/contato` · `/politica-de-privacidade` · 404 · `sitemap.xml` · `robots.txt` · `manifest.webmanifest`
