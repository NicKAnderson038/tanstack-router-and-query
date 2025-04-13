import { isString, isNumber } from "is-what"
import type { QueryKey } from "@tanstack/react-query"

const dynamicUrlHelper = (request: QueryKey) => {
  if (request.length === 1) {
    const url = request[0]
    return url as string
  }

  const url = request.reduce((acc: string, curr, i) => {
    if (i === 0) {
      acc = curr as string
      return acc
    }

    if (isString(curr) || isNumber(curr)) {
      acc = acc.replace(/\{(.*?)\}/, `${curr}`)
    }

    return acc
  }, "")

  return url as string
}

export const getData = async (request: QueryKey) => {
  const url = dynamicUrlHelper(request)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Failed to fetch post")
  }

  return await response.json()
}
