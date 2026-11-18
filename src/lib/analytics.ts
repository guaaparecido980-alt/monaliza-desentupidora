/**
 * Eventos de conversão. Só enviam algo se o GA4 estiver carregado
 * (NEXT_PUBLIC_GA_ID definido + visitante aceitou os cookies).
 *
 * Eventos: whatsapp_click, telefone_click, cta_contato, formulario_envio,
 * ver_servico, perfil_google_click, avaliacao_click.
 *
 * Todo evento leva a ORIGEM da visita (guardada na primeira página aberta na sessão):
 * - origem_fonte: utm_source, ou o site de onde a pessoa veio (google.com, instagram.com…), ou "direto"
 * - origem_meio: utm_medium (ex.: cpc, social) ou "referencia"/"nenhum"
 * - origem_campanha: utm_campaign, se houver
 * - pagina_entrada: a primeira página vista na sessão
 * Nada disso identifica a pessoa: não guarda nome, telefone nem IP.
 */
type Gtag = (cmd: "event", nome: string, params?: Record<string, string>) => void;
type Janela = Window & { gtag?: Gtag; __eventosPendentes?: [string, Record<string, string>][] };

const CHAVE_ORIGEM = "monaliza-origem";

export function origemDaVisita(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const salva = sessionStorage.getItem(CHAVE_ORIGEM);
    if (salva) return JSON.parse(salva);
  } catch {}
  const q = new URLSearchParams(window.location.search);
  let referencia = "";
  try {
    const host = document.referrer ? new URL(document.referrer).hostname : "";
    if (host && host !== window.location.hostname) referencia = host.replace(/^www\./, "");
  } catch {}
  const origem: Record<string, string> = {
    origem_fonte: q.get("utm_source") ?? (referencia || "direto"),
    origem_meio: q.get("utm_medium") ?? (referencia ? "referencia" : "nenhum"),
    pagina_entrada: window.location.pathname,
  };
  const campanha = q.get("utm_campaign");
  if (campanha) origem.origem_campanha = campanha;
  try {
    sessionStorage.setItem(CHAVE_ORIGEM, JSON.stringify(origem));
  } catch {}
  return origem;
}

export function rastrear(evento: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Janela;
  if (typeof w.gtag !== "function" && !process.env.NEXT_PUBLIC_GA_ID) return; // sem GA, nada a medir
  const completo = { ...origemDaVisita(), pagina: window.location.pathname, ...params };
  if (typeof w.gtag === "function") w.gtag("event", evento, completo);
  else {
    // GA ainda não carregou (ou o aviso de cookies está aberto): guarda e envia se a pessoa aceitar.
    (w.__eventosPendentes ??= []).push([evento, completo]);
  }
}

/** Chamado pelo Consentimento logo depois de carregar o GA4. */
export function enviarPendentes() {
  const w = window as Janela;
  const fila = w.__eventosPendentes ?? [];
  w.__eventosPendentes = [];
  if (typeof w.gtag === "function") for (const [e, p] of fila) w.gtag("event", e, p);
}
