import { Icon } from "@shared"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute(`/tanstack-router-and-query`)({
  component: GHpages,
})

export function GHpages() {
  return (
    <div>
      <p className="dark:text-white">Github Pages Base URL</p>
      <Link to="/" className="link-outline mb-6">
        Nav to Home
        <Icon.MetaMask />
      </Link>
    </div>
  )
}
