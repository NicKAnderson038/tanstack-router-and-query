import { ts } from "@services"

export const Api = {
  GET_PEOPLE: "https://swapi.dev/api/people",
} as const

export const useGetPeople = {
  ...ts({
    _url: Api.GET_PEOPLE,
    _changeData: (data: { results: [] }) => data.results,
  }),
}
