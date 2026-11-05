"use client";

import { RefObject, useEffect } from "react";

type El = HTMLElement & { _ty?: number };

/**
 * Elements with `data-speed` translate on Y by
 * -(elementCenter - viewportCenter) * speed * intensity.
 * Disabled with prefers-reduced-motion.
 */
export function useParallax(rootRef: RefObject<HTMLElement | null>, intensity = 1.6) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const root = rootRef.current;
        if (!root) return;
        const vh = window.innerHeight;
        root.querySelectorAll<El>("[data-speed]").forEach((el) => {
          const sp = (parseFloat(el.dataset.speed || "0") || 0) * intensity;
          const r = el.getBoundingClientRect();
          const prev = el._ty || 0;
          const ty = -(r.top - prev + r.height / 2 - vh / 2) * sp;
          el.style.transform = `translate3d(0,${ty.toFixed(1)}px,0)`;
          el._ty = ty;
        });
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    const t = window.setTimeout(update, 200);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [rootRef, intensity]);
}
