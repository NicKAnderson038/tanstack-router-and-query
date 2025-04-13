import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import type { QueryClient } from "@tanstack/react-query"

import { Header } from "@common"

import { TanstackQueryLayout, TanstackQueryProvider } from "@integrations"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <TanstackQueryProvider>
        <Header />

        <div className="mt-2 sm:mt-4 ml-2 sm:ml-4 mr-2 sm:mr-4">
          <Outlet />
        </div>
        <TanStackRouterDevtools />

        <TanstackQueryLayout />
      </TanstackQueryProvider>
    </>
  )
}
