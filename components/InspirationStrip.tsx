"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { type Lang, T } from "@/content/site";
import { INSPIRATIONS } from "@/content/inspirations";
import s from "@/styles/site.module.css";

const LAYOUT = [
  { mt: 0, rot: -2 },
  { mt: 30, rot: 1.5 },
  { mt: 10, rot: -1 },
  { mt: 38, rot: 2 },
  { mt: 4, rot: -1.5 },
  { mt: 24, rot: 1 },
];

/** Auto-scroll speed in px per second. */
const SPEED = 28;

/**
 * Horizontal strip of polaroids that scrolls on its own in a loop.
 * Pauses on hover, focus, drag or touch, and when off screen.
 */
export default function InspirationStrip({ lang }: { lang: Lang }) {
  const t = T[lang];
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const pause = useRef({ hover: false, focus: false, until: 0, visible: true });

  // The list is rendered twice; scrolling wraps at the start of the 2nd copy.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(([e]) => (pause.current.visible = e.isIntersecting));
    io.observe(el);

    let raf = 0;
    let last = performance.now();
    let pos = el.scrollLeft;
    let wasRunning = false;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const p = pause.current;
      const running = p.visible && !p.hover && !p.focus && !drag.current.down && now > p.until;
      const kids = el.children as HTMLCollectionOf<HTMLElement>;
      const half = kids[INSPIRATIONS.length].offsetLeft - kids[0].offsetLeft;
      if (running) {
        if (!wasRunning) pos = el.scrollLeft; // pick up where the user left it
        pos += SPEED * dt;
        if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      } else if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
      wasRunning = running;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  const holdFor = (ms: number) => (pause.current.until = performance.now() + ms);

  const scrollByCards = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    holdFor(2500);
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") holdFor(3000);
    if (e.pointerType !== "mouse" || !ref.current) return;
    drag.current = { down: true, x: e.clientX, left: ref.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down || !ref.current) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      ref.current.setPointerCapture(e.pointerId);
      ref.current.dataset.dragging = "";
    }
    if (d.moved) ref.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    if (ref.current) delete ref.current.dataset.dragging;
  };
  // A drag must not open the link under the cursor.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const items = [...INSPIRATIONS, ...INSPIRATIONS];

  return (
    <>
      <div className={s.container}>
        <div className={`${s.sectionHead} ${s.inspHead}`}>
          <h2 className={s.h2}>{t.titles.inspirations}</h2>
          <div className={s.inspHeadRight}>
            <p className={s.inspIntro}>{t.inspIntro}</p>
            <div className={s.inspArrows}>
              <button type="button" className={s.inspArrow} onClick={() => scrollByCards(-1)} aria-label={t.scrollPrev}>←</button>
              <button type="button" className={s.inspArrow} onClick={() => scrollByCards(1)} aria-label={t.scrollNext}>→</button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={s.inspStrip}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerEnter={(e) => e.pointerType === "mouse" && (pause.current.hover = true)}
        onPointerLeave={() => {
          pause.current.hover = false;
          endDrag();
        }}
        onTouchEnd={() => holdFor(2500)}
        onFocus={() => (pause.current.focus = true)}
        onBlur={() => (pause.current.focus = false)}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {items.map((it, i) => {
          const l = LAYOUT[i % LAYOUT.length];
          const copy = i >= INSPIRATIONS.length;
          return (
            <div key={`${it.name}-${i}`} className={s.inspItem} style={{ marginTop: l.mt }} aria-hidden={copy || undefined}>
              <a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                className={s.polaroid}
                style={{ transform: `rotate(${l.rot}deg)` }}
                tabIndex={copy ? -1 : undefined}
              >
                <span className={s.polaroidImg} style={{ display: "block" }}>
                  <Image src={it.img} alt={copy ? "" : it.name} fill sizes="260px" draggable={false} />
                </span>
                <span className={s.caption} style={{ display: "block" }}>{it.name}</span>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
