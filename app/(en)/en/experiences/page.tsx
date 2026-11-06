import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ExperiencePage from "@/components/pages/ExperiencePage";

export const metadata: Metadata = pageMeta(
  "en",
  "/experiences",
  "Experience | Louise Peridy",
  "Louise Peridy's professional experience and education.",
);

export default function Page() {
  return <ExperiencePage lang="en" />;
}
