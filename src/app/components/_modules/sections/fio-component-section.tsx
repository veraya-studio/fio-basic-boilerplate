import {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LI,
  OL,
  P,
  Span,
  UL,
} from "@/components/base/app-typography"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AppImageFallback from "@/components/base/app-image-fallback"
import { fionyAlveria } from "@/shared/assets"

import { ColorPicker } from "../components/color-picker"
import { LoadingSimulationDemo } from "../components/loading-simulation-demo"
import { ModalsDemo } from "../components/modals-demo"

const IMAGE_SIZE = 256

function FioComponentSection() {
  return (
    <div className="space-y-10">
      <section>
        <H2>Color Palette</H2>
        <P className="mt-2 text-muted-foreground">
          Select a color palette to dynamically change the primary color theme.
          The page icon, favicon, and progress bar all update live.
        </P>
        <div className="mt-6">
          <ColorPicker />
        </div>
      </section>

      <section>
        <H2>App Image Fallback</H2>
        <P className="mt-2 text-muted-foreground">
          A drop-in replacement for <Code>next/image</Code> with a guaranteed{" "}
          <Code>placeholderSrc</Code> fallback, a blurred preview while loading,
          and an optional IntersectionObserver gate so the image only mounts
          when it scrolls into view.
        </P>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Default</CardTitle>
              <CardDescription>
                Pass <Code>src</Code> + <Code>placeholderSrc</Code>; the
                placeholder swaps in automatically if the primary fails.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppImageFallback
                src={fionyAlveria.src}
                placeholderSrc={fionyAlveria.src}
                alt="Fiony"
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                className="rounded-xl mx-auto"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lazy via IO</CardTitle>
              <CardDescription>
                <Code>useIO</Code> delays mount until the wrapper enters the
                viewport — useful for below-the-fold images. Scroll this card
                into view to see it appear.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppImageFallback
                src={fionyAlveria.src}
                placeholderSrc={fionyAlveria.src}
                alt="Fiony (lazy)"
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                useIO
                rootMargin="100px"
                threshold={0.1}
                className="rounded-xl mx-auto"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>External loading</CardTitle>
              <CardDescription>
                Pass <Code>isLoading</Code> to force the skeleton state from
                outside — e.g. while the surrounding data is still fetching.
                The demo cycles it automatically and lets you toggle by hand.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoadingSimulationDemo size={IMAGE_SIZE} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <H2>Typography</H2>
        <P className="mt-2 text-muted-foreground">
          Base typography primitives. Every element below is rendered through{" "}
          <Code>app-typography</Code> — heading scale, paragraph variants, and
          inline / list / quote / code helpers.
        </P>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Headings</CardTitle>
              <CardDescription>
                <Code>H1</Code>–<Code>H6</Code> — semantic heading scale.{" "}
                <Code>H1</Code> and <Code>H2</Code> accept a <Code>balance</Code>{" "}
                prop (defaults to <Code>true</Code>) for balanced word wrapping.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <H4>Heading 4</H4>
              <H5>Heading 5</H5>
              <H6>Heading 6</H6>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Paragraph variants</CardTitle>
              <CardDescription>
                <Code>P</Code> accepts a <Code>variant</Code> prop:{" "}
                <Code>default</Code>, <Code>lead</Code>, <Code>muted</Code>,{" "}
                <Code>large</Code>, or <Code>small</Code>.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <P variant="lead">
                Lead — for introductions and stand-first paragraphs.
              </P>
              <P variant="default">
                Default — the standard body paragraph. Use this for the bulk of
                editorial copy.
              </P>
              <P variant="large">
                Large — emphasised body copy that sits between lead and default.
              </P>
              <P variant="muted">
                Muted — for helper text under form fields, captions, and
                secondary metadata.
              </P>
              <P variant="small">
                Small — fine print, copyright lines, timestamps.
              </P>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inline & lists</CardTitle>
              <CardDescription>
                <Code>Span</Code> passes class names straight through,{" "}
                <Code>UL</Code> / <Code>OL</Code> / <Code>LI</Code> give you a
                consistent list rhythm with sensible defaults.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <P>
                A paragraph with a{" "}
                <Span className="font-semibold text-primary">
                  highlighted span
                </Span>{" "}
                embedded inside the body copy.
              </P>
              <UL>
                <LI>Unordered list item one</LI>
                <LI>Unordered list item two</LI>
                <LI>Unordered list item three</LI>
              </UL>
              <OL>
                <LI>Ordered list item one</LI>
                <LI>Ordered list item two</LI>
                <LI>Ordered list item three</LI>
              </OL>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blockquote & code</CardTitle>
              <CardDescription>
                <Code>Blockquote</Code> indents and italicises quoted text.{" "}
                <Code>Code</Code> is for inline monospaced snippets — use it for
                prop names inside running copy.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Blockquote>
                Typography is the craft of endowing human language with a
                durable visual form.
              </Blockquote>
              <P>
                Pair it with <Code>Code</Code> for inline references like{" "}
                <Code>variant=&quot;lead&quot;</Code> or{" "}
                <Code>isLoading=&#123;true&#125;</Code>.
              </P>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <H2>Modals</H2>
        <P className="mt-2 text-muted-foreground">
          A single <Code>&lt;Modals /&gt;</Code> is mounted in the root layout.
          Call sites open dialogs imperatively via the{" "}
          <Code>confirm()</Code>, <Code>warn()</Code>, and <Code>modals()</Code>{" "}
          helpers — no local <Code>useState</Code>, no redeclared{" "}
          <Code>&lt;Dialog&gt;</Code> JSX.
        </P>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Confirm & warn helpers</CardTitle>
              <CardDescription>
                <Code>confirm(&#123; title, onConfirm &#125;)</Code> opens a
                destructive confirmation with an async-aware spinner.{" "}
                <Code>warn(&#123; title, description &#125;)</Code> opens a
                single-button warning dialog.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ModalsDemo />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types</CardTitle>
              <CardDescription>
                The factory accepts a <Code>ModalConfig</Code> from{" "}
                <Code>@/hooks/use-modals</Code>. Pass <Code>title</Code>,{" "}
                <Code>description</Code>, <Code>content</Code>, and{" "}
                <Code>footer</Code> as either nodes or{" "}
                <Code>(&#123; close &#125;) =&gt; node</Code> functions that
                receive an injected close handler.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Code>
{`type ModalConfig = {
  id: string
  title?: ReactNode
  description?: ReactNode
  content?:
    | ReactNode
    | (({ close }: { close: () => void }) => ReactNode)
  footer?:
    | ReactNode
    | (({ close }: { close: () => void }) => ReactNode)
  centeredTitle?: boolean
  dismissable?: boolean
  className?: string
}`}
              </Code>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export { FioComponentSection }