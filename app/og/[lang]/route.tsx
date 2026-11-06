import { LANGS, type Lang } from "@/content/site";
import { ogImage } from "@/lib/ogImage";

/** Share preview images: /og/fr and /og/en, built once at build time. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string }> }) {
  return ogImage((await params).lang as Lang);
}
