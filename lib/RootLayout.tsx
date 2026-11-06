import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Lang } from "@/content/site";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "@/app/globals.css";

/**
 * One root layout per language, so the server sends the right <html lang>
 * (app/(fr)/layout.tsx and app/(en)/layout.tsx).
 */
export function rootMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    title: lang === "fr" ? "Louise Peridy | Développeuse créative" : "Louise Peridy | Creative developer",
    description:
      lang === "fr"
        ? "Portfolio de Louise Peridy, développeuse créative entre code et art."
        : "Portfolio of Louise Peridy, a creative developer between code and art.",
    icons: { icon: "/imgs/props/memoji.png" },
  };
}

export default function RootLayout({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
