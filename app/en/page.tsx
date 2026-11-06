import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = pageMeta(
  "en",
  "/",
  "Louise Peridy | Creative developer",
  "Portfolio of Louise Peridy, a creative developer between code and art: WebGL experiences, 3D worlds, games and web apps.",
);

export default function Page() {
  return <HomePage lang="en" />;
}
