import type { Metadata } from "next";
import { empresa, linkWhatsApp, linkTelefone, telefoneFormatado, listaCidades } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { faqGeral } from "@/content/geral";
import { meta, schemaBreadcrumb, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Migalhas, ListaFaq, TituloSecao } from "@/components/ui/Blocos";
import { FormularioAtendimento } from "@/components/formulario/FormularioAtendimento";
import { IconeWhats, Seta } from "@/components/ui/BotaoContato";

const descricao =
  "Fale com a Monaliza Desentupidora: peça atendimento para desentupimento, hidrojateamento, caixa de gordura ou vazamento em Curitiba e região. Atendimento 24 horas.";

export const metadata: Metadata = meta({ titulo: "Contato e orçamento", descricao, caminho: "/contato" });

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Contato", caminho: "/contato" },
];

export default function Contato() {
  const wa = linkWhatsApp();
  const tel = linkTelefone();
  return (
    <>
      <JsonLd
        data={[
          { ...schemaPagina("Contato", "/contato", descricao), "@type": "ContactPage" },
          schemaBreadcrumb(migalhas),
        ]}
      />

      <section className="subsolo grade" aria-labelledby="titulo-pagina">
        <div className="wrap pb-14 pt-10 md:pb-20 md:pt-14">
          <Migalhas itens={migalhas} />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="anot text-agua">{empresa.atende24h ? "Atendimento 24 horas · todos os dias" : "Contato"}</p>
              <h1 id="titulo-pagina" className="display mt-5 text-[clamp(2.8rem,8vw,6.5rem)] text-gelo">
                Conte o que está acontecendo.
              </h1>
            </div>
            <div className="space-y-4 lg:col-span-4 lg:col-start-9">
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-evento="whatsapp_click"
                  data-local="contato-topo"
                  className="btn btn-agua w-full justify-between"
                >
                  <span className="flex items-center gap-3">
                    <IconeWhats /> WhatsApp {telefoneFormatado(empresa.whatsapp)}
                  </span>
                  <Seta />
                </a>
              )}
              {tel && (
                <a href={tel} data-evento="telefone_click" data-local="contato-topo" className="btn btn-linha w-full justify-between text-gelo">
                  Ligar {telefoneFormatado(empresa.telefone)} <Seta />
                </a>
              )}
              <dl className="grid gap-3 border-t border-linha-escura pt-5 text-[0.95rem]">
                {empresa.horario && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-nevoa">Horário</dt>
                    <dd className="text-right text-gelo">{empresa.horario}</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <dt className="text-nevoa">Atendimento</dt>
                  <dd className="text-right text-gelo">No local do serviço</dd>
                </div>
                {empresa.email && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-nevoa">E-mail</dt>
                    <dd className="text-right">
                      <a href={`mailto:${empresa.email}`} className="text-gelo underline">
                        {empresa.email}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="formulario" aria-labelledby="titulo-form" className="scroll-mt-20">
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <TituloSecao id="titulo-form" anot="Pedido de atendimento" titulo="Formulário" />
            <p className="mt-6 text-aco">
              Preencha os campos e a mensagem sai pronta para o WhatsApp da Monaliza. O técnico responde, entende o caso e
              combina o atendimento com você.
            </p>
            <p className="mt-4 text-[0.95rem] text-aco">
              <strong className="text-grafite">Atendemos:</strong> {listaCidades()}.
            </p>
            {empresa.endereco && (
              <address className="mt-4 not-italic text-aco">
                {empresa.endereco.rua}, {empresa.endereco.bairro}, {empresa.endereco.cidade}/{empresa.endereco.uf}
              </address>
            )}
          </div>
          <div className="relative min-w-0 border border-linha bg-papel p-5 sm:p-10 lg:col-span-8">
            <FormularioAtendimento servicos={servicos.map((s) => ({ slug: s.slug, nome: s.nome }))} />
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-faq" className="border-t border-linha bg-papel">
        <div className="wrap grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <TituloSecao className="lg:col-span-4" id="titulo-faq" anot="Antes de chamar" titulo="Dúvidas comuns" />
          <div className="lg:col-span-8">
            <ListaFaq perguntas={faqGeral.slice(0, 4)} />
          </div>
        </div>
      </section>
    </>
  );
}
