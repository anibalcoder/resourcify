import { useEffect } from "react"
import { InstantSearch } from "./InstantSearch"
import { SearchIcon } from "../icons/Search"
import { useResourcifyStore } from "../../store/resourcify"

export const Search = () => {
  const setSearchQuery = useResourcifyStore(store => store.setSearchQuery)

  useEffect(() => {
    setSearchQuery('')
  }, [])

  return (
    <section style={{ width: 'min(100%, 450px)' }} className="relative">
      <form
        className="relative flex items-center gap-2 px-4 py-2 outline-2 focus-within:outline-[3px] outline-dark dark:outline-[#FFE6C9] rounded-full"
      >
        <div className="text-darkend dark:text-[#FFE6C9]">
          <SearchIcon className="size-5"/>
        </div>

        <input
          onChange={(event) => setSearchQuery(event.target.value)}
          className="w-full text-darkend dark:text-lightend outline-none"
          type="search"
          placeholder="Icons, color palettes, typography, and more."
        />
      </form>

      <InstantSearch />
    </section>
  )
}