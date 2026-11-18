import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicos, getServico } from "@/content/servicos";
import { empresa, listaCidades } from "@/config/empresa";
import { meta, schemaBreadcrumb, schemaFaq, schemaPagina, schemaServico } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { VisualizacaoServico } from "@/components/analytics/VisualizacaoServico";
import { IlustracaoServico } from "@/components/ilustracoes/Servicos";
import { BotaoContato, Seta } from "@/components/ui/BotaoContato";
import { Migalhas, ListaFaq, ChamadaFinal, TituloSecao } from "@/components/ui/Blocos";

export function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getServico(slug);
  if (!s) return {};
  return meta({ titulo: s.tituloSeo, descricao: s.descricaoSeo, caminho: `/servicos/${s.slug}` });
}

export default async function PaginaServico({ params }: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const s = getServico(slug);
  if (!s) notFound();

  const indice = servicos.findIndex((x) => x.slug === s.slug);
  const relacionados = s.relacionados.map(getServico).filter((x) => x !== undefined);
  const caminho = `/servicos/${s.slug}`;
  const migalhas = [
    { nome: "Início", caminho: "/" },
    { nome: "Serviços", caminho: "/servicos" },
    { nome: s.nome, caminho },
  ];

  return (
    <>
      <JsonLd
        data={[
          schemaPagina(s.h1, caminho, s.descricaoSeo),
          schemaServico(s),
          schemaBreadcrumb(migalhas),
          schemaFaq(s.faq),
        ]}
      />
      <VisualizacaoServico servico={s.slug} />

      {/* Abertura */}
      <section className="subsolo grade relative overflow-hidden" aria-labelledby="titulo-pagina">
        <div className="wrap grid gap-10 pb-16 pt-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Migalhas itens={migalhas} />
            <p className="anot mt-10 text-agua">
              Prancha P-{String(indice + 1).padStart(2, "0")} · {empresa.cidadePrincipal.nome} e região
            </p>
            <h1 id="titulo-pagina" className="display mt-5 text-[clamp(2.6rem,7.4vw,5.75rem)] text-gelo">
              {s.h1}
            </h1>
            <p className="lead mt-6 max-w-xl text-nevoa">{s.problema}</p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <BotaoContato mensagem={s.mensagemWhatsApp} servico={s.slug} local="topo-servico" rotulo={undefined} />
              <a href="#como-funciona" className="btn btn-linha text-gelo">
                Como funciona
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="prancha border border-agua/20 p-6 text-nevoa [--fundo-ilustra:var(--color-abismo)] [--traco:var(--color-nevoa)] sm:p-8">
              <IlustracaoServico chave={s.ilustracao} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Introdução + o que resolve */}
      <section aria-labelledby="titulo-resolve">
        <div className="wrap grid gap-14 py-20 md:py-24 lg:grid-cols-12">
          <div className="texto-corrido lead text-grafite lg:col-span-6">
            {s.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 id="titulo-resolve" className="h3 text-marinho">
              O que este serviço resolve
            </h2>
            <ul className="mt-5 border-t border-linha">
              {s.resolve.map((r) => (
                <li key={r} className="flex gap-4 border-b border-linha py-3.5 text-aco" data-revela>
                  <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-sinal" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-aco">Para: {s.publico}</p>
          </div>
        </div>
      </section>

      {/* Sinais */}
      <section aria-labelledby="titulo-sinais" className="grade-clara border-y border-linha bg-papel">
        <div className="wrap grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <TituloSecao className="lg:col-span-4" id="titulo-sinais" anot="Sinais" titulo="Quando chamar" />
          <ul className="grid gap-px bg-linha sm:grid-cols-2 lg:col-span-8">
            {s.sinais.map((x) => (
              <li key={x} className="flex gap-4 bg-papel p-6 sm:[&:last-child:nth-child(odd)]:col-span-2" data-revela>
                <svg className="mt-1 shrink-0 text-marinho-logo" width="14" height="20" viewBox="0 0 14 20" aria-hidden="true">
                  <path d="M7 1C4 6 1 9.5 1 13a6 6 0 0 0 12 0C13 9.5 10 6 7 1Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <span className="text-grafite">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Procedimento */}
      <section id="como-funciona" aria-labelledby="titulo-procedimento" className="subsolo grade scroll-mt-20">
        <div className="wrap py-20 md:py-28">
          <TituloSecao escuro id="titulo-procedimento" anot="Procedimento" titulo={`Como fazemos: ${s.nomeCurto.toLowerCase()}`} />
          <div className="relative mt-14">
          <div className="absolute bottom-0 left-[1.1rem] top-0 w-[3px] bg-linha-escura md:hidden" aria-hidden="true">
            <div data-linha-agua className="h-full w-full origin-top bg-agua" />
          </div>
          <ol className="relative grid gap-10 md:grid-cols-2 md:gap-x-16">
            {s.procedimento.map((p, i) => (
              <li key={p.titulo} className="relative pl-14" data-revela>
                <span className="absolute left-0 top-0 grid size-[2.35rem] place-items-center border-2 border-agua bg-abismo font-mono text-sm text-agua">
                  {i + 1}
                </span>
                <h3 className="h3 text-gelo">{p.titulo}</h3>
                <p className="mt-3 text-nevoa">{p.texto}</p>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      {/* Prevenção + diferenciais + regiões */}
      <section aria-labelledby="titulo-prevencao">
        <div className="wrap grid gap-14 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="anot text-marinho-logo">Prevenção</p>
            <h2 id="titulo-prevencao" data-mascara className="h2 mt-4 text-marinho">
              {s.prevencao.titulo}
            </h2>
            <ul className="mt-8 space-y-5">
              {s.prevencao.itens.map((it, i) => (
                <li key={it} className="grid grid-cols-[2.5rem_1fr] gap-2 text-grafite" data-revela>
                  <span className="font-mono text-sm text-aco">{String(i + 1).padStart(2, "0")}</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5 lg:col-start-8" aria-label="Por que a Monaliza">
            <div className="bg-marinho p-7 text-gelo chanfro [--chanfro:22px] sm:p-9">
              <p className="anot text-agua">Por que a Monaliza</p>
              <ul className="mt-5 space-y-4">
                {empresa.diferenciais.map((d) => (
                  <li key={d.titulo}>
                    <p className="font-display text-[1.35rem] font-semibold leading-tight">{d.titulo}</p>
                    <p className="mt-1 text-[0.95rem] text-nevoa">{d.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-[0.95rem] text-aco">
              <strong className="text-grafite">Onde atendemos:</strong> {listaCidades()}.{" "}
              <Link href="/regioes" className="font-semibold text-marinho underline underline-offset-4">
                Ver regiões
              </Link>
            </p>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="titulo-faq" className="border-t border-linha bg-papel">
        <div className="wrap grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <TituloSecao className="lg:col-span-4" id="titulo-faq" anot="Dúvidas" titulo="Perguntas sobre este serviço" />
          <div className="lg:col-span-8">
            <ListaFaq perguntas={s.faq} />
          </div>
        </div>
      </section>

      {/* Relacionados */}
      <section aria-labelledby="titulo-relacionados" className="border-t border-linha">
        <div className="wrap py-16 md:py-20">
          <h2 id="titulo-relacionados" className="anot text-marinho-logo">
            Serviços relacionados
          </h2>
          <ul className="mt-6 grid gap-px bg-linha md:grid-cols-3">
            {relacionados.map((r) => (
              <li key={r.slug} className="bg-gelo">
                <Link href={`/servicos/${r.slug}`} className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-papel sm:p-7">
                  <span>
                    <span className="block font-display text-[1.7rem] font-bold uppercase leading-none text-marinho">{r.nome}</span>
                    <span className="mt-3 block text-[0.95rem] text-aco">{r.problema}</span>
                  </span>
                  <span className="inline-flex items-center gap-3 font-semibold text-marinho">
                    Ver serviço <Seta />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ChamadaFinal
        titulo={<>Chame a Monaliza.</>}
        texto={`${s.nome}: conte o que está acontecendo. O técnico avalia, explica e passa o valor antes de começar.`}
        mensagem={s.mensagemWhatsApp}
        servico={s.slug}
      />
    </>
  );
}
