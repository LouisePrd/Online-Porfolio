import ContactForm from "@/components/ContactForm";
import Shell from "@/components/Shell";
import ShortFooter from "@/components/ShortFooter";
import SiteNav from "@/components/SiteNav";
import SocialIcon from "@/components/SocialIcon";
import { CONTACT, type Lang, SOCIALS, T, routes } from "@/content/site";
import s from "@/styles/site.module.css";

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = T[lang];
  const f = t.form;
  const r = routes(lang);
  return (
    <Shell>
      <SiteNav lang={lang} page="contact" />

      <header className={`${s.container} ${s.projHeader}`}>
        <h1 className={s.projH1}>{t.titles.contact}</h1>
      </header>

      <main className={`${s.container} ${s.contactPage}`}>
        <div className={s.contactMain}>
          <p className={s.contactIntro}>{f.intro}</p>
          <ContactForm lang={lang} />
        </div>

        <aside className={s.contactAside}>
          <div>
            <h2 className={s.pdLabel}>{f.direct}</h2>
            <a href={`mailto:${CONTACT.email}`} className={s.contactMail}>{CONTACT.email} ↗</a>
          </div>
          <div>
            <h2 className={s.pdLabel}>{f.elsewhere}</h2>
            <ul className={s.contactSocials}>
              {SOCIALS.map(({ kind, label, href }) => (
                <li key={kind}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={s.socialLink}>
                    <SocialIcon kind={kind} />
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

      <ShortFooter href={r.home} label={t.backHome} />
    </Shell>
  );
}
