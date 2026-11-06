import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { type Lang, T } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 };

/** Share preview (LinkedIn, Slack, etc.), in the site's colours. */
export async function ogImage(lang: Lang) {
  const [memoji, display] = await Promise.all([
    readFile(path.join(process.cwd(), "public/imgs/props/memoji.png")),
    readFile(path.join(process.cwd(), "assets/fonts/ArchivoBlack-Regular.ttf")),
  ]);
  const src = `data:image/png;base64,${memoji.toString("base64")}`;
  const tagline = lang === "fr" ? "Entre code et art · WebGL, 3D, jeux & web" : "Between code and art · WebGL, 3D, games & web";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#fafaf7",
          color: "#111111",
          borderBottom: "24px solid #f09ac8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={120} height={120} alt="" style={{ borderRadius: 999, background: "#ffe600" }} />
          <span style={{ fontSize: 34, fontWeight: 600, color: "#c4378a", textTransform: "uppercase", letterSpacing: 2 }}>
            {T[lang].role}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "Archivo Black", fontSize: 150, lineHeight: 1, letterSpacing: -4 }}>Louise</span>
          <span style={{ fontFamily: "Archivo Black", fontSize: 150, lineHeight: 1, letterSpacing: -4, paddingLeft: 120 }}>Peridy</span>
        </div>
        <span style={{ fontSize: 32, color: "#45413d" }}>{tagline}</span>
      </div>
    ),
    { ...OG_SIZE, fonts: [{ name: "Archivo Black", data: display, weight: 400, style: "normal" }] },
  );
}
