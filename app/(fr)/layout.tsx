import RootLayout, { rootMetadata } from "@/lib/RootLayout";

export const metadata = rootMetadata("fr");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout lang="fr">{children}</RootLayout>;
}
