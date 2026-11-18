export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { empresa } from "@/config/empresa";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: empresa.nome,
    short_name: empresa.nomeCurto,
    description: "Desentupidora em Curitiba e região metropolitana.",
    start_url: "/",
    display: "browser",
    background_color: "#0b1a2b",
    theme_color: "#0b1a2b",
    lang: "pt-BR",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
