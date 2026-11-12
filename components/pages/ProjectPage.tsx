import Image from "next/image";
import Link from "next/link";
import { type Lang, T, routes } from "@/content/site";
import { PROJECTS, type Project, type Sized, projectHref, projectTitle, projectTags } from "@/content/projects";
import Carousel from "@/components/Carousel";
import ShortFooter from "@/components/ShortFooter";
import ZoomImage from "@/components/ZoomImage";
import Shell from "@/components/Shell";
import SiteNav from "@/components/SiteNav";
import s from "@/styles/site.module.css";

/** Gap between images, must match .pdRow / .pdStack in site.module.css */
const GAP = 24;

function rowColumns(row: (Sized | Sized[])[]) {
  const cols = row.map((item) => {
    const stack = Array.isArray(item) ? item : [item];
    const S = stack.reduce((sum, x) => sum + x.h / x.w, 0);
    return { stack, a: 1 / S, b: ((stack.length - 1) * GAP) / S };
  });
  const A = cols.reduce((sum, c) => sum + c.a, 0);
  const K = cols.reduce((sum, c) => sum + c.b, 0) - (cols.length - 1) * GAP;
  return cols.map(({ stack, a, b }) => ({
    stack,
    width: `calc((100% + ${K.toFixed(2)}px) * ${(a / A).toFixed(5)} - ${b.toFixed(2)}px)`,
  }));
}

export default function ProjectPage({ p, lang }: { p: Project; lang: Lang }) {
  const t = T[lang];
  const d = t.detail;
  const r = routes(lang);
  const i = PROJECTS.indexOf(p);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const m = p.media;

  const links: { href: string; label: string }[] = [];
  if (p.links.live) links.push({ href: p.links.live, label: `${t.live} ↗` });
  if (p.links.source) links.push({ href: p.links.source, label: `${t.source} ↗` });
  if (p.links.report) links.push({ href: p.links.report, label: `${d.report} ↗` });
  if (p.links.company) links.push({ href: p.links.company, label: `${d.company} ↗` });

  const meta = [
    { label: d.type, value: p.type[lang] },
    { label: d.date, value: p.date },
    { label: d.context, value: p.context[lang] },
    { label: d.tech, value: projectTags(p, lang).join(" / ") },
  ];

  const hasMedia =
    m.videos?.length || m.videoUrl || m.iframeUrl || m.canvaUrl || m.panorama || m.images?.length || m.rows?.length || m.logos?.length || m.carousel?.length || m.verticalImages?.length || m.gifs?.length;

  return (
    <Shell>
      <SiteNav lang={lang} page="projects" altHref={projectHref(p, lang === "fr" ? "en" : "fr")} />

      <header className={`${s.container} ${s.pdHeader}`}>
        <div className={s.pdTopBar}>
          <Link href={r.projects} className={s.pdBack}>← {d.back}</Link>
          <nav className={s.pdPager} aria-label={t.titles.projects}>
            <Link href={projectHref(prev, lang)} className={s.pdPagerLink} title={d.prev}>
              ← {projectTitle(prev, lang)}
            </Link>
            <Link href={projectHref(next, lang)} className={s.pdPagerLink} title={d.next}>
              {projectTitle(next, lang)} →
            </Link>
          </nav>
        </div>
        <span className={`${s.cat} ${s.catDeep}`}>{t.cats[p.cat]} · {p.date}</span>
        <h1 className={s.pdTitle}>{projectTitle(p, lang)}</h1>
        <p className={s.pdIntro}>{p.intro[lang]}</p>
        {links.length > 0 && (
          <div className={s.ctaRow}>
            {links.map((l, k) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={k === 0 ? s.btnPrimary : s.btnHighlight}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className={`${s.container} ${s.pdBody}`}>
        <dl className={s.pdMeta}>
          {meta.map((x) => (
            <div key={x.label} className={s.pdMetaItem}>
              <dt>{x.label}</dt>
              <dd>{x.value}</dd>
            </div>
          ))}
        </dl>
        <div className={s.pdAbout}>
          <h2 className={s.pdLabel}>{d.about}</h2>
          <p className={s.pdDesc}>{p.desc[lang]}</p>
        </div>
      </section>

      {hasMedia && (
        <section className={`${s.container} ${s.pdMedia}`}>
          <h2 className={s.pdLabel}>{d.media}</h2>

          {[m.videoUrl, m.iframeUrl, m.canvaUrl].filter(Boolean).map((src) => (
            <div key={src} className={`${s.pdEmbed} ${src === m.canvaUrl ? s.pdEmbedSmall : ""}`}>
              <iframe
                src={src}
                title={projectTitle(p, lang)}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          ))}

          {m.videos && m.videos.length > 0 && (
            <div className={s.pdGrid}>
              {m.videos.map((src) => (
                <video key={src} className={s.pdImg} src={src} controls muted loop playsInline preload="metadata" />
              ))}
            </div>
          )}

          {Boolean(m.logos?.length || m.carousel?.length) && (
            <div className={m.logos?.length && m.carousel?.length ? s.pdShowcase : undefined}>
              {m.logos && m.logos.length > 0 && (
                <div className={s.pdLogos}>
                  {m.logos.map(({ src, w, h }) => (
                    <Image key={src} src={src} alt={`${projectTitle(p, lang)} logo`} width={w} height={h} className={s.pdImg} sizes="260px" />
                  ))}
                </div>
              )}
              {m.carousel && m.carousel.length > 0 && <Carousel slides={m.carousel} alt={projectTitle(p, lang)} lang={lang} />}
            </div>
          )}

          {m.rows?.map((row) => (
            <div key={JSON.stringify(row[0])} className={s.pdRow}>
              {rowColumns(row).map(({ stack, width }) => {
                return (
                  <div key={stack[0].src} className={s.pdStack} style={{ "--w": width } as React.CSSProperties}>
                    {stack.map(({ src, w, h }) => (
                      <ZoomImage key={src} src={src} w={w} h={h} alt={projectTitle(p, lang)} lang={lang} sizes={row.length > 1 ? "(max-width: 800px) 100vw, 50vw" : "100vw"} />
                    ))}
                  </div>
                );
              })}
            </div>
          ))}

          {m.images?.some((img) => typeof img !== "string") && (
            <div className={s.pdRow}>
              {m.images.filter((img) => typeof img !== "string").map(({ src, w, h }) => (
                <Image key={src} src={src} alt={projectTitle(p, lang)} width={w} height={h} className={s.pdImg} style={{ "--ratio": w / h } as React.CSSProperties} sizes="(max-width: 800px) 100vw, 50vw" />
              ))}
            </div>
          )}

          {m.panorama && (
            <Image src={m.panorama} alt={projectTitle(p, lang)} width={1600} height={600} className={s.pdImg} sizes="100vw" />
          )}

          {m.images?.some((img) => typeof img === "string") && (
            <div className={s.pdGrid}>
              {m.images.filter((img) => typeof img === "string").map((src) => (
                <Image key={src} src={src} alt={projectTitle(p, lang)} width={1200} height={750} className={s.pdImg} sizes="(max-width: 800px) 100vw, 50vw" />
              ))}
            </div>
          )}

          {m.verticalImages && m.verticalImages.length > 0 && (
            <div className={s.pdGridTall}>
              {m.verticalImages.map((src) => (
                <Image key={src} src={src} alt={projectTitle(p, lang)} width={500} height={1000} className={s.pdImg} sizes="(max-width: 800px) 50vw, 25vw" />
              ))}
            </div>
          )}

          {m.gifs && m.gifs.length > 0 && (
            <div className={s.pdGrid}>
              {m.gifs.map((src) => (
                <Image key={src} src={src} alt={projectTitle(p, lang)} width={800} height={450} className={s.pdImg} unoptimized />
              ))}
            </div>
          )}

          {p.credits && p.credits.length > 0 && (
            <p className={s.pdCredits}>
              {d.visualsBy}{" "}
              {p.credits.map((c, k) => (
                <span key={c.url}>
                  {k > 0 && (k === p.credits!.length - 1 ? ` ${d.and} ` : ", ")}
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a>
                </span>
              ))}
            </p>
          )}
        </section>
      )}

      <ShortFooter href={r.projects} label={d.back} />
    </Shell>
  );
}
