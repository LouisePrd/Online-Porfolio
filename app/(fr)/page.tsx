import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = pageMeta(
  "fr",
  "/",
  "Louise Peridy | Développeuse créative",
  "Portfolio de Louise Peridy, développeuse créative entre code et art : expériences WebGL, univers 3D, jeux et applis web.",
);

export default function Page() {
  return <HomePage lang="fr" />;
}
