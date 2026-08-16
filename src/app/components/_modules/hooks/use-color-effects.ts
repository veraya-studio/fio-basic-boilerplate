"use client"

import { useEffect, useRef } from "react"

import { setFaviconColor } from "@/lib/utils"
import { useColorStore } from "@/stores/color.store"

import { colorOptions } from "../constants/colors"

const COLOR_PROPERTIES = [
  "--primary",
  "--primary-foreground",
  "--ring",
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
  "--chart-5",
  "--sidebar-primary",
  "--sidebar-primary-foreground",
] as const

interface FaviconSnapshot {
  href: string | null
  type: string | null
}

function clearColorOverrides() {
  for (const property of COLOR_PROPERTIES) {
    document.documentElement.style.removeProperty(property)
  }
}

function restoreFavicon(snapshot: FaviconSnapshot | null) {
  if (!snapshot) return

  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (!link) return

  if (snapshot.href) link.setAttribute("href", snapshot.href)
  else link.removeAttribute("href")

  if (snapshot.type) link.setAttribute("type", snapshot.type)
  else link.removeAttribute("type")
}

export function useColorEffects() {
  const color = useColorStore((state) => state.color)
  const faviconSnapshotRef = useRef<FaviconSnapshot | null>(null)

  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    faviconSnapshotRef.current = link
      ? {
          href: link.getAttribute("href"),
          type: link.getAttribute("type"),
        }
      : null

    return () => {
      clearColorOverrides()
      restoreFavicon(faviconSnapshotRef.current)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const colorData = colorOptions.find((option) => option.class === color)

    clearColorOverrides()

    if (!colorData) {
      restoreFavicon(faviconSnapshotRef.current)
      return () => controller.abort()
    }

    const root = document.documentElement
    root.style.setProperty("--primary", colorData.primary500)
    root.style.setProperty("--primary-foreground", colorData.primary950)
    root.style.setProperty("--ring", colorData.primary500)
    root.style.setProperty("--chart-1", colorData.primary400)
    root.style.setProperty("--chart-2", colorData.primary500)
    root.style.setProperty("--chart-3", colorData.primary600)
    root.style.setProperty("--chart-4", colorData.primary700)
    root.style.setProperty("--chart-5", colorData.primary800)
    root.style.setProperty("--sidebar-primary", colorData.primary600)
    root.style.setProperty("--sidebar-primary-foreground", colorData.primary950)

    void setFaviconColor(
      colorData.primary500,
      "/images/fio-icon.svg",
      controller.signal
    )

    return () => controller.abort()
  }, [color])
}
