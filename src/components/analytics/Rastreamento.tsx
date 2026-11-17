"use client";

import { useEffect } from "react";
import { rastrear } from "@/lib/analytics";

/**
 * Um único ouvinte de clique para o site todo: qualquer elemento com
 * data-evento="whatsapp_click" (e opcionalmente data-servico / data-local) gera o evento.
 * Assim os botões continuam sendo HTML de servidor, sem JS próprio.
 */
export function Rastreamento() {
  useEffect(() => {
    function aoClicar(e: MouseEvent) {
      const alvo = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-evento]");
      if (!alvo) return;
      rastrear(alvo.dataset.evento!, {
        servico: alvo.dataset.servico ?? "geral",
        local: alvo.dataset.local ?? "pagina",
        pagina: window.location.pathname,
      });
    }
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);
  return null;
}
