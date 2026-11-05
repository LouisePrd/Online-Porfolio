import { Archivo_Black, Schibsted_Grotesk } from "next/font/google";

export const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const schibsted = Schibsted_Grotesk({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
