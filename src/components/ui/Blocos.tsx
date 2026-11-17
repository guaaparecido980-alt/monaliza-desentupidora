import Link from "next/link";
import type { Pergunta } from "@/content/servicos";
import { BotaoContato } from "./BotaoContato";
import { empresa } from "@/config/empresa";

/** Cabeçalho de seção: anotação técnica + título com revelação por máscara. */
export function TituloSecao({
  anot,
  titulo,
  id,
  escuro = false,
  className = "",
  as: Tag = "h2",
}: {
  anot: string;
  titulo: React.ReactNode;
  id?: string;
  escuro?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={className}>
      <p className={`anot ${escuro ? "text-agua" : "text-marinho-logo"}`}>{anot}</p>
      <Tag id={id} data-mascara={Tag === "h2" ? "" : undefined} className={`${Tag === "h1" ? "display text-[clamp(2.8rem,8vw,6rem)]" : "h2"} mt-4 ${escuro ? "text-gelo" : "text-marinho"}`}>
        {titulo}
      </Tag>
    </div>
  );
}

export function Migalhas({ itens }: { itens: { nome: string; caminho: string }[] }) {
  return (
    <nav aria-label="Você está em" className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-nevoa">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {itens.map((it, i) => (
          <li key={it.caminho} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < itens.length - 1 ? (
              <Link href={it.caminho} className="link-sub py-1 hover:text-gelo">
                {it.nome}
              </Link>
            ) : (
              <span aria-current="page" className="text-gelo/90">
                {it.nome}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ListaFaq({ perguntas, escuro = false }: { perguntas: Pergunta[]; escuro?: boolean }) {
  return (
    <div className={`border-t ${escuro ? "border-linha-escura" : "border-linha"}`}>
      {perguntas.map((p) => (
        <details key={p.pergunta} className={`faq group border-b ${escuro ? "border-linha-escura" : "border-linha"}`}>
          <summary className="flex min-h-14 items-start justify-between gap-6 py-5">
            <span className={`h3 text-[1.3rem] sm:text-[1.5rem] ${escuro ? "text-gelo" : "text-marinho"}`}>{p.pergunta}</span>
            <span
              aria-hidden="true"
              className={`faq-sinal mt-1 grid size-8 shrink-0 place-items-center border ${escuro ? "border-nevoa/40 text-agua" : "border-linha text-marinho"}`}
            >
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
          </summary>
          <p className={`max-w-3xl pb-6 pr-12 ${escuro ? "text-nevoa" : "text-aco"}`}>{p.resposta}</p>
        </details>
      ))}
    </div>
  );
}

/** Faixa final de conversão (fundo subsolo, linha d'água chegando ao ponto de contato). */
export function ChamadaFinal({
  titulo = (
    <>
      Entupiu? <br className="sm:hidden" />A gente resolve.
    </>
  ),
  texto,
  mensagem,
  servico,
}: {
  titulo?: React.ReactNode;
  texto?: string;
  mensagem?: string;
  servico?: string;
}) {
  return (
    <section aria-labelledby="chamada-final" className="subsolo grade relative overflow-hidden">
      <div className="wrap relative grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-8">
          <p className="anot text-agua">{empresa.atende24h ? "Atendimento 24 horas · todos os dias" : "Atendimento"}</p>
          <h2 id="chamada-final" data-mascara className="display mt-5 text-[clamp(3rem,9vw,7rem)] text-gelo">
            {titulo}
          </h2>
          <p className="lead mt-6 max-w-xl text-nevoa">
            {texto ??
              "Conte o que está acontecendo. O técnico avalia, explica e passa o valor antes de começar. Sem surpresa no fim."}
          </p>
        </div>
        <div className="flex flex-col justify-end gap-4 md:col-span-4 md:items-end">
          <BotaoContato mensagem={mensagem} servico={servico} local="chamada-final" className="w-full sm:w-auto" />
          <Link href="/servicos" className="link-sub self-start py-2 text-gelo/85 md:self-end">
            Ver todos os serviços
          </Link>
        </div>
      </div>
      <div className="alvenaria opacity-30 [--alv-cor:var(--color-marinho-logo)] [--alv-junta:var(--color-abismo)]" aria-hidden="true" />
    </section>
  );
}
