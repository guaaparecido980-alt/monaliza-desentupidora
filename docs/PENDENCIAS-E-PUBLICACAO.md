# Pendências e checklist de publicação

## O que falta o cliente passar (o site já está pronto para receber)
Tudo entra em **um arquivo só**: `src/config/empresa.ts`.

| Dado | Onde | O que acontece quando preencher |
|---|---|---|
| ~~WhatsApp~~ ✅ (41) 99641-0946 | `whatsapp` | Todos os botões passam a abrir o WhatsApp com mensagem pronta (por serviço). O formulário passa a enviar. Aparece o botão flutuante no desktop |
| ~~Telefone para ligar~~ ✅ mesmo número | `telefone` | Aparece o botão "Ligar" na barra do celular, no rodapé e no contato. Entra no schema (`telephone`) |
| ~~Domínio~~ | `dominio` | ✅ `monalizadesentupidora.com.br` (comprado na Hostinger, 17/11) |
| "Desde 1996" é real? | `fundacao: 1996` | Entra no schema (`foundingDate`). Hoje só aparece dentro da logo |
| E-mail, Instagram, Facebook | `email`, `redes` | Aparecem no rodapé/contato e no schema (`sameAs`) |
| Endereço público (se houver) | `endereco` | Aparece no contato e no schema. Sem endereço, o site trata como atendimento no local do cliente |
| CNPJ | `cnpj` | Aparece no rodapé e na política de privacidade |
| Prazo da garantia | texto em `diferenciais` | Hoje diz "prazo e condições no orçamento", sem número |
| Fotos reais (equipe, veículo, equipamentos, antes/depois) | `public/fotos/` + `docs/IMAGENS.md` | Ver IMAGENS.md |
| Link do Perfil da Empresa no Google | `perfilGoogle` | Aparece "Ver no Google" no contato e no rodapé; entra no schema (`sameAs`, `hasMap`) |
| Link para pedir avaliações | `linkAvaliacoes` | Aparece "Avaliar no Google" no contato e no rodapé. Nunca nota/estrelas sem avaliações reais |
| Bairros atendidos / casos por cidade | — | Permite criar páginas `/regioes/[cidade]` com conteúdo próprio (hoje não existem de propósito) |

## Checklist antes de publicar
- [x] Domínio preenchido em `empresa.ts` e em `public/CNAME`.
- [x] WhatsApp preenchido em `empresa.ts`.
- [x] `npm run build` sem erro e `npx playwright test` passando.
- [x] Rodar o teste do formulário e conferir que abre o WhatsApp certo.
- [x] Hospedagem: **GitHub Pages** (decidido em 17/11), igual à Máxima. `npm run build` gera `out/` (com `CNAME` e `.nojekyll`); o script `scripts/pos-export.mjs` ajusta os arquivos de navegação para hospedagem estática.
- [x] DNS na Hostinger (hPanel → Domínios → monalizadesentupidora.com.br → DNS): apagar A `@` e CNAME `www` antigos; criar A `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` e CNAME `www` → `guaaparecido980-alt.github.io`.
- [x] No GitHub (Settings → Pages): domínio `monalizadesentupidora.com.br` e "Enforce HTTPS" ligado (o certificado sai depois que o DNS propagar).
- [x] HTTPS ativo (certificado até 15/02/2027) e `www` → sem `www` (301).
- [ ] Google Search Console: verificar pelo DNS e enviar `sitemap.xml`. Passo a passo em `docs/SEARCH-CONSOLE.md`.
- [ ] GA4 (opcional): criar a variável `NEXT_PUBLIC_GA_ID` no GitHub (Settings → Secrets and variables → Actions → Variables); o deploy já repassa. O aviso de cookies aparece sozinho; eventos já prontos: `whatsapp_click`, `telefone_click`, `cta_contato`, `formulario_envio`, `ver_servico` (com serviço, local do clique e origem da visita). Ver `docs/SEO-ESTRATEGIA.md`, seção 7.
- [ ] Validar o schema em https://search.google.com/test/rich-results e https://validator.schema.org (precisa do site no ar).
- [ ] PageSpeed Insights (https://pagespeed.web.dev) no endereço real: dados de campo de LCP/INP/CLS.
- [ ] Perfil da Empresa no Google com o mesmo nome, telefone e área de atendimento do site (NAP igual).

## Medições no endereço publicado (18/11/2026)
- Lighthouse celular no site real: home Performance 91–96 (TBT 80–110 ms), serviço 92–98, contato 99; Acessibilidade, Boas práticas e SEO 100 em todas; CLS 0. Detalhes em `docs/SEO-ESTRATEGIA.md`, seção 6.

## Resultados medidos nesta entrega (17/11/2026, máquina local, build de produção)
- Playwright: 48 testes passando (desktop + celular Pixel 7), 2 pulados de propósito (testes só de celular no projeto desktop).
- Screenshots: 8 páginas × 10 larguras (320 a 1920) sem rolagem horizontal e sem erro de console; também com movimento reduzido.
- Lighthouse celular (simulação padrão), 4 rodadas na home: Performance 91–93, Acessibilidade 100, Boas práticas 100, SEO 100, CLS 0, TBT ~90 ms. LCP **simulado** 3,2 s; no traço real, a maior pintura acontece junto com a primeira (~0,3 s em rede local). Medir o LCP de campo após publicar.
- Lighthouse desktop: Performance 100 (LCP 0,7 s).
- As medições locais oscilaram bastante quando a máquina estava ocupada; os números acima são das rodadas repetidas e estáveis.
