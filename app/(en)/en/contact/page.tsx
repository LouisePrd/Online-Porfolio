import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = pageMeta(
  "en",
  "/contact",
  "Contact | Louise Peridy",
  "Write to Louise Peridy: project, collaboration, question.",
);

export default function Page() {
  return <ContactPage lang="en" />;
}
