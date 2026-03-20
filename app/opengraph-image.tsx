import { ImageResponse } from "next/og";

export const alt = "Karseell Srbija – Originalni proizvodi za negu kose";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #6b2d45 0%, #c4788c 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: "-2px",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Karseell Srbija
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 34,
            fontWeight: 400,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Originalni proizvodi za negu kose
        </div>
        <div
          style={{
            marginTop: 48,
            color: "rgba(255,255,255,0.6)",
            fontSize: 26,
            letterSpacing: "1px",
          }}
        >
          karseellsrbija.rs
        </div>
      </div>
    ),
    { ...size }
  );
}
