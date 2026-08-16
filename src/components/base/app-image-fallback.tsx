'use client'

import { ImageProps } from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

type AppImageFallbackProps = Omit<ImageProps, "src"> & {
  src?: string | null
  placeholderSrc: string
  useIO?: boolean
  rootMargin?: string
  threshold?: number | number[]
  isLoading?: boolean
}

/**
 * AppImageFallback
 *
 * A drop-in replacement for next/image that adds:
 * - Fallback support: swaps to a placeholder image when the main src fails.
 * - Blur placeholder: shows the image blurred while loading with its actual dimensions.
 * - Optional IntersectionObserver-based lazy gate: only mounts the image
 *   once it enters the viewport, controlled via `useIO`, `rootMargin`, and `threshold`.
 *
 * Behavior:
 * - Uses `src` if provided, otherwise falls back to `placeholderSrc`.
 * - On load error, automatically replaces the current src with `placeholderSrc`.
 * - Tracks load state to fade in the image with a smooth opacity transition
 *   while showing a blurred preview of the actual image.
 * - When `useIO` is true, the image isn't rendered until the wrapper div
 *   intersects the viewport; otherwise, it behaves like a normal image.
 *
 * Props:
 * - `src?: string | null` – primary image source (optional).
 * - `placeholderSrc: string` – guaranteed fallback source.
 * - `useIO?: boolean` – enable/disable IntersectionObserver gating.
 * - `rootMargin?: string` – IO root margin for early/late loading.
 * - `threshold?: number | number[]` – IO threshold for visibility detection.
 * - `isLoading?: boolean` – external loading flag to force skeleton.
 * - All other props are forwarded to `next/image`.
 */
function AppImageFallback({
  src,
  placeholderSrc,
  useIO = false,
  rootMargin = '200px',
  threshold = 0,
  alt,
  isLoading = false,
  ...rest
}: AppImageFallbackProps) {
  const { loading, className, width, height, ...imageProps } = rest
  const gateRef = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(!useIO)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [hasErrored, setHasErrored] = useState(false)
  const [blurDataUrl, setBlurDataUrl] = useState<string>('')

  const currentSrc = useMemo(() => {
    if (hasErrored || !src) return placeholderSrc
    return src
  }, [hasErrored, src, placeholderSrc])

  // Lazy load handling
  useEffect(() => {
    if (!useIO || !gateRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { root: null, rootMargin, threshold }
    )
    observer.observe(gateRef.current)
    return () => observer.disconnect()
  }, [useIO, rootMargin, threshold])

  const handleError = () => {
    setHasErrored(true)
  }

  const handleLoad = () => {
    setIsImageLoaded(true)
    setBlurDataUrl(currentSrc)
  }

  const showBlur = (isLoading || !isImageLoaded) && blurDataUrl

  return (
    <div ref={gateRef} className="relative w-full h-full overflow-hidden">
      {showBlur && (
        <Image
          src={blurDataUrl}
          alt=""
          width={width}
          height={height}
          className={cn(
            "absolute inset-0 w-full h-full object-cover filter blur-xl scale-110",
            className
          )}
        />
      )}
      {showBlur && !blurDataUrl && (
        <Skeleton className="absolute inset-0 w-full h-full bg-neutral-200 rounded-md" />
      )}
      {isInView && (
        <Image
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          onError={handleError}
          onLoad={handleLoad}
          loading={loading ?? "lazy"}
          className={cn(
            "transition-opacity duration-500 ease-in-out",
            showBlur ? "opacity-0" : "opacity-100",
            className
          )}
          {...imageProps}
        />
      )}
    </div>
  )
}

export default AppImageFallback