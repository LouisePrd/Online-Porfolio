import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Old URLs from the previous version of the site. */
  async redirects() {
    return [
      { source: "/projects/it/piageon", destination: "/projects/piageon", permanent: true },
      { source: "/projects/playground/les-nananimaux", destination: "/projects/les-nananimaux", permanent: true },
      { source: "/projects/playground/quantum-art", destination: "/projects/quantum-art", permanent: true },
      { source: "/projects/it/preWatch", destination: "/projects/prewatch", permanent: true },
      { source: "/projects/it/architech", destination: "/projects/architech", permanent: true },
      { source: "/projects/it/girlyChaos", destination: "/projects/girly-chaos", permanent: true },
      { source: "/projects/it/regard", destination: "/projects/regard", permanent: true },
      { source: "/projects/playground/ply-converter", destination: "/projects/ply-converter", permanent: true },
      { source: "/projects/it/averagePlayer", destination: "/projects/average-player", permanent: true },
      { source: "/projects/it/rerAGate", destination: "/projects/rer-a-gate", permanent: true },
      { source: "/projects/it/pigeonGate", destination: "/projects/pigeon-gate", permanent: true },
      { source: "/projects/it/marieGobelins", destination: "/projects/mari-e", permanent: true },
      { source: "/projects/it/inusTale", destination: "/projects/inus-tale", permanent: true },
      { source: "/projects/it/elixir", destination: "/projects/elixir", permanent: true },
      { source: "/projects/playground/making-of-sauvage", destination: "/projects/making-of-sauvage", permanent: true },
      { source: "/projects/it/auFilDuTemps", destination: "/projects/au-fil-du-temps", permanent: true },
      { source: "/projects/it", destination: "/projects", permanent: true },
      { source: "/projects/playground", destination: "/projects", permanent: true },
      { source: "/projects/3d", destination: "/projects", permanent: true },
      { source: "/projects/audiovisual", destination: "/projects", permanent: true },
      { source: "/experiences/:page(professional|associative|cv)", destination: "/experiences", permanent: true },
      { source: "/inspirations", destination: "/#inspirations", permanent: true },
    ];
  },
};

export default nextConfig;
