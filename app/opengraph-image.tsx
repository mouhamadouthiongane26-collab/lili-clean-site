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
            "radial-gradient(circle at top left, rgba(82,169,155,0.24), transparent 28%), linear-gradient(135deg, #f4f6f3 0%, #ffffff 45%, #eaf3f0 100%)",
          color: "#123A54",
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
            border: "1px solid rgba(18,58,84,0.12)",
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
              color: "#52A99B"
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
          <div style={{ fontSize: 30, color: "#18232F" }}>
            {company.city} · Téléphone {company.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size
  );
}
