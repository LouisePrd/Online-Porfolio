import Link from "next/link";
import { type Lang, T, routes } from "@/content/site";
import Associations from "@/components/Associations";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import ShortFooter from "@/components/ShortFooter";
import Shell from "@/components/Shell";
import SiteNav from "@/components/SiteNav";
import s from "@/styles/site.module.css";

export default function ExperiencePage({ lang }: { lang: Lang }) {
  const t = T[lang];
  const r = routes(lang);
  return (
    <Shell>
      <SiteNav lang={lang} page="experience" />

      <header className={`${s.container} ${s.projHeader}`}>
        <h1 className={s.projH1}>{t.titles.experience}</h1>
        <Link href="/cv" className={s.btnPrimary} hrefLang={lang === "fr" ? undefined : "fr"}>
          {t.cvLink} →
        </Link>
      </header>

      <main className={s.expPage}>
        <ExperienceTimeline lang={lang} />
      </main>

      <Skills lang={lang} />

      <Associations lang={lang} />

      <ShortFooter href={r.home} label={t.backHome} />
    </Shell>
  );
}
