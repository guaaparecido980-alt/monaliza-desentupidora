import Link from "next/link";
import { empresa, listaCidades, linkWhatsApp, telefoneFormatado, linkTelefone } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { navegacao } from "./navegacao";
import { Emblema } from "@/components/marca/Emblema";

export function Rodape() {
  // Ano do build (o site é estático; um novo build atualiza o ano)
  const ano = new Date().getFullYear();
  const wa = linkWhatsApp();
  const tel = linkTelefone();
  return (
    <footer className="subsolo relative overflow-hidden pb-[var(--barra-mobile)]">
      <div className="alvenaria opacity-25 [--alv-cor:var(--color-marinho-logo)] [--alv-junta:var(--color-abismo)]" aria-hidden="true" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <div className="w-40 bg-[#F4F5F8] p-2 chanfro-duplo [--chanfro:14px]">
            <Emblema comTexto titulo={empresa.nome} />
          </div>
          <p className="mt-6 max-w-xs text-[0.95rem] text-nevoa">
            Desentupimento e serviços hidráulicos em Curitiba e região metropolitana.
            {empresa.atende24h && " Atendimento 24 horas, todos os dias."}
          </p>
        </div>

        <nav aria-label="Serviços" className="md:col-span-3">
          <p className="anot text-agua">Serviços</p>
          <ul className="mt-4 space-y-1">
            {servicos.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicos/${s.slug}`} className="link-sub inline-block py-1.5 text-[0.95rem] text-gelo/85 hover:text-gelo">
                  {s.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Institucional" className="md:col-span-2">
          <p className="anot text-agua">Empresa</p>
          <ul className="mt-4 space-y-1">
            {navegacao.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-sub inline-block py-1.5 text-[0.95rem] text-gelo/85 hover:text-gelo">
                  {n.rotulo}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/politica-de-privacidade" className="link-sub inline-block py-1.5 text-[0.95rem] text-gelo/85 hover:text-gelo">
                Política de privacidade
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="anot text-agua">Contato</p>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" data-evento="whatsapp_click" data-local="rodape" className="link-sub text-gelo">
                  WhatsApp {telefoneFormatado(empresa.whatsapp)}
                </a>
              </li>
            )}
            {tel && (
              <li>
                <a href={tel} data-evento="telefone_click" data-local="rodape" className="link-sub text-gelo">
                  {telefoneFormatado(empresa.telefone)}
                </a>
              </li>
            )}
            {empresa.email && (
              <li>
                <a href={`mailto:${empresa.email}`} className="link-sub text-gelo">
                  {empresa.email}
                </a>
              </li>
            )}
            {empresa.perfilGoogle && (
              <li>
                <a href={empresa.perfilGoogle} target="_blank" rel="noopener noreferrer" data-evento="perfil_google_click" data-local="rodape" className="link-sub text-gelo">
                  Ver no Google
                </a>
              </li>
            )}
            {empresa.linkAvaliacoes && (
              <li>
                <a href={empresa.linkAvaliacoes} target="_blank" rel="noopener noreferrer" data-evento="avaliacao_click" data-local="rodape" className="link-sub text-gelo">
                  Avaliar no Google
                </a>
              </li>
            )}
            {!wa && !tel && (
              <li>
                <Link href="/contato#formulario" className="link-sub text-gelo">
                  Formulário de atendimento
                </Link>
              </li>
            )}
            {empresa.horario && <li className="text-nevoa">{empresa.horario}</li>}
            <li className="text-nevoa">Atendemos {listaCidades()}.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-linha-escura">
        <div className="wrap flex flex-col gap-2 py-6 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-nevoa sm:flex-row sm:justify-between">
          <p>
            © {ano} {empresa.nome}
            {empresa.cnpj && ` · CNPJ ${empresa.cnpj}`}
          </p>
          <p>Curitiba · Paraná</p>
        </div>
      </div>
    </footer>
  );
}
