import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["takumi-js", "@takumi-rs/core", "@takumi-rs/wasm"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akcdn.detik.net.id",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
}

export default nextConfig

initOpenNextCloudflareForDev()
