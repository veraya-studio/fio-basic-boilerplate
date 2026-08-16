'use client'

import { H1, P } from '@/components/base/app-typography'
import { fioIconSvg } from '@/shared/assets'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ComponentIcon, ServerIcon, WebhookIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from '@bprogress/next/app'

function HomeContainer() {
  const year = new Date().getFullYear()
  const router = useRouter()

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center py-12 text-center">
      <div className="flex w-full max-w-md flex-col items-center text-center gap-4">
        <div
          role="img"
          aria-label="Fio Logo"
          className="bg-primary mx-auto rounded-xl"
          style={{
            width: 96,
            height: 96,
            WebkitMaskImage: `url(${fioIconSvg.src})`,
            maskImage: `url(${fioIconSvg.src})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />

        <div className="flex flex-col items-center gap-4">
          <Badge
            variant="outline"
            className="h-7! border-amber-500/30 bg-amber-500/10 px-3 text-sm font-semibold text-amber-600 dark:text-amber-400"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
            </span>
            Early WIP
          </Badge>

          <H1 className="text-primary">Fio Next.js Starter Template</H1>

          <P variant="muted" className="text-base">
            A modern Next.js foundation with shadcn/ui, TanStack React Query, and a clean baseline for shipping.
          </P>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button icon={<ComponentIcon size={20} />} iconPlacement='right' size="lg" onClick={() => {
              router.push('/components')
            }}>
              See components
            </Button>
            <Link href="/demo/react-query">
              <Button
                icon={<WebhookIcon size={20} />}
                iconPlacement='right'
                size="lg"
                variant="secondary"
              >
                Tanstack Query example
              </Button>
            </Link>
            <Link href="/demo/server-side">
              <Button
                icon={<ServerIcon size={20} />}
                iconPlacement='right'
                size="lg"
                variant="secondary"
              >
                Server side example
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center">
        <P variant="small" className="text-muted-foreground">
          &copy; {year} Satya Wikananda
        </P>
      </footer>
    </div>
  )
}

export default HomeContainer