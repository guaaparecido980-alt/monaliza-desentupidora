import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/empresa";
import { servicos } from "@/content/servicos";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixas = [
    { caminho: "", prioridade: 1 },
    { caminho: "/servicos", prioridade: 0.9 },
    { caminho: "/contato", prioridade: 0.8 },
    { caminho: "/regioes", prioridade: 0.7 },
    { caminho: "/quem-somos", prioridade: 0.6 },
    { caminho: "/politica-de-privacidade", prioridade: 0.2 },
  ];
  return [
    ...fixas.map((p) => ({ url: `${siteUrl}${p.caminho}`, changeFrequency: "monthly" as const, priority: p.prioridade })),
    ...servicos.map((s) => ({
      url: `${siteUrl}/servicos/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
