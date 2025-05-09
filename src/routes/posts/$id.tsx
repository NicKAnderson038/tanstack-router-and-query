import { Button, Heading, Icon, Skeleton, Text } from "@shared"
import { Link, createFileRoute } from "@tanstack/react-router"

import { useCommentById, usePostById, useThumbnail } from "./-queryApi"

// $id Dynamic Route behavior: if refreshed on this page, it will show the global pendingComponent in main.tsx
// overriden by the pendingComponent in this file
export const Route = createFileRoute("/posts/$id")({
  component: Component,
  loader: ({ params: { id }, context: { queryClient } }) => {
    // ? await requests creates a queuing system first sending promise1 then promise2. Not having await will initiate TTFB for all requests simultaneously
    return {
      promise1: queryClient.ensureQueryData(
        usePostById.loader({ urlParams: [id] }),
      ),
      promise2: queryClient.ensureQueryData(
        useCommentById.loader({ urlParams: [id] }),
      ),
    }
  },
  // NOTE: Default application wide settings in main.tsx vs in specific route
  pendingComponent: () => {
    const id = Route.useParams().id
    return (
      <>
        <Link to="/posts" className="link-outline mb-6">
          Loading...
          <Icon.MetaMask />
        </Link>
        <Heading.H3 className="gap-1">
          Data By Id:<span>{id}</span>
        </Heading.H3>
        <Text>
          <Skeleton.Text className="max-w-120" />
        </Text>
        <Text>
          <Skeleton.Text className="max-w-80" />
        </Text>
        <Text>
          <Skeleton.Text className="max-w-80" />
        </Text>
        <Text>
          <Skeleton.Text />
        </Text>
      </>
    )
  },
  // errorComponent: ({error}) => <div>{error.message}</div>
})

function Component() {
  const id = Route.useParams().id

  const {
    data: thumbnailUrlData,
    refetch: thumbnailUrlRefetch,
    isFetching: thumbnailUrlFetching,
  } = useThumbnail.query({
    queryParams: { enabled: false },
  })
  console.log(thumbnailUrlData)

  const {
    data: postIdData,
    refetch: postIdRefetch,
    isFetching: postIdFetching,
  } = usePostById.suspenseQuery({ urlParams: [id] })

  const {
    data: commentData,
    refetch: commentRefetch,
    isFetching: commentIsFetching,
  } = useCommentById.suspenseQuery({ urlParams: [id] })

  return (
    <>
      <Link to="/posts" className="link-outline mb-6">
        <span className="dark:text-blue-300">Back to Posts</span>
        <Icon.MetaMask />
      </Link>

      <Heading.H3 id="heading" className="gap-1">
        Data By Id:<span>{id}</span>
      </Heading.H3>
      <Text id="title">{postIdData.title}</Text>
      <Text id="email">
        <Icon.Apple />
        {commentData.email}
      </Text>
      {thumbnailUrlData?.length ? (
        <Text id="planet-link">{thumbnailUrlData[id]?.thumbnailUrl}</Text>
      ) : (
        <Text id="planet-link">[No Data Fetched]</Text>
      )}
      <Text id="info">
        {postIdData.body}. {postIdData.body}. {postIdData.body}
      </Text>
      <div className="flex flex-wrap gap-x-4">
        <button
          onClick={() => {
            postIdRefetch()
            commentRefetch()
            thumbnailUrlRefetch()
          }}
          className="btn-primary mt-6"
        >
          <Icon.Apple />
          Refetch Data
          {postIdFetching || commentIsFetching || thumbnailUrlFetching ? (
            <Icon.Spinner />
          ) : (
            <Icon.MetaMask />
          )}
        </button>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => {
            postIdRefetch()
            commentRefetch()
            thumbnailUrlRefetch()
          }}
        >
          <Icon.Apple />
          Refetch Data
          {postIdFetching || commentIsFetching || thumbnailUrlFetching ? (
            <Icon.Spinner />
          ) : (
            <Icon.MetaMask />
          )}
        </Button>
      </div>
    </>
  )
}
