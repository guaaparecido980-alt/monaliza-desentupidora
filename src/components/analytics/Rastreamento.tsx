"use client";

import { useEffect } from "react";
import { rastrear } from "@/lib/analytics";

/**
 * Um único ouvinte de clique para o site todo: qualquer elemento com
 * data-evento="whatsapp_click" (e opcionalmente data-servico / data-local) gera o evento.
 * Assim os botões continuam sendo HTML de servidor, sem JS próprio.
 * A página atual e a origem da visita são adicionadas em rastrear().
 */
export function Rastreamento() {
  useEffect(() => {
    function aoClicar(e: MouseEvent) {
      const alvo = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-evento]");
      if (!alvo) return;
      rastrear(alvo.dataset.evento!, {
        servico: alvo.dataset.servico ?? "geral",
        local: alvo.dataset.local ?? "pagina",
      });
    }
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);
  return null;
}
