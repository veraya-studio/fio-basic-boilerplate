import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/seo"

const routes = [
  "/",
  "/components",
  "/demo/react-query",
  "/demo/server-side",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: route === "/" ? "monthly" : "weekly",
    priority: route === "/" ? 1 : 0.7,
  }))
}
