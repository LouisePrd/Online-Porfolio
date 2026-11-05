import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";
import { ASSOCIATIONS, ASSO_PHOTOS } from "@/content/experience";
import { type Lang, T } from "@/content/site";
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

export default function Associations({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <section className={`${s.container} ${s.asso}`}>
      <h2 className={`${s.h2} ${s.h2Exp}`}>{t.asso}</h2>

      <div className={s.assoList}>
        {ASSOCIATIONS.map((a) => {
          const info = a[lang];
          return (
            <article key={info.name} className={s.assoRow}>
              <div className={s.assoId}>
                <span className={s.logoTile} aria-hidden="true">
                  <Image src={a.logo} alt="" fill sizes="88px" />
                </span>
                <h3 className={s.tlCompany}>{info.name}</h3>
                <p className={s.assoAbout}>{info.about}</p>
                {a.url && (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className={s.assoLink}>
                    {a.url.replace(/^https?:\/\//, "")} ↗
                  </a>
                )}
              </div>
              <div className={s.assoRoles}>
                {a.roles.map((r) => {
                  const role = r[lang];
                  return (
                    <div key={role.role} className={s.assoRole}>
                      <p className={s.assoRoleTitle}>
                        {role.role} <span className={s.tlMeta}>{role.dates}</span>
                      </p>
                      <p className={s.assoText}>{role.text}</p>
                      {role.points && (
                        <ul className={s.tlPoints}>
                          {role.points.map((pt) => (
                            <Point key={pt} text={pt} lang={lang} />
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      <h3 className={s.pdLabel} style={{ marginTop: "var(--cta-gap)" }}>{t.assoPhotos}</h3>
      <PhotoGallery photos={ASSO_PHOTOS.map((p) => ({ src: p.src, label: p.label[lang] }))} lang={lang} />
    </section>
  );
}
