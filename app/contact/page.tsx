import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Louise Peridy",
  description: "Écrire à Louise Peridy : projet, collaboration, question.",
  alternates: { languages: { fr: "/contact", en: "/en/contact" } },
};

export default function Page() {
  return <ContactPage lang="fr" />;
}
