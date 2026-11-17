import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { empresa, siteUrl } from "@/config/empresa";
import { Cabecalho } from "@/components/layout/Cabecalho";
import { Rodape } from "@/components/layout/Rodape";
import { ContatoFlutuante } from "@/components/layout/ContatoFlutuante";
import { JsonLd } from "@/components/seo/JsonLd";
import { schemaEmpresa, schemaWebsite } from "@/lib/seo";
import { Rastreamento } from "@/components/analytics/Rastreamento";
import { Consentimento } from "@/components/analytics/Consentimento";
import { Movimento } from "@/components/movimento/Movimento";
import { servicos } from "@/content/servicos";
import { Assinatura } from "@/components/marca/Assinatura";

/** O site inteiro é estático: gerado no build, servido como HTML pronto. */
export const ensureStatic = "navigation";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"], // o subconjunto "latin" já cobre todos os acentos do português (ã, ç, é, õ...)
  weight: ["600", "700"],
  display: "swap",
});
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "600"],
  // "optional": se a fonte não chegar em ~100ms, usa a reserva ajustada (sem atrasar a pintura nem pular o texto)
  display: "optional",
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Desentupidora em Curitiba 24 horas | ${empresa.nome}`,
    template: `%s | ${empresa.nome}`,
  },
  description:
    "Desentupimento de esgoto, pia, vaso e ralo, hidrojateamento, caixa de gordura e caça-vazamento em Curitiba e região. Atendimento 24 horas com valor combinado antes.",
  applicationName: empresa.nome,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { locale: "pt_BR", type: "website", siteName: empresa.nome },
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0b1a2b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Marca o <html> com .mov antes da pintura quando o JS roda e o movimento é permitido. */
const scriptMovimento = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('mov')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${plex.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptMovimento }} />
      </head>
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only-focusable fixed left-3 top-3 z-[100] bg-sinal px-4 py-3 font-semibold text-abismo"
        >
          Pular para o conteúdo
        </a>
        <Cabecalho servicos={servicos.map((s) => ({ slug: s.slug, nomeCurto: s.nomeCurto }))} logo={<Assinatura />} />
        <main id="conteudo">{children}</main>
        <Rodape />
        <ContatoFlutuante />
        <JsonLd data={[schemaEmpresa(), schemaWebsite()]} />
        <Movimento />
        <Rastreamento />
        <Consentimento />
      </body>
    </html>
  );
}
