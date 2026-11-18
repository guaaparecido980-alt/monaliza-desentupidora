"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { enviarPendentes, origemDaVisita } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CHAVE = "monaliza-consentimento";

function carregarGA(id: string) {
  if (document.getElementById("ga4")) return;
  const s = document.createElement("script");
  s.id = "ga4";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", id, { anonymize_ip: true });
  enviarPendentes();
}

/**
 * Aviso de cookies. Só existe se houver NEXT_PUBLIC_GA_ID: sem rastreamento,
 * não há o que consentir e nada aparece. O GA4 só carrega depois do "Aceitar".
 */
export function Consentimento() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    origemDaVisita(); // grava de onde a pessoa veio já na primeira página
    let escolha: string | null = null;
    try {
      escolha = localStorage.getItem(CHAVE);
    } catch {}
    if (escolha === "aceito") carregarGA(GA_ID);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    else if (escolha !== "recusado") setVisivel(true);
  }, []);

  if (!GA_ID || !visivel) return null;

  function decidir(aceito: boolean) {
    try {
      localStorage.setItem(CHAVE, aceito ? "aceito" : "recusado");
    } catch {}
    if (aceito && GA_ID) carregarGA(GA_ID);
    setVisivel(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-[calc(var(--barra-mobile)+0.75rem)] z-[60] mx-auto max-w-xl border border-linha-escura bg-abismo p-5 text-gelo shadow-2xl md:bottom-6"
    >
      <p className="text-sm leading-relaxed text-nevoa">
        Usamos cookies de medição (Google Analytics) para entender como o site é usado. Você pode aceitar ou recusar.{" "}
        <Link href="/politica-de-privacidade" className="text-agua underline">
          Saiba mais
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => decidir(true)} className="btn btn-agua">
          Aceitar
        </button>
        <button type="button" onClick={() => decidir(false)} className="btn btn-linha">
          Recusar
        </button>
      </div>
    </div>
  );
}
