import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ProjectsPage from "@/components/pages/ProjectsPage";

export const metadata: Metadata = pageMeta(
  "en",
  "/projects",
  "Projects | Louise Peridy",
  "All projects by Louise Peridy: web, apps & games, art & design.",
);

export default function Page() {
  return <ProjectsPage lang="en" />;
}
