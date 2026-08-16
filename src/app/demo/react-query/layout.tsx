import type { ReactNode } from "react"

import ReactQueryProvider from "@/components/provider/react-query-provider"

interface ReactQueryDemoLayoutProps {
  children: ReactNode
}

export default function ReactQueryDemoLayout({
  children,
}: ReactQueryDemoLayoutProps) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
