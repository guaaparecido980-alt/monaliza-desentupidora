import { ImageResponse } from "next/og";
import { empresa } from "@/config/empresa";

export const alt = `${empresa.nome} · Desentupidora em Curitiba e região`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagem() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0B1A2B",
          backgroundImage:
            "linear-gradient(to right, rgba(111,176,210,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,176,210,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#F1F4F7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, letterSpacing: 4, color: "#6FB0D2" }}>
          <div style={{ width: 48, height: 2, background: "#6FB0D2" }} />
          CURITIBA E REGIÃO METROPOLITANA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: -2, lineHeight: 0.95 }}>MONALIZA</div>
          <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: 14, color: "#6FB0D2", marginTop: 12 }}>DESENTUPIDORA</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, color: "#A9BBCC" }}>
          <div style={{ display: "flex" }}>Esgoto · Pia · Vaso · Ralo · Caixa de gordura · Hidrojateamento</div>
          {empresa.atende24h ? (
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#F2B33D" }}>
              <div style={{ width: 14, height: 14, borderRadius: 7, background: "#F2B33D" }} />
              24h
            </div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
        </div>
      </div>
    ),
    size,
  );
}
