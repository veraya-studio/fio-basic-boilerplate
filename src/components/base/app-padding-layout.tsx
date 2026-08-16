"use client"

import { cn } from "@/lib/utils"

interface AppPaddingLayoutProps {
  children: React.ReactNode
  className?: string
  as?: "main" | "div"
}

function AppPaddingLayout({
  children,
  className,
  as: Component = "div"
}: AppPaddingLayoutProps) {
  return (
    <Component className={cn("flex flex-col gap-6 px-4 md:px-8 lg:px-16 xl:px-32 pb-4 lg:pb-6 min-h-dvh", className)}>
      {children}
    </Component>
  )
}

export default AppPaddingLayout