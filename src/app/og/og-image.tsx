interface OgImageProps {
  title: string
  description: string
  logoSrc: string
}

export default function OgImage({ title, description, logoSrc }: OgImageProps) {
  return (
    <div
      style={{
        alignItems: "stretch",
        background: "#ffffff",
        color: "#18181b",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "18px" }}>
        <div
          style={{
            background: "#327640",
            height: "48px",
            maskImage: `url(${logoSrc})`,
            maskPosition: "center",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            width: "48px",
          }}
        />
        <div style={{ display: "flex", fontSize: "30px", fontWeight: 600 }}>
          Fio
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        <div
          style={{
            display: "flex",
            fontSize: "76px",
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1.05,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#52525b",
            display: "flex",
            fontSize: "30px",
            lineHeight: 1.35,
            maxWidth: "860px",
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          borderTop: "2px solid #e4e4e7",
          color: "#52525b",
          display: "flex",
          fontSize: "22px",
          justifyContent: "space-between",
          paddingTop: "28px",
        }}
      >
        <div style={{ display: "flex" }}>
          Next.js 16 · React 19 · TypeScript
        </div>
        <div style={{ color: "#327640", display: "flex", fontWeight: 600 }}>
          Satya Wikananda
        </div>
      </div>
    </div>
  )
}
