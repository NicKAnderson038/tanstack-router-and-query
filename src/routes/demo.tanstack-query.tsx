import { Heading, Text } from "@shared"
import { createFileRoute } from "@tanstack/react-router"
import { usePeople } from "./-queryApi"

export const Route = createFileRoute("/demo/tanstack-query")({
  component: TanStackQueryDemo,
  pendingComponent: () => <Text>Loading...</Text>,
})

function TanStackQueryDemo() {
  const { data, isFetching, refetch } = usePeople.suspenseQuery()
  console.log(isFetching, data)
  return (
    <>
      <Heading.H3>People list from Swapi</Heading.H3>
      <ul className="dark:text-white">
        {data?.map((person: { name: string }) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <button
        className="btn-primary mt-2"
        onClick={() => refetch()}
        disabled={isFetching}
      >
        {isFetching ? "Loading..." : "Refetch"}
      </button>
    </>
  )
}
