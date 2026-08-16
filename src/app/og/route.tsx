import { getCloudflareContext } from "@opennextjs/cloudflare"
import { ImageResponse } from "takumi-js/response"

import { fioIconSvg } from "@/shared/assets"

import OgImage from "./og-image"

export const runtime = "nodejs"

const logoSrc = "fio-logo"

async function getLogoData(logoUrl: URL) {
  try {
    const { env } = await getCloudflareContext({ async: true })

    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(logoUrl)

      if (response.ok) {
        return response.arrayBuffer()
      }
    }
  } catch {
    // The Cloudflare context is unavailable in a regular Node.js deployment.
  }

  const response = await fetch(logoUrl)

  if (!response.ok) {
    throw new Error(`Failed to load Fio logo: ${response.status}`)
  }

  return response.arrayBuffer()
}

export function GET(request: Request) {
  const logoUrl = new URL(fioIconSvg.src, request.url)

  return new ImageResponse(
    <OgImage
      title="Next.js starter, already shaped."
      description="Opinionated defaults for shipping the basic Next.js project, not rebuilding the foundation."
      logoSrc={logoSrc}
    />,
    {
      width: 1200,
      height: 630,
      images: [
        {
          src: logoSrc,
          data: () => getLogoData(logoUrl),
        },
      ],
    }
  )
}
