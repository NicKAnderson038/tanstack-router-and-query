import { Heading } from "@shared"
import { createLazyFileRoute } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"

export const Route = createLazyFileRoute("/lazy_load")({
  component: Component,
})

const DATA = [
  {
    label: "Chocolate",
    value: 1,
  },
  {
    label: "Coconut",
    value: 2,
  },
  {
    label: "Mint",
    value: 3,
  },
  {
    label: "Strawberry",
    value: 4,
  },
  {
    label: "Vanilla",
    value: 5,
  },
]

function Component() {
  return (
    <>
      <Heading.H3>Lazy Load</Heading.H3>
      <div className="flex flex-col max-w-xs">
        <label htmlFor="ice-cream-choice">DataList Html Api:</label>
        <input
          id="ice-cream-choice"
          name="ice-cream-choice"
          list="ice-cream-flavors"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => console.log(e)}
        />

        <datalist id="ice-cream-flavors">
          {DATA.map((items: { value: number; label: string }) => {
            return (
              <Fragment key={items.value}>
                <option value={items.value}>{items.label}</option>
              </Fragment>
            )
          })}
        </datalist>
      </div>
    </>
  )
}
