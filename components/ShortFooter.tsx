import Link from "next/link";
import { CONTACT } from "@/content/site";
import s from "@/styles/site.module.css";

/** Footer of the inner pages: a back link and the e-mail button. */
export default function ShortFooter({ href, label }: { href: string; label: string }) {
  return (
    <footer className={`${s.footer}`} style={{ marginTop: 0 }}>
      <div className={`${s.container} ${s.shortFooterInner}`}>
        <Link href={href} className={s.shortFooterHome}>← {label}</Link>
        <a href={`mailto:${CONTACT.email}`} className={`${s.emailBtn} ${s.emailBtnSmall}`}>{CONTACT.email} →</a>
      </div>
    </footer>
  );
}
