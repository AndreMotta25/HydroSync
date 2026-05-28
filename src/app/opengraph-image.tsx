import { ImageResponse } from "next/og";

export const alt = "HydroSync — Hidratação de precisão";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0058bc",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <h1
            style={{
              fontSize: 120,
              fontWeight: 800,
              color: "white",
              margin: 0,
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            HydroSync
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.8)",
              marginTop: 24,
              textAlign: "center",
            }}
          >
            Estabilizando sua performance através da hidratação de precisão.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            color: "rgba(255,255,255,0.5)",
            fontSize: 18,
            fontWeight: 600,
            textTransform: "uppercase" as const,
            letterSpacing: "2px",
          }}
        >
          <span>1% Margem de Erro</span>
          <span>30d Autonomia</span>
          <span>IPX7 Certificação</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
