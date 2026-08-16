import type { Metadata } from "next"
import { DM_Sans, Figtree, Geist_Mono } from "next/font/google"
import Script from "next/script"

import "@/styles/globals.css"
import AppPaddingLayout from "@/components/base/app-padding-layout"
import { Modals } from "@/components/base/app-modals"
import BprogressProvider from "@/components/provider/bprogress-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { getSEOTags } from "@/lib/seo"
import { cn } from "@/lib/utils"

const figtreeHeading = Figtree({
  subsets: ["latin"],
  variable: "--font-heading",
})

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = getSEOTags() as Metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontMono.variable,
        dmSans.variable,
        figtreeHeading.variable
      )}
    >
      <body className="h-screen">
        <ThemeProvider>
          <Toaster />
          <Modals />
          <BprogressProvider>
            <TooltipProvider>
              <AppPaddingLayout as="main">{children}</AppPaddingLayout>
            </TooltipProvider>
          </BprogressProvider>
        </ThemeProvider>
        {/* impeccable-live-start */}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="http://localhost:8400/live.js"
            strategy="afterInteractive"
          />
        )}
        {/* impeccable-live-end */}
      </body>
    </html>
  )
}
