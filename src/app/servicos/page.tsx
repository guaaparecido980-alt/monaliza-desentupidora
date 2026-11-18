import Link from "next/link";
import type { Metadata } from "next";
import { servicos } from "@/content/servicos";
import { siteUrl } from "@/config/empresa";
import { meta, schemaBreadcrumb, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { IlustracaoServico } from "@/components/ilustracoes/Servicos";
import { BotaoContato, Seta } from "@/components/ui/BotaoContato";
import { Migalhas, ChamadaFinal } from "@/components/ui/Blocos";

const descricao =
  "Serviços da Monaliza em Curitiba e região: desentupimento de esgoto, pia, vaso e ralo, caixa de gordura, hidrojateamento, caça-vazamento e encanador.";

export const metadata: Metadata = meta({
  titulo: "Serviços de desentupimento em Curitiba",
  descricao,
  caminho: "/servicos",
});

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Serviços", caminho: "/servicos" },
];

export default function Servicos() {
  return (
    <>
      <JsonLd
        data={[
          schemaPagina("Serviços de desentupimento em Curitiba", "/servicos", descricao),
          schemaBreadcrumb(migalhas),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: servicos.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.nome,
              url: `${siteUrl}/servicos/${s.slug}`,
            })),
          },
        ]}
      />

      <section className="subsolo grade" aria-labelledby="titulo-pagina">
        <div className="wrap pb-16 pt-10 md:pb-20 md:pt-14">
          <Migalhas itens={migalhas} />
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="anot text-agua">Catálogo · {servicos.length} serviços</p>
              <h1 id="titulo-pagina" className="display mt-5 text-[clamp(2.8rem,8vw,6.5rem)] text-gelo">
                Serviços de desentupimento <span className="text-agua">e hidráulica</span>
              </h1>
            </div>
            <p className="lead text-nevoa lg:col-span-4">
              Cada problema tem um caminho. Escolha o que está acontecendo aí e veja como a Monaliza resolve.
            </p>
          </div>
          <nav aria-label="Atalhos para os serviços" className="mt-12 flex flex-wrap gap-2">
            {servicos.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="border border-nevoa/30 px-3.5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-nevoa transition-colors hover:border-agua hover:text-agua"
              >
                {s.nomeCurto}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="bg-gelo">
        {servicos.map((s, i) => {
          const par = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              aria-labelledby={`t-${s.slug}`}
              className={`scroll-mt-24 border-b border-linha ${par ? "bg-papel" : ""}`}
            >
              <div className="wrap grid items-center gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
                <div className={`lg:col-span-5 ${par ? "lg:order-2 lg:col-start-8" : ""}`}>
                  <div
                    className={`prancha border border-linha p-6 text-marinho-logo sm:p-8 ${par ? "bg-gelo" : "bg-papel"}`}
                    style={{ ["--fundo-ilustra" as string]: par ? "var(--color-gelo)" : "var(--color-papel)" }}
                  >
                    <p className="anot text-aco">Prancha P-{String(i + 1).padStart(2, "0")}</p>
                    <IlustracaoServico chave={s.ilustracao} className="mt-3 w-full" />
                  </div>
                </div>
                <div className={`lg:col-span-6 ${par ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                  <p className="anot text-marinho-logo">{s.publico}</p>
                  <h2 id={`t-${s.slug}`} data-mascara className="h2 mt-4 text-marinho">
                    {s.nome}
                  </h2>
                  <p className="mt-5 text-lg text-grafite">{s.resumo}</p>
                  <ul className="mt-6 grid gap-2 text-[0.98rem] text-aco sm:grid-cols-2">
                    {s.resolve.slice(0, 4).map((r) => (
                      <li key={r} className="flex gap-3">
                        <span className="mt-[0.6rem] h-px w-4 shrink-0 bg-sinal" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-center">
                    <Link href={`/servicos/${s.slug}`} className="btn btn-marinho">
                      Ver como funciona <Seta />
                    </Link>
                    <BotaoContato
                      variante="linha"
                      className="text-marinho"
                      mensagem={s.mensagemWhatsApp}
                      servico={s.slug}
                      local="catalogo"
                      rotulo="Pedir orçamento"
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ChamadaFinal titulo={<>Não sabe qual é o seu caso?</>} texto="Descreva o problema do seu jeito. O técnico identifica o serviço certo e passa o valor antes de começar." />
    </>
  );
}
