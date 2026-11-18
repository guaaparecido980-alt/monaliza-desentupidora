import Link from "next/link";
import type { Metadata } from "next";
import { empresa, listaCidades } from "@/config/empresa";
import { etapasAtendimento } from "@/content/geral";
import { meta, schemaBreadcrumb, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Emblema } from "@/components/marca/Emblema";
import { Migalhas, TituloSecao, ChamadaFinal } from "@/components/ui/Blocos";
import { Seta } from "@/components/ui/BotaoContato";

const descricao =
  "Conheça a Monaliza: desentupimento e hidráulica em Curitiba e região, com atendimento 24 horas, valor combinado antes e equipe identificada.";

export const metadata: Metadata = meta({ titulo: "Quem somos", descricao, caminho: "/quem-somos" });

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Quem somos", caminho: "/quem-somos" },
];

const compromissos = [
  {
    t: "Explicar antes de executar",
    d: "Você não precisa entender de encanamento. O técnico mostra onde está o problema e o que vai ser feito, com palavras simples.",
  },
  {
    t: "Mexer no mínimo necessário",
    d: "Entrar pelo próprio encanamento, pelas caixas e acessos que já existem. Obra só quando não há alternativa, e com o seu aval.",
  },
  {
    t: "Testar antes de ir embora",
    d: "Serviço terminado é água correndo normalmente em todos os pontos afetados, com você vendo.",
  },
  {
    t: "Deixar o local como encontrou",
    d: "Caixas fechadas, ferramentas recolhidas e a área limpa. Desentupimento não precisa deixar rastro.",
  },
];

export default function QuemSomos() {
  return (
    <>
      <JsonLd data={[schemaPagina(`Quem somos · ${empresa.nome}`, "/quem-somos", descricao), schemaBreadcrumb(migalhas)]} />

      <section className="subsolo grade" aria-labelledby="titulo-pagina">
        <div className="wrap grid gap-12 pb-16 pt-10 md:pb-24 md:pt-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Migalhas itens={migalhas} />
            <p className="anot mt-10 text-agua">Quem somos</p>
            <h1 id="titulo-pagina" className="display mt-5 text-[clamp(2.8rem,8vw,6.5rem)] text-gelo">
              Uma desentupidora que <span className="text-agua">explica</span> o que faz.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="mx-auto w-56 bg-[#F4F5F8] p-3 chanfro-duplo [--chanfro:18px] lg:w-full lg:max-w-[18rem]">
              <Emblema comTexto titulo={`Logo ${empresa.nome}`} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-quem">
        <div className="wrap grid gap-14 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <TituloSecao id="titulo-quem" anot="A Monaliza" titulo="Desentupimento e hidráulica em Curitiba e região" />
          </div>
          <div className="texto-corrido lead text-grafite lg:col-span-6 lg:col-start-7">
            <p>
              A Monaliza Desentupidora resolve entupimentos e problemas hidráulicos em casas, apartamentos, condomínios e
              empresas de {listaCidades()}.
            </p>
            <p>
              O trabalho vai do ralo do box à rede que leva o esgoto até a rua: desentupimento de pia, vaso, ralo e esgoto,
              limpeza de caixa de gordura, hidrojateamento, localização de vazamentos e reparos de encanador.
              {empresa.atende24h && " O atendimento funciona 24 horas, todos os dias, porque entupimento não espera horário comercial."}
            </p>
            <p>
              A forma de trabalhar é simples de explicar: primeiro entender onde o fluxo parou, depois combinar o valor com
              você e só então colocar a mão na massa.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-compromissos" className="grade-clara border-y border-linha bg-papel">
        <div className="wrap py-20 md:py-28">
          <TituloSecao id="titulo-compromissos" anot="Compromissos" titulo="O que você pode esperar" />
          <ul className="mt-12 grid gap-px bg-linha md:grid-cols-2">
            {compromissos.map((c) => (
              <li key={c.t} className="relative bg-papel p-7 sm:p-9" data-revela>
                <span data-marcador className="absolute left-0 top-9 h-8 w-1.5 origin-top bg-sinal" aria-hidden="true" />
                <h3 className="h3 text-marinho">{c.t}</h3>
                <p className="mt-3 text-aco">{c.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="titulo-diferenciais" className="subsolo">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <TituloSecao escuro className="lg:col-span-5" id="titulo-diferenciais" anot="Diferenciais" titulo="Combinado antes, sem surpresa no fim" />
          <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {empresa.diferenciais.map((d) => (
              <div key={d.titulo} className="border-t border-linha-escura pt-5" data-revela>
                <dt className="font-display text-[1.45rem] font-semibold leading-tight text-gelo">{d.titulo}</dt>
                <dd className="mt-2 text-nevoa">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="titulo-como" >
        <div className="wrap grid gap-12 py-20 md:py-24 lg:grid-cols-12">
          <TituloSecao className="lg:col-span-5" id="titulo-como" anot="Atendimento" titulo="Do chamado ao teste final" />
          <ol className="lg:col-span-7">
            {etapasAtendimento.map((e, i) => (
              <li key={e.titulo} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-linha py-6" data-revela>
                <span className="font-mono text-sm text-aco">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="h3 text-marinho">{e.titulo}</h3>
                  <p className="mt-2 text-aco">{e.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="wrap pb-20">
          <Link href="/servicos" className="link-sub inline-flex items-center gap-3 py-2 font-semibold text-marinho">
            Conhecer os serviços <Seta />
          </Link>
        </div>
      </section>

      <ChamadaFinal />
    </>
  );
}
