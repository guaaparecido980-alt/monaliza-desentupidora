// Passo pós-build para hospedagem estática (GitHub Pages).
// O `next build` com output: "export" grava os dados de navegação em subpastas
// (ex.: contato/__next.contato/__PAGE__.txt), mas o navegador pede o nome "achatado"
// (contato/__next.contato.__PAGE__.txt). Sem isso a navegação continua funcionando
// (cai para carregamento normal), porém gera erros 404 no console.
// Este script cria a cópia com o nome achatado ao lado de cada arquivo.
import { readdirSync, statSync, copyFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const RAIZ = "out";
let copias = 0;

function andar(dir) {
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) {
      if (caminho === join(RAIZ, "_next")) continue;
      andar(caminho);
      continue;
    }
    const partes = relative(RAIZ, caminho).split(sep);
    const i = partes.findIndex((p, idx) => p.startsWith("__next.") && idx < partes.length - 1);
    if (i === -1) continue;
    const achatado = join(RAIZ, ...partes.slice(0, i), partes.slice(i).join("."));
    copyFileSync(caminho, achatado);
    copias++;
  }
}

andar(RAIZ);
console.log(`pos-export: ${copias} arquivos de navegação ajustados para hospedagem estática`);
