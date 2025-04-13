import { Heading } from "@shared"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/lazy_load")({
  component: Component,
})

function Component() {
  return <Heading.H3>Lazy Load</Heading.H3>
}
