import { useState, useEffect } from "react"
import { MenuIcon } from "../icons/Menu"
import { CloseIcon } from "../icons/Close"

export const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen)
    document.querySelector('#mobileMenu')?.classList.toggle('hidden', !menuOpen)
  }, [menuOpen])

  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="bg-action-light dark:bg-action-dark text-darkend dark:text-lightend p-2 rounded-md cursor-pointer"
      aria-expanded={menuOpen}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
    >
      {
        menuOpen
          ? <CloseIcon />
          : <MenuIcon />
      }
    </button>
  )
}