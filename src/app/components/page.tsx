import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, InfoIcon, LayersIcon } from "lucide-react"

import { H1, P, Span } from "@/components/base/app-typography"
import { getSEOTags } from "@/lib/seo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ColorEffectsSync from "./_modules/components/color-effects-sync"
import { FioComponentSection } from "./_modules/sections/fio-component-section"
import { ShadcnUiSection } from "./_modules/sections/shadcn-ui-section"

export const metadata: Metadata = getSEOTags({
  title: "Components · Fio Next.js Starter",
  description:
    "Browse Fio's own base components and the shadcn/ui primitives shipped with the starter — pick a colour, try a button, peek at a card.",
  keywords: [
    "fio",
    "components",
    "shadcn",
    "tailwind",
    "next.js",
    "starter",
    "color picker",
  ],
}) as Metadata

export default function ComponentsPage() {
  return (
    <>
      <ColorEffectsSync />
      <div className="container mx-auto px-4 py-12">
        <H1>Components</H1>
        <P variant="lead" className="mt-4">
          A collection of base components built with shadcn/ui and Tailwind CSS.
        </P>
        <Link href="/" className="mt-4 flex items-center gap-2 hover:underline">
          <ArrowLeft size={18} className="text-primary" />
          <Span>Back to home</Span>
        </Link>

        <Tabs defaultValue="fio" className="mt-8 w-full">
          <TabsList>
            <TabsTrigger value="fio">
              <LayersIcon />
              Fio Component
            </TabsTrigger>
            <TabsTrigger value="shadcn">
              <InfoIcon />
              Shadcn UI
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fio" className="mt-6">
            <FioComponentSection />
          </TabsContent>

          <TabsContent value="shadcn" className="mt-6">
            <ShadcnUiSection />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
