import { useEffect } from "react"
import { useResourcifyStore } from "../store/resourcify"
import { SunIcon } from './icons/Sun'
import { MoonIcon } from "./icons/Moon"

export const ThemeToggle = () => {
  const isDarkMode = useResourcifyStore(store => store.isDarkMode)
  const toggleTheme = useResourcifyStore(store => store.toggleTheme)

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <button
      onClick={toggleTheme}
      className="group bg-action-light dark:bg-action-dark p-2 rounded-md cursor-pointer flex gap-3"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDarkMode}
    >
      {
        isDarkMode
          ? <MoonIcon className="text-lightend/90 scale-80 group-hover:scale-none transition-transform" />
          : <SunIcon className="scale-80 group-hover:scale-none transition-transform" />
      }
    </button>
  )
}