import { ts } from "@services"

export const Api = {
  GET_POSTS: "https://jsonplaceholder.typicode.com/posts?_delay=3000",
  GET_POST_BY_ID: "https://jsonplaceholder.typicode.com/posts/{id}",
  GET_COMMENTS_BY_ID: "https://jsonplaceholder.typicode.com/comments/{id}",
  GET_THUMBNAIL: "https://jsonplaceholder.typicode.com/photos",
} as const

export const useGetPosts = {
  ...ts({ _url: Api.GET_POSTS }),
}

export const useGetPostById = {
  ...ts({ _url: Api.GET_POST_BY_ID }),
}

export const useGetCommentById = {
  ...ts({ _url: Api.GET_COMMENTS_BY_ID }),
}

export const useGetThumbnail = {
  ...ts({
    _url: Api.GET_THUMBNAIL,
  }),
}
