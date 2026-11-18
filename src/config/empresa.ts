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
  /**
   * Somente dígitos, com DDI e DDD. Ex.: "5541999999999".
   * PENDENTE: o dono vai passar o número. Enquanto for null, os botões de WhatsApp
   * levam para a página /contato (nada de número falso).
   */
  whatsapp: "5541996410946" as string | null, // confirmado pelo Gustavo (17/11)
  /** Somente dígitos com DDI. PENDENTE. */
  telefone: "5541996410946" as string | null, // mesmo número do WhatsApp (confirmado 17/11)
  email: null as string | null,
  /** Domínio de produção, sem barra no fim. Também pode vir de NEXT_PUBLIC_SITE_URL. */
  dominio: "https://monalizadesentupidora.com.br" as string | null, // comprado na Hostinger (17/11)
  cidadePrincipal: { nome: "Curitiba", uf: "PR" }, // confirmado pelo dono (17/11)
  /** Confirmado pelo dono em 17/11: mesma área da Máxima. */
  cidadesAtendidas: [
    "Curitiba",
    "São José dos Pinhais",
    "Pinhais",
    "Colombo",
    "Araucária",
    "Almirante Tamandaré",
    "Fazenda Rio Grande",
    "Campo Largo",
  ] as string[],
  atende24h: true as boolean | null, // confirmado pelo dono (17/11): 24h, 7 dias
  horario: "24 horas, todos os dias" as string | null,
  endereco: null as null | { rua: string; bairro: string; cidade: string; uf: string; cep: string },
  cnpj: null as string | null,
  redes: { instagram: null as string | null, facebook: null as string | null },
  /**
   * Diferenciais confirmados pelo dono ("é tudo igual à Máxima", 17/11).
   * Sem números: prazo de garantia e tempo de chegada NÃO foram informados.
   */
  diferenciais: [
    {
      titulo: "Valor combinado antes de começar",
      texto:
        "O técnico avalia, explica o que encontrou e passa o valor. O serviço só começa depois que você aprova.",
    },
    {
      titulo: "Sem quebrar piso, sempre que der",
      texto:
        "A primeira tentativa é sempre desobstruir pelo próprio encanamento. Quebra só entra na conversa quando não há outro caminho, e você decide.",
    },
    {
      titulo: "Equipe identificada",
      texto: "Quem chega na sua porta se apresenta como Monaliza. Você sabe quem está entrando na sua casa ou empresa.",
    },
    {
      titulo: "Serviço com garantia",
      texto: "O prazo e as condições da garantia ficam escritos no orçamento, antes do serviço.",
    },
  ],
  mensagemWhatsApp:
    "Olá! Conheci a Monaliza pelo site e gostaria de solicitar um orçamento para um serviço de desentupimento.",
} as const;

/** URL base do site (canonical, sitemap, Open Graph). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  empresa.dominio ??
  "http://localhost:3200"
).replace(/\/$/, "");

export function linkWhatsApp(mensagem: string = empresa.mensagemWhatsApp) {
  if (!empresa.whatsapp) return null;
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function linkTelefone() {
  if (!empresa.telefone) return null;
  return `tel:+${empresa.telefone}`;
}

/** Formata "5541999999999" → "(41) 99999-9999". */
export function telefoneFormatado(digitos: string | null) {
  if (!digitos) return null;
  const d = digitos.replace(/^55/, "");
  if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return digitos;
}

export function listaCidades() {
  const c = empresa.cidadesAtendidas;
  return c.length > 1 ? `${c.slice(0, -1).join(", ")} e ${c[c.length - 1]}` : c[0];
}
