import type { Lang } from "./site";

export interface Inspiration {
  name: string;
  type: Record<Lang, string>;
  url: string;
  img: string;
  w: number;
  h: number;
  /** Optional display ratio (width / height); the image is center-cropped to it */
  ratio?: number;
}

export const INSPIRATIONS: Inspiration[] = [
  { name: "Vewn", type: { fr: "Artiste", en: "Artist" }, url: "https://www.youtube.com/@vewn", img: "/imgs/inspos/vewn.webp", w: 2990, h: 1676, ratio: 1.3 },
  { name: "Blink-182", type: { fr: "Musique", en: "Music" }, url: "https://www.youtube.com/@blink182VEVO", img: "/imgs/inspos/blink-182.webp", w: 1081, h: 1441 },
  { name: "Plastic Beach", type: { fr: "Album", en: "Album" }, url: "https://www.youtube.com/channel/UCfIXdjDQH9Fau7y99_Orpjw", img: "/imgs/inspos/plastic-beach.webp", w: 953, h: 953 },
  { name: "The End of the F** World", type: { fr: "Série", en: "TV series" }, url: "https://www.allocine.fr/series/ficheserie_gen_cserie=22881.html", img: "/imgs/inspos/teofw.png", w: 1920, h: 1080 },
  { name: "Odezenne", type: { fr: "Clip musical", en: "Music video" }, url: "https://www.youtube.com/watch?v=b97GGASOcwg", img: "/imgs/inspos/odezenne.webp", w: 2314, h: 1275 },
  { name: "Sex Pistols", type: { fr: "Graphisme", en: "Graphic design" }, url: "https://www.theguardian.com/artanddesign/gallery/2016/nov/07/god-save-sex-pistols-book", img: "/imgs/inspos/sex-pistols.png", w: 2020, h: 3000 },
  { name: "Nikon - Imagine", type: { fr: "Court métrage", en: "Short film" }, url: "https://www.youtube.com/watch?v=Fj8-CGbi2XM", img: "/imgs/inspos/imagine-nikon.png", w: 1280, h: 720, ratio: 1.4 },
  { name: "Onehaaaa", type: { fr: "Artiste", en: "Artist" }, url: "https://www.instagram.com/onehaaaa/", img: "/imgs/inspos/onehaaaa.webp", w: 1099, h: 1099 },
  { name: "Vice", type: { fr: "Média", en: "Media" }, url: "https://www.vice.com/fr", img: "/imgs/inspos/vice-media.webp", w: 500, h: 357 },
  { name: "59 Rivoli", type: { fr: "Lieu d’art", en: "Art space" }, url: "https://www.59rivoli.org/accueil/", img: "/imgs/inspos/rivoli.webp", w: 3024, h: 4032 },
  { name: "Siames", type: { fr: "Clip musical", en: "Music video" }, url: "https://www.youtube.com/watch?v=hM7Eh0gGNKA", img: "/imgs/inspos/siames.webp", w: 3024, h: 1694, ratio: 1.4 },
  { name: "Boris Vian", type: { fr: "Poésie", en: "Poetry" }, url: "https://www.babelio.com/livres/Vian-Je-voudrais-pas-crever/3990", img: "/imgs/inspos/boris-vian-poeme.webp", w: 1080, h: 1080 },
];
