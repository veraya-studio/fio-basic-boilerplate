import { HeartIcon, ZapIcon } from "lucide-react"
import Link from "next/link"

import { H2, P, Span } from "@/components/base/app-typography"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { ColorPicker } from "../components/color-picker"
import { SonnerDemo } from "../components/sonner-demo"

function ShadcnUiSection() {
  return (
    <section className="space-y-10">
      <div>
        <H2>Button</H2>
        <P className="mt-2 text-muted-foreground">
          All six variants on the first row. Size + icon + tooltip props on
          the second row.
        </P>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button size="lg" icon={<HeartIcon size={16} />} iconPlacement="left">
            With icon
          </Button>
          <Button size="sm" variant="outline" tooltip="Outline + tooltip">
            Hover me
          </Button>
        </div>
      </div>

      <div>
        <H2>Card</H2>
        <P className="mt-2 text-muted-foreground">
          Composable container with header, content, and footer slots.
        </P>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Default card</CardTitle>
              <CardDescription>
                Title and description live in the header slot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              Content slot holds anything from a paragraph to a chart.
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>Compact card</CardTitle>
              <CardDescription>Same API, tighter padding.</CardDescription>
            </CardHeader>
            <CardContent>Use it for dense lists or side panels.</CardContent>
          </Card>
        </div>
      </div>

      <div>
        <H2>Card compositions</H2>
        <P className="mt-2 text-muted-foreground">
          Composed Card primitives — different slot combinations and size
          variants. All built from the same Card above; just different
          combinations of its slots.
        </P>

        {/* Row — asymmetric: 1 wide card (full anatomy) + 2 stacked compact cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardAction>
                <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-2xl">
                  <ZapIcon size={20} />
                </div>
              </CardAction>
              <CardTitle>Full anatomy</CardTitle>
              <CardDescription>
                Every slot used — CardAction in the header, CardTitle,
                CardDescription, CardContent for the body, and CardFooter
                with a CTA.
              </CardDescription>
            </CardHeader>
            <CardContent>
              This is the densest composition. Useful when a unit needs to
              carry an icon, headline, body copy, and an action together.
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Footer slot
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Minimal</CardTitle>
                <CardDescription>
                  Header + content only — no action or footer slot.
                </CardDescription>
              </CardHeader>
              <CardContent>Body copy goes here.</CardContent>
            </Card>
            <Card size="sm">
              <CardHeader>
                <CardTitle>Compact (sm)</CardTitle>
                <CardDescription>
                  <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">size=&quot;sm&quot;</code>{" "}
                  variant — tighter padding for dense layouts.
                </CardDescription>
              </CardHeader>
              <CardContent>Useful in side panels.</CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 items-center justify-between w-full">
        <div className="flex flex-col lg:gap-3 gap-0 w-full">
          <H2>Tooltip</H2>
          <Span className="text-muted-foreground">
            Hover the button to see the tooltip primitive.
          </Span>
          <div className="mt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover for a tip</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Built on Radix UI primitives.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex flex-col lg:gap-3 gap-0 w-full">
          <H2>Select</H2>
          <Span className="text-muted-foreground">
            Headless dropdown primitive — built on Radix UI Select. The
            picker below drives the live color system on every page.
          </Span>
          <div className="mt-0">
            <ColorPicker />
          </div>
        </div>
      </div>

      {/* Sonner toast */}
      <div className="flex flex-col lg:gap-3 gap-0 w-full">
        <H2>Sonner</H2>
        <Span className="mt-2 text-muted-foreground">
          Toast notifications. Position is passed per call, so the single{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
            &lt;Toaster /&gt;
          </code>{" "}
          mounted in the root layout can render in any of the six corners.
        </Span>
        <div className="mt-0">
          <SonnerDemo />
        </div>
      </div>

      <div className="rounded-lg border border-dashed bg-muted/30 px-6 py-5">
        <P className="text-muted-foreground">
          And so much more at{" "}
          <Link
            href="https://ui.shadcn.com/docs/components"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            shadcn/ui
          </Link>{" "}
          — dozens of accessible, composable primitives ready to drop in.
        </P>
      </div>
    </section>
  )
}

export { ShadcnUiSection }