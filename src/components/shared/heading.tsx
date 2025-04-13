import classNames from "classnames"
import type { ReactNode } from "react"

type Props = {
  children?: ReactNode | string
  id?: string
  className?: string
}

export const Heading = {
  H1: ({ children, className, ...props }: Props) => (
    <h1
      {...props}
      className={classNames(
        "flex flex-row flex-wrap dark:text-white text-4xl mb-4",
        className,
      )}
    >
      {children}
    </h1>
  ),
  H2: ({ children, className, ...props }: Props) => (
    <h2
      {...props}
      className={classNames(
        "flex flex-row flex-wrap dark:text-white text-3xl mb-4",
        className,
      )}
    >
      {children}
    </h2>
  ),
  H3: ({ children, className, ...props }: Props) => (
    <h3
      {...props}
      className={classNames(
        "flex flex-row flex-wrap dark:text-white text-2xl mb-4",
        className,
      )}
    >
      {children}
    </h3>
  ),
  H4: ({ children, className, ...props }: Props) => (
    <h4
      {...props}
      className={classNames(
        "flex flex-row flex-wrap dark:text-white text-1xl mb-4",
        className,
      )}
    >
      {children}
    </h4>
  ),
}
