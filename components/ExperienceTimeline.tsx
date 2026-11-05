import Image from "next/image";
import Link from "next/link";
import { type Lang, T, routes } from "@/content/site";
import { EDUCATION, JOBS } from "@/content/experience";
import s from "@/styles/site.module.css";

function Point({ text, lang }: { text: string; lang: Lang }) {
  const m = /^([^:]{2,40}?)\s?:\s(.+)$/.exec(text);
  return (
    <li className={s.tlPoint}>
      <span className={s.plus} aria-hidden="true">+</span>
      <span>
        {m ? (
          <>
            <strong>{m[1]}{lang === "fr" ? " :" : ":"}</strong> {m[2]}
          </>
        ) : (
          text
        )}
      </span>
    </li>
  );
}

export default function ExperienceTimeline({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const t = T[lang];
  return (
    <div className={`${s.container} ${s.expGrid}`}>
      <div className={s.expMain}>
        {compact && <h2 className={`${s.h2} ${s.h2Exp}`}>{t.titles.experience}</h2>}
        <ol className={`${s.timeline} ${compact ? s.timelineCompact : ""}`}>
          {JOBS.map((job) => {
            const j = job[lang];
            return (
              <li key={job.company} className={s.tlItem}>
                <span className={s.tlYear}>{job.years}</span>
                <span className={`${s.tlDot} ${job.current ? s.tlDotNow : ""}`} aria-hidden="true" />
                <article className={s.tlCard}>
                  <header className={s.tlHead}>
                    <span className={`${s.logoTile} ${job.logoDark ? s.logoTileDark : ""}`} aria-hidden="true">
                      {job.logo ? (
                        <Image src={job.logo} alt="" fill sizes="88px" />
                      ) : (
                        <span className={s.logoInitials}>{job.company.slice(0, 2)}</span>
                      )}
                    </span>
                    <span className={s.tlTitles}>
                      <span className={s.tlCompany}>
                        {job.company}
                        {job.current && <span className={s.nowBadge}>{t.current}</span>}
                      </span>
                      <span className={s.tlRole}>{j.role}</span>
                    </span>
                  </header>
                  <p className={s.tlMeta}>
                    {j.dates} · {j.place}
                  </p>
                  {!compact && (
                    <>
                      <p className={s.tlSummary}>{j.summary}</p>
                      <ul className={s.tlPoints}>
                        {j.points.map((pt) => (
                          <Point key={pt} text={pt} lang={lang} />
                        ))}
                      </ul>
                      <p className={s.tagLine}>{job.tags.join(" / ")}</p>
                    </>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
        {compact && (
          <Link href={routes(lang).experience} className={`${s.btnPrimary} ${s.expMore}`}>
            {t.fullPath} →
          </Link>
        )}
      </div>

      <aside className={`${s.edu} ${compact ? s.eduCompact : ""}`}>
        <h3 className={s.eduTitle}>{t.titles.education}</h3>
        <ol className={s.eduList}>
          {EDUCATION.map((e) => (
            <li key={e.years} className={s.eduItem}>
              <span className={s.eduYears}>{e.years}</span>
              <span className={s.eduDegree}>{e[lang]}</span>
              <span className={s.eduSchool}>{e.school}</span>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
