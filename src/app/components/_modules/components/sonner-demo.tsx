"use client"

import { useState } from "react"
import {
  BellIcon,
  CircleCheckIcon,
  InfoIcon,
  OctagonXIcon,
  RocketIcon,
  SparklesIcon,
  TriangleAlertIcon,
  Undo2Icon,
  XIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import {
  DEFAULT_TOAST_POSITION,
  toastPositions,
  type ToastPosition,
} from "../constants/toast.constants"

type ToastTrigger = {
  key: string
  label: string
  icon: React.ReactNode
  variant: ButtonProps["variant"]
  run: (position: ToastPosition) => void
}

/** Stands in for a real mutation so `toast.promise` has something to await. */
function fakeDeploy() {
  return new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: "fio-basic-boilerplate" }), 1600)
  )
}

const toastTriggers: ToastTrigger[] = [
  {
    key: "default",
    label: "Default",
    icon: <BellIcon />,
    variant: "default",
    run: (position) =>
      toast("Event has been created", {
        description: "Sunday, December 3 at 9:00 AM",
        position,
      }),
  },
  {
    key: "success",
    label: "Success",
    icon: <CircleCheckIcon />,
    variant: "secondary",
    run: (position) =>
      toast.success("Changes saved", {
        description: "Your profile is up to date.",
        position,
      }),
  },
  {
    key: "info",
    label: "Info",
    icon: <InfoIcon />,
    variant: "secondary",
    run: (position) =>
      toast.info("Heads up", {
        description: "A new version of the starter is available.",
        position,
      }),
  },
  {
    key: "warning",
    label: "Warning",
    icon: <TriangleAlertIcon />,
    variant: "secondary",
    run: (position) =>
      toast.warning("Storage almost full", {
        description: "You have used 92% of your quota.",
        position,
      }),
  },
  {
    key: "error",
    label: "Error",
    icon: <OctagonXIcon />,
    variant: "destructive",
    run: (position) =>
      toast.error("Could not save", {
        description: "The server rejected the request. Try again.",
        position,
      }),
  },
  {
    key: "action",
    label: "With action",
    icon: <Undo2Icon />,
    variant: "outline",
    run: (position) =>
      toast("Message archived", {
        description: "Moved out of your inbox.",
        position,
        action: {
          label: "Undo",
          onClick: () => toast.success("Message restored", { position }),
        },
      }),
  },
  {
    key: "promise",
    label: "Promise",
    icon: <RocketIcon />,
    variant: "outline",
    run: (position) =>
      toast.promise(fakeDeploy(), {
        loading: "Deploying…",
        success: (data) => `${data.name} deployed successfully`,
        error: "Deployment failed",
        position,
      }),
  },
  {
    key: "custom",
    label: "Custom JSX",
    icon: <SparklesIcon />,
    variant: "outline",
    run: (position) =>
      toast.custom(
        (id) => (
          <div className="bg-popover text-popover-foreground flex w-[356px] max-w-[calc(100vw-2rem)] items-start gap-3 rounded-2xl border p-4 shadow-lg">
            <div className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-xl">
              <SparklesIcon className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-sm font-medium">
                Fully custom toast
              </p>
              <p className="text-muted-foreground mt-0.5 text-xs">
                Any JSX you want — this one uses the project tokens.
              </p>
            </div>
            <button
              type="button"
              onClick={() => toast.dismiss(id)}
              aria-label="Dismiss notification"
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/30 -m-1 cursor-pointer rounded-md p-1 transition-colors focus-visible:ring-3 focus-visible:outline-none"
            >
              <XIcon className="size-4" />
            </button>
          </div>
        ),
        { position }
      ),
  },
]

function SonnerDemo() {
  const [position, setPosition] = useState<ToastPosition>(
    DEFAULT_TOAST_POSITION
  )

  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-8">
      <div className="space-y-2 lg:border-r-2 lg:pr-8">
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Position
        </p>
        <div
          role="group"
          aria-label="Toast position"
          className="bg-muted/30 grid w-full grid-cols-3 gap-1.5 rounded-3xl border p-1.5 lg:w-fit mt-4"
        >
          {toastPositions.map((option) => {
            const isActive = option.value === position

            return (
              <Button
                key={option.value}
                type="button"
                size="xs"
                variant={isActive ? "default" : "ghost"}
                aria-pressed={isActive}
                onClick={() => {
                  setPosition(option.value)
                  toast(option.label, {
                    position: option.value,
                    duration: 1500,
                  })
                }}
                className={cn(
                  "w-full lg:w-28",
                  !isActive && "text-muted-foreground"
                )}
              >
                {option.label}
              </Button>
            )
          })}
        </div>
        <p className="text-muted-foreground text-xs">
          Toasts stack in the corner you pick.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Trigger
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {toastTriggers.map((trigger) => (
            <Button
              key={trigger.key}
              type="button"
              size="sm"
              variant={trigger.variant}
              icon={trigger.icon}
              iconPlacement="left"
              onClick={() => trigger.run(position)}
            >
              {trigger.label}
            </Button>
          ))}
          <Button
            type="button"
            size="sm"
            variant="link"
            onClick={() => toast.dismiss()}
          >
            Dismiss all
          </Button>
        </div>
        <code className="bg-muted text-muted-foreground inline-block rounded px-2 py-1 font-mono text-xs">
          toast.success(&quot;Changes saved&quot;, &#123; position: &quot;
          {position}&quot; &#125;)
        </code>
      </div>
    </div>
  )
}

export { SonnerDemo }