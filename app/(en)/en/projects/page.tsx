import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ProjectsPage from "@/components/pages/ProjectsPage";

export const metadata: Metadata = pageMeta(
  "en",
  "/projects",
  "Projects | Louise Peridy",
  "All projects by Louise Peridy: web, 3D & WebGL, games and creative work.",
);

export default function Page() {
  return <ProjectsPage lang="en" />;
}
