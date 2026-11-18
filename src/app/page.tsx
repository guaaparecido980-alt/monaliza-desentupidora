import Link from "next/link";
import type { Metadata } from "next";
import { empresa } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { faqGeral, etapasAtendimento } from "@/content/geral";
import { meta, schemaFaq, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CorteHero } from "@/components/ilustracoes/CorteHero";
import { IlustracaoServico } from "@/components/ilustracoes/Servicos";
import { BotaoContato, Seta } from "@/components/ui/BotaoContato";
import { TituloSecao, ListaFaq, ChamadaFinal } from "@/components/ui/Blocos";

const descricao =
  "Desentupidora em Curitiba e região com atendimento 24 horas: esgoto, pia, vaso, ralo, caixa de gordura, hidrojateamento e caça-vazamento. Valor combinado antes do serviço.";

export const metadata: Metadata = meta({
  titulo: `Desentupidora em Curitiba 24 horas | ${empresa.nome}`,
  descricao,
  caminho: "/",
  semSufixo: true,
});

const sinais = [
  { t: "Água que demora a descer", d: "Pia, box ou tanque esvaziando cada vez mais devagar." },
  { t: "Borbulha no vaso", d: "Gorgolejo quando outro ponto da casa escoa: sinal de rede com ar preso." },
  { t: "Cheiro que volta", d: "Odor de esgoto que reaparece mesmo depois da limpeza." },
  { t: "Retorno pelo ralo", d: "Água suja subindo no térreo quando alguém usa o banheiro de cima." },
  { t: "Caixa transbordando", d: "Caixa de gordura ou de inspeção cheia, com marca nas bordas." },
  { t: "Conta de água alta", d: "Consumo maior sem mudança na rotina: pode ser vazamento oculto." },
];

export default function Inicio() {
  return (
    <>
      <JsonLd data={[schemaPagina(`${empresa.nome} · Desentupidora em Curitiba`, "/", descricao), schemaFaq(faqGeral)]} />

      {/* ───────── HERO ───────── */}
      <section aria-labelledby="titulo-hero" className="subsolo grade relative overflow-hidden">
        <div className="wrap relative grid min-h-[calc(100svh-4.5rem)] items-center gap-10 pb-14 pt-10 sm:min-h-[calc(100svh-5rem)] xl:grid-cols-12 xl:gap-6 xl:pb-20 xl:pt-12">
          <div className="xl:col-span-7">
            <p className="anot text-agua">Desentupidora · Curitiba e região metropolitana</p>
            <h1 id="titulo-hero" className="display mt-6 text-gelo xl:text-[min(6rem,6.4vw)]">
              <span className="block">Desentupidora</span>
              <span className="block">em Curitiba,</span>
              {empresa.atende24h ? (
                <span className="block text-agua">a qualquer hora.</span>
              ) : (
                <span className="block text-agua">com método.</span>
              )}
            </h1>
            <p className="lead mt-7 max-w-[34rem] text-nevoa" data-hero-sub>
              Esgoto, pia, vaso, ralo, caixa de gordura e hidrojateamento. A Monaliza encontra onde o fluxo parou,
              combina o valor com você e só então começa o serviço.
            </p>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap" data-hero-cta>
              <BotaoContato local="hero" />
              <Link href="/servicos" className="btn btn-linha text-gelo">
                Conhecer os serviços
              </Link>
            </div>
            <ul className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-linha-escura pt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-nevoa sm:text-[0.72rem]">
              {empresa.atende24h && (
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-sinal" aria-hidden="true" />
                  24h · 7 dias
                </li>
              )}
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sinal" aria-hidden="true" />
                {empresa.cidadesAtendidas.length} cidades
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sinal" aria-hidden="true" />
                Valor antes
              </li>
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-3xl xl:col-span-5 xl:max-w-none">
            <CorteHero className="w-full xl:w-[118%] xl:max-w-none" />
          </div>
        </div>
        <div className="alvenaria [--alv-cor:var(--color-marinho)] [--alv-junta:var(--color-abismo)]" aria-hidden="true" />
      </section>

      {/* ───────── APRESENTAÇÃO + DIFERENCIAIS ───────── */}
      <section aria-labelledby="titulo-apresentacao" className="relative">
        <div className="wrap grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <TituloSecao
              id="titulo-apresentacao"
              anot="Quem atende"
              titulo={
                <>
                  O problema fica <span className="text-marinho-logo">escondido.</span> Encontrar é o nosso trabalho.
                </>
              }
            />
            <div className="texto-corrido mt-8 max-w-md text-aco" data-revela>
              <p>
                Quase todo entupimento acontece onde ninguém vê: dentro da parede, debaixo do piso, no trecho entre a casa e a
                rua. A Monaliza atende residências, condomínios e empresas em {empresa.cidadePrincipal.nome} e região,
                localizando a causa antes de mexer em qualquer coisa.
              </p>
              <p>Você entende o que está acontecendo, aprova o valor e acompanha o serviço até o teste final com água corrente.</p>
            </div>
            <Link href="/quem-somos" className="link-sub mt-8 inline-flex items-center gap-3 py-2 font-semibold text-marinho" data-revela>
              Conheça a Monaliza <Seta />
            </Link>
          </div>

          <ul className="grid gap-px self-start bg-linha sm:grid-cols-2 lg:col-span-7 lg:mt-16">
            {empresa.diferenciais.map((d, i) => (
              <li key={d.titulo} className="relative bg-gelo p-7 sm:p-8" data-revela>
                <span className="font-mono text-[0.7rem] tracking-[0.12em] text-aco" aria-hidden="true">
                  {["A", "B", "C", "D"][i]}·
                </span>
                <span data-marcador className="absolute right-6 top-7 h-6 w-1.5 origin-top bg-sinal" aria-hidden="true" />
                <h3 className="h3 mt-3 pr-6 text-marinho">{d.titulo}</h3>
                <p className="mt-3 text-[0.98rem] text-aco">{d.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── ÍNDICE DE SERVIÇOS ───────── */}
      <section aria-labelledby="titulo-servicos" className="grade-clara bg-papel">
        <div className="wrap py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <TituloSecao
              id="titulo-servicos"
              anot={`${servicos.length} serviços · residencial e comercial`}
              titulo={
                <>
                  Do ralo do box <br className="hidden sm:block" />à rede da rua.
                </>
              }
            />
            <Link href="/servicos" className="link-sub inline-flex items-center gap-3 self-start py-2 font-semibold text-marinho md:self-end">
              Catálogo completo <Seta />
            </Link>
          </div>

          <ol className="mt-14 border-t border-linha">
            {servicos.map((s, i) => (
              <li key={s.slug} className="border-b border-linha">
                <Link
                  href={`/servicos/${s.slug}`}
                  data-ativa-no-centro
                  className="group grid grid-cols-[1fr_6.5rem] items-center gap-x-4 gap-y-2 py-6 [--fundo-ilustra:var(--color-papel)] sm:grid-cols-[4.5rem_1fr_7rem_auto] sm:gap-x-5 md:py-7 lg:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,1fr)_9rem_auto]"
                >
                  <span className="hidden font-mono text-[0.72rem] tracking-[0.12em] text-aco sm:block">
                    P-{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(1.75rem,4vw,2.9rem)] font-bold uppercase leading-none text-marinho transition-colors duration-300 group-hover:text-marinho-logo group-[.ativo]:text-marinho-logo">
                    {s.nome}
                  </span>
                  <span className="row-start-2 text-[0.95rem] text-aco sm:col-start-2 lg:col-start-3 lg:row-start-1">
                    {s.problema}
                    <span className="mt-2 flex items-center gap-2 font-semibold text-marinho sm:hidden">
                      Ver serviço <Seta className="transition-transform duration-300 group-[.ativo]:translate-x-1" />
                    </span>
                  </span>
                  <span className="col-start-2 row-span-2 row-start-1 text-marinho-logo sm:col-start-3 lg:col-start-4 lg:row-span-1">
                    <IlustracaoServico
                      chave={s.ilustracao}
                      className="w-full opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-[.ativo]:opacity-100"
                    />
                  </span>
                  <span className="hidden size-11 place-items-center border border-linha text-marinho transition-colors group-hover:border-marinho group-hover:bg-marinho group-hover:text-white sm:col-start-4 sm:row-start-1 sm:grid lg:col-start-5">
                    <Seta />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── MÉTODO / EQUIPAMENTO ───────── */}
      <section aria-labelledby="titulo-metodo" className="bg-marinho text-gelo">
        <div className="wrap grid items-center gap-12 py-20 md:py-24 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="prancha mx-auto max-w-xl border border-agua/25 p-6 text-nevoa [--fundo-ilustra:var(--color-marinho)] [--traco:var(--color-nevoa)] sm:p-10">
              <p className="anot text-agua">Prancha P-06 · hidrojateamento</p>
              <IlustracaoServico chave="hidrojato" className="mt-4 w-full" />
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
            <TituloSecao escuro id="titulo-metodo" anot="Método" titulo="Abrir passagem não é o mesmo que limpar o cano." />
            <div className="texto-corrido mt-7 text-nevoa" data-revela>
              <p>
                Um entupimento pode ser só um ponto preso ou uma tubulação inteira tomada por gordura e crosta. No primeiro caso,
                a desobstrução resolve. No segundo, o cano volta a entupir em pouco tempo se a parede interna não for limpa.
              </p>
              <p>
                Por isso o método é escolhido depois do diagnóstico: desobstrução mecânica para bloqueios localizados e
                hidrojateamento, com água em alta pressão, quando é preciso limpar a tubulação em toda a volta.
              </p>
            </div>
            <Link href="/servicos/hidrojateamento" className="link-sub mt-8 inline-flex items-center gap-3 py-2 font-semibold text-agua" data-revela>
              Como funciona o hidrojateamento <Seta />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── COMO FUNCIONA ───────── */}
      <section aria-labelledby="titulo-processo" className="subsolo grade relative overflow-hidden">
        <div className="wrap py-20 md:py-28">
          <TituloSecao escuro id="titulo-processo" anot="Do chamado ao teste final" titulo="Como funciona o atendimento" />
          <div className="relative mt-14">
            {/* Linha d'água: cano que enche com a rolagem */}
            <div className="absolute bottom-6 left-[1.1rem] top-2 w-[3px] bg-linha-escura md:hidden" aria-hidden="true">
              <div data-linha-agua className="h-full w-full origin-top bg-agua" />
            </div>
            <div className="absolute left-0 right-0 top-[1.1rem] hidden h-[3px] bg-linha-escura md:block" aria-hidden="true">
              <div data-linha-agua className="h-full w-full origin-left bg-agua md:[transform-origin:0_50%]" />
            </div>
            <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
              {etapasAtendimento.map((e, i) => (
                <li key={e.titulo} className="relative pl-14 md:pl-0 md:pt-14" data-revela>
                  <span className="absolute left-0 top-0 grid size-[2.35rem] place-items-center border-2 border-agua bg-abismo font-mono text-sm font-medium text-agua">
                    {i + 1}
                  </span>
                  <h3 className="h3 text-gelo">{e.titulo}</h3>
                  <p className="mt-3 text-[0.98rem] text-nevoa">{e.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── SINAIS ───────── */}
      <section aria-labelledby="titulo-sinais">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <TituloSecao id="titulo-sinais" anot="Antes que vire emergência" titulo="Sinais de que é hora de chamar" />
            <p className="mt-6 max-w-sm text-aco" data-revela>
              Entupimento costuma dar aviso. Chamar no começo quase sempre significa um serviço mais simples.
            </p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {sinais.map((s) => (
              <li key={s.t} className="flex gap-4 border-t border-linha py-6" data-revela>
                <svg className="mt-1 shrink-0 text-marinho-logo" width="14" height="20" viewBox="0 0 14 20" aria-hidden="true">
                  <path d="M7 1C4 6 1 9.5 1 13a6 6 0 0 0 12 0C13 9.5 10 6 7 1Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <div>
                  <h3 className="font-display text-[1.4rem] font-semibold leading-tight text-marinho">{s.t}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-aco">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── REGIÕES ───────── */}
      <section aria-labelledby="titulo-regioes" className="grade-clara border-y border-linha bg-papel">
        <div className="wrap grid gap-12 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <TituloSecao id="titulo-regioes" anot="Área de atendimento" titulo="Curitiba e região metropolitana" />
            <p className="mt-6 max-w-md text-aco" data-revela>
              A equipe vai até você em {empresa.cidadesAtendidas.length} cidades. Atendimento no local: casas, apartamentos,
              condomínios e empresas.
            </p>
            <Link href="/regioes" className="link-sub mt-7 inline-flex items-center gap-3 py-2 font-semibold text-marinho" data-revela>
              Ver regiões atendidas <Seta />
            </Link>
          </div>
          <ul className="flex flex-wrap content-start gap-x-6 gap-y-2 lg:col-span-7" aria-label="Cidades atendidas">
            {empresa.cidadesAtendidas.map((c, i) => (
              <li
                key={c}
                data-revela
                className={`font-display font-bold uppercase leading-[1.05] ${
                  i === 0 ? "w-full text-[clamp(3rem,8vw,5.5rem)] text-marinho" : "text-[clamp(1.6rem,3.6vw,2.6rem)] text-marinho-logo"
                }`}
              >
                {i > 0 && <span className="mr-3 inline-block size-2 -translate-y-1.5 bg-sinal align-middle" aria-hidden="true" />}
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section aria-labelledby="titulo-faq">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <TituloSecao id="titulo-faq" anot="Perguntas frequentes" titulo="O que perguntam antes de chamar" />
          </div>
          <div className="lg:col-span-8">
            <ListaFaq perguntas={faqGeral} />
          </div>
        </div>
      </section>

      <ChamadaFinal />
    </>
  );
}
