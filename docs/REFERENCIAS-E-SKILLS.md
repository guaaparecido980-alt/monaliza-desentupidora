# Skills instaladas e quando usar

Todas foram baixadas do GitHub em 17/11/2026, são licença MIT e foram conferidas: não têm hooks nem scripts que rodam sozinhos. Ficam em `.claude/skills/` e o Claude Code carrega automaticamente nesta pasta.

| Fase | Skill | Origem |
|---|---|---|
| Direção criativa / anti-"cara de IA" | `frontend-dev` (Design DNA, lista de padrões proibidos, autocrítica por screenshot) | github.com/0x61A/frontend-dev-skill |
| Design system (gerar `DESIGN.md` antes do código) | `web-design` | github.com/xiaopu-ai/web-design |
| Auditoria (WCAG 2.2, responsivo, Core Web Vitals) | `frontend-doctor` | github.com/MikelMartinC/frontend-doctor |
| Motion | `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-react`, `gsap-plugins`, `gsap-performance`, `gsap-utils`, `gsap-frameworks` (oficiais da GreenSock; todos os plugins, inclusive SplitText, são grátis) | github.com/greensock/gsap-skills |
| Estratégia, marca, conteúdo, SEO, QA | `rs-*` (19 das 120 skills da RampStack; só as úteis aqui): creative-direction, art-direction, brand-identity, design-system, vertical-site-conventions, information-architecture, landing-page-copy, content-and-copy, cro-optimization, form-strategy, seo-keyword, seo-onpage, seo-technical, seo-aeo-geo, accessibility-audit, performance-optimization, qa-testing, security-baseline, analytics-strategy | github.com/db-bakkia/rampstack-claude-skills |

Também disponíveis globalmente na máquina (não precisa instalar): `frontend-design`, `ui-ux-pro-max`, `site-premium`, `seo`, `seo-local`, `seo-schema`, `seo-technical`, `seo-images`, `seo-content`, `seo-geo`, `seo-sitemap`, `design:accessibility-review`, `design:ux-copy` e o MCP **Context7** (documentação atualizada de Next/GSAP/Tailwind).

Testes: `@playwright/test` já instalado (rodar `npx playwright install chromium` na primeira vez).

## Ordem sugerida
1. `rs-creative-direction` + `frontend-dev` → Design DNA (marinho/azul da logo como base, sem cair em template).
2. `web-design` → `DESIGN.md` (paleta com contraste testado, tipografia com acentos PT, componentes, motion, responsivo).
3. `rs-information-architecture` + `rs-seo-keyword` + `seo-local` → mapa de páginas e de palavras-chave (sem canibalização e sem copiar a Máxima).
4. Construir com `gsap-*` + `frontend-dev`.
5. `seo-schema` / `rs-seo-technical` → JSON-LD (PlumbingService/LocalBusiness só com dado real), sitemap, robots, metadata.
6. `frontend-doctor` + `rs-accessibility-audit` + `rs-qa-testing` → auditoria com Playwright/Lighthouse e correção.

## Sites de inspiração citados no briefing
deschamps-assainissement.fr · palmbld.com · swooshsverige.se · xpressplumbingandconstruction.com. São referência de princípio (composição e ritmo), nunca para copiar.
