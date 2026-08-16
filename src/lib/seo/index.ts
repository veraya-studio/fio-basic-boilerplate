import type { Metadata } from "next"

export type GetSEOTagsProps = Metadata & {
  canonicalUrlRelative?: string
  extraTags?: Record<string, string>
}

export const siteUrl = new URL(process.env.SITE_URL ?? "http://localhost:3000")

const config = {
  siteUrl,
  appName: "Fio Boilerplate",
  appDescription:
    "Fio Boilerplate made with Next JS, Shadcn UI, Tanstack Query, Zustand, etc",
}

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: GetSEOTagsProps = {}) => {
  const ogImage = {
    url: new URL("/og", config.siteUrl),
    width: 1200,
    height: 630,
    alt: "Fio Next.js Starter Template",
  }

  return {
    title: title || config.appName,
    description: description || config.appDescription,
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    metadataBase: config.siteUrl,

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url:
        openGraph?.url || new URL(canonicalUrlRelative || "/", config.siteUrl),
      siteName: openGraph?.title || config.appName,
      locale: "en_IN",
      type: "website",
      images: openGraph?.images || [ogImage],
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      card: "summary_large_image",
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrlRelative || "./",
    },

    ...extraTags,
  }
}
