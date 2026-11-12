import Image from "next/image";
import { CONTACT } from "@/content/site";
import Shell from "@/components/Shell";
import ShortFooter from "@/components/ShortFooter";
import SiteNav from "@/components/SiteNav";
import s from "@/styles/site.module.css";
import c from "@/styles/cv.module.css";

export default function CvPage() {
  return (
    <Shell>
      <SiteNav lang="fr" page="cv" altHref="/en/experiences" />

      <main className={c.main}>
        <div className={c.actions}>
          <a href={CONTACT.cv} download className={s.btnPrimary}>
            Télécharger le PDF ↓
          </a>
          <a href={CONTACT.cv} target="_blank" rel="noopener noreferrer" className={s.btnHighlight}>
            Ouvrir dans un onglet ↗
          </a>
        </div>

        <a href={CONTACT.cv} target="_blank" rel="noopener noreferrer" className={c.sheet} aria-label="Ouvrir le CV en PDF">
          <Image
            src="/imgs/socials/cv-preview.webp"
            alt="CV de Louise Peridy, creative engineer : profil, formation, expérience et compétences."
            width={1323}
            height={1871}
            sizes="(max-width: 940px) 100vw, 860px"
            priority
            unoptimized
          />
        </a>
      </main>

      <ShortFooter href="/" label="Accueil" />
    </Shell>
  );
}
