import { ts } from "@services"

export const Api = {
  GET_POSTS: "https://jsonplaceholder.typicode.com/posts?_delay=3000",
  GET_POST_BY_ID: "https://jsonplaceholder.typicode.com/posts/{id}",
  GET_COMMENTS_BY_ID: "https://jsonplaceholder.typicode.com/comments/{id}",
  GET_PLANETS: "https://swapi.dev/api/planets",
} as const

export const useGetPosts = {
  ...ts({ _url: Api.GET_POSTS, _suspenseQueryParams: { staleTime: Infinity } }),
}

export const useGetPostById = {
  ...ts({ _url: Api.GET_POST_BY_ID }),
}

export const useGetCommentById = {
  ...ts({ _url: Api.GET_COMMENTS_BY_ID }),
}

export const useGetPlanet = {
  ...ts({
    _url: Api.GET_PLANETS,
    _suspenseQueryParams: { staleTime: Infinity },
  }),
}
