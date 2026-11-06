import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ProjectsPage from "@/components/pages/ProjectsPage";

export const metadata: Metadata = pageMeta(
  "fr",
  "/projects",
  "Projets | Louise Peridy",
  "Tous les projets de Louise Peridy : web, 3D & WebGL, jeux et créations.",
);

export default function Page() {
  return <ProjectsPage lang="fr" />;
}
