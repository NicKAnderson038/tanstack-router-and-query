import classNames from "classnames"

type Props = {
  id?: string
  className?: string
}

const Loader = ({ className, ...props }: Props) => (
  <>
    <span
      {...props}
      className={`flex flex-row bg-gray-200 rounded-lg dark:bg-gray-600 animate-pulse w-full self-center ${className}`}
    />
    <span className="sr-only">Loading...</span>
  </>
)

export const Skeleton = {
  H1: ({ className, ...props }: Props) => (
    <Loader {...props} className={classNames("h-7.5", className)} />
  ),
  H2: ({ className, ...props }: Props) => (
    <Loader {...props} className={classNames("h-6.5", className)} />
  ),
  H3: ({ className, ...props }: Props) => (
    <Loader {...props} className={classNames("h-5.5", className)} />
  ),
  H4: ({ className, ...props }: Props) => (
    <Loader {...props} className={classNames("h-3.5", className)} />
  ),
  Text: ({ className, ...props }: Props) => (
    <Loader {...props} className={classNames("h-3.5", className)} />
  ),
}
