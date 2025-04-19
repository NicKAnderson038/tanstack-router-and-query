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

type UseDisabledQueryProps = Omit<
  AnyUseQueryOptions,
  "queryKey" | "queryFn" | "enabled"
>

type UrlParamsProp = (string | number)[]

export const ts = ({
  _url,
  _loaderOptionsParams = {},
  _suspenseQueryParams = {},
  _disableQueryParams = {},
  _queryParams = {},
  _changeData,
}: {
  _url: string
  _loaderOptionsParams?: UseQueryOptionsProps
  _suspenseQueryParams?: SuspenseQueryOptionsProps
  _disableQueryParams?: UseDisabledQueryProps
  _queryParams?: UseQueryOptionsProps
  _changeData?: (data: any) => any
}) => {
  return {
    /**
     * @description funtionality which is called inside the ts-router loader when a user hovers over router link inside a different page.
     */
    loader: (urlParams: UrlParamsProp = []) => {
      const queryKey = [_url, ...urlParams]
      return queryOptions({
        ..._loaderOptionsParams,
        queryKey,
        queryFn: async () => await getData(queryKey),
      })
    },
    /**
     * @description funtionality which returns the results from `ts.loader()` called inside the ts-router loader.
     */
    suspenseQuery: (urlParams: UrlParamsProp = []) => {
      const queryKey = [_url, ...urlParams]
      const res = useSuspenseQuery(
        queryOptions({
          ..._suspenseQueryParams,
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
     * @description funtionality which disables all data requests but allows the reading of cache and monitoring data request status.
     */
    disableQuery: (urlParams: UrlParamsProp = []) => {
      const queryKey = [_url, ...urlParams]
      const res = useQuery({
        ..._disableQueryParams,
        enabled: false,
        queryKey,
        queryFn: async () => await getData(queryKey),
      })
      return {
        ...res,
        data: _changeData ? _changeData(res.data) : res.data,
      }
    },
    /**
     * @description funtionality which includes loading status. Situations where page has already mounting and loading state is still necessary.
     */
    query: (urlParams: UrlParamsProp = []) => {
      const queryKey = [_url, ...urlParams]
      const res = useQuery({
        ..._queryParams,
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
