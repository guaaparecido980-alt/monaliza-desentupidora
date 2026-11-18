# Google Search Console: guia e plano de crescimento

Para o Gustavo. Linguagem simples, passo a passo. O Search Console é gratuito e é **a única fonte confiável** para saber se o Google indexou o site, por quais buscas ele aparece e quantas pessoas clicaram.

> Nada neste documento é resultado. Os números só existem depois de configurar e esperar alguns dias (impressões começam a aparecer em 2 a 7 dias; dados úteis, em 4 a 8 semanas).

---

## 1. Verificar a propriedade (recomendado: pelo DNS da Hostinger)

A verificação por **domínio** cobre `https`, `http`, `www` e sem `www` de uma vez, e não depende do código do site.

1. Entrar em https://search.google.com/search-console com a conta Google da empresa.
2. "Adicionar propriedade" → escolher **Domínio** (caixa da esquerda) → digitar `monalizadesentupidora.com.br` (sem https, sem www).
3. O Google mostra um registro **TXT** parecido com `google-site-verification=abc123...`. Copiar.
4. Na Hostinger: hPanel → Domínios → monalizadesentupidora.com.br → **DNS / Nameservers** → Adicionar registro:
   - Tipo: **TXT**
   - Nome: **@**
   - Valor: o texto copiado
   - TTL: padrão
5. **Não apagar** os registros A e CNAME do GitHub que já estão lá.
6. Voltar ao Search Console e clicar em **Verificar**. Se falhar, esperar 1 hora (propagação) e tentar de novo.

**Alternativa (se preferir sem mexer no DNS):** propriedade "Prefixo do URL" com a tag HTML. Copiar só o código do `content="..."` e criar no GitHub (repositório → Settings → Secrets and variables → Actions → aba **Variables** → New variable) a variável `NEXT_PUBLIC_GSC_VERIFICATION` com esse código. O próximo deploy coloca a tag no site sozinho.

## 2. Enviar o sitemap
1. Search Console → menu **Sitemaps**.
2. Em "Adicionar um novo sitemap", digitar `sitemap.xml` → Enviar.
3. Status esperado: "Sucesso", com **14 URLs descobertas**. Se der erro, me avise com o print.

## 3. Pedir indexação das páginas principais (só uma vez, no início)
Menu **Inspeção de URL** (barra de cima) → colar a URL → "Solicitar indexação". Fazer para:
- https://monalizadesentupidora.com.br/
- https://monalizadesentupidora.com.br/servicos
- https://monalizadesentupidora.com.br/servicos/desentupimento-de-esgoto
- https://monalizadesentupidora.com.br/contato

As outras o Google acha sozinho pelo sitemap e pelos links. Não adianta pedir várias vezes por dia.

## 4. Acompanhar a indexação
- **Inspeção de URL** de uma página → "A URL está no Google" = **indexação confirmada** dessa página. Só isso confirma; aparecer numa busca `site:` não é garantia.
- Menu **Páginas** (em "Indexação"): mostra quantas páginas estão indexadas e quantas não.

## 5. Páginas não indexadas: o que cada motivo quer dizer

| Motivo no relatório | O que significa | O que fazer |
|---|---|---|
| Rastreada, mas não indexada | O Google leu e decidiu não incluir *por enquanto* | Normal no começo. Se continuar depois de 1 mês: reforçar a página (fotos reais, casos, perguntas) |
| Descoberta, mas não indexada | Ainda não leu | Esperar; é normal em site novo |
| Página alternativa com tag canônica adequada | Ex.: `/contato.html` ou versão `www`. O Google escolheu a versão certa | Nada, está correto |
| Não encontrado (404) | Link para página que não existe | Me mandar a URL. Se veio de link antigo, criamos um redirecionamento |
| Excluída pela tag "noindex" | Página bloqueada de propósito | Não deveria acontecer neste site. Me avise |
| Cópia, o Google escolheu uma canônica diferente | O Google acha que o conteúdo é igual a outra página | Me avise. Pode ser texto parecido com outro site (ex.: Máxima) |

## 6. Erros técnicos
- **Experiência na página → Core Web Vitals**: velocidade com usuários reais (só aparece com volume de visitas). "URLs ruins" ou "precisam de melhoria" → me avise.
- **Melhorias → Rich results / Breadcrumbs**: erros nos dados estruturados.
- **Segurança e ações manuais**: tem que estar "Nenhum problema detectado". Se aparecer algo, é urgente.
- O Google manda e-mail quando surge erro novo. Não ignorar.

## 7. Monitorar desempenho (menu **Desempenho → Resultados da pesquisa**)

| Métrica | O que é |
|---|---|
| **Impressões** | Quantas vezes o site apareceu numa busca (mesmo que a pessoa não tenha visto) |
| **Cliques** | Quantas vezes clicaram para entrar no site |
| **CTR** | Cliques ÷ impressões. Mostra se o título/descrição convence |
| **Posição média** | Lugar médio nos resultados (1 = primeiro). Média de todas as buscas, então varia muito |

**Como olhar:**
1. Período: "Últimos 3 meses" (depois comparar com o período anterior).
2. Aba **Consultas**: as buscas reais que mostraram o site. É daqui que sai o mapa real de palavras-chave.
3. Aba **Páginas**: qual página aparece para quê.
4. Clicar numa consulta → aba Páginas: confere se a página que aparece é a **dona** daquele termo (ver `docs/SEO-ESTRATEGIA.md`, seção 1). Duas páginas revezando no mesmo termo = canibalização.
5. Filtro **Dispositivo**: o celular deve ser a maior parte.

## 8. Encontrar oportunidades

| Situação nos dados | Leitura | Ação |
|---|---|---|
| Muitas impressões, CTR baixo, posição até ~10 | O Google mostra, mas o título/descrição não atrai | Reescrever title e description daquela página com o termo da consulta e um motivo para clicar |
| Posição entre 8 e 20 | Quase na 1ª página | Reforçar a página: responder a dúvida da consulta no texto, adicionar FAQ, foto real, link interno vindo da home |
| Consulta de serviço que o site não tem página | Demanda real não atendida | Se a empresa faz o serviço: criar página com conteúdo próprio |
| Consulta com nome de cidade aparecendo bastante | Demanda local real | Juntar material (bairros, casos) para uma página da cidade, seguindo a regra anti-doorway |
| Consulta com "como", "por que", "quanto" | Dúvida | Responder no FAQ da página certa, ou criar um guia se houver material |
| Busca pela marca crescendo | O nome está ficando conhecido | Bom sinal; manter o Perfil do Google atualizado |

---

## 9. Plano de crescimento

### Semana 1 (lançamento)
- [ ] Verificar o Search Console (seção 1) e enviar o sitemap (seção 2).
- [ ] Pedir indexação das 4 páginas principais (seção 3).
- [ ] Criar e verificar o **Perfil da Empresa no Google** (passo a passo em `SEO-ESTRATEGIA.md`, seção 4) e me passar o link do perfil e o de avaliações.
- [ ] (Opcional) Criar o GA4 e colocar o ID como variável `NEXT_PUBLIC_GA_ID` no GitHub (Settings → Secrets and variables → Actions → Variables). Marcar os eventos principais (`SEO-ESTRATEGIA.md`, seção 7).
- [ ] Passar no teste de rich results: https://search.google.com/test/rich-results com a home e uma página de serviço.
- [ ] Colocar o link do site na bio do Instagram e no WhatsApp Business (com UTM).

### Mês 1
- [ ] Conferir no relatório **Páginas** quantas das 14 estão indexadas. Investigar as que não estão (seção 5).
- [ ] Pedir avaliação no Google a todo cliente atendido (link direto, pelo WhatsApp).
- [ ] Mandar as primeiras **fotos reais** (equipe, veículo, hidrojateadora, serviços) → entram no site e no Perfil.
- [ ] Listar com a equipe as 10 dúvidas mais repetidas dos clientes no WhatsApp.

### Meses 2 e 3 (primeiros dados)
- [ ] Exportar as consultas do Search Console e revisar o mapa de palavras-chave com dados reais (substitui a prioridade "de julgamento").
- [ ] Páginas com impressões e CTR baixo → reescrever title/description (seção 8).
- [ ] Páginas na posição 8–20 → reforçar com FAQ, casos e fotos.
- [ ] Acrescentar casos reais curtos nas páginas de serviço (com autorização).
- [ ] Ver se alguma cidade aparece nas consultas com frequência → avaliar página própria (só com material real).

### A cada mês (rotina, ~30 minutos)
- [ ] Search Console → Desempenho: comparar com o mês anterior (cliques, impressões, consultas novas).
- [ ] Search Console → Páginas e Core Web Vitals: algum erro novo?
- [ ] GA4 (se ativo): quantos cliques em WhatsApp e ligação, de quais páginas e de qual origem.
- [ ] Responder as avaliações novas no Google.
- [ ] Atualizar o site quando algo mudar (serviço novo, equipamento novo, garantia, fotos).

### A cada 3 meses
- [ ] Rodar Lighthouse/PageSpeed no endereço real (https://pagespeed.web.dev).
- [ ] Rodar os testes do projeto (`npx playwright test`) depois de qualquer mudança grande.
- [ ] Revisar se os textos ainda batem com a forma como a empresa trabalha.

### O que NÃO fazer
- Comprar links ou avaliações.
- Criar páginas de cidade com texto repetido.
- Copiar texto da Máxima ou de concorrentes.
- Mudar URLs sem redirecionamento.
- Prometer no site prazo, preço ou garantia que não estejam confirmados.
