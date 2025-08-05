export const seoConfig = {
  baseURL: "https://nebula.com",
  description: "Nebula - Modern Web Application built with Astro and TailwindCSS",
  type: "website",
  image: {
    url: "/favicon.svg",
    alt: "Nebula Logo",
    width: 1200,
    height: 630,
  },
  siteName: "Nebula",
  twitter: {
    card: "summary_large_image",
  },
};

export const manifest = {
  name: "Nebula",
  short_name: "Nebula",
  description: "Nebula - Modern Web Application",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#6366f1",
  orientation: "portrait-primary",
  scope: "/",
  icons: [
    {
      src: "/icon.webp",
      sizes: "192x192",
      type: "image/webp"
    },
    {
      src: "/icon.webp", 
      sizes: "512x512",
      type: "image/webp"
    }
  ],
  categories: ["business", "productivity"],
  lang: "en",
  dir: "ltr"
};