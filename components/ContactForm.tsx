"use client";

import { useState } from "react";
import { CONTACT, type Lang, T } from "@/content/site";
import s from "@/styles/site.module.css";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Netlify Forms
 */
export default function ContactForm({ lang }: { lang: Lang }) {
  const f = T[lang].form;
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={s.formDone} role="status">
        <p className={s.formDoneText}>{f.success}</p>
        <button type="button" className={s.btnHighlight} onClick={() => setStatus("idle")}>
          {f.again}
        </button>
      </div>
    );
  }

  return (
    <form name="contact" className={s.form} onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="lang" value={lang} />
      {/* honeypot: hidden from people, bots fill it and get dropped */}
      <p className={s.honeypot} aria-hidden="true">
        <label>
          Ne pas remplir <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className={s.formRow}>
        <label className={s.field}>
          <span className={s.fieldLabel}>{f.name}</span>
          <input name="name" required autoComplete="name" className={s.input} />
        </label>
        <label className={s.field}>
          <span className={s.fieldLabel}>{f.email}</span>
          <input name="email" type="email" required autoComplete="email" className={s.input} />
        </label>
      </div>
      <label className={s.field}>
        <span className={s.fieldLabel}>
          {f.subject} <span className={s.fieldHint}>({f.subjectHint})</span>
        </span>
        <input name="subject" className={s.input} />
      </label>
      <label className={s.field}>
        <span className={s.fieldLabel}>{f.message}</span>
        <textarea name="message" required rows={7} className={`${s.input} ${s.textarea}`} />
      </label>

      {status === "error" && (
        <p className={s.formError} role="alert">
          {f.error} <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      )}

      <button type="submit" className={`${s.btnPrimary} ${s.formSubmit}`} disabled={status === "sending"}>
        {status === "sending" ? f.sending : `${f.send} →`}
      </button>
    </form>
  );
}
