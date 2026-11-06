import { OG_SIZE, ogImage } from "@/lib/ogImage";

export const alt = "Louise Peridy, développeuse créative";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage("fr");
}
