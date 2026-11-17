import type { IlustracaoChave } from "@/content/servicos";

/**
 * Pranchas técnicas de cada serviço (desenho autoral, SVG).
 * Canos em linha dupla: traço grosso na cor do traço + traço fino na cor do fundo por cima.
 * Defina --fundo-ilustra no elemento pai para o "miolo" do cano.
 */
type P = { className?: string };

function Cano({ d, w = 16 }: { d: string; w?: number }) {
  return (
    <g data-desenha>
      <path d={d} fill="none" stroke="var(--traco, currentColor)" strokeWidth={w} strokeLinejoin="round" />
      <path d={d} fill="none" stroke="var(--fundo-ilustra, #fff)" strokeWidth={w - 3.2} strokeLinejoin="round" />
    </g>
  );
}

function Svg({ children, className, rotulo }: { children: React.ReactNode; className?: string; rotulo: string }) {
  return (
    <svg viewBox="0 0 240 180" className={`ilustra ${className ?? ""}`} role="img" aria-label={rotulo} data-anima>
      {children}
    </svg>
  );
}

function Esgoto({ className }: P) {
  return (
    <Svg className={className} rotulo="Corte de rede de esgoto com caixa de inspeção">
      <path className="t2" d="M8 62 H232" />
      <text className="cota" x="10" y="56">NÍVEL DO PISO</text>
      <path className="t" d="M150 62 v40 h44 v-40" />
      <text className="cota" x="152" y="54">CX. INSPEÇÃO</text>
      <Cano d="M10 128 L150 118 M194 112 L232 109" />
      <path className="t" d="M40 140 l-6 10 M80 138 l-6 10 M120 134 l-6 10" />
      <path className="agua" d="M18 127 L64 124" data-fluxo />
      <path className="agua" d="M96 121 L140 119" data-fluxo />
      <text className="cota" x="12" y="164">Ø 100 MM · i = 2%</text>
      <path className="t" d="M200 150 h28 m-5 -4 l5 4 -5 4" />
    </Svg>
  );
}

function Pia({ className }: P) {
  return (
    <Svg className={className} rotulo="Pia com sifão e acúmulo de gordura no ramal">
      <path className="t" d="M30 46 H170 M42 46 v12 h104 v-12" />
      <path className="t" d="M150 46 v-22 h14" />
      <path className="t" d="M30 46 V160 M170 46 V160" />
      <Cano d="M94 58 V92 a14 14 0 0 0 28 0 v-6 a8 8 0 0 1 8 -8 H226" w={12} />
      <path className="t2" d="M178 72 V86" />
      <rect x="182" y="73" width="30" height="5" fill="var(--color-sinal)" opacity=".9" data-acumulo />
      <text className="cota" x="176" y="100">GORDURA</text>
      <text className="cota" x="70" y="128">SIFÃO</text>
      <path className="t2" d="M90 120 L104 104" />
    </Svg>
  );
}

function Vaso({ className }: P) {
  return (
    <Svg className={className} rotulo="Vaso sanitário em corte com sifão e ramal de esgoto">
      <path className="t" d="M50 40 h40 v44" />
      <path className="t" d="M44 84 H150 c0 30 -22 44 -46 46 v12 H70 v-12 C54 124 44 104 44 84 Z" />
      <path className="t2" d="M60 92 c6 22 26 30 46 28" />
      <Cano d="M88 150 V158 H230" w={14} />
      <path className="t2" d="M8 166 H232" />
      <path className="agua" d="M96 158 H220" data-fluxo />
      <text className="cota" x="160" y="146">RAMAL Ø 100</text>
      <circle className="sinal" cx="132" cy="158" r="3.5" data-acumulo />
    </Svg>
  );
}

function Ralo({ className }: P) {
  return (
    <Svg className={className} rotulo="Ralo do box com caixa sifonada em corte">
      <path className="t" d="M8 60 H96 M144 60 H232" />
      <path className="t" d="M96 60 h48" strokeDasharray="4 3" />
      <text className="cota" x="100" y="52">GRELHA</text>
      <path className="t" d="M96 64 v54 h48 v-54" />
      <path className="t2" d="M96 96 h48" />
      <path className="t" d="M112 64 v34 M128 64 v34" />
      <text className="cota" x="150" y="96">CX. SIFONADA</text>
      <Cano d="M144 108 H232" w={12} />
      <path className="t" d="M104 106 q8 -6 16 0 t16 0" />
      <path className="t" d="M20 44 q4 -10 8 0 M40 38 q4 -10 8 0" />
      <path className="agua" d="M150 108 H226" data-fluxo />
    </Svg>
  );
}

function Gordura({ className }: P) {
  return (
    <Svg className={className} rotulo="Caixa de gordura em corte com camadas de gordura e sedimento">
      <path className="t" d="M60 40 h120" strokeDasharray="6 3" />
      <path className="t" d="M60 40 V150 H180 V40" />
      <Cano d="M8 70 H82 V104" w={12} />
      <Cano d="M232 76 H158 V112" w={12} />
      <rect x="62" y="66" width="116" height="14" fill="var(--color-sinal)" opacity=".85" data-acumulo />
      <path className="t2" d="M62 100 H178" />
      <path className="t" d="M64 140 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0" />
      <text className="cota" x="186" y="64">GORDURA</text>
      <text className="cota" x="186" y="140">LODO</text>
      <text className="cota" x="12" y="60">ENTRADA</text>
      <text className="cota" x="190" y="100">SAÍDA</text>
    </Svg>
  );
}

function Hidrojato({ className }: P) {
  return (
    <Svg className={className} rotulo="Bico de hidrojateamento limpando a parede interna do cano">
      <path className="t" d="M8 58 H232 M8 122 H232" />
      <path className="t" d="M8 64 H120 M8 116 H120" strokeWidth="5" opacity=".35" />
      <path className="t" d="M150 90 H232" />
      <path className="t" d="M132 82 h18 v16 h-18 l-8 -8 Z" />
      <g data-jato>
        <path className="agua" d="M132 84 L104 64" />
        <path className="agua" d="M132 96 L104 116" />
        <path className="agua" d="M128 88 L98 76" />
        <path className="agua" d="M128 92 L98 104" />
      </g>
      <text className="cota" x="10" y="48">CROSTA REMOVIDA ←</text>
      <text className="cota" x="96" y="140">BICO DE ALTA PRESSÃO</text>
      <path className="t" d="M200 104 h24 m-5 -4 l5 4 -5 4" />
    </Svg>
  );
}

function Vazamento({ className }: P) {
  return (
    <Svg className={className} rotulo="Parede em corte com vazamento oculto e pontos de investigação">
      <path className="t" d="M70 10 V170 M110 10 V170" />
      <path className="t2" d="M74 20 l32 18 M74 60 l32 18 M74 100 l32 18 M74 140 l32 18" />
      <Cano d="M90 10 V170" w={12} />
      <path d="M96 92 c6 4 8 10 4 14 c-4 4 -10 0 -8 -6 Z" fill="var(--color-agua)" data-gota />
      <circle className="t2" cx="90" cy="96" r="22" data-onda />
      <circle className="t2" cx="90" cy="96" r="38" data-onda />
      <circle className="sinal" cx="90" cy="96" r="3.5" />
      <text className="cota" x="134" y="92">PONTO</text>
      <text className="cota" x="134" y="104">LOCALIZADO</text>
      <path className="t" d="M130 98 H116" />
      <text className="cota" x="134" y="40">ABERTURA SÓ</text>
      <text className="cota" x="134" y="52">NO TRECHO</text>
    </Svg>
  );
}

function Encanador({ className }: P) {
  return (
    <Svg className={className} rotulo="Torneira e registro com conexões hidráulicas">
      <Cano d="M8 120 H100 V60 H150" w={12} />
      <path className="t" d="M150 52 h14 v16 h-14 Z" />
      <path className="t" d="M164 56 h30 q12 0 12 12 v14" />
      <path className="t" d="M150 44 h14 M157 44 v8" />
      <circle className="t" cx="60" cy="120" r="12" />
      <path className="t" d="M60 108 v-14 M50 94 h20" />
      <path className="agua" d="M206 90 v18" data-gota-linha />
      <text className="cota" x="40" y="150">REGISTRO</text>
      <text className="cota" x="168" y="130">TORNEIRA</text>
    </Svg>
  );
}

const mapa: Record<IlustracaoChave, (p: P) => React.ReactElement> = {
  esgoto: Esgoto,
  pia: Pia,
  vaso: Vaso,
  ralo: Ralo,
  gordura: Gordura,
  hidrojato: Hidrojato,
  vazamento: Vazamento,
  encanador: Encanador,
};

export function IlustracaoServico({ chave, className }: { chave: IlustracaoChave; className?: string }) {
  const C = mapa[chave];
  return <C className={className} />;
}
