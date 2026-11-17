import type { Metadata } from "next";
import Link from "next/link";
import { empresa } from "@/config/empresa";
import { meta, schemaBreadcrumb } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Migalhas } from "@/components/ui/Blocos";

export const metadata: Metadata = meta({
  titulo: "Política de privacidade",
  descricao: "Como a Monaliza Desentupidora trata os dados de quem usa o site, conforme a Lei Geral de Proteção de Dados (LGPD).",
  caminho: "/politica-de-privacidade",
});

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Política de privacidade", caminho: "/politica-de-privacidade" },
];

/** Atualize a data sempre que o texto mudar. */
const atualizadaEm = "17 de novembro de 2026";

export default function Privacidade() {
  const temAnalytics = Boolean(process.env.NEXT_PUBLIC_GA_ID);
  return (
    <>
      <JsonLd data={schemaBreadcrumb(migalhas)} />
      <section className="subsolo grade" aria-labelledby="titulo-pagina">
        <div className="wrap pb-14 pt-10 md:pb-16 md:pt-14">
          <Migalhas itens={migalhas} />
          <h1 id="titulo-pagina" className="display mt-10 text-[clamp(2.6rem,7vw,5rem)] text-gelo">
            Política de privacidade
          </h1>
          <p className="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-nevoa">Atualizada em {atualizadaEm}</p>
        </div>
      </section>

      <article className="wrap max-w-3xl py-16 md:py-20">
        <div className="space-y-10 text-grafite [&_h2]:h3 [&_h2]:text-marinho [&_p]:mt-3 [&_p]:text-aco [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-aco">
          <section>
            <h2>1. Quem somos</h2>
            <p>
              Este site pertence à {empresa.nome}
              {empresa.cnpj ? `, CNPJ ${empresa.cnpj}` : ""}, que presta serviços de desentupimento e hidráulica em Curitiba e
              região. Esta política explica quais dados o site recebe e o que é feito com eles, conforme a Lei nº 13.709/2018
              (LGPD).
            </p>
          </section>

          <section>
            <h2>2. Formulário de atendimento</h2>
            <p>
              O formulário da página de <Link href="/contato" className="text-marinho underline">contato</Link> não grava seus
              dados em nenhum servidor do site. Ao enviar, ele apenas monta uma mensagem com o que você digitou (nome,
              telefone, serviço, cidade e descrição do problema) e abre o WhatsApp para que você mesmo a envie.
            </p>
            <p>
              A partir daí, a conversa acontece no WhatsApp, que tem a própria política de privacidade. A Monaliza usa esses
              dados só para responder ao seu pedido, combinar o atendimento e prestar o serviço.
            </p>
          </section>

          <section>
            <h2>3. Cookies e medição de audiência</h2>
            {temAnalytics ? (
              <p>
                O site pode usar o Google Analytics 4 para entender, de forma agregada, quantas pessoas visitam as páginas e
                quais botões de contato são usados. Ele só é carregado se você clicar em “Aceitar” no aviso de cookies. Se
                recusar, nenhum cookie de medição é gravado. Sua escolha fica salva no seu próprio navegador.
              </p>
            ) : (
              <p>
                No momento o site não usa cookies de medição nem de publicidade. Se isso mudar, um aviso pedirá o seu
                consentimento antes de qualquer cookie não essencial ser gravado.
              </p>
            )}
            <p>O site guarda no seu navegador apenas preferências técnicas (como a sua escolha sobre cookies).</p>
          </section>

          <section>
            <h2>4. Compartilhamento</h2>
            <p>
              A Monaliza não vende nem aluga dados pessoais. Os dados só são compartilhados quando necessário para prestar o
              serviço ou quando a lei exigir.
            </p>
          </section>

          <section>
            <h2>5. Seus direitos</h2>
            <p>Pela LGPD, você pode pedir a qualquer momento:</p>
            <ul>
              <li>confirmação de que tratamos seus dados e acesso a eles;</li>
              <li>correção de dados incompletos ou desatualizados;</li>
              <li>exclusão dos dados tratados com base no seu consentimento;</li>
              <li>informações sobre com quem os dados foram compartilhados.</li>
            </ul>
            <p>
              Para isso, fale com a Monaliza pelos canais da página de{" "}
              <Link href="/contato" className="text-marinho underline">contato</Link>
              {empresa.email ? ` ou pelo e-mail ${empresa.email}` : ""}.
            </p>
          </section>

          <section>
            <h2>6. Alterações</h2>
            <p>Esta política pode ser atualizada. A data no topo da página indica a versão em vigor.</p>
          </section>
        </div>
      </article>
    </>
  );
}
