import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPage from "@/components/pages/ProjectPage";
import { PROJECTS, findProject, projectTitle } from "@/content/projects";
import type { Lang } from "@/content/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

/** Shared by /projects/[slug] and /en/projects/[slug]. */
export function projectRoute(lang: Lang) {
  return {
    generateStaticParams: () => PROJECTS.map((p) => ({ slug: p.slug })),

    generateMetadata: async ({ params }: Props): Promise<Metadata> => {
      const p = findProject((await params).slug);
      if (!p) return {};
      return pageMeta(lang, `/projects/${p.slug}`, `${projectTitle(p, lang)} | Louise Peridy`, p.intro[lang]);
    },

    Page: async ({ params }: Props) => {
      const p = findProject((await params).slug);
      if (!p) notFound();
      return <ProjectPage p={p} lang={lang} />;
    },
  };
}
