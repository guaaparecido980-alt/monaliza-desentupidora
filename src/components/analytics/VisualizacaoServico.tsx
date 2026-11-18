"use client";

import { useEffect } from "react";
import { rastrear } from "@/lib/analytics";

/** Gera o evento ver_servico quando uma página de serviço é aberta (também na navegação interna). */
export function VisualizacaoServico({ servico }: { servico: string }) {
  useEffect(() => {
    rastrear("ver_servico", { servico });
  }, [servico]);
  return null;
}
