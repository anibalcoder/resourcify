import type { ResourcifyState } from "../types"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import categories from "../data/categories"

export const useResourcifyStore = create<ResourcifyState>()(persist(
  (set, get) => ({
    isDarkMode: false,
    results: [],
    toggleTheme() {
      const newTheme = !get().isDarkMode
      document.body.classList.toggle('dark', newTheme)
      set({ isDarkMode: newTheme })
    },
    setSearchQuery(query) {
      if (!query.trim()) return set({ results: [] })

      const filteredResults = categories
        .flatMap(category => category.resources)
        .filter(resorce => resorce.name.toLowerCase().includes(query.toLowerCase()))

      set({ results: filteredResults })
    }
  }), { name: '__resourcify__' }
))