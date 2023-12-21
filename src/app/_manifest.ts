/**
 * Modifications to MetadataRoute.Manifest will write here and specified on src/app/README.md
 * 
 * form_factor?: 'narrow' | 'wide'
 * manifest_version?: number
 */
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: "Me's",
    manifest_version: 1,
    name: "Me's Portfolio",
    icons: [
      {
        src: "/192x192.png",
        type: "image/png",
        sizes: "232x232",
      },
      {
        src: "/512x512.png",
        type: "image/png",
        sizes: "602x602",
      }
    ],
    id: "/?source=pwa",
    start_url: "/?source=pwa",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    theme_color: "#ffffff",
    description: "A programmer's Portfolio named Esteban Jimenez Valdez, I wish that you have a nice day.",
    screenshots: [
      {
        src: "/cover.png",
        type: "image/png",
        sizes: "1980x1080",
        form_factor: "narrow"
      },
      {
        src: "/cover.png",
        type: "image/png",
        sizes: "1980x1080",
        form_factor: "wide"
      }
    ]
  }
}
