import { ts } from "@services"

export const Api = {
  GET_POSTS: "https://jsonplaceholder.typicode.com/posts?_delay=3000",
  GET_POST_BY_ID: "https://jsonplaceholder.typicode.com/posts/{id}?_delay=3000",
  GET_COMMENTS_BY_ID: "https://jsonplaceholder.typicode.com/comments/{id}",
  GET_THUMBNAIL: "https://jsonplaceholder.typicode.com/photos",
} as const

export const usePosts = {
  ...ts({ _url: Api.GET_POSTS }),
}

export const usePostById = {
  ...ts({ _url: Api.GET_POST_BY_ID }),
}

export const useCommentById = {
  ...ts({ _url: Api.GET_COMMENTS_BY_ID }),
}

export const useThumbnail = {
  ...ts({
    _url: Api.GET_THUMBNAIL,
  }),
}
