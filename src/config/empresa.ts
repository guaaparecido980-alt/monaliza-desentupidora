/**
 * Configuração central da empresa. TODO dado de contato/negócio sai daqui.
 * `null` = ainda não confirmado pelo cliente → o componente correspondente não aparece.
 * Ver docs/DADOS-DA-EMPRESA.md antes de preencher.
 */
export const empresa = {
  nome: "Monaliza Desentupidora",
  nomeCurto: "Monaliza",
  /** Logo diz "Desde 1996" — CONFIRMAR antes de exibir em texto ou schema. */
  fundacao: null as number | null,
  /** Somente dígitos com DDI. Print mostrava +55 41 9820-6609 (incompleto?) — CONFIRMAR. */
  whatsapp: null as string | null,
  telefone: null as string | null,
  email: null as string | null,
  dominio: null as string | null,
  cidadePrincipal: { nome: "Curitiba", uf: "PR" }, // CONFIRMAR
  cidadesAtendidas: [] as string[], // CONFIRMAR (não copiar da Máxima sem OK)
  atende24h: null as boolean | null,
  horario: null as string | null,
  endereco: null as null | { rua: string; bairro: string; cidade: string; uf: string; cep: string },
  cnpj: null as string | null,
  redes: { instagram: null as string | null, facebook: null as string | null },
  mensagemWhatsApp:
    "Olá! Conheci a Monaliza pelo site e gostaria de solicitar um orçamento para um serviço de desentupimento.",
} as const;

export function linkWhatsApp(mensagem: string = empresa.mensagemWhatsApp) {
  if (!empresa.whatsapp) return null;
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
