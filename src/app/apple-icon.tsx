import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0B1A2B" }}>
        <svg width="150" height="150" viewBox="0 0 64 64">
          <path d="M32 6 L56 19 V45 L32 58 L8 45 V19 Z" fill="none" stroke="#63A0C2" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M19 44 V21 L32 36 L45 21 V44" fill="none" stroke="#F4F5F8" strokeWidth="6" />
        </svg>
      </div>
    ),
    size,
  );
}
