import { AnimaCorte } from "./AnimaCorte";

/**
 * Corte de solo do hero (HTML do servidor). A animação fica em <AnimaCorte>, um
 * componente de navegador minúsculo que só encontra este SVG pelo id e o anima.
 */
export function CorteHero({ className = "" }: { className?: string }) {
  return (
    <>
    <svg
      id="corte-hero"
      viewBox="0 0 640 300"
      className={`ilustra corte-hero text-nevoa [--fundo-ilustra:var(--color-abismo)] [--traco:var(--color-nevoa)] ${className}`}
      role="img"
      aria-label="Desenho técnico em corte: banheiro, ramal de esgoto sob o piso com uma obstrução sendo removida por um jato de água, e a rede pública ao fundo"
    >
      {/* Superfície: piso e parede */}
      <path data-linha className="t" d="M0 150 H640" />
      <path data-linha className="t" d="M40 150 V30 H300 V150" />
      {/* Pia */}
      <path data-linha className="t" d="M70 86 H150 M78 86 v10 h64 v-10 M128 86 v-16 h12" />
      {/* Vaso */}
      <path data-linha className="t" d="M200 72 h30 v34 M196 106 H272 c0 22 -16 32 -34 34 v10 H218 v-10 C204 136 196 122 196 106 Z" />
      {/* Ralo */}
      <path data-linha className="t" d="M168 150 v-4 h20 v4" />

      {/* Solo — hachura */}
      <g className="t2">
        {Array.from({ length: 22 }).map((_, i) => (
          <path key={i} d={`M${i * 30} ${170 + (i % 3) * 6} l14 -10`} />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <path key={`b${i}`} d={`M${15 + i * 36} ${268 + (i % 2) * 12} l12 -9`} />
        ))}
      </g>

      {/* Tubulação (linha dupla) */}
      <g data-linha-grupo>
        <path data-linha d="M110 96 V200 Q110 214 124 214 H232" fill="none" stroke="var(--traco)" strokeWidth="14" />
        <path data-linha d="M228 150 V214" fill="none" stroke="var(--traco)" strokeWidth="16" />
        <path data-linha d="M178 150 V214" fill="none" stroke="var(--traco)" strokeWidth="12" />
        <path data-linha d="M110 214 H400 L470 222 H600" fill="none" stroke="var(--traco)" strokeWidth="18" />
      </g>
      <g>
        <path d="M110 96 V200 Q110 214 124 214 H232" fill="none" stroke="var(--fundo-ilustra)" strokeWidth="10.5" />
        <path d="M228 150 V214" fill="none" stroke="var(--fundo-ilustra)" strokeWidth="12.5" />
        <path d="M178 150 V214" fill="none" stroke="var(--fundo-ilustra)" strokeWidth="8.5" />
        <path d="M110 214 H400 L470 222 H600" fill="none" stroke="var(--fundo-ilustra)" strokeWidth="14.5" />
      </g>

      {/* Caixa de inspeção */}
      <path data-linha className="t" d="M400 150 V238 H470 V150" />
      <path data-linha className="t" d="M392 150 h86" strokeWidth="3" />

      {/* Rede pública */}
      <circle data-linha className="t" cx="600" cy="222" r="34" />
      <circle data-linha className="t" cx="600" cy="222" r="26" />

      {/* Obstrução */}
      <g data-obstrucao>
        <path d="M318 206 c8 -4 18 -2 22 4 c4 6 2 12 -4 14 c-8 2 -16 0 -20 -6 c-2 -4 -1 -9 2 -12 Z" fill="var(--color-sinal)" />
        <path d="M322 212 l14 6 M326 220 l8 -10" stroke="var(--color-abismo)" strokeWidth="1.5" />
      </g>

      {/* Pulso de água e fluxo */}
      <path data-pulso d="M110 120 V200 Q110 214 124 214 H400 L470 222 H566" fill="none" stroke="var(--color-agua)" strokeWidth="6" strokeLinecap="round" opacity="0" />
      <path
        data-fluxo-hero
        d="M124 214 H400 L470 222 H566"
        fill="none"
        stroke="var(--color-agua)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="18 30"
      />

      {/* Cotas */}
      <g data-cota-hero>
        <path className="t2" d="M60 150 V236 M60 214 H96" />
        <text className="cota" x="8" y="252">RAMAL Ø 100 MM</text>
      </g>
      <g data-cota-hero>
        <path className="t2" d="M329 200 V122 H372" />
        <text className="cota" x="378" y="118">OBSTRUÇÃO</text>
        <text className="cota" x="378" y="130">GORDURA + RESÍDUOS</text>
      </g>
      <g data-cota-hero>
        <text className="cota" x="398" y="256">CX. INSPEÇÃO</text>
      </g>
      <g data-cota-hero>
        <text className="cota" x="636" y="276" textAnchor="end">REDE PÚBLICA</text>
      </g>
      <g data-cota-hero>
        <text className="cota" x="132" y="244">i = 2% →</text>
      </g>
      <g data-cota-hero>
        <text className="cota" x="0" y="20" fill="var(--color-agua)">PRANCHA 00 · CORTE A-A</text>
      </g>
      <g data-ok opacity="0">
        <circle cx="252" cy="240" r="4" className="sinal" />
        <text className="cota" x="262" y="244" fill="var(--color-agua)" style={{ opacity: 1 }}>FLUXO LIBERADO</text>
      </g>
    </svg>
      <AnimaCorte alvo="corte-hero" />
    </>
  );
}
