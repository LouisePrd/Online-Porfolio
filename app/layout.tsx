import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

export const metadata = {
  title: "Louise PERIDY | Creative Portfolio",
  description: "Student at IMAC - ESIEE Paris",
  icons: {
    icon: "/assets/imgs/props/memoji.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
