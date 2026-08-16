"use client"

import { useEffect, useState } from "react"

import AppImageFallback from "@/components/base/app-image-fallback"
import { Button } from "@/components/ui/button"
import { fionyAlveria } from "@/shared/assets"

type LoadingSimulationDemoProps = {
  size: number
}

/**
 * Cycles an image between loaded and loading states so the `isLoading`
 * prop on `AppImageFallback` actually has something to react to. Auto-toggles
 * every couple of seconds, with a manual button for ad-hoc triggering.
 *
 * Kept as its own client component because the surrounding Fio section is
 * rendered server-side for SEO — only this card needs state.
 */
function LoadingSimulationDemo({ size }: LoadingSimulationDemoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [autoCycle, setAutoCycle] = useState(true)

  useEffect(() => {
    if (!autoCycle) return
    const id = setInterval(() => {
      setIsLoading((prev) => !prev)
    }, 1800)
    return () => clearInterval(id)
  }, [autoCycle])

  return (
    <div className="flex flex-col items-center gap-3">
      <AppImageFallback
        src={fionyAlveria.src}
        placeholderSrc={fionyAlveria.src}
        alt="Fiony (loading)"
        width={size}
        height={size}
        isLoading={isLoading}
        className="rounded-xl"
      />
      <div className="flex items-center gap-2">
        <span
          aria-live="polite"
          className="rounded-full bg-muted px-2.5 py-1 font-mono text-xs"
        >
          {isLoading ? "loading" : "loaded"}
        </span>
        <Button
          size="xs"
          variant="outline"
          onClick={() => {
            setAutoCycle(false)
            setIsLoading((prev) => !prev)
          }}
        >
          Toggle
        </Button>
        <Button
          size="xs"
          variant={autoCycle ? "default" : "secondary"}
          onClick={() => setAutoCycle((prev) => !prev)}
        >
          {autoCycle ? "Pause" : "Resume"}
        </Button>
      </div>
    </div>
  )
}

export { LoadingSimulationDemo }