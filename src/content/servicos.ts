/**
 * Conteúdo dos serviços. Cada página individual é gerada a partir daqui.
 * Regras: texto 100% original (não copiar da Máxima), nenhum número não confirmado
 * (prazo, preço, tempo de chegada), nenhum equipamento não confirmado.
 */

export type Passo = { titulo: string; texto: string };
export type Pergunta = { pergunta: string; resposta: string };

export type Servico = {
  slug: string;
  nome: string;
  /** Nome curto para menus e listas. */
  nomeCurto: string;
  /** <title> — único por página. */
  tituloSeo: string;
  /** meta description — única por página (até ~155 caracteres). */
  descricaoSeo: string;
  h1: string;
  /** Uma linha: o problema que resolve (índice de serviços). */
  problema: string;
  /** Duas ou três frases para o catálogo /servicos. */
  resumo: string;
  intro: string[];
  /** Situações em que o serviço resolve. */
  resolve: string[];
  /** Sinais de que é hora de chamar. */
  sinais: string[];
  procedimento: Passo[];
  /** Dica de prevenção, para o cliente evitar repetir o problema. */
  prevencao: { titulo: string; itens: string[] };
  publico: string;
  faq: Pergunta[];
  relacionados: string[];
  mensagemWhatsApp: string;
  ilustracao: IlustracaoChave;
  palavraChave: string;
};

export type IlustracaoChave =
  | "esgoto"
  | "pia"
  | "vaso"
  | "ralo"
  | "gordura"
  | "hidrojato"
  | "vazamento"
  | "encanador";

const msg = (servico: string) =>
  `Olá! Vim pelo site da Monaliza e preciso de ${servico}. Pode me passar um orçamento?`;

export const servicos: Servico[] = [
  {
    slug: "desentupimento-de-esgoto",
    nome: "Desentupimento de esgoto",
    nomeCurto: "Esgoto",
    tituloSeo: "Desentupimento de esgoto em Curitiba, 24 horas",
    descricaoSeo:
      "Esgoto voltando, caixa transbordando ou rede parada? A Monaliza desobstrui a rede de esgoto em Curitiba e região, a qualquer hora, com valor combinado antes.",
    h1: "Desentupimento de esgoto em Curitiba",
    problema: "Esgoto voltando pelo ralo, caixa de inspeção cheia, rede parada.",
    resumo:
      "Quando o problema já não é um ponto só, e sim a rede que leva tudo para a rua. Localizamos onde está a obstrução e liberamos o caminho do esgoto.",
    intro: [
      "Entupimento de esgoto raramente avisa com hora marcada. Começa com um ralo que demora a esvaziar, passa por um cheiro que não sai do banheiro e, de repente, a água suja está voltando por onde deveria descer. Nesse ponto, o problema não está mais na pia ou no vaso: está na tubulação que recolhe tudo e leva até a rede pública.",
      "O trabalho da Monaliza é descobrir em que trecho o fluxo parou, por que parou e liberar a passagem sem transformar o seu quintal em obra. Atendemos casas, prédios e comércios em Curitiba e região metropolitana, inclusive de madrugada, fim de semana e feriado.",
    ],
    resolve: [
      "Retorno de esgoto em ralos, box e vasos do térreo",
      "Caixa de inspeção ou de passagem transbordando",
      "Rede obstruída por gordura, resíduos, panos, absorventes ou fios de cabelo acumulados",
      "Tubulação parcialmente tomada por raízes em quintais com árvores",
      "Coluna de esgoto de prédio afetando várias unidades",
    ],
    sinais: [
      "Mais de um ponto da casa escoando devagar ao mesmo tempo",
      "Barulho de borbulha no vaso quando a pia ou a máquina de lavar escoa",
      "Cheiro forte de esgoto que volta mesmo depois da limpeza",
      "Água subindo no ralo do térreo quando alguém usa o banheiro de cima",
      "Tampa da caixa de inspeção úmida ou com marca de transbordo",
    ],
    procedimento: [
      {
        titulo: "Diagnóstico pelo caminho da água",
        texto:
          "O técnico abre as caixas de inspeção e testa os pontos de escoamento para saber até onde o esgoto corre e onde ele para. Isso define se o bloqueio está dentro do imóvel ou no trecho que vai para a rua.",
      },
      {
        titulo: "Valor antes de qualquer ferramenta",
        texto:
          "Com o ponto localizado, você recebe a explicação do que foi encontrado e o valor do serviço. Nada começa sem a sua aprovação.",
      },
      {
        titulo: "Desobstrução pelo próprio cano",
        texto:
          "A limpeza é feita por dentro da tubulação, pelas caixas e acessos que já existem. O método (mecânico ou com jato de água em alta pressão) é escolhido conforme o tipo de resíduo e o diâmetro do cano.",
      },
      {
        titulo: "Teste com água corrente",
        texto:
          "Antes de ir embora, a equipe faz a água correr por todos os pontos afetados para conferir que o fluxo voltou ao normal, e deixa as caixas fechadas e o local limpo.",
      },
    ],
    prevencao: {
      titulo: "Para o esgoto não voltar",
      itens: [
        "Vaso sanitário não é lixeira: lenço umedecido, absorvente, fio dental e cotonete entopem a rede mesmo quando 'descem'.",
        "Óleo de cozinha vai em garrafa PET para o ponto de coleta, nunca na pia.",
        "Em casas com árvores grandes perto da tubulação, uma limpeza preventiva periódica evita que as raízes fechem o cano.",
      ],
    },
    publico: "Residências, condomínios, comércios e indústrias.",
    faq: [
      {
        pergunta: "O esgoto está voltando dentro de casa. É emergência?",
        resposta:
          "É. Esgoto exposto traz risco à saúde e pode danificar piso e móveis. Evite usar água no imóvel (descarga, chuveiro, máquina) até a desobstrução e chame a Monaliza: o atendimento funciona 24 horas, todos os dias.",
      },
      {
        pergunta: "Vai precisar quebrar o quintal?",
        resposta:
          "Na maioria dos casos, não. A desobstrução é feita por dentro do cano, pelas caixas de inspeção. Quebra só é discutida quando o cano está rompido ou sem acesso, e a decisão é sua, com o valor apresentado antes.",
      },
      {
        pergunta: "Moro em prédio. O problema é meu ou do condomínio?",
        resposta:
          "Depende de onde está a obstrução. Se o ramal do seu apartamento estiver entupido, é da unidade; se for a coluna ou a rede coletiva, é do condomínio. O diagnóstico mostra isso e você pode repassar ao síndico.",
      },
    ],
    relacionados: ["hidrojateamento", "limpeza-de-caixa-de-gordura", "desentupimento-de-vaso-sanitario"],
    mensagemWhatsApp: msg("desentupimento de esgoto"),
    ilustracao: "esgoto",
    palavraChave: "desentupimento de esgoto Curitiba",
  },
  {
    slug: "desentupimento-de-pia",
    nome: "Desentupimento de pia",
    nomeCurto: "Pia",
    tituloSeo: "Desentupir pia de cozinha e banheiro em Curitiba",
    descricaoSeo:
      "Pia demorando para escoar ou com água parada? Desentupimos pia de cozinha e de banheiro em Curitiba e região, sem desmontar o que não precisa. Atendimento 24h.",
    h1: "Desentupimento de pia de cozinha e banheiro",
    problema: "Pia escoando devagar, água parada na cuba, cheiro de gordura.",
    resumo:
      "Gordura que endurece no sifão e no ramal da cozinha, cabelo e creme dental no banheiro. Removemos o acúmulo e explicamos de onde ele veio.",
    intro: [
      "Pia entupida é o tipo de problema que parece pequeno até a louça do jantar não ter para onde ir. Na cozinha, quase sempre é gordura: ela desce quente e líquida, esfria dentro do cano e vai formando uma camada que segura resto de comida, borra de café e detergente. No banheiro, o vilão costuma ser cabelo misturado a sabonete e pasta de dente.",
      "Produto químico vendido em mercado às vezes abre um furo nesse bloqueio, mas não remove a camada que está grudada na parede do cano, e alguns deles atacam tubos e conexões. A Monaliza remove o acúmulo de verdade, do sifão até o ramal, para a pia voltar a escoar como deve.",
    ],
    resolve: [
      "Pia de cozinha com água parada ou escoando muito devagar",
      "Cuba de banheiro com cheiro ruim e escoamento lento",
      "Tanque de lavanderia entupido por fiapos e sabão",
      "Bancadas de restaurantes, lanchonetes e cozinhas industriais",
    ],
    sinais: [
      "A água leva minutos para sumir da cuba",
      "Barulho de 'gargarejo' no ralo depois que a água desce",
      "Cheiro de gordura rançosa vindo do sifão",
      "A pia entope de novo poucos dias depois de você ter desentupido",
    ],
    procedimento: [
      {
        titulo: "Onde está o bloqueio",
        texto:
          "Primeiro o técnico verifica se o problema está no sifão, no trecho dentro da parede ou mais adiante, na caixa de gordura. Cada um pede uma solução diferente.",
      },
      {
        titulo: "Você aprova o valor",
        texto: "Com o ponto identificado, você recebe o valor antes de qualquer desmontagem.",
      },
      {
        titulo: "Remoção do acúmulo",
        texto:
          "O sifão é limpo e o ramal é desobstruído por dentro, retirando a gordura e os resíduos presos na parede do cano, e não só abrindo um furo no meio.",
      },
      {
        titulo: "Remontagem e teste",
        texto:
          "As peças voltam ao lugar com vedação conferida e a pia é testada com bastante água. Se a origem for a caixa de gordura, você fica sabendo na hora.",
      },
    ],
    prevencao: {
      titulo: "Para a pia continuar livre",
      itens: [
        "Raspe pratos e panelas no lixo antes de lavar.",
        "Use uma peneira de ralo na cozinha e outra no banheiro.",
        "Gordura de fritura nunca vai na pia, nem com água quente: ela só desce para endurecer mais adiante.",
      ],
    },
    publico: "Residências, apartamentos, restaurantes e cozinhas comerciais.",
    faq: [
      {
        pergunta: "Posso usar soda cáustica antes de chamar?",
        resposta:
          "Não recomendamos. Ela pode reagir com a água, espirrar e causar queimaduras, e danifica alguns tipos de tubulação. Se o problema continuar, o técnico ainda terá que trabalhar com um produto agressivo dentro do cano.",
      },
      {
        pergunta: "A pia da cozinha entope toda hora. Por quê?",
        resposta:
          "Normalmente porque a camada de gordura no ramal nunca foi removida, só perfurada. Outra causa comum é a caixa de gordura cheia. O técnico verifica os dois.",
      },
      {
        pergunta: "Vocês atendem restaurante fora do horário de funcionamento?",
        resposta:
          "Sim. O atendimento é 24 horas, então dá para agendar depois que a cozinha fecha e não atrapalhar o serviço.",
      },
    ],
    relacionados: ["limpeza-de-caixa-de-gordura", "desentupimento-de-ralo", "encanador"],
    mensagemWhatsApp: msg("desentupir uma pia"),
    ilustracao: "pia",
    palavraChave: "desentupir pia Curitiba",
  },
  {
    slug: "desentupimento-de-vaso-sanitario",
    nome: "Desentupimento de vaso sanitário",
    nomeCurto: "Vaso sanitário",
    tituloSeo: "Desentupir vaso sanitário em Curitiba, a qualquer hora",
    descricaoSeo:
      "Vaso sanitário entupido ou transbordando? Atendimento 24 horas em Curitiba e região, sem retirar o vaso sempre que possível e com valor combinado antes.",
    h1: "Desentupimento de vaso sanitário",
    problema: "Vaso que não dá descarga, água subindo, transbordo.",
    resumo:
      "O entupimento mais urgente da casa. Liberamos o vaso e o trecho até a rede, sem retirar a louça sempre que for possível.",
    intro: [
      "Quando o vaso entope, a casa inteira sente: o banheiro fica interditado e cada descarga é uma aposta. Em boa parte das vezes, a causa é algo que nunca deveria ter descido: lenço umedecido (que não se desfaz como papel), absorvente, fralda, fio dental, brinquedo de criança. Em outras, o vaso é só o lugar onde aparece um entupimento que está mais adiante, no ramal ou na rede de esgoto.",
      "A Monaliza atende a qualquer hora em Curitiba e região. O técnico identifica se o bloqueio está na louça, no ramal ou na rede, resolve pelo caminho menos invasivo e deixa o banheiro em condição de uso.",
    ],
    resolve: [
      "Vaso entupido que não aceita descarga",
      "Água subindo até a borda ou transbordando",
      "Descarga fraca e lenta mesmo com a caixa acoplada funcionando",
      "Objetos que caíram no vaso",
      "Vaso de térreo que transborda quando outro banheiro é usado",
    ],
    sinais: [
      "O nível da água fica mais alto do que o normal depois da descarga",
      "A água desce em 'soluços', com bolhas",
      "Cheiro de esgoto que sai do pé do vaso",
      "O desentupidor de borracha resolve por um dia e o problema volta",
    ],
    procedimento: [
      {
        titulo: "Não dê mais descarga",
        texto:
          "Enquanto a equipe vai até você, feche o registro da caixa acoplada ou da válvula se a água estiver subindo. Cada descarga a mais aumenta o risco de transbordo.",
      },
      {
        titulo: "Avaliação e valor",
        texto:
          "O técnico identifica onde está a obstrução (na louça, no ramal ou na rede) e passa o valor antes de começar.",
      },
      {
        titulo: "Desobstrução sem tirar o vaso",
        texto:
          "Sempre que possível, o vaso é desentupido no lugar. A retirada da louça só acontece quando há objeto preso que não sai de outra forma, e isso é combinado com você.",
      },
      {
        titulo: "Descargas de teste",
        texto: "Várias descargas seguidas para confirmar o escoamento, vedação conferida e banheiro limpo.",
      },
    ],
    prevencao: {
      titulo: "Para não entupir de novo",
      itens: [
        "Deixe um lixinho com tampa ao lado do vaso: lenço umedecido e absorvente vão nele.",
        "Se há crianças em casa, mantenha a tampa abaixada.",
        "Descarga fraca constante merece avaliação antes de virar entupimento.",
      ],
    },
    publico: "Residências, comércios, escritórios e condomínios.",
    faq: [
      {
        pergunta: "Lenço umedecido que diz 'pode descartar no vaso' entope?",
        resposta:
          "Pode entupir, sim. Muitos desses lenços demoram muito mais para se desfazer do que o papel higiênico e se acumulam em curvas e caixas. O mais seguro é jogar no lixo.",
      },
      {
        pergunta: "Vai precisar tirar o vaso do lugar?",
        resposta:
          "Na maioria dos atendimentos, não. A retirada só é feita quando há um objeto preso dentro da louça, e você é avisado antes.",
      },
      {
        pergunta: "Tenho só um banheiro e entupiu de madrugada. Vocês vão?",
        resposta: "Vamos. O atendimento da Monaliza funciona 24 horas, todos os dias, inclusive feriados.",
      },
    ],
    relacionados: ["desentupimento-de-esgoto", "desentupimento-de-ralo", "encanador"],
    mensagemWhatsApp: msg("desentupir um vaso sanitário"),
    ilustracao: "vaso",
    palavraChave: "desentupir vaso sanitário Curitiba",
  },
  {
    slug: "desentupimento-de-ralo",
    nome: "Desentupimento de ralo",
    nomeCurto: "Ralo",
    tituloSeo: "Desentupir ralo de box, área e quintal em Curitiba",
    descricaoSeo:
      "Ralo do box com água parada, ralo da área com cheiro ou quintal alagando? Desentupimos ralos em Curitiba e região, 24h, com valor combinado antes.",
    h1: "Desentupimento de ralo",
    problema: "Box com água acumulada, ralo com mau cheiro, área alagando.",
    resumo:
      "Do ralo do box ao ralo do quintal. Tiramos o acúmulo de cabelo e sabão, ou a terra e as folhas, e devolvemos o escoamento.",
    intro: [
      "Ralo entupido tem dois comportamentos clássicos. No banheiro, a água do chuveiro começa a formar uma poça no box, e o cheiro de esgoto aparece quando o ralo seca. Em áreas externas, a água da chuva não desce, o quintal empoça e a garagem vira lago no primeiro temporal.",
      "No box, a causa quase sempre é cabelo preso em sabão e condicionador, formando uma trama dentro da caixa sifonada. Na área externa, terra, folhas e areia descem com a chuva e assentam no fundo da tubulação. A Monaliza limpa o ralo e o trecho de cano que vem depois dele, que é onde o problema costuma morar.",
    ],
    resolve: [
      "Ralo do box com água acumulada durante o banho",
      "Caixa sifonada com mau cheiro",
      "Ralos de lavanderia e área de serviço",
      "Ralos de quintal, garagem e sacada que não escoam a chuva",
      "Grelhas e canaletas de áreas comuns de condomínios",
    ],
    sinais: [
      "Poça no box que demora para sumir depois do banho",
      "Cheiro de esgoto vindo do ralo, principalmente em dias quentes",
      "Insetos saindo pelo ralo",
      "Água da chuva voltando pelo ralo da garagem",
    ],
    procedimento: [
      {
        titulo: "Abertura e inspeção",
        texto:
          "O técnico abre a grelha e a caixa sifonada para ver se o acúmulo está ali ou no cano que liga o ralo à rede.",
      },
      {
        titulo: "Valor combinado",
        texto: "Você recebe o valor do serviço antes de começar.",
      },
      {
        titulo: "Limpeza da caixa e do ramal",
        texto:
          "A caixa sifonada é limpa e o ramal é desobstruído por dentro. Em ralos externos, a terra e a areia acumuladas no fundo do cano são removidas.",
      },
      {
        titulo: "Teste e fechamento",
        texto:
          "Água corrente para conferir o escoamento e o fecho hídrico (a 'água que fica' no sifão e bloqueia o cheiro). Grelha recolocada no lugar.",
      },
    ],
    prevencao: {
      titulo: "Para o ralo durar livre",
      itens: [
        "Use um protetor de ralo no box e limpe o cabelo preso nele toda semana.",
        "Ralos que ficam muito tempo sem uso secam e liberam cheiro: jogue um pouco de água neles de vez em quando.",
        "Varra a área externa antes da chuva para a terra não descer pelo ralo.",
      ],
    },
    publico: "Residências, apartamentos, condomínios e comércios.",
    faq: [
      {
        pergunta: "O ralo não está entupido, mas cheira mal. Vocês resolvem?",
        resposta:
          "Muitas vezes o cheiro vem de uma caixa sifonada suja ou sem água no fecho hídrico. A limpeza da caixa costuma resolver; se o cheiro vier da rede, o técnico explica o que encontrou.",
      },
      {
        pergunta: "A garagem alaga quando chove. Pode ser o ralo?",
        resposta:
          "Pode. Terra e folhas acumuladas reduzem muito a vazão do ralo e da tubulação. A limpeza costuma devolver a capacidade de escoamento.",
      },
      {
        pergunta: "Precisa quebrar o piso do box?",
        resposta:
          "Normalmente não. O acesso é feito pela própria grelha e pela caixa sifonada.",
      },
    ],
    relacionados: ["desentupimento-de-pia", "desentupimento-de-esgoto", "hidrojateamento"],
    mensagemWhatsApp: msg("desentupir um ralo"),
    ilustracao: "ralo",
    palavraChave: "desentupir ralo Curitiba",
  },
  {
    slug: "limpeza-de-caixa-de-gordura",
    nome: "Limpeza de caixa de gordura",
    nomeCurto: "Caixa de gordura",
    tituloSeo: "Limpeza de caixa de gordura em Curitiba e região",
    descricaoSeo:
      "Caixa de gordura cheia, com cheiro ou transbordando? Limpeza para casas, condomínios e restaurantes em Curitiba e região, 24h, sem parar sua cozinha.",
    h1: "Limpeza de caixa de gordura",
    problema: "Caixa cheia, cheiro forte no quintal, pia da cozinha voltando.",
    resumo:
      "A caixa de gordura existe para segurar o que entope a rede. Quando enche, ela para de funcionar. Esvaziamos, limpamos e deixamos pronta para trabalhar.",
    intro: [
      "A caixa de gordura fica entre a pia da cozinha e o esgoto e tem uma função simples: dar tempo para a gordura esfriar e boiar, para que só a água siga em frente. Com o uso, a camada de gordura e o lodo do fundo vão crescendo até ocupar a caixa toda. A partir daí, a gordura passa direto para a rede, a pia começa a escoar devagar e o cheiro aparece no quintal ou na área de serviço.",
      "Em restaurantes, lanchonetes e padarias, a caixa enche muito mais rápido e precisa de limpeza com frequência. Em condomínios, uma caixa coletiva cheia afeta vários apartamentos ao mesmo tempo. A Monaliza faz a limpeza completa e informa o estado da caixa para você planejar a próxima.",
    ],
    resolve: [
      "Caixa de gordura cheia ou transbordando",
      "Cheiro forte de gordura e esgoto na área externa",
      "Pia da cozinha lenta por causa da caixa saturada",
      "Limpeza periódica de caixas de restaurantes e cozinhas industriais",
      "Caixas coletivas de condomínios",
    ],
    sinais: [
      "Camada grossa e dura de gordura visível ao abrir a tampa",
      "Cheiro rançoso perto da caixa, mesmo com a tampa fechada",
      "Pia da cozinha escoando devagar sem nada preso no sifão",
      "Gordura escorrendo pela tampa ou pelas bordas",
    ],
    procedimento: [
      {
        titulo: "Abertura e avaliação",
        texto:
          "O técnico abre a caixa, avalia o volume de resíduo e o estado da estrutura (tampa, paredes, entrada e saída).",
      },
      {
        titulo: "Valor antes",
        texto: "Você recebe o valor da limpeza antes do início.",
      },
      {
        titulo: "Remoção e limpeza",
        texto:
          "A gordura e o lodo são retirados e a caixa é limpa. As entradas e a saída são desobstruídas para a água voltar a passar.",
      },
      {
        titulo: "Fechamento e orientação",
        texto:
          "Caixa fechada, área limpa e uma orientação sobre a frequência de limpeza adequada para o seu uso.",
      },
    ],
    prevencao: {
      titulo: "Para a caixa encher menos",
      itens: [
        "Retire o excesso de gordura das panelas com papel-toalha antes de lavar.",
        "Use peneira na pia para os restos de comida não irem para a caixa.",
        "Em cozinhas comerciais, combine uma limpeza periódica em vez de esperar transbordar.",
      ],
    },
    publico: "Restaurantes, lanchonetes, padarias, condomínios e residências.",
    faq: [
      {
        pergunta: "De quanto em quanto tempo limpar a caixa de gordura?",
        resposta:
          "Depende do volume de uso. Uma casa com pouca fritura leva bem mais tempo para encher do que um restaurante. Na primeira limpeza, o técnico avalia o acúmulo e sugere uma frequência para o seu caso.",
      },
      {
        pergunta: "Vocês fazem a limpeza fora do horário do restaurante?",
        resposta:
          "Sim. Com atendimento 24 horas, a limpeza pode ser feita depois do fechamento ou antes da abertura.",
      },
      {
        pergunta: "Minha casa não tem caixa de gordura. Precisa ter?",
        resposta:
          "Ela protege a rede de esgoto da gordura da cozinha. Se o seu imóvel não tem e a pia entope com frequência, vale conversar com o técnico sobre o caso.",
      },
    ],
    relacionados: ["desentupimento-de-pia", "hidrojateamento", "desentupimento-de-esgoto"],
    mensagemWhatsApp: msg("limpeza de caixa de gordura"),
    ilustracao: "gordura",
    palavraChave: "limpeza de caixa de gordura Curitiba",
  },
  {
    slug: "hidrojateamento",
    nome: "Hidrojateamento",
    nomeCurto: "Hidrojateamento",
    tituloSeo: "Hidrojateamento de tubulações em Curitiba",
    descricaoSeo:
      "Hidrojateamento para tirar gordura endurecida, crostas e resíduos da tubulação de casas, condomínios e empresas em Curitiba e região. Corretivo e preventivo.",
    h1: "Hidrojateamento de tubulações",
    problema: "Cano com crosta, gordura endurecida, entupimento que sempre volta.",
    resumo:
      "Jato de água em alta pressão que limpa a parede interna do cano por inteiro. Para entupimentos teimosos e para manutenção preventiva de redes.",
    intro: [
      "Alguns entupimentos voltam sempre. O cano é desentupido, funciona por algumas semanas e para de novo. Isso acontece porque a desobstrução abriu um caminho no meio do bloqueio, mas a parede interna do tubo continua coberta de gordura endurecida, crosta e sedimento, que seguram tudo o que passa.",
      "O hidrojateamento resolve esse tipo de caso. Uma mangueira com bico especial entra na tubulação e lança jatos de água em alta pressão para trás e para os lados, raspando a parede do cano enquanto avança e empurrando os resíduos para fora. O resultado é um tubo limpo em toda a volta, e não apenas desobstruído. É também a forma mais usada de manutenção preventiva em condomínios, comércios e indústrias.",
    ],
    resolve: [
      "Entupimentos recorrentes no mesmo trecho",
      "Gordura endurecida em ramais de cozinhas comerciais",
      "Crostas e sedimentos em redes de esgoto antigas",
      "Colunas e redes coletivas de condomínios",
      "Manutenção preventiva programada",
    ],
    sinais: [
      "O mesmo ponto entope várias vezes no ano",
      "Escoamento lento em vários pontos ligados à mesma rede",
      "Cheiro persistente vindo das caixas de inspeção",
      "Restaurante ou prédio sem histórico de limpeza da rede",
    ],
    procedimento: [
      {
        titulo: "Mapeamento do trecho",
        texto:
          "O técnico identifica os acessos (caixas de inspeção, bocas de limpeza) e o trecho que vai ser jateado.",
      },
      {
        titulo: "Valor e combinado",
        texto:
          "Você recebe o valor e as condições antes do início. Em condomínios e empresas, dá para combinar o horário de menor uso.",
      },
      {
        titulo: "Jateamento em alta pressão",
        texto:
          "A mangueira avança pelo cano lançando jatos que removem a crosta da parede e arrastam os resíduos até a caixa, onde são retirados.",
      },
      {
        titulo: "Conferência do fluxo",
        texto:
          "Água corrente pelo trecho para confirmar o escoamento e retirada dos resíduos arrastados. Área limpa ao final.",
      },
    ],
    prevencao: {
      titulo: "Quando pensar em hidrojateamento preventivo",
      itens: [
        "Prédios com muitas unidades ligadas à mesma coluna.",
        "Cozinhas comerciais com uso diário de fritura.",
        "Imóveis antigos com histórico de entupimentos.",
      ],
    },
    publico: "Condomínios, restaurantes, comércios, indústrias e residências.",
    faq: [
      {
        pergunta: "O hidrojateamento danifica o cano?",
        resposta:
          "Em tubulações em bom estado, não. A pressão e o bico são escolhidos conforme o material e o diâmetro do cano. Se a tubulação estiver muito deteriorada, o técnico avisa antes.",
      },
      {
        pergunta: "Qual a diferença entre desentupir e hidrojatear?",
        resposta:
          "Desentupir abre passagem no bloqueio. Hidrojatear limpa a parede interna do cano em toda a volta, o que reduz a chance de o entupimento voltar.",
      },
      {
        pergunta: "Atendem condomínio com manutenção periódica?",
        resposta:
          "Sim. A periodicidade é combinada conforme o uso do prédio, e a limpeza pode ser feita no horário de menor movimento.",
      },
    ],
    relacionados: ["desentupimento-de-esgoto", "limpeza-de-caixa-de-gordura", "desentupimento-de-pia"],
    mensagemWhatsApp: msg("hidrojateamento"),
    ilustracao: "hidrojato",
    palavraChave: "hidrojateamento Curitiba",
  },
  {
    slug: "caca-vazamento",
    nome: "Caça-vazamento",
    nomeCurto: "Caça-vazamento",
    tituloSeo: "Caça-vazamento em Curitiba: conta de água alta?",
    descricaoSeo:
      "Conta de água subiu sem explicação, mancha na parede ou piso úmido? A Monaliza localiza vazamentos escondidos em Curitiba e região, quebrando só o necessário.",
    h1: "Caça-vazamento: localização de vazamentos ocultos",
    problema: "Conta de água alta, mancha de umidade, hidrômetro girando com tudo fechado.",
    resumo:
      "Vazamento escondido dentro da parede ou debaixo do piso. Encontramos o ponto antes de abrir qualquer coisa, para a obra ser do tamanho do problema.",
    intro: [
      "Nem todo vazamento pinga onde dá para ver. Muitos estão dentro da parede, debaixo do piso ou na tubulação que vem do hidrômetro até a casa. Os sintomas aparecem aos poucos: a conta de água sobe sem mudança nos hábitos, surge uma mancha que cresce na parede, o rodapé estufa, o piso fica frio e úmido num ponto específico.",
      "Quebrar paredes 'para procurar' é caro e demorado. O caça-vazamento da Monaliza faz o caminho inverso: primeiro confirma se existe vazamento, depois isola em qual trecho ele está e só então indica onde abrir. A abertura fica do tamanho do conserto, e não do tamanho da dúvida.",
    ],
    resolve: [
      "Conta de água alta sem motivo aparente",
      "Manchas de umidade e mofo que voltam depois da pintura",
      "Piso úmido, rodapé estufado ou azulejo soltando",
      "Hidrômetro girando com todas as torneiras fechadas",
      "Infiltração em apartamento vizinho de baixo",
    ],
    sinais: [
      "O consumo na conta mudou e a rotina da casa não",
      "Barulho de água correndo com tudo fechado",
      "Mancha que cresce, mesmo em tempo seco",
      "Caixa d'água enchendo o tempo todo",
    ],
    procedimento: [
      {
        titulo: "Confirmação do vazamento",
        texto:
          "Com todos os pontos de consumo fechados, o técnico observa o hidrômetro e a caixa d'água para confirmar se há perda de água e de qual rede ela vem.",
      },
      {
        titulo: "Isolamento do trecho",
        texto:
          "Registros e trechos são testados um a um até restar o segmento onde está a perda. Os instrumentos usados variam conforme o caso.",
      },
      {
        titulo: "Indicação do ponto e valor",
        texto:
          "Você recebe a localização provável do vazamento e o valor do reparo antes de qualquer abertura.",
      },
      {
        titulo: "Reparo e teste",
        texto:
          "Com sua aprovação, a abertura é feita no ponto indicado, o trecho é consertado e a rede é testada novamente para confirmar que a perda parou.",
      },
    ],
    prevencao: {
      titulo: "Teste rápido que você pode fazer hoje",
      itens: [
        "Feche todas as torneiras e registros de consumo, sem fechar o registro geral.",
        "Anote os números do hidrômetro e espere cerca de uma hora sem usar água.",
        "Se os números mudaram, há chance de vazamento. Chame a Monaliza.",
      ],
    },
    publico: "Residências, apartamentos, condomínios e comércios.",
    faq: [
      {
        pergunta: "Vai precisar quebrar parede?",
        resposta:
          "Para consertar o cano, normalmente sim, mas só no ponto do vazamento. O objetivo da localização é justamente evitar quebrar 'no escuro'.",
      },
      {
        pergunta: "A mancha está no teto do vizinho. Vocês ajudam?",
        resposta:
          "Sim. A investigação mostra se a origem é na tubulação do seu apartamento, do vizinho ou da área comum, o que ajuda a resolver a questão com o condomínio.",
      },
      {
        pergunta: "Quanto tempo leva para achar o vazamento?",
        resposta:
          "Depende do tamanho da rede e do acesso aos registros. O técnico informa a estimativa depois da avaliação inicial.",
      },
    ],
    relacionados: ["encanador", "desentupimento-de-esgoto", "hidrojateamento"],
    mensagemWhatsApp: msg("localizar um vazamento (caça-vazamento)"),
    ilustracao: "vazamento",
    palavraChave: "caça-vazamento Curitiba",
  },
  {
    slug: "encanador",
    nome: "Encanador",
    nomeCurto: "Encanador",
    tituloSeo: "Encanador em Curitiba para reparos hidráulicos",
    descricaoSeo:
      "Torneira pingando, registro com defeito, cano rompido ou troca de sifão e válvula? Encanador da Monaliza em Curitiba e região, com atendimento 24 horas.",
    h1: "Encanador para reparos hidráulicos",
    problema: "Torneira pingando, registro travado, cano rompido, peça para trocar.",
    resumo:
      "Os consertos do dia a dia da rede de água e esgoto: torneiras, registros, sifões, válvulas, conexões e trechos de cano.",
    intro: [
      "Nem todo problema hidráulico é entupimento. Uma torneira que pinga a noite toda, um registro que não fecha direito, uma válvula de descarga disparando, um sifão rachado molhando o armário: são consertos menores, mas que desperdiçam água e, se ficarem para depois, viram infiltração.",
      "O encanador da Monaliza atende esses reparos em casas, apartamentos e comércios de Curitiba e região. Quando o atendimento começa por um entupimento e aparece uma peça danificada, o mesmo técnico pode resolver os dois na mesma visita, com o valor combinado antes.",
    ],
    resolve: [
      "Torneiras e misturadores pingando",
      "Registros travados ou que não vedam",
      "Válvula e caixa de descarga com defeito",
      "Troca de sifão, flexíveis e conexões",
      "Reparo de trechos de cano rompidos",
    ],
    sinais: [
      "Gotejamento constante em torneira ou chuveiro",
      "Descarga que fica correndo depois de acionada",
      "Armário da pia úmido ou com cheiro de mofo",
      "Registro que precisa de força para girar",
    ],
    procedimento: [
      {
        titulo: "Avaliação do defeito",
        texto: "O técnico verifica a peça ou o trecho com problema e o estado das conexões ao redor.",
      },
      {
        titulo: "Valor e peças",
        texto:
          "Você recebe o valor do serviço e a indicação das peças necessárias antes de qualquer troca.",
      },
      {
        titulo: "Reparo",
        texto: "Troca ou conserto com vedação adequada para o tipo de conexão.",
      },
      {
        titulo: "Teste de estanqueidade",
        texto: "Água aberta e conexões observadas para garantir que não há gotejamento.",
      },
    ],
    prevencao: {
      titulo: "Pequenos cuidados que evitam conserto",
      itens: [
        "Não force registros e torneiras ao fechar: o excesso de aperto desgasta a vedação.",
        "Olhe embaixo da pia de vez em quando: umidade no armário é o primeiro sinal de vazamento.",
        "Descarga correndo sem parar pode gastar muita água: trate logo.",
      ],
    },
    publico: "Residências, apartamentos, escritórios e comércios.",
    faq: [
      {
        pergunta: "Vocês trazem as peças?",
        resposta:
          "As peças necessárias são indicadas no orçamento. Combine com o técnico se elas serão fornecidas pela Monaliza ou compradas por você.",
      },
      {
        pergunta: "Atendem só emergência ou também conserto simples?",
        resposta:
          "Os dois. Um conserto simples, como trocar o reparo de uma torneira, também pode ser agendado.",
      },
      {
        pergunta: "O encanador faz instalação nova?",
        resposta:
          "Fale com a gente pelo contato descrevendo o que precisa. O técnico avalia se o serviço está dentro do que a Monaliza executa.",
      },
    ],
    relacionados: ["caca-vazamento", "desentupimento-de-pia", "desentupimento-de-vaso-sanitario"],
    mensagemWhatsApp: msg("um encanador"),
    ilustracao: "encanador",
    palavraChave: "encanador Curitiba",
  },
];

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
