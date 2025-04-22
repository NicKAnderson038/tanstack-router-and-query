import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "./routeTree.gen.ts"
import { queryClient } from "@integrations"

import "./styles.css"
import reportWebVitals from "./reportWebVitals.ts"

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultNotFoundComponent: () => {
    // const navigate = useNavigate()
    // // gh-pages auto-nav
    // if (location.pathname.includes(pgJson.name)) {
    //   navigate({
    //     to: "/",
    //   })
    // }
    return (
      <div>
        <p className="dark:text-white mb-2">Not Found</p>
      </div>
    )
  },
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById("app")
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
