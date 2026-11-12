import { SKILLS } from "@/content/experience";
import { type Lang, T } from "@/content/site";
import s from "@/styles/site.module.css";

export default function Skills({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <section className={`${s.container} ${s.skills}`} aria-labelledby="skills-title">
      <h2 id="skills-title" className={`${s.h2} ${s.h2Exp}`}>{t.titles.skills}</h2>

      <div className={s.skillGrid}>
        {SKILLS.map((g, i) => {
          const info = g[lang];
          return (
            <article key={info.title} className={s.skillCard}>
              <span className={s.skillNum} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className={s.skillTitle}>{info.title}</h3>
              <p className={s.skillText}>{info.text}</p>
              <ul className={s.skillList}>
                {g.items.map((it) => {
                  const label = typeof it === "string" ? it : it[lang];
                  return <li key={label} className={s.skillPill}>{label}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
