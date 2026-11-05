import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Louise Peridy",
  description: "All projects by Louise Peridy: web, 3D & WebGL, games and creative work.",
  alternates: { languages: { fr: "/projects", en: "/en/projects" } },
};

export default function Page() {
  return <ProjectsPage lang="en" />;
}
