import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = pageMeta(
  "fr",
  "/contact",
  "Contact | Louise Peridy",
  "Écrire à Louise Peridy : projet, collaboration, question.",
);

export default function Page() {
  return <ContactPage lang="fr" />;
}
