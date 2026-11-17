# Imagens do site: origem e licença

Regra: foto de banco de imagem nunca é apresentada como trabalho da Monaliza. Toda imagem nova entra nesta tabela.

| Arquivo / componente | O que é | Origem | Licença |
|---|---|---|---|
| `src/components/marca/Emblema.tsx` | Logo vetorizada (SVG) | Redesenho fiel da logo do cliente, a partir de `marca/foto-original-logo-no-celular.jpeg` | Marca do cliente |
| `src/app/icon.svg`, `src/app/apple-icon.tsx` | Ícone do site (hexágono + M) | Criado para o projeto, derivado da logo | Do projeto |
| `src/app/opengraph-image.tsx` | Imagem de compartilhamento (WhatsApp, Facebook) | Gerada por código no build | Do projeto |
| `src/components/ilustracoes/CorteHero.tsx` | Corte de solo do topo da home | Desenho autoral em SVG | Do projeto |
| `src/components/ilustracoes/Servicos.tsx` | 8 pranchas técnicas, uma por serviço | Desenho autoral em SVG | Do projeto |
| `src/app/regioes/page.tsx` (SVG) | Diagrama esquemático das cidades | Desenho autoral, **sem escala** (não é mapa) | Do projeto |

**Nenhuma foto de banco de imagem foi usada.** A identidade foi construída com desenhos técnicos justamente para não depender de fotos genéricas.

## Fotos reais (pendente: pedir ao cliente)
Quando chegarem fotos da equipe, do veículo, dos equipamentos e de serviços (antes/depois):
1. Salvar em `public/fotos/` em JPG grande; o `next/image` gera WebP/AVIF.
2. Registrar aqui: quem fotografou, data, se tem pessoas (autorização de imagem).
3. Lugares preparados para recebê-las: abertura de "Quem somos" (no lugar da logo), molduras `.prancha` das páginas de serviço, e uma seção de galeria na home (não criada ainda, para não ficar vazia).
4. Tratamento sugerido (DESIGN.md): leve duotone marinho, recorte com canto chanfrado.

## Logo
- O texto da logo ("MONALIZA", "DESENTUPIDORA", "DESDE ★ 1996") usa a fonte Barlow Condensed do site. Para gráfica/impressão, pedir a um designer para converter o texto em curvas, ou pedir ao cliente o arquivo original da logo (se existir) e substituir.
- Cores medidas na foto: marinho `#2F4F7A`, azul `#63A0C2` (aproximadas, pois vêm de foto de celular).
