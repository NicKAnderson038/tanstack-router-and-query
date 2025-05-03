import { isUndefined } from "is-what"
import { getData } from "@services"
import { useQuery } from "@tanstack/react-query"

import { Api } from "./-queryApi"

type Props = {
  enabled?: boolean
}

export const usePeople = ({ enabled = true }: Props) => {
  const queryKey = [Api["GET_PEOPLE"]]
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await getData(queryKey)

      return response?.results
    },
    enabled,
  })

  return {
    data: isUndefined(data) ? [] : data,
    isLoading,
    isFetching,
    refetch,
  }
}
