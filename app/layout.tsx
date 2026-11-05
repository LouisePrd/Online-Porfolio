import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Louise Peridy | Développeuse créative",
  description: "Portfolio de Louise Peridy, développeuse créative entre code et art.",
  icons: { icon: "/imgs/props/memoji.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
