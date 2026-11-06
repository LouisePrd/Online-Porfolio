import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { type Lang, T } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * Pink halftone in the top-right corner, like the hero of the site:
 */
function halftone() {
  const step = 18;
  const [cx, cy, rx, ry] = [1150, 90, 700, 560];
  const dots: string[] = [];
  for (let y = step / 2; y < OG_SIZE.height; y += step) {
    for (let x = step / 2; x < OG_SIZE.width; x += step) {
      const k = 1 - Math.hypot((x - cx) / rx, (y - cy) / ry);
      if (k > 0.05) dots.push(`<circle cx="${x}" cy="${y}" r="${(6 * k ** 0.9).toFixed(2)}"/>`);
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_SIZE.width}" height="${OG_SIZE.height}" fill="#f09ac8">${dots.join("")}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

/** Share preview (LinkedIn, Slack, etc.), in the site's colours. */
export async function ogImage(lang: Lang) {
  const [memoji, display] = await Promise.all([
    readFile(path.join(process.cwd(), "public/imgs/props/memoji.png")),
    readFile(path.join(process.cwd(), "assets/fonts/ArchivoBlack-Regular.ttf")),
  ]);
  const src = `data:image/png;base64,${memoji.toString("base64")}`;
  const tagline =
    lang === "fr"
      ? ["Développement web full-stack", "UI/UX · Projets créatifs"]
      : ["Full-stack web development", "UI/UX · Creative projects"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          padding: "56px 80px 52px",
          background: "#fafaf7",
          color: "#111111",
          borderBottom: "24px solid #f09ac8",
        }}
      >
        <img src={halftone()} width={OG_SIZE.width} height={OG_SIZE.height} alt="" style={{ position: "absolute", top: 0, left: 0 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ display: "flex", position: "relative", width: 108, height: 108, borderRadius: 999, background: "#ffe600", overflow: "hidden" }}>
            <img src={src} width={106} height={106} alt="" style={{ position: "absolute", left: 1, top: 9 }} />
          </div>
          <span style={{ fontSize: 34, fontWeight: 600, color: "#c4378a", textTransform: "uppercase", letterSpacing: 2 }}>
            {T[lang].role}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "Archivo Black", fontSize: 140, lineHeight: 0.98, letterSpacing: -4 }}>Louise</span>
          <span style={{ fontFamily: "Archivo Black", fontSize: 140, lineHeight: 0.98, letterSpacing: -4, paddingLeft: 120 }}>Peridy</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 40, lineHeight: 1.2, color: "#45413d" }}>
          {tagline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: [{ name: "Archivo Black", data: display, weight: 400, style: "normal" }] },
  );
}
