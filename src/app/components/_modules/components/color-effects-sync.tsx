"use client"

import { useColorEffects } from "../hooks/use-color-effects"

/**
 * Render-null component that keeps CSS variables and the favicon in sync
 * with the selected demo color while the components route is mounted.
 */
export default function ColorEffectsSync() {
  useColorEffects()
  return null
}
