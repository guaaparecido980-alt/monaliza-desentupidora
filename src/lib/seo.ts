import type { Metadata } from "next";
import { empresa, siteUrl, linkWhatsApp } from "@/config/empresa";
import type { Servico } from "@/content/servicos";

type MetaInput = { titulo: string; descricao: string; caminho: string; semSufixo?: boolean };

/** Metadata padrão de uma página: title, description, canonical e Open Graph. */
export function meta({ titulo, descricao, caminho, semSufixo }: MetaInput): Metadata {
  const title = semSufixo ? { absolute: titulo } : titulo;
  return {
    title,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      title: semSufixo ? titulo : `${titulo} | ${empresa.nome}`,
      description: descricao,
      url: caminho,
      siteName: empresa.nome,
      locale: "pt_BR",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

const negocioId = `${siteUrl}/#empresa`;

/**
 * Schema do negócio. Só entra o que é confirmado:
 * sem endereço, telefone, CNPJ, coordenadas, avaliações ou preços enquanto forem null.
 */
export function schemaEmpresa() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": negocioId,
    name: empresa.nome,
    url: siteUrl,
    logo: `${siteUrl}/marca/monaliza-emblema.svg`,
    image: `${siteUrl}/opengraph-image.png`,
    areaServed: empresa.cidadesAtendidas.map((c) => ({
      "@type": "City",
      name: c,
      containedInPlace: { "@type": "State", name: "Paraná" },
    })),
    knowsAbout: ["Desentupimento", "Hidrojateamento", "Limpeza de caixa de gordura", "Caça-vazamento"],
  };
  if (empresa.atende24h) {
    base.openingHoursSpecification = {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    };
  }
  if (empresa.telefone) base.telephone = `+${empresa.telefone}`;
  if (empresa.email) base.email = empresa.email;
  if (empresa.fundacao) base.foundingDate = String(empresa.fundacao);
  if (empresa.endereco) {
    base.address = {
      "@type": "PostalAddress",
      streetAddress: empresa.endereco.rua,
      addressLocality: empresa.endereco.cidade,
      addressRegion: empresa.endereco.uf,
      postalCode: empresa.endereco.cep,
      addressCountry: "BR",
    };
  }
  const redes = [empresa.redes.instagram, empresa.redes.facebook, linkWhatsApp()].filter(Boolean);
  if (redes.length) base.sameAs = redes;
  return base;
}

export function schemaWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#site`,
    url: siteUrl,
    name: empresa.nome,
    inLanguage: "pt-BR",
    publisher: { "@id": negocioId },
  };
}

export function schemaPagina(nome: string, caminho: string, descricao: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}${caminho}#pagina`,
    url: `${siteUrl}${caminho}`,
    name: nome,
    description: descricao,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${siteUrl}/#site` },
    about: { "@id": negocioId },
  };
}

export function schemaServico(s: Servico) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/servicos/${s.slug}#servico`,
    name: s.nome,
    serviceType: s.nome,
    description: s.descricaoSeo,
    url: `${siteUrl}/servicos/${s.slug}`,
    provider: { "@id": negocioId },
    areaServed: empresa.cidadesAtendidas.map((c) => ({ "@type": "City", name: c })),
  };
}

export function schemaBreadcrumb(itens: { nome: string; caminho: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.nome,
      item: `${siteUrl}${it.caminho}`,
    })),
  };
}

export function schemaFaq(perguntas: { pergunta: string; resposta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.resposta },
    })),
  };
}
