import classNames from "classnames"
import type { ReactNode } from "react"

import styles from "./index.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  className?: string
  children?: ReactNode | string | number
}

export const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: Props) => (
  <button
    {...props}
    className={classNames(className, {
      [styles["primary"]]: variant === "primary",
      [styles["secondary"]]: variant === "secondary",
    })}
  >
    {children}
  </button>
)
