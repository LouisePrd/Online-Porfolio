import { OG_SIZE, ogImage } from "@/lib/ogImage";

export const alt = "Louise Peridy, creative developer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage("en");
}
