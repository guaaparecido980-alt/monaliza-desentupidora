# Estratégia de SEO e crescimento orgânico

Atualizado em 18/11/2026. Complementa `docs/PESQUISA.md` (mercado e matriz de serviços).

**Regra deste documento:** nada de volume de busca, dificuldade, posição ou CTR inventados. Não havia ferramenta de volume (Semrush, Planejador de Palavras-chave) nesta sessão. A prioridade abaixo é **julgamento** (intenção de contratação + serviço confirmado + concorrência vista na busca), não métrica. Depois de 4 a 8 semanas no ar, o Search Console mostra as consultas reais, e é por elas que este mapa deve ser revisto.

---

## 0. Em que etapa estamos (não confundir)

| Etapa | Situação em 18/11/2026 | Como se comprova |
|---|---|---|
| **SEO implementado** | ✅ Feito | Código no repositório (metadados, schema, sitemap, robots, links internos, eventos) |
| **SEO testado** | ✅ Feito | 48 testes automáticos + auditoria no site publicado (seção 5) + Lighthouse no endereço real (seção 6) |
| **SEO monitorado** | ❌ Ainda não | Depende de criar a propriedade no Search Console e (opcional) o GA4 — ver `docs/SEARCH-CONSOLE.md` |
| **Indexação confirmada** | ❌ Não verificada | Só o Search Console (Inspeção de URL / relatório Páginas) confirma. Não dá para afirmar que alguma página está no Google |
| **Posicionamento conquistado** | ❌ Não medido | Só com dados do Search Console (posição média por consulta) ao longo de semanas |

---

## 1. Mapa de oportunidades (palavras-chave)

Legenda de intenção: **Contratar** = quer chamar alguém agora · **Problema** = descreve o sintoma, pode virar contratação · **Informação** = quer entender/resolver sozinho · **Local** = busca com cidade ou "perto de mim" · **Marca** = procura a empresa pelo nome.

Prioridade: **A** = alta intenção de contratação e serviço confirmado · **B** = boa intenção, mais concorrida ou menos frequente · **C** = apoio/informação, só depois de A e B.

### 1.1 Termos principais (cada um tem UMA página dona)

| Palavra-chave | Intenção | Página recomendada | Prioridade | Oportunidade | Risco de canibalização |
|---|---|---|---|---|---|
| desentupidora em Curitiba | Contratar + Local | `/` | A | 1ª página dominada por diretórios (Telelistas, Apontador, OHub); site próprio bem estruturado tem espaço | Médio: `/regioes` e páginas de serviço citam Curitiba. Mitigação: só a home usa "desentupidora em Curitiba" no title/H1 |
| desentupidora 24 horas Curitiba | Contratar (urgência) | `/` | A | Atendimento 24h confirmado. Quem busca à noite liga para o primeiro que aparece | Baixo: as páginas de serviço citam 24h no texto, mas não como termo principal |
| desentupidora perto de mim | Local | `/` + Perfil da Empresa no Google | A | Essa busca é decidida principalmente pelo **mapa** (Perfil da Empresa), não pelo site | Nenhum no site. O risco é o Perfil não existir ou ter dados diferentes do site |
| desentupimento de esgoto Curitiba | Contratar | `/servicos/desentupimento-de-esgoto` | A | Serviço de maior valor; urgência ("esgoto voltando") | Baixo: hidrojateamento fala de rede, mas com outro foco (limpeza/prevenção) |
| esgoto voltando / retornando | Problema | `/servicos/desentupimento-de-esgoto` | A | Sintoma descrito pelo cliente. A página já abre pelo problema | Baixo |
| desentupir vaso sanitário Curitiba / privada entupida | Contratar + Problema | `/servicos/desentupimento-de-vaso-sanitario` | A | Urgência alta, casa e comércio | Baixo |
| desentupir pia Curitiba / pia entupida | Contratar + Problema | `/servicos/desentupimento-de-pia` | A | Muito comum. Parte do público tenta resolver sozinha antes | Médio com caixa de gordura (gordura é causa nas duas). Mitigação: pia = ponto de uso; caixa = caixa externa/restaurante. Já linkam uma para a outra |
| limpeza de caixa de gordura Curitiba | Contratar | `/servicos/limpeza-de-caixa-de-gordura` | A | Restaurantes e condomínios (serviço recorrente) | Médio com pia (acima) |
| desentupir ralo Curitiba / ralo do box entupido | Contratar + Problema | `/servicos/desentupimento-de-ralo` | B | Comum, valor menor | Baixo |
| hidrojateamento Curitiba | Contratar (B2B) | `/servicos/hidrojateamento` | A | Condomínios e empresas; equipamento aparece na logo | Médio com esgoto. Mitigação: esgoto = desobstruir agora; hidrojateamento = limpeza completa/preventiva |
| hidrojateamento em condomínio | Contratar (B2B) | `/servicos/hidrojateamento` | B | Síndico procura prevenção e coluna coletora | Baixo |
| caça-vazamento Curitiba / detecção de vazamento | Contratar | `/servicos/caca-vazamento` | B | Público com dor clara (conta alta) | Baixo |
| conta de água alta sem motivo | Problema/Informação | `/servicos/caca-vazamento` | B | Atrai antes da decisão. A página já responde "como saber se tenho vazamento" | Baixo |
| encanador Curitiba / encanador 24 horas | Contratar | `/servicos/encanador` | B | Termo amplo e concorrido | Médio com a home (24h). Mitigação: home foca "desentupidora"; encanador foca reparos |
| serviços de desentupimento Curitiba | Contratar (genérico) | `/servicos` | B | Página-índice que distribui para cada serviço | Médio com a home. Mitigação: título diferente ("Serviços de…"), conteúdo em formato de catálogo |
| desentupidora São José dos Pinhais / Pinhais / Colombo / Araucária / Almirante Tamandaré / Fazenda Rio Grande / Campo Largo | Contratar + Local | `/regioes` (hoje) | B | Cidades confirmadas. Diretórios dominam | **Alto se criar uma página por cidade com o mesmo texto** (doorway). Ver seção 2.3 |
| Monaliza Desentupidora | Marca | `/` | A | Marca nova. Precisa vencer a própria busca de marca | Nenhum |
| quanto custa desentupir | Informação (preço) | FAQ da home e das páginas de serviço | C | Pergunta real do cliente. O site responde **sem inventar preço** (valor combinado após avaliação) | Baixo |
| precisa quebrar piso para desentupir? | Informação | FAQ geral | C | Medo nº 1 junto com cobrança. Responde direto ao diferencial | Baixo |
| como desentupir pia sozinho / soda cáustica | Informação (faça você mesmo) | **Não criar agora** | C | Volume provável alto, mas baixa contratação. Só faz sentido como guia honesto ("o que tentar e quando chamar"), escrito com o técnico | Médio com a página de pia, se mal feito |

### 1.2 Perguntas reais do cliente (fonte: Reclame Aqui, fóruns de condomínio, notícias; ver PESQUISA.md)
Já respondidas no site (FAQ com schema FAQPage):
- Precisa quebrar o piso? · Tem taxa de visita / quanto custa? · O preço pode mudar durante o serviço? · Atende de madrugada e fim de semana? · Atende condomínio e comércio? · Preciso estar em casa? · De quanto em quanto tempo limpar a caixa de gordura? · Como saber se tenho vazamento?

Para validar e acrescentar com o dono/técnicos (dúvidas que chegam no WhatsApp): pedir ao Gustavo as 10 perguntas mais repetidas pelos clientes no último mês. **Elas valem mais que qualquer lista de ferramenta.**

---

## 2. Arquitetura

### 2.1 Estrutura atual (cada página com um objetivo)

```
/                                    → empresa + serviços principais + 24h (termo: desentupidora em Curitiba)
├── /servicos                        → índice dos 8 serviços (distribui autoridade)
│   ├── /desentupimento-de-esgoto
│   ├── /desentupimento-de-pia
│   ├── /desentupimento-de-vaso-sanitario
│   ├── /desentupimento-de-ralo
│   ├── /limpeza-de-caixa-de-gordura
│   ├── /hidrojateamento
│   ├── /caca-vazamento
│   └── /encanador
├── /regioes                         → área de atendimento real (8 cidades confirmadas)
├── /quem-somos                      → como a empresa trabalha (confiança / E-E-A-T)
├── /contato                         → conversão (WhatsApp, ligação, formulário)
└── /politica-de-privacidade
```

- URLs descritivas, em português, sem acento, sem data. Nenhuma URL deve mudar daqui em diante (se mudar, precisa de redirecionamento).
- Links internos: menu e rodapé levam a todas as páginas; cada serviço linka 2 ou 3 relacionados; a home e `/servicos` linkam todos os serviços; migalhas (breadcrumb) em todas as internas.
- Profundidade máxima: 2 cliques a partir da home.

### 2.2 Páginas que podem nascer (somente com material real)

| Página | Quando criar | O que precisa ter de exclusivo |
|---|---|---|
| `/servicos/limpeza-de-fossa` (ou outro serviço) | Se o dono confirmar que a empresa faz | Processo, equipamento, perguntas próprias |
| `/condominios` | Se condomínios forem cliente relevante | Plano preventivo, como funciona com síndico, casos reais com autorização |
| `/restaurantes` (caixa de gordura) | Se houver contratos recorrentes | Periodicidade, exigências da vigilância sanitária (citar fonte), fotos reais |
| `/dicas/[assunto]` | Quando houver dúvidas reais repetidas e um técnico para revisar | Guia honesto, com o que o cliente pode tentar e quando parar. Assinado |
| `/regioes/[cidade]` | Ver 2.3 | — |

### 2.3 Páginas por cidade: regra anti-doorway
**Não existem de propósito.** Uma página por cidade com o mesmo texto trocando o nome é o que o Google chama de *doorway page*, e pode derrubar o site inteiro.

Uma cidade só ganha página própria quando tiver **pelo menos**:
1. Bairros realmente atendidos (lista do dono).
2. 2 ou mais casos reais naquela cidade (tipo de problema, como foi resolvido; com foto se possível e com autorização).
3. Alguma particularidade real (ex.: muitos condomínios antigos, rede da Sanepar em certas áreas, região de restaurantes).

Sem isso, `/regioes` continua sendo a página única de área de atendimento.

---

## 3. Conteúdo com experiência real (E-E-A-T)

O que o site já mostra de forma honesta: como o atendimento funciona (etapas), o método de cada serviço explicado sem prometer equipamento não confirmado, os compromissos (valor antes, mexer no mínimo, testar, deixar limpo) e respostas a dúvidas reais.

**O que mais falta, em ordem de impacto** (tudo depende do dono; nada pode ser inventado):

1. **Fotos reais** de equipe, veículo, hidrojateadora e serviços. Uma foto real vale mais que qualquer texto para confiança e para o Perfil da Empresa no Google. Ver `docs/IMAGENS.md` (formato, autorização, como nomear).
2. **Casos reais curtos** (problema → causa encontrada → o que foi feito), com autorização do cliente e sem expor endereço. Ex.: "Prédio no Água Verde, coluna da cozinha com gordura: hidrojateamento pela caixa de inspeção, sem quebra." Entram na página do serviço correspondente.
3. **Equipamentos confirmados** (câmera de inspeção? geofone? quais máquinas?). Só depois de confirmados entram no texto e no schema.
4. **Quem atende**: nome do responsável técnico e experiência (se o dono quiser mostrar). Reforça a autoria.
5. **Ano de fundação** ("Desde 1996", na logo): só entra no texto e no `foundingDate` depois de confirmado.

---

## 4. SEO local

| Item | Situação | Onde |
|---|---|---|
| Nome | ✅ "Monaliza Desentupidora", igual em todo o site e no schema | `empresa.ts` |
| Telefone | ✅ (41) 99641-0946, igual no site, no schema (`telephone`) e nos botões | `empresa.ts` |
| Endereço | ⏸ Sem endereço público. O site trata como **empresa que atende no local do cliente** (correto para desentupidora). Não inventar endereço nem "filial" | `empresa.ts` → `endereco` |
| Horário | ✅ 24 horas, 7 dias (confirmado), no texto e no schema (`openingHoursSpecification`) | `empresa.ts` |
| Área de atendimento | ✅ 8 cidades confirmadas, no texto e no schema (`areaServed`) | `empresa.ts` |
| Perfil da Empresa no Google | ❌ Não informado. **É o item local mais importante.** Ver passo a passo abaixo | `empresa.ts` → `perfilGoogle` |
| Link para avaliações | ❌ Pendente (sai do Perfil da Empresa). Quando preenchido, aparece "Avaliar no Google" no contato e no rodapé | `empresa.ts` → `linkAvaliacoes` |
| Fotos reais | ❌ Pendente | `public/fotos/` |
| Avaliações/estrelas no site | 🚫 Proibido sem avaliações reais. Nunca `AggregateRating` inventado | — |

### Perfil da Empresa no Google (passo a passo para o Gustavo)
1. Entrar em https://business.google.com com a conta Google da empresa.
2. Nome: **Monaliza Desentupidora** (exatamente igual ao site; não colocar "Desentupidora 24h Curitiba Barato" no nome, porque isso é proibido e dá suspensão).
3. Categoria principal: "Serviço de desentupimento" (ou a mais próxima que aparecer). Secundárias: "Encanador", "Serviço de limpeza de fossa séptica" só se a empresa fizer.
4. Marcar como **empresa que atende o cliente no local** e **esconder o endereço** (se não houver loja aberta ao público). Área de atendimento: as 8 cidades.
5. Telefone: (41) 99641-0946. Site: https://monalizadesentupidora.com.br. Horário: 24 horas, todos os dias.
6. Subir fotos reais (equipe, veículo, equipamento, serviços).
7. Depois de verificado: copiar o link do perfil e o link "Pedir avaliações" e me passar. Eles entram em `perfilGoogle` e `linkAvaliacoes`.
8. **Atenção:** o Perfil da Máxima e o da Monaliza não podem ter o mesmo telefone nem as mesmas fotos, senão o Google pode juntar ou suspender os dois.

### Avaliações legítimas
- Pedir a avaliação ao cliente logo depois do serviço, pelo WhatsApp, com o link direto.
- Responder todas, inclusive as negativas, com educação e sem expor dados do cliente.
- Proibido: comprar avaliações, avaliar a si mesmo, trocar desconto por avaliação 5 estrelas, pedir para funcionários avaliarem.

---

## 5. SEO técnico: auditoria no site publicado (18/11/2026)

Feita com script próprio sobre https://monalizadesentupidora.com.br (todas as URLs do sitemap) e com `curl`.

| Item | Resultado |
|---|---|
| HTTPS | ✅ Certificado válido; HTTPS forçado |
| Redirecionamentos | ✅ `http://` → `https://` (301); `www` → sem `www` (301), mantendo o caminho |
| Status | ✅ 14 páginas do sitemap respondem 200; página inexistente responde **404** com página própria |
| robots.txt | ✅ Libera tudo e aponta o sitemap |
| sitemap.xml | ✅ 14 URLs, todas 200, todas canônicas |
| Canonical | ✅ Em todas as páginas, apontando para a própria URL (sem barra no fim) |
| Indexável | ✅ `index, follow` em todas; nenhum `noindex` acidental |
| Title | ✅ Únicos (0 duplicados); termo principal no começo |
| Meta description | ✅ Únicas; **corrigido**: 9 passavam de 160 caracteres e seriam cortadas, agora todas ≤ 157 |
| Open Graph | ✅ **Corrigido**: só a home tinha imagem de compartilhamento; agora todas têm (1200×630, com texto alternativo) |
| H1 | ✅ Exatamente 1 por página |
| Imagens sem `alt` | ✅ 0 |
| Links internos | ✅ 15 destinos verificados, nenhum quebrado; nenhuma página órfã (todas no sitemap) |
| Breadcrumbs | ✅ Visíveis + `BreadcrumbList` em todas as internas |
| Dados estruturados | ✅ JSON-LD válido (sem erro de sintaxe) em todas: `Plumber`, `WebSite`, `WebPage`, `Service`, `BreadcrumbList`, `FAQPage`, `ItemList`, `ContactPage`. Sem `AggregateRating`/`Review`. **Corrigido**: o link do WhatsApp saiu do `sameAs` (ali vão só perfis oficiais) |
| Renderização | ✅ Todo o texto está no HTML entregue (exportação estática); a animação só revela, não esconde de buscadores |
| Mobile | ✅ Testado em 10 larguras (320–1920), sem rolagem horizontal; menu e barra de contato testados |
| `lang` | ✅ `pt-BR` |

**Observações conhecidas (não críticas):**
- `/servicos/` (com barra no fim) responde 404. Nenhum link do site usa barra, e o canonical é sem barra. No GitHub Pages, criar `servicos/index.html` faria `/servicos` redirecionar para `/servicos/`, o que contraria o canonical. Por isso fica assim.
- `/contato.html` também abre (comportamento do GitHub Pages). O canonical aponta para `/contato`, então o Google consolida.
- O sitemap não tem `lastmod`. O Google só usa `lastmod` quando é preciso, e data de build não é data de alteração real. Melhor sem do que com data falsa.

**Validação externa pendente (precisa de navegador, fazer uma vez):**
- https://search.google.com/test/rich-results → colar a home e uma página de serviço.
- https://validator.schema.org → mesmas URLs.
- Resultado esperado: `FAQPage` e `BreadcrumbList` elegíveis. O Google restringiu o rich result de FAQ a sites de governo e saúde desde 2023, então **as perguntas não vão aparecer como sanfona no Google**, mas o schema continua válido e ajuda a entender a página.

---

## 6. Performance

Medição com Lighthouse 12 (simulação de celular, rede 4G lenta) **no endereço publicado**. Resultados na seção "Medições" de `docs/PENDENCIAS-E-PUBLICACAO.md`.

O que já está otimizado:
- **Sem imagens pesadas**: os desenhos são SVG no próprio HTML (sem download extra; o maior elemento da tela é texto).
- **Fontes**: 3 famílias, só o subconjunto latino, com `display: swap/optional`, auto-hospedadas pelo Next (sem pedir ao Google Fonts).
- **JavaScript**: GSAP só carrega depois da página pronta (ocioso), nunca bloqueia a primeira pintura. Cabeçalho e logo são HTML de servidor.
- **CLS 0**: nada muda de lugar ao carregar.
- **Animação**: só `transform`/`opacity`; desligada com "reduzir movimento".
- **GA4**: não carrega nada sem consentimento.

**Dados de campo (usuários reais):** o relatório do Chrome (CrUX) só aparece depois que o site tiver visitas suficientes. Conferir em https://pagespeed.web.dev (aba "Descubra o que seus usuários reais estão vivenciando") e no Search Console → "Core Web Vitals", algumas semanas após o lançamento. Até lá, **não há dado de campo**, só de laboratório.

---

## 7. Conversão e eventos

Medição pronta, mas **desligada até existir o GA4** (variável `NEXT_PUBLIC_GA_ID` no build) e o visitante aceitar os cookies.

| Evento | Quando dispara | Parâmetros |
|---|---|---|
| `whatsapp_click` | Qualquer botão de WhatsApp | `servico`, `local` (cabecalho, hero, barra-movel, flutuante, topo-servico, chamada-final, rodape, contato-topo…), `pagina` + origem |
| `telefone_click` | Botão "Ligar" | idem |
| `cta_contato` | Botões que levam ao contato/formulário | idem |
| `formulario_envio` | Formulário enviado (abre o WhatsApp com a mensagem) | `servico`, `cidade`, `canal` + origem |
| `ver_servico` | Abertura de página de serviço (inclusive navegação interna) | `servico` + origem |
| `perfil_google_click` / `avaliacao_click` | Links do Google (quando preenchidos) | `local` + origem |

**Origem da conversão** (vai em todos os eventos): `origem_fonte` (utm_source, ou site de onde veio, ou "direto"), `origem_meio`, `origem_campanha` (se houver) e `pagina_entrada`. Guardada só durante a visita e enviada só com consentimento. Testado em 18/11 com um ID de teste: visita vinda de `?utm_source=instagram` gerou `ver_servico` e depois `whatsapp_click` com a mesma origem.

**No GA4, depois de criado:**
1. Admin → Eventos → marcar `whatsapp_click`, `telefone_click` e `formulario_envio` como **eventos principais** (conversões).
2. Admin → Definições personalizadas → criar dimensões de evento: `servico`, `local`, `origem_fonte`, `pagina_entrada`.
3. Vincular GA4 ao Search Console (Admin → Vinculações de produtos).
4. Links divulgados fora do Google (Instagram, cartão, adesivo do carro) devem usar UTM, ex.: `https://monalizadesentupidora.com.br/?utm_source=instagram&utm_medium=bio`.

**Sem fricção:** WhatsApp e Ligar estão a um toque em qualquer página no celular (barra fixa) e no topo/fim de cada página de serviço, já com a mensagem do serviço preenchida.

---

## 8. Search Console
Passo a passo completo em `docs/SEARCH-CONSOLE.md`.

## 9. Plano de crescimento
Em `docs/SEARCH-CONSOLE.md`, seção "Plano de crescimento" (o que fazer em cada fase, guiado pelos dados reais).

---

## 10. Critério de aprovação: checklist

| Critério | Status |
|---|---|
| Arquitetura definida | ✅ Seção 2 |
| Páginas principais com conteúdo exclusivo | ✅ 8 serviços com textos próprios; nada copiado da Máxima |
| Metadados completos | ✅ Title, description, canonical, OG com imagem em todas |
| Links internos funcionando | ✅ Verificado no site publicado e em teste automático |
| Sitemap acessível | ✅ |
| robots.txt correto | ✅ |
| Dados estruturados válidos | ✅ Sintaxe válida e tipos corretos (verificado). ⏳ Falta passar uma vez no teste de rich results do Google (precisa de navegador) |
| Sem problemas críticos de indexabilidade | ✅ |
| Mobile funcional | ✅ |
| Performance testada | ✅ Laboratório no endereço real. ⏳ Dados de campo só após visitas |
| Search Console preparado para configuração | ✅ Código pronto para receber a verificação (`NEXT_PUBLIC_GSC_VERIFICATION`) e guia escrito. ⏳ Falta o Gustavo criar a propriedade |

**Conclusão:** o SEO está **tecnicamente preparado** (implementado e testado). Ainda **não está monitorado**, a **indexação não foi confirmada** e **não há posicionamento medido**. Essas três etapas dependem do Search Console e do tempo.
