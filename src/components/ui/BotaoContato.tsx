import Link from "next/link";
import { empresa, linkWhatsApp, linkTelefone, telefoneFormatado } from "@/config/empresa";

type Props = {
  mensagem?: string;
  servico?: string;
  local: string;
  variante?: "agua" | "marinho" | "linha";
  rotulo?: string;
  className?: string;
};

export function Seta({ className = "" }: { className?: string }) {
  return (
    <svg className={`seta ${className}`} width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
      <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconeWhats({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

/**
 * Botão principal de contato.
 * Com WhatsApp configurado → abre o WhatsApp com a mensagem do contexto.
 * Sem WhatsApp (ainda pendente) → leva ao formulário de /contato. Nunca um número falso.
 */
export function BotaoContato({ mensagem, servico, local, variante = "agua", rotulo, className = "" }: Props) {
  const wa = linkWhatsApp(mensagem);
  const cls = `btn btn-${variante} ${className}`;
  if (wa) {
    return (
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        data-evento="whatsapp_click"
        data-servico={servico}
        data-local={local}
      >
        <IconeWhats />
        {rotulo ?? "Chamar no WhatsApp"}
        <Seta />
      </a>
    );
  }
  const destino = servico ? `/contato?servico=${encodeURIComponent(servico)}#formulario` : "/contato#formulario";
  return (
    <Link href={destino} className={cls} data-evento="cta_contato" data-servico={servico} data-local={local}>
      {rotulo ?? "Solicitar atendimento"}
      <Seta />
    </Link>
  );
}

/** Telefone clicável. Some enquanto o número não for confirmado. */
export function LinkTelefone({ className = "", local }: { className?: string; local: string }) {
  const tel = linkTelefone();
  if (!tel) return null;
  return (
    <a href={tel} className={className} data-evento="telefone_click" data-local={local}>
      {telefoneFormatado(empresa.telefone)}
    </a>
  );
}
