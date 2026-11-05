import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPage from "@/components/pages/ProjectPage";
import { PROJECTS, findProject } from "@/content/projects";
import type { Lang } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

/** Shared by /projects/[slug] and /en/projects/[slug]. */
export function projectRoute(lang: Lang) {
  return {
    generateStaticParams: () => PROJECTS.map((p) => ({ slug: p.slug })),

    generateMetadata: async ({ params }: Props): Promise<Metadata> => {
      const p = findProject((await params).slug);
      if (!p) return {};
      return {
        title: `${p.title} | Louise Peridy`,
        description: p.intro[lang],
        alternates: { languages: { fr: `/projects/${p.slug}`, en: `/en/projects/${p.slug}` } },
      };
    },

    Page: async ({ params }: Props) => {
      const p = findProject((await params).slug);
      if (!p) notFound();
      return <ProjectPage p={p} lang={lang} />;
    },
  };
}
