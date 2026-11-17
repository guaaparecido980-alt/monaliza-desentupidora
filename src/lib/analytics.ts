/**
 * Eventos de conversão. Só enviam algo se o GA4 estiver carregado
 * (NEXT_PUBLIC_GA_ID definido + visitante aceitou os cookies).
 * Eventos: whatsapp_click, telefone_click, formulario_envio.
 */
type Gtag = (cmd: "event", nome: string, params?: Record<string, string>) => void;

export function rastrear(evento: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", evento, params);
}
