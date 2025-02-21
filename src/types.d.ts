export interface Resource {
  id: number
  name: string,
  link: string
  img: string
  type?: string
  usage: number
}

export interface Category {
  nameID: string
  name: string
  description: string
  link: string
  img: string
  total: number
  resources: Resource[]
}

export interface ResourcifyState {
  isDarkMode: boolean,
  results: Resource[]
  toggleTheme: () => void,
  setSearchQuery: (query: string) => void
}