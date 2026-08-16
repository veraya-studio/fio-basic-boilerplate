"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { confirm, warn } from "@/components/base/app-modals"
import { modals, type ModalConfig } from "@/hooks/use-modals"
import { Span } from "@/components/base/app-typography"

/**
 * Demo surface for the shared modal system. Each demo calls an imperative
 * helper from `@/components/base/app-modals` — the actual `<Dialog>` JSX lives
 * in the singleton `<Modals/>` mounted in the root layout.
 */
export function ModalsDemo() {
  const [lastAction, setLastAction] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="destructive"
          onClick={() =>
            confirm({
              title: "Delete project?",
              description: "This action cannot be undone.",
              smallText: "All files will be permanently removed.",
              onConfirm: async () => {
                // Simulate an async side-effect — the confirm button will
                // show a spinner while this resolves.
                await new Promise((resolve) => setTimeout(resolve, 1200))
                setLastAction("Project deleted")
              },
            }).open()
          }
        >
          Open confirm
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            warn({
              title: "Heads up",
              description: "Your session will expire in 5 minutes.",
              smallText: "Save your work to avoid losing changes.",
            }).open()
          }
        >
          Open warn
        </Button>

        <Button
          onClick={() => {
            // The custom modal shows the raw `modals()` factory API. `content`
            // and `footer` accept either a plain node or a function that
            // receives `{ close }` — useful when the body or footer needs
            // access to the close handler.
            const config: ModalConfig = {
              id: "custom-modal",
              title: "Custom modal",
              description: "Built directly from the `modals()` factory.",
              content({ close }) {
                return (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground">
                      Anything you can render can live here — forms, media,
                      nested layouts. Use the injected `close` to dismiss.
                    </p>
                    <Button variant="ghost" onClick={close}>
                      Dismiss from inside content
                    </Button>
                  </div>
                )
              },
              footer({ close }) {
                return (
                  <>
                    <Button variant="outline" onClick={close}>
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        setLastAction("Custom modal confirmed")
                        close()
                      }}
                    >
                      Confirm
                    </Button>
                  </>
                )
              },
            }

            modals(config).open()
          }}
        >
          Open custom
        </Button>
      </div>

      {lastAction && (
        <Span className="text-xs text-muted-foreground">
          Last action: <span className="text-foreground">{lastAction}</span>
        </Span>
      )}
    </div>
  )
}
