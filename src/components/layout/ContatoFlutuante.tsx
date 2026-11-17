import Link from "next/link";
import { empresa, linkWhatsApp, linkTelefone } from "@/config/empresa";
import { IconeWhats } from "@/components/ui/BotaoContato";

/**
 * Celular: barra fixa no rodapé (respeita a área segura do iPhone). O body tem
 * padding-bottom do mesmo tamanho, então a barra nunca cobre conteúdo.
 * Desktop: botão discreto no canto, só quando o WhatsApp existir.
 */
export function ContatoFlutuante() {
  const wa = linkWhatsApp();
  const tel = linkTelefone();

  return (
    <>
      <div data-testid="barra-contato" className="fixed inset-x-0 bottom-0 z-40 border-t border-linha-escura bg-abismo/97 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        <div className="flex h-16 items-stretch gap-2 px-3 py-2">
          {tel && (
            <a
              href={tel}
              data-evento="telefone_click"
              data-local="barra-movel"
              className="flex flex-1 items-center justify-center gap-2 border border-nevoa/40 font-semibold text-gelo"
            >
              Ligar
            </a>
          )}
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              data-evento="whatsapp_click"
              data-local="barra-movel"
              className="flex flex-[2] items-center justify-center gap-2 bg-agua font-semibold text-abismo"
            >
              <IconeWhats /> WhatsApp
            </a>
          ) : (
            <Link
              href="/contato#formulario"
              data-evento="cta_contato"
              data-local="barra-movel"
              className="flex flex-[2] items-center justify-center gap-2 bg-agua font-semibold text-abismo"
            >
              Solicitar atendimento
              {empresa.atende24h && <span className="font-mono text-[0.7rem] font-medium uppercase tracking-wider">· 24h</span>}
            </Link>
          )}
        </div>
      </div>

      {wa && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          data-evento="whatsapp_click"
          data-local="flutuante"
          className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center bg-agua text-abismo shadow-[0_10px_30px_-10px_rgb(11_26_43/0.6)] chanfro-duplo [--chanfro:10px] transition-transform hover:-translate-y-0.5 md:grid"
        >
          <IconeWhats className="size-6" />
          <span className="sr-only">Falar com a Monaliza no WhatsApp</span>
        </a>
      )}
    </>
  );
}
