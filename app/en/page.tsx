import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Louise Peridy | Creative developer",
  description:
    "Portfolio of Louise Peridy, a creative developer between code and art: WebGL experiences, 3D worlds, games and web apps.",
  alternates: { languages: { fr: "/", en: "/en" } },
};

export default function Page() {
  return <HomePage lang="en" />;
}
