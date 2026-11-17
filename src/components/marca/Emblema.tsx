/**
 * Emblema da Monaliza vetorizado a partir de marca/foto-original-logo-no-celular.jpeg.
 * Desenho em viewBox 480×480. `comTexto` adiciona MONALIZA / DESENTUPIDORA / DESDE ★ 1996
 * (o texto usa a fonte do site — Barlow Condensed — via CSS var).
 */
type Props = {
  comTexto?: boolean;
  className?: string;
  titulo?: string;
  /** Cores (padrão = cores medidas na logo). */
  marinho?: string;
  agua?: string;
  fundo?: string;
};

export const CORES_LOGO = { marinho: "#2F4F7A", agua: "#63A0C2", fundo: "#F4F5F8" };

export function Emblema({
  comTexto = false,
  className,
  titulo = "Monaliza Desentupidora",
  marinho = CORES_LOGO.marinho,
  agua = CORES_LOGO.agua,
  fundo = CORES_LOGO.fundo,
}: Props) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(titulo ? { role: "img", "aria-label": titulo } : { "aria-hidden": true })}
    >
      {titulo && <title>{titulo}</title>}
      <EmblemaDesenho marinho={marinho} agua={agua} fundo={fundo} />
      {comTexto && (
        <g style={{ fontFamily: "var(--font-display), 'Barlow Condensed', 'Arial Narrow', sans-serif" }}>
          <text x="240" y="308" textAnchor="middle" fontSize="80" fontWeight="700" fill={agua} letterSpacing="1">
            MONALIZA
          </text>
          <text x="240" y="346" textAnchor="middle" fontSize="25" fontWeight="600" fill={marinho} letterSpacing="8.5">
            DESENTUPIDORA
          </text>
          <text x="196" y="372" textAnchor="middle" fontSize="10" fontWeight="600" fill={marinho} letterSpacing="3" opacity=".85">
            DESDE
          </text>
          <path d="M240 357 l3.5 8.5 9 .6 -7 5.6 2.4 8.8 -7.9-5 -7.9 5 2.4-8.8 -7-5.6 9-.6z" fill={marinho} />
          <text x="284" y="372" textAnchor="middle" fontSize="10" fontWeight="600" fill={marinho} letterSpacing="3" opacity=".85">
            1996
          </text>
        </g>
      )}
    </svg>
  );
}

/** Só a geometria (usado também no ícone e na imagem de compartilhamento). */
export function EmblemaDesenho({ marinho, agua, fundo }: { marinho: string; agua: string; fundo: string }) {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Hexágono — linha externa fina (água), aberta onde a lavadora passa */}
      <path d="M26 226 V136 L232 22 L328 71" fill="none" stroke={agua} strokeWidth="5" />
      <path d="M414 115.5 L454 136 V226" fill="none" stroke={agua} strokeWidth="5" />
      <path d="M34 372 V386 L240 474 L446 386 V372" fill="none" stroke={agua} strokeWidth="5" />
      {/* Hexágono — linha interna grossa (marinho) */}
      <path d="M44 222 V146 L232 42 L296 74.6" fill="none" stroke={marinho} strokeWidth="15" />
      <path d="M404 129.7 L436 146 V222" fill="none" stroke={marinho} strokeWidth="15" />
      <path d="M52 368 V380 L240 456 L428 380 V368" fill="none" stroke={marinho} strokeWidth="15" />

      {/* Alvenaria esquerda (degraus descendo para o centro) */}
      <g fill={marinho}>
        {[
          [62, 174, 52],
          [62, 186, 96],
          [62, 198, 140],
          [62, 210, 178],
        ].map(([x, y, w], i) => (
          <Fileira key={`e${i}`} x={x} y={y} w={w} desloc={i % 2 ? 9 : 0} fundo={fundo} />
        ))}
        {/* Alvenaria direita (depois da roda grande) */}
        {[
          [388, 174, 30],
          [374, 186, 44],
          [362, 198, 56],
          [356, 210, 62],
        ].map(([x, y, w], i) => (
          <Fileira key={`d${i}`} x={x} y={y} w={w} desloc={i % 2 ? 9 : 0} fundo={fundo} />
        ))}
      </g>

      {/* Mangueira (arco em água): da pistola por cima até a máquina */}
      <path d="M258 110 C 292 64, 384 66, 398 118 C 406 148, 392 168, 368 176" fill="none" stroke={agua} strokeWidth="4.5" />

      {/* Recorte de fundo atrás da lavadora */}
      <g fill={fundo} stroke={fundo} strokeWidth="8">
        <circle cx="332" cy="212" r="27" />
        <circle cx="254" cy="214" r="19" />
        <path d="M228 182 L338 180 L338 204 L230 206 Z" />
      </g>

      {/* Quadro inclinado e alça */}
      <path d="M306 63 L390 52" stroke={marinho} strokeWidth="9" />
      <path d="M312 62 L292 184" stroke={marinho} strokeWidth="8" />
      <path d="M386 53 L346 190" stroke={marinho} strokeWidth="8" />
      {/* Reservatório no quadro */}
      <path d="M321 74 L379 67 L373 98 L317 104 Z" fill={marinho} />
      <path d="M327 82 L370 77" stroke={fundo} strokeWidth="3" />
      {/* Motor */}
      <path d="M248 140 L290 132 L304 146 L304 184 L258 190 L244 176 Z" fill={marinho} />
      <path d="M254 150 L292 144 M254 161 L294 155 M256 172 L296 166" stroke={fundo} strokeWidth="3" />
      <rect x="258" y="124" width="22" height="12" rx="2" fill={marinho} transform="rotate(-8 269 130)" />
      {/* Base */}
      <path d="M232 196 C 236 184, 270 180, 340 182 L 342 198 L 236 204 Z" fill={marinho} />
      {/* Rodas */}
      <circle cx="332" cy="212" r="22" fill={marinho} />
      <circle cx="332" cy="212" r="9.5" fill={fundo} />
      <circle cx="332" cy="212" r="4" fill={marinho} />
      <circle cx="254" cy="214" r="14" fill={marinho} />
      <circle cx="254" cy="214" r="5.5" fill={fundo} />

      {/* Pistola e lança */}
      <path d="M113 192 L240 112" stroke={marinho} strokeWidth="5" />
      <path d="M232 112 L252 98 L264 106 L254 122 L246 132 L238 126 Z" fill={marinho} />
      <path d="M246 104 L254 96" stroke={marinho} strokeWidth="7" />
      {/* Jato */}
      <g stroke={agua} strokeWidth="2.4">
        <path d="M111 194 L86 214" />
        <path d="M111 194 L92 220" />
        <path d="M111 194 L101 222" />
        <path d="M111 194 L80 206" />
      </g>
      {/* Brilhos */}
      <g fill={marinho}>
        <Brilho cx={104} cy={168} r={12} />
        <Brilho cx={92} cy={146} r={6.5} />
        <Brilho cx={128} cy={152} r={6.5} />
      </g>

      {/* Telhado da casa, encaixado no V de baixo */}
      <path d="M182 433 L240 398 L298 433" fill="none" stroke={marinho} strokeWidth="10" />
      <path d="M172 429 L240 388 L308 429" fill="none" stroke={agua} strokeWidth="4" />
      <g fill={agua}>
        <rect x="231" y="408" width="8" height="8" />
        <rect x="241" y="408" width="8" height="8" />
        <rect x="231" y="418" width="8" height="8" />
        <rect x="241" y="418" width="8" height="8" />
      </g>
    </g>
  );
}

function Fileira({ x, y, w, desloc, fundo }: { x: number; y: number; w: number; desloc: number; fundo: string }) {
  const tijolo = 22;
  const juntas: number[] = [];
  for (let px = x + desloc + tijolo; px < x + w - 4; px += tijolo) juntas.push(px);
  return (
    <g>
      <rect x={x} y={y} width={w} height={11} />
      {juntas.map((jx) => (
        <rect key={jx} x={jx} y={y} width={3} height={11} fill={fundo} />
      ))}
    </g>
  );
}

function Brilho({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const k = r * 0.22;
  return (
    <path
      d={`M${cx} ${cy - r} Q${cx + k} ${cy - k} ${cx + r} ${cy} Q${cx + k} ${cy + k} ${cx} ${cy + r} Q${cx - k} ${cy + k} ${cx - r} ${cy} Q${cx - k} ${cy - k} ${cx} ${cy - r}Z`}
    />
  );
}
