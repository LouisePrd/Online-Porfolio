"use client";

import { ReactNode, RefObject } from "react";
import { archivo, schibsted } from "@/lib/fonts";
import s from "@/styles/site.module.css";

export default function Shell({
  rootRef,
  children,
}: {
  rootRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}) {
  return (
    <div ref={rootRef} className={`${s.root} ${archivo.variable} ${schibsted.variable}`}>
      {children}
    </div>
  );
}
