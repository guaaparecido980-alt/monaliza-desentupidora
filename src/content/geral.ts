import type { Pergunta, Passo } from "./servicos";

/** Perguntas gerais (home e contato). Respostas sem números não confirmados. */
export const faqGeral: Pergunta[] = [
  {
    pergunta: "Vocês atendem de madrugada, fim de semana e feriado?",
    resposta:
      "Sim. A Monaliza atende 24 horas, todos os dias da semana, incluindo feriados.",
  },
  {
    pergunta: "Quanto custa um desentupimento?",
    resposta:
      "O valor depende do tipo de entupimento, do local e do acesso à tubulação. Por isso o técnico avalia primeiro e passa o valor antes de começar. Você só paga pelo que aprovou.",
  },
  {
    pergunta: "O preço pode mudar no meio do serviço?",
    resposta:
      "O serviço é feito conforme o que foi combinado. Se durante o trabalho aparecer algo diferente do previsto, o técnico para, explica e só continua com a sua nova aprovação.",
  },
  {
    pergunta: "Precisa quebrar o piso?",
    resposta:
      "Na maioria dos casos, não. A desobstrução é feita por dentro do encanamento, pelos acessos que já existem. Quebra só é considerada quando não há outro caminho, e quem decide é você.",
  },
  {
    pergunta: "Atendem condomínios e empresas?",
    resposta:
      "Sim. Casas, apartamentos, condomínios, restaurantes, comércios e indústrias. Para empresas, o horário pode ser combinado para não interromper o funcionamento.",
  },
  {
    pergunta: "Quais cidades vocês atendem?",
    resposta:
      "Curitiba, São José dos Pinhais, Pinhais, Colombo, Araucária, Almirante Tamandaré, Fazenda Rio Grande e Campo Largo.",
  },
];

/** Como funciona o atendimento (sequência real, por isso numerada). */
export const etapasAtendimento: Passo[] = [
  {
    titulo: "Você chama",
    texto: "Conte o que está acontecendo. Se puder, mande uma foto ou vídeo: ajuda o técnico a chegar preparado.",
  },
  {
    titulo: "O técnico avalia",
    texto: "No local, ele localiza o problema e explica o que encontrou, em linguagem clara.",
  },
  {
    titulo: "Você aprova o valor",
    texto: "O valor é passado antes. O serviço só começa com o seu de acordo.",
  },
  {
    titulo: "Serviço feito e testado",
    texto: "Desobstrução, teste com água corrente e local limpo antes de a equipe ir embora.",
  },
];
