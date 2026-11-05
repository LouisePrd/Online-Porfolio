import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projets | Louise Peridy",
  description: "Tous les projets de Louise Peridy : web, 3D & WebGL, jeux et créations.",
  alternates: { languages: { fr: "/projects", en: "/en/projects" } },
};

export default function Page() {
  return <ProjectsPage lang="fr" />;
}
