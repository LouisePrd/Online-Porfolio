import type { Metadata } from "next";
import CvPage from "@/components/pages/CvPage";

export const metadata: Metadata = {
  title: "CV | Louise Peridy",
  description: "CV de Louise Peridy, creative engineer : développement web, UI/UX design, tech & produit.",
  alternates: { canonical: "/cv" },
};

export default function Page() {
  return <CvPage />;
}
