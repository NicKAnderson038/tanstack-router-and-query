import { ts } from "@services"

export const Api = {
  GET_PEOPLE: "https://jsonplaceholder.typicode.com/users",
} as const

export const useGetPeople = {
  ...ts({
    _url: Api.GET_PEOPLE,
    _changeData: (data: { results: [] }) => data,
  }),
}
