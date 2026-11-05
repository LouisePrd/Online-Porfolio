"use client";

import { ReactNode, RefObject, useEffect } from "react";
import { archivo, schibsted } from "@/lib/fonts";
import type { Lang } from "@/content/site";
import s from "@/styles/site.module.css";

export default function Shell({
  lang,
  rootRef,
  children,
}: {
  lang: Lang;
  rootRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div ref={rootRef} className={`${s.root} ${archivo.variable} ${schibsted.variable}`}>
      {children}
    </div>
  );
}
