import Link from "next/link";
import type { Metadata } from "next";
import { servicos } from "@/content/servicos";
import { Seta } from "@/components/ui/BotaoContato";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NaoEncontrada() {
  return (
    <section className="subsolo grade" aria-labelledby="titulo-404">
      <div className="wrap grid min-h-[70svh] content-center gap-10 py-20">
        <p className="anot text-agua">Erro 404 · trecho não encontrado</p>
        <h1 id="titulo-404" className="display text-[clamp(3rem,9vw,7rem)] text-gelo">
          Esse cano <br />
          <span className="text-agua">não leva a lugar nenhum.</span>
        </h1>
        <p className="lead max-w-xl text-nevoa">A página que você procurou não existe ou mudou de endereço. Estes caminhos funcionam:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="btn btn-agua">
            Página inicial <Seta />
          </Link>
          <Link href="/servicos" className="btn btn-linha text-gelo">
            Serviços
          </Link>
          <Link href="/contato" className="btn btn-linha text-gelo">
            Contato
          </Link>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
          {servicos.map((s) => (
            <li key={s.slug}>
              <Link href={`/servicos/${s.slug}`} className="link-sub text-nevoa hover:text-gelo">
                {s.nome}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
