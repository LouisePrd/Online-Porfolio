import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/Shell";
import ShortFooter from "@/components/ShortFooter";
import { SITE_URL } from "@/lib/seo";
import s from "@/styles/site.module.css";
import "./globals.css";

/** 404 for unknown URLs. There is no shared root layout (one per language), so this page has its own <html>. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404 | Louise Peridy",
  robots: { index: false },
  icons: { icon: "/imgs/props/memoji.png" },
};

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body>
        <Shell>
          <main className={`${s.container} ${s.projHeader}`}>
            <h1 className={s.projH1}>404</h1>
            <p className={s.intro}>Cette page n’existe pas (ou plus).</p>
            <p className={s.intro} lang="en">This page doesn’t exist (anymore).</p>
            <div className={s.ctaRow}>
              <Link href="/" className={s.btnPrimary}>Accueil</Link>
              <Link href="/en" className={s.btnHighlight} lang="en">Home (EN)</Link>
            </div>
          </main>
          <ShortFooter href="/projects" label="Projets" />
        </Shell>
      </body>
    </html>
  );
}
