import classNames from "classnames"
import type { ReactNode } from "react"

type Props = {
  id?: string
  className?: string
  children?: ReactNode | string
}

export const Text = ({ children, className, ...props }: Props) => (
  <p {...props} className={classNames("flex flex-row mb-2 dark:text-white", className)}>
    {children}
  </p>
)
