import { Heading, Skeleton } from "@shared"
import { Link, createFileRoute } from "@tanstack/react-router"

import { usePosts } from "./-queryApi"
import styles from "./posts.module.css"

const skeleton = Array.from({ length: 100 }, (_, i) => i + 1)

export const Route = createFileRoute("/posts/")({
  component: Component,
  loader: ({ context: { queryClient } }) => {
    return {
      ...queryClient.ensureQueryData(usePosts.loader()),
    }
  },
  pendingComponent: () => (
    <>
      <Heading.H3 className="gap-1">
        Planets Total:
        <Skeleton.H3 className="max-w-10" />
      </Heading.H3>
      <div className="flex gap-8 flex-wrap">
        {skeleton.map((num) => (
          <div
            key={num}
            className="bg-gray-200 rounded-full dark:bg-gray-500 w-5 h-5 mb-4 mt-4 py-2"
          />
        ))}
      </div>
    </>
  ),
})

function Component() {
  const { data: posts } = usePosts.suspenseQuery({
    queryParams: { staleTime: Infinity },
  })

  return (
    <>
      <Heading.H3 className="gap-1">
        Posts Total:<span>{posts.length}</span>
      </Heading.H3>

      <div className={styles.parent}>
        {posts.map((post: { id: string; title: string; body: string }) => (
          <div key={post.id} className="p-2 flex justify-center">
            <Link
              to="/posts/$id"
              params={{ id: post.id }}
              className="link-outline text-blue-500 hover:text-blue-800"
            >
              <span className="dark:text-blue-300 min-w-[30px]">{post.id}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
