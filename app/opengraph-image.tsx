import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Joint AGRC and EALAN Conference 2025"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom, #38a347, #600705)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 20 }}>Joint AGRC and EALAN Conference 2025</div>
      <div style={{ fontSize: 32, maxWidth: "80%", lineHeight: 1.4 }}>
        Geo-Enablement for Sustainable Development: Harnessing Innovation in Geomatics and Land Administration
      </div>
    </div>,
    {
      ...size,
      // Use system fonts instead of loading custom fonts
    },
  )
}
