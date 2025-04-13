import { Link } from "@tanstack/react-router"

export const Header = () => {
  return (
    <header className="p-2 flex gap-2 bg-white dark:bg-black text-black justify-between">
      <nav className="flex flex-row flex-wrap gap-2">
        <Link
          to="/"
          className="px-2 font-bold dark:text-white"
          activeProps={{
            className: "text-blue-500 hover:text-blue-800",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>

        <Link
          to="/demo/tanstack-query"
          className="px-2 font-bold dark:text-white"
          activeProps={{
            className: "text-blue-500 hover:text-blue-800",
          }}
          activeOptions={{ exact: true }}
        >
          <span className="flex gap-2">
            TanStack<span className="hidden sm:block">Query</span>
          </span>
        </Link>

        <Link
          to="/about"
          className="px-2 font-bold dark:text-white"
          activeProps={{
            className: "text-blue-500 hover:text-blue-800",
          }}
        >
          About
        </Link>

        <Link
          to="/lazy_load"
          className="px-2 font-bold dark:text-white"
          activeProps={{
            className: "text-blue-500 hover:text-blue-800",
          }}
        >
          Lazy
        </Link>

        <Link
          to="/posts"
          className="px-2 font-bold dark:text-white"
          activeProps={{
            className: "text-blue-500 hover:text-blue-800",
          }}
        >
          Posts
        </Link>
      </nav>
    </header>
  )
}
