import type { ToasterProps } from "sonner"

type ToastPosition = NonNullable<ToasterProps["position"]>

type ToastPositionOption = {
  value: ToastPosition
  label: string
}

const toastPositions: ToastPositionOption[] = [
  { value: "top-left", label: "Top left" },
  { value: "top-center", label: "Top center" },
  { value: "top-right", label: "Top right" },
  { value: "bottom-left", label: "Bottom left" },
  { value: "bottom-center", label: "Bottom center" },
  { value: "bottom-right", label: "Bottom right" },
]

const DEFAULT_TOAST_POSITION: ToastPosition = "bottom-right"

export { toastPositions, DEFAULT_TOAST_POSITION }
export type { ToastPosition, ToastPositionOption }