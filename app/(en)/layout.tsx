import RootLayout, { rootMetadata } from "@/lib/RootLayout";

export const metadata = rootMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout lang="en">{children}</RootLayout>;
}
