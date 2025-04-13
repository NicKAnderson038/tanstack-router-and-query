import { Heading, Skeleton, Text } from "@shared"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about")({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <>
      <Heading.H1 className="mt-4 gap-2">
        Abouts Total:
        <Skeleton.H1 className="max-w-50" />
      </Heading.H1>
      <Heading.H2 className="mt-4 gap-2">
        Abouts Total:
        <Skeleton.H2 className="max-w-50" />
      </Heading.H2>
      <Heading.H3 className="mt-4 gap-2">
        Abouts Total:
        <Skeleton.H3 className="max-w-50" />
      </Heading.H3>
      <Heading.H4 className="mt-4 gap-2">
        Abouts Total:
        <Skeleton.H4 className="max-w-50" />
      </Heading.H4>
      <Text className="mt-4 gap-2">
        Paragraph
        <Skeleton.Text />
      </Text>
      <Text className="mt-4">
        <Skeleton.Text />
      </Text>
    </>
  )
}
