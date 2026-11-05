import type { Metadata } from "next";
import ExperiencePage from "@/components/pages/ExperiencePage";

export const metadata: Metadata = {
  title: "Experience | Louise Peridy",
  description: "Louise Peridy's professional experience and education.",
  alternates: { languages: { fr: "/experiences", en: "/en/experiences" } },
};

export default function Page() {
  return <ExperiencePage lang="en" />;
}
