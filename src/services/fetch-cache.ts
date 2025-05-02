import { getData } from "@services"
import { queryOptions, useSuspenseQuery, useQuery } from "@tanstack/react-query"
import type {
  AnyUseSuspenseQueryOptions,
  AnyUseQueryOptions,
} from "@tanstack/react-query"

type UseQueryOptionsProps = Omit<AnyUseQueryOptions, "queryKey" | "queryFn">

type SuspenseQueryOptionsProps = Omit<
  AnyUseSuspenseQueryOptions,
  "queryKey" | "queryFn"
>

type UrlParamsProp = (string | number)[]

export const ts = ({
  _url,
  _changeData,
}: {
  _url: string
  _changeData?: (data: any) => any
}) => {
  return {
    /**
     * @description Called inside the ts-router loader when a user hovers over router link inside a different page.
     */
    loader: ({
      urlParams = [],
      queryParams = {},
    }: {
      urlParams?: UrlParamsProp
      queryParams?: UseQueryOptionsProps
    } = {}) => {
      const queryKey = [_url, ...urlParams]
      return queryOptions({
        ...queryParams,
        queryKey,
        queryFn: async () => await getData(queryKey),
      })
    },
    /**
     * @description Returns the results from `ts.loader()` called inside the ts-router loader.
     */
    suspenseQuery: ({
      urlParams = [],
      queryParams = {},
    }: {
      urlParams?: UrlParamsProp
      queryParams?: SuspenseQueryOptionsProps
    } = {}) => {
      const queryKey = [_url, ...urlParams]
      const res = useSuspenseQuery(
        queryOptions({
          ...queryParams,
          queryKey,
          queryFn: async () => await getData(queryKey),
        }),
      )
      return {
        ...res,
        data: _changeData ? _changeData(res.data) : res.data,
      }
    },
    /**
     * @description Situations where page has already mounting and loading state is still necessary.
     */
    query: ({
      urlParams = [],
      queryParams = {},
    }: {
      urlParams?: UrlParamsProp
      queryParams?: UseQueryOptionsProps
    } = {}) => {
      const queryKey = [_url, ...urlParams]
      const res = useQuery({
        ...queryParams,
        queryKey,
        queryFn: async () => await getData(queryKey),
      })
      return {
        ...res,
        data: _changeData ? _changeData(res.data) : res.data,
      }
    },
  }
}
