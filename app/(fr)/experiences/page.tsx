import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ExperiencePage from "@/components/pages/ExperiencePage";

export const metadata: Metadata = pageMeta(
  "fr",
  "/experiences",
  "Expériences | Louise Peridy",
  "Parcours professionnel et formations de Louise Peridy.",
);

export default function Page() {
  return <ExperiencePage lang="fr" />;
}
