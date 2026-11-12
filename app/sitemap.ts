import type { MetadataRoute } from "next";
import { PROJECTS } from "@/content/projects";
import { SITE_URL, enPath } from "@/lib/seo";

export const dynamic = "force-static";

/** Every page in French, with its English version as an alternate. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects", "/experiences", "/contact", ...PROJECTS.map((p) => `/projects/${p.slug}`)];
  // The CV page only exists in French.
  const cv = { url: `${SITE_URL}/cv` };
  return [cv, ...paths.flatMap((fr) => {
    const languages = { fr: `${SITE_URL}${fr}`, en: `${SITE_URL}${enPath(fr)}` };
    return [
      { url: languages.fr, alternates: { languages } },
      { url: languages.en, alternates: { languages } },
    ];
  })];
}
