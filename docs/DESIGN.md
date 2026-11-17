# DESIGN.md · Monaliza Desentupidora

Fase 4 (Design DNA) e Fase 6 (sistema visual). Tudo que está aqui existe em código: tokens em `src/app/globals.css`, componentes em `src/components/`.

## 1. Design DNA

| Eixo | Escolha | Por que é desta marca (e não de qualquer uma) |
|---|---|---|
| Conceito | **Planta hidráulica** — o site é lido como um desenho técnico: cortes de solo, tubulações, anotações de cota | Desentupidora trabalha no que fica escondido (debaixo do piso, dentro da parede). Mostrar o "corte" é mostrar o que o cliente não vê |
| Elemento-assinatura | **A linha d'água**: um cano que atravessa a página e "enche" conforme a rolagem; no hero, um corte de solo onde um pulso de água limpa a obstrução | Vem do próprio serviço (desobstrução, fluxo). Conecta as seções numa narrativa contínua |
| Forma | **Canto chanfrado** (recorte em 45°) tirado do hexágono da logo; faixa de **alvenaria** da logo como textura | Liga o site à logo sem repetir a logo em todo lugar |
| Paleta | Família marinho/azul-água da logo + **âmbar de sinalização** | Marinho é o padrão do setor (BP06), mas aqui vem da logo real. O âmbar (tampa de visita, placa de obra) quebra a mesmice e marca pontos de atenção |
| Tipografia | **Barlow Condensed** 600/700 (títulos) + **IBM Plex Sans** (texto) + **IBM Plex Mono** (anotações técnicas) | Condensada e robusta como as letras "MONALIZA" da logo; Plex tem DNA de engenharia e suporte completo a acentos |
| Layout | Assimétrico: coluna de anotação estreita à esquerda + conteúdo largo; seções alternam fundo escuro (subsolo) e claro (superfície) | A troca escuro/claro é a "linha do piso": embaixo é tubulação, em cima é a casa |
| Movimento | Médio. GSAP + ScrollTrigger. Desenho de linhas (stroke), máscara em títulos de seção, pulso de água. Nada de fade-up em tudo | Movimento tem um significado só: água passando |
| Imagem | Ilustrações técnicas em SVG (traço 1.5px, sem preenchimento chapado). Espaço preparado para fotos reais com tratamento duotone marinho | Não há fotos reais ainda; foto de banco não é apresentada como trabalho da empresa |

Conferido contra `.claude/skills/frontend-dev/data/banned-patterns.md`: sem gradiente roxo, sem glassmorphism, sem grade de 3 cards com ícone, sem emoji, sem "eleve seu…". Condicionais usados: BP30 parcial (cantos chanfrados em vez de arredondados — justificado pelo hexágono da logo e direção industrial).

## 2. Cores (contraste medido, WCAG 2.2)

| Token | Hex | Uso |
|---|---|---|
| `--abismo` | `#0B1A2B` | Fundo das seções "subsolo" (hero, processo, CTA) |
| `--marinho` | `#1F3D63` | Botão primário em fundo claro, títulos em fundo claro |
| `--marinho-logo` | `#2F4F7A` | Cor medida na logo (traços das ilustrações) |
| `--agua` | `#6FB0D2` | Acento em fundo escuro, botão primário em fundo escuro, linha d'água |
| `--nevoa` | `#A9BBCC` | Texto secundário em fundo escuro |
| `--gelo` | `#F1F4F7` | Fundo de leitura |
| `--grafite` | `#18202A` | Texto em fundo claro |
| `--aco` | `#536273` | Texto secundário em fundo claro |
| `--sinal` | `#F2B33D` | Marcadores (ponto 24h, cotas). Nunca texto longo |
| `--linha` | `#D5DDE5` | Fios e divisórias em fundo claro |

| Combinação | Contraste | Resultado |
|---|---|---|
| gelo sobre abismo | 15.89 | AAA |
| agua sobre abismo | 7.37 | AAA |
| nevoa sobre abismo | 8.91 | AAA |
| sinal sobre abismo | 9.43 | AAA |
| abismo sobre agua (botão) | 7.37 | AAA |
| grafite sobre gelo | 14.88 | AAA |
| aco sobre gelo | 5.66 | AA |
| marinho sobre gelo | 9.98 | AAA |
| branco sobre marinho (botão) | 11.02 | AAA |
| agua sobre marinho | 4.63 | AA (só texto ≥ 14px bold / grande) |
| **agua sobre gelo** | **2.16** | **Reprovado → proibido para texto.** Só traço decorativo |

## 3. Tipografia

Escala fluida com `clamp()`:

| Papel | Fonte | Tamanho |
|---|---|---|
| Display (hero) | Barlow Condensed 700, caixa alta, `line-height .9` | `clamp(3.1rem, 11vw, 8.5rem)` |
| H2 | Barlow Condensed 700 | `clamp(2.2rem, 5.5vw, 4.25rem)` |
| H3 | Barlow Condensed 600 | `clamp(1.45rem, 2.4vw, 1.9rem)` |
| Texto | IBM Plex Sans 400 | `1.0625rem` / 1.65 |
| Anotação | IBM Plex Mono 500, caixa alta, `letter-spacing .08em` | `.75rem` |

Quebras de linha do hero são escolhidas à mão (BP09).

## 4. Componentes

- **Botão primário** (`.btn-primary`): retângulo com canto inferior direito chanfrado (clip-path), altura mínima 52px, seta que desliza no hover. Variante clara e escura.
- **Botão secundário** (`.btn-ghost`): só contorno + sublinhado animado.
- **Anotação técnica** (`.anot`): texto mono com fio à esquerda, como cota de planta.
- **Índice de serviços**: lista grande (não cards) — cada linha tem número de prancha real (são 8 serviços), nome, problema e ilustração que aparece no hover/foco (no celular a ilustração fica sempre visível ao lado).
- **Prancha** (`.prancha`): moldura com cantos chanfrados e marcas de corte nos cantos, usada para ilustrações e futuras fotos.
- **FAQ**: `<details>/<summary>` nativo (funciona sem JS, acessível por teclado).
- **Contato flutuante**: barra fixa no rodapé do celular (respeita `safe-area-inset-bottom`), botão discreto no desktop.

## 5. Responsivo

Mobile-first. Pontos: 480 / 768 / 1024 / 1440. No celular o hero vira: título → texto → botões → corte de solo em faixa larga (não um desktop espremido). A coluna de anotações vira linha acima de cada título. Alvos de toque ≥ 44px. `svh` no hero para a barra do Safari iOS.

## 6. Movimento

| Onde | O quê | Técnica |
|---|---|---|
| Hero | Corte de solo desenha as linhas, pulso de água percorre o cano e "empurra" a obstrução | GSAP timeline, `strokeDashoffset`, `transform` |
| Linha d'água | Cano vertical enche conforme a rolagem | ScrollTrigger `scrub`, `scaleY` |
| Títulos de seção | Revelação por máscara (linha sobe de trás de um recorte) | `yPercent` dentro de `overflow:hidden` |
| Pranchas | Traços das ilustrações se desenham ao entrar na tela | `strokeDashoffset` |
| Botões | Seta desliza, chanfro "abre" | CSS transform |

Só `transform`, `opacity` e `stroke-dashoffset`. O H1 do hero **não** é animado (protege o LCP). Com `prefers-reduced-motion: reduce`, nada se move: o GSAP nem cria as animações e o CSS mostra tudo no estado final. O texto está sempre no HTML.
