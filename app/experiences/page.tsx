import type { Metadata } from "next";
import ExperiencePage from "@/components/pages/ExperiencePage";

export const metadata: Metadata = {
  title: "Expériences | Louise Peridy",
  description: "Parcours professionnel et formations de Louise Peridy.",
  alternates: { languages: { fr: "/experiences", en: "/en/experiences" } },
};

export default function Page() {
  return <ExperiencePage lang="fr" />;
}
