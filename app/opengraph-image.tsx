import { ImageResponse } from "next/og";

import { company } from "@/lib/data";

export const runtime = "edge";
export const alt = "Lilicleanservices";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(214,31,117,0.18), transparent 28%), radial-gradient(circle at top right, rgba(47,143,70,0.18), transparent 32%), linear-gradient(135deg, #f6f8f6 0%, #ffffff 45%, #eef7f0 100%)",
          color: "#185C37",
          padding: "72px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(24,92,55,0.12)",
            borderRadius: "28px",
            padding: "56px",
            background: "rgba(255,255,255,0.82)"
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#D61F75"
            }}
          >
            Nettoyage local premium
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 84, lineHeight: 0.95 }}>{company.name}</div>
            <div style={{ fontSize: 38, lineHeight: 1.3, maxWidth: 920 }}>
              {company.heroTitle}
            </div>
          </div>
          <div style={{ fontSize: 30, color: "#1F2933" }}>
            {company.city} · Téléphone {company.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size
  );
}
