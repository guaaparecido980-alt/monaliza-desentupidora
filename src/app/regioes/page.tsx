import Link from "next/link";
import type { Metadata } from "next";
import { empresa } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { meta, schemaBreadcrumb, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Migalhas, TituloSecao, ChamadaFinal } from "@/components/ui/Blocos";

const descricao =
  "Onde a Monaliza atende: Curitiba, São José dos Pinhais, Pinhais, Colombo, Araucária, Almirante Tamandaré, Fazenda Rio Grande e Campo Largo.";

export const metadata: Metadata = meta({
  titulo: "Desentupidora em Curitiba e região metropolitana",
  descricao,
  caminho: "/regioes",
});

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Regiões atendidas", caminho: "/regioes" },
];

/**
 * Posições aproximadas (esquemáticas, não é mapa em escala) para o diagrama.
 * Curitiba no centro; as demais na direção real em relação à capital.
 */
const posicoes: Record<string, [number, number, "start" | "end" | "middle"]> = {
  Curitiba: [300, 200, "middle"],
  "Almirante Tamandaré": [250, 70, "end"],
  Colombo: [370, 80, "start"],
  Pinhais: [440, 180, "start"],
  "São José dos Pinhais": [440, 290, "start"],
  "Fazenda Rio Grande": [300, 350, "middle"],
  Araucária: [170, 310, "end"],
  "Campo Largo": [110, 190, "end"],
};

export default function Regioes() {
  return (
    <>
      <JsonLd data={[schemaPagina("Regiões atendidas", "/regioes", descricao), schemaBreadcrumb(migalhas)]} />

      <section className="subsolo grade" aria-labelledby="titulo-pagina">
        <div className="wrap grid gap-12 pb-16 pt-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Migalhas itens={migalhas} />
            <p className="anot mt-10 text-agua">Área de atendimento · {empresa.cidadesAtendidas.length} cidades</p>
            <h1 id="titulo-pagina" className="display mt-5 text-[clamp(2.6rem,7vw,5.5rem)] text-gelo">
              Curitiba e região metropolitana
            </h1>
            <p className="lead mt-6 max-w-lg text-nevoa">
              A equipe da Monaliza vai até o local do serviço: casas, apartamentos, condomínios, comércios e indústrias.
              {empresa.atende24h && " Atendimento 24 horas, todos os dias."}
            </p>
          </div>
          <div className="lg:col-span-6">
            <svg
              viewBox="0 0 600 400"
              className="ilustra w-full text-nevoa"
              role="img"
              aria-label="Diagrama esquemático das cidades atendidas em volta de Curitiba"
            >
              {Object.entries(posicoes)
                .filter(([c]) => c !== "Curitiba")
                .map(([c, [x, y]]) => (
                  <path key={c} className="t2" d={`M300 200 L${x} ${y}`} />
                ))}
              <circle className="t" cx="300" cy="200" r="46" />
              <circle className="t2" cx="300" cy="200" r="120" />
              {Object.entries(posicoes).map(([c, [x, y, anc]]) => {
                const centro = c === "Curitiba";
                return (
                  <g key={c}>
                    {!centro && <circle cx={x} cy={y} r="6" className="sinal" />}
                    <text
                      x={centro ? x : anc === "end" ? x - 14 : anc === "start" ? x + 14 : x}
                      y={centro ? y + 7 : anc === "middle" ? y + 26 : y + 5}
                      textAnchor={anc}
                      fill={centro ? "var(--color-agua)" : "var(--color-gelo)"}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: centro ? 24 : 17,
                      }}
                    >
                      {c}
                    </text>
                  </g>
                );
              })}
              <text className="cota" x="8" y="392">ESQUEMA SEM ESCALA</text>
            </svg>
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-cidades">
        <div className="wrap py-20 md:py-28">
          <TituloSecao id="titulo-cidades" anot="Cidades" titulo="Onde a Monaliza atende" />
          <ul className="mt-12 grid gap-px bg-linha sm:grid-cols-2 lg:grid-cols-4">
            {empresa.cidadesAtendidas.map((c) => (
              <li key={c} className="bg-gelo p-6" data-revela>
                <p className="font-display text-[1.8rem] font-bold uppercase leading-none text-marinho">{c}</p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-aco">Paraná</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-aco">
            Mora numa cidade vizinha que não está na lista? Entre em contato e pergunte: a equipe informa se consegue atender
            o seu endereço.
          </p>
        </div>
      </section>

      <section aria-labelledby="titulo-servicos-regiao" className="border-t border-linha bg-papel">
        <div className="wrap grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <TituloSecao className="lg:col-span-5" id="titulo-servicos-regiao" anot="Em todas as cidades" titulo="Serviços disponíveis na região" />
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {servicos.map((s) => (
              <li key={s.slug} className="border-t border-linha">
                <Link href={`/servicos/${s.slug}`} className="flex items-center justify-between gap-4 py-4 font-semibold text-marinho hover:text-marinho-logo">
                  {s.nome}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ChamadaFinal />
    </>
  );
}
