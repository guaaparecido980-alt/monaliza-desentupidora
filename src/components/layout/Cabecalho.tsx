"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navegacao } from "./navegacao";
import { empresa, linkWhatsApp } from "@/config/empresa";

/** `logo` vem pronto do servidor (SVG), para não entrar no JavaScript do navegador. */
export function Cabecalho({ servicos, logo }: { servicos: { slug: string; nomeCurto: string }[]; logo: React.ReactNode }) {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const pathname = usePathname();
  const botaoRef = useRef<HTMLButtonElement>(null);
  const wa = linkWhatsApp();

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Fecha o menu ao trocar de página
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAberto(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = aberto ? "hidden" : "";
    if (!aberto) return;
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [aberto]);

  const ativo = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 text-gelo transition-[background-color,box-shadow] duration-300 ${
        rolou || aberto ? "bg-abismo/95 shadow-[0_1px_0_var(--color-linha-escura)] backdrop-blur-md" : "bg-abismo"
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6 sm:h-20">
        <Link href="/" className="shrink-0" aria-label={`${empresa.nome}, página inicial`}>
          {logo}
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem] font-medium">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className={`link-sub py-2 ${ativo(item.href) ? "text-agua" : "text-gelo/90 hover:text-gelo"}`}
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {empresa.atende24h && (
            <span className="hidden items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-nevoa xl:inline-flex">
              <span className="relative flex size-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-sinal opacity-60" />
                <span className="relative size-2.5 rounded-full bg-sinal" />
              </span>
              Atendimento 24h
            </span>
          )}
          <Link
            href={wa ?? "/contato#formulario"}
            {...(wa ? { target: "_blank", rel: "noopener noreferrer", "data-evento": "whatsapp_click", "data-local": "cabecalho" } : {})}
            className="btn btn-agua hidden min-h-11 py-2 text-[0.95rem] md:inline-flex"
          >
            Pedir atendimento
          </Link>
          <button
            ref={botaoRef}
            type="button"
            className="grid size-12 place-items-center lg:hidden"
            aria-expanded={aberto}
            aria-controls="menu-movel"
            onClick={() => setAberto((v) => !v)}
          >
            <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
            <span aria-hidden="true" className="relative block h-3.5 w-7">
              <span
                className={`absolute left-0 top-0 h-[2px] w-7 bg-gelo transition-transform duration-300 ${aberto ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 right-0 h-[2px] bg-gelo transition-all duration-300 ${aberto ? "w-7 -translate-y-[6px] -rotate-45" : "w-5"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu do celular / tablet */}
      <div
        id="menu-movel"
        hidden={!aberto}
        className="grade fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-abismo pb-[calc(2rem+env(safe-area-inset-bottom))] sm:top-20 lg:hidden"
      >
        <nav aria-label="Menu" className="wrap pt-6">
          <ul className="border-t border-linha-escura">
            {navegacao.map((item) => (
              <li key={item.href} className="border-b border-linha-escura">
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-4 font-display text-4xl font-bold uppercase ${ativo(item.href) ? "text-agua" : "text-gelo"}`}
                >
                  {item.rotulo}
                  <span aria-hidden="true" className="font-mono text-sm font-medium text-nevoa">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="anot mt-8 text-nevoa">Serviços</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
            {servicos.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicos/${s.slug}`} className="block py-2 text-[0.95rem] text-gelo/85">
                  {s.nomeCurto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
