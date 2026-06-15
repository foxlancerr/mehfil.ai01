import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mehfil.ai — Full-Service Digital Agency",
    short_name: "Mehfil.ai",
    description:
      "Web development, AI automation, SEO, digital marketing, Web3 — all under one roof.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#E11D48",
    orientation: "portrait-primary",
    categories: ["business", "technology", "productivity"],
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}
