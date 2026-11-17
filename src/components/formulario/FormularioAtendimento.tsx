"use client";

import { useEffect, useId, useRef, useState } from "react";
import { empresa, linkWhatsApp } from "@/config/empresa";
import { rastrear } from "@/lib/analytics";
import { Seta, IconeWhats } from "@/components/ui/BotaoContato";

type Servico = { slug: string; nome: string };
type Campos = { nome: string; telefone: string; servico: string; cidade: string; descricao: string };
type Erros = Partial<Record<keyof Campos, string>>;

const vazio: Campos = { nome: "", telefone: "", servico: "", cidade: "", descricao: "" };

function mascaraTelefone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function validar(c: Campos): Erros {
  const e: Erros = {};
  if (c.nome.trim().length < 2) e.nome = "Informe seu nome.";
  const dig = c.telefone.replace(/\D/g, "");
  if (dig.length < 10 || dig.length > 11) e.telefone = "Informe um telefone com DDD, por exemplo (41) 99999-9999.";
  if (!c.servico) e.servico = "Escolha o serviço (ou “Não sei / outro”).";
  if (!c.cidade) e.cidade = "Escolha a cidade.";
  if (c.descricao.trim().length < 10) e.descricao = "Conte em poucas palavras o que está acontecendo (mínimo 10 letras).";
  return e;
}

const rotulos: Record<keyof Campos, string> = {
  nome: "Nome",
  telefone: "Telefone",
  servico: "Serviço",
  cidade: "Cidade",
  descricao: "Descrição do problema",
};

/**
 * Formulário sem backend: ao enviar, monta a mensagem e abre o WhatsApp da Monaliza
 * (a pessoa confirma o envio lá). Não finge "enviado com sucesso".
 * Anti-spam: campo isca invisível + tempo mínimo de preenchimento.
 */
export function FormularioAtendimento({ servicos }: { servicos: Servico[] }) {
  const id = useId();
  const [c, setC] = useState<Campos>(vazio);
  const [erros, setErros] = useState<Erros>({});
  const [estado, setEstado] = useState<"editando" | "aberto" | "indisponivel">("editando");
  const resumoRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const inicio = useRef(0);
  const [isca, setIsca] = useState("");

  useEffect(() => {
    inicio.current = Date.now();
    const s = new URLSearchParams(window.location.search).get("servico");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (s && servicos.some((x) => x.slug === s)) setC((v) => ({ ...v, servico: s }));
  }, [servicos]);

  function mudar<K extends keyof Campos>(k: K, valor: string) {
    const novo = { ...c, [k]: k === "telefone" ? mascaraTelefone(valor) : valor };
    setC(novo);
    if (erros[k]) setErros((e) => ({ ...e, [k]: validar(novo)[k] }));
  }

  function enviar(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validar(c);
    setErros(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => resumoRef.current?.focus());
      return;
    }
    // Spam: isca preenchida ou envio rápido demais → ignora em silêncio
    if (isca || Date.now() - inicio.current < 2500) return;

    const nomeServico = servicos.find((s) => s.slug === c.servico)?.nome ?? "Não sei / outro";
    const texto = [
      `Olá! Vim pelo site da ${empresa.nomeCurto} e gostaria de um orçamento.`,
      ``,
      `*Nome:* ${c.nome.trim()}`,
      `*Telefone:* ${c.telefone}`,
      `*Serviço:* ${nomeServico}`,
      `*Cidade:* ${c.cidade}`,
      `*Problema:* ${c.descricao.trim()}`,
    ].join("\n");

    const wa = linkWhatsApp(texto);
    rastrear("formulario_envio", { servico: c.servico, cidade: c.cidade, canal: wa ? "whatsapp" : "indisponivel" });
    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      setEstado("aberto");
    } else {
      setEstado("indisponivel");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const listaErros = Object.entries(erros).filter(([, v]) => v) as [keyof Campos, string][];
  const campo = (k: keyof Campos) => ({
    id: `${id}-${k}`,
    name: k,
    "aria-invalid": erros[k] ? true : undefined,
    "aria-describedby": erros[k] ? `${id}-${k}-erro` : undefined,
  });
  const erro = (k: keyof Campos) =>
    erros[k] ? (
      <p id={`${id}-${k}-erro`} className="mt-2 text-sm font-medium text-[#b3261e]">
        {erros[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={enviar} noValidate className="grid gap-6" aria-describedby={`${id}-nota`}>
      {listaErros.length > 0 && (
        <div ref={resumoRef} tabIndex={-1} role="alert" className="border-l-4 border-[#b3261e] bg-[#fdecea] p-4 text-[0.95rem] text-grafite">
          <p className="font-semibold">Confira {listaErros.length === 1 ? "o campo" : `os ${listaErros.length} campos`} abaixo:</p>
          <ul className="mt-2 list-disc pl-5">
            {listaErros.map(([k, msg]) => (
              <li key={k}>
                <a href={`#${id}-${k}`} className="underline">
                  {rotulos[k]}
                </a>
                : {msg}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-nome`} className="mb-2 block font-semibold text-marinho">
            Nome
          </label>
          <input {...campo("nome")} className="campo" autoComplete="name" value={c.nome} onChange={(e) => mudar("nome", e.target.value)} />
          {erro("nome")}
        </div>
        <div>
          <label htmlFor={`${id}-telefone`} className="mb-2 block font-semibold text-marinho">
            Telefone / WhatsApp
          </label>
          <input
            {...campo("telefone")}
            className="campo"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(41) 99999-9999"
            value={c.telefone}
            onChange={(e) => mudar("telefone", e.target.value)}
          />
          {erro("telefone")}
        </div>
        <div>
          <label htmlFor={`${id}-servico`} className="mb-2 block font-semibold text-marinho">
            Serviço
          </label>
          <select {...campo("servico")} className="campo" value={c.servico} onChange={(e) => mudar("servico", e.target.value)}>
            <option value="">Selecione</option>
            {servicos.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.nome}
              </option>
            ))}
            <option value="outro">Não sei / outro</option>
          </select>
          {erro("servico")}
        </div>
        <div>
          <label htmlFor={`${id}-cidade`} className="mb-2 block font-semibold text-marinho">
            Cidade
          </label>
          <select {...campo("cidade")} className="campo" value={c.cidade} onChange={(e) => mudar("cidade", e.target.value)}>
            <option value="">Selecione</option>
            {empresa.cidadesAtendidas.map((cid) => (
              <option key={cid} value={cid}>
                {cid}
              </option>
            ))}
            <option value="Outra cidade">Outra cidade</option>
          </select>
          {erro("cidade")}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-descricao`} className="mb-2 block font-semibold text-marinho">
          O que está acontecendo?
        </label>
        <textarea
          {...campo("descricao")}
          className="campo min-h-36 resize-y"
          placeholder="Ex.: a pia da cozinha não escoa desde ontem e está com cheiro forte."
          value={c.descricao}
          onChange={(e) => mudar("descricao", e.target.value)}
        />
        {erro("descricao")}
      </div>

      {/* Isca para robôs: invisível para pessoas e leitores de tela */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Site da empresa
          <input tabIndex={-1} autoComplete="off" value={isca} onChange={(e) => setIsca(e.target.value)} name="site_empresa" />
        </label>
      </div>

      <div className="flex flex-col items-start gap-3">
        <button type="submit" className="btn btn-marinho w-full xs:w-auto xs:whitespace-nowrap">
          <IconeWhats /> Enviar pelo WhatsApp <Seta />
        </button>
        <p id={`${id}-nota`} className="text-sm text-aco">
          Ao enviar, o WhatsApp abre com a sua mensagem pronta. É só confirmar o envio por lá.
        </p>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {estado === "aberto" && (
          <div className="border-l-4 border-marinho bg-papel p-4 text-grafite">
            <p className="font-semibold">Abrimos o WhatsApp com a sua mensagem.</p>
            <p className="mt-1 text-[0.95rem] text-aco">
              Se a janela não abriu, verifique se o navegador bloqueou o pop-up e tente de novo. A mensagem só chega à Monaliza
              depois que você tocar em enviar no WhatsApp.
            </p>
          </div>
        )}
        {estado === "indisponivel" && (
          <div className="border-l-4 border-sinal bg-papel p-4 text-grafite">
            <p className="font-semibold">O envio por aqui ainda não está disponível.</p>
            <p className="mt-1 text-[0.95rem] text-aco">
              O canal de WhatsApp da Monaliza está sendo configurado. Sua mensagem não foi enviada.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
