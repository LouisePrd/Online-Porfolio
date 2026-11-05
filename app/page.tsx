import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Louise Peridy | Développeuse créative",
  description:
    "Portfolio de Louise Peridy, développeuse créative entre code et art : expériences WebGL, univers 3D, jeux et applis web.",
  alternates: { languages: { fr: "/", en: "/en" } },
};

export default function Page() {
  return <HomePage lang="fr" />;
}
