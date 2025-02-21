import iconData from './resources/icons.json'
import colorData from './resources/colors.json'
import fontsData from './resources/fonts.json'
import componentsData from './resources/components.json'
import toolsData from './resources/tools.json'
import chromeExtensionsData from './resources/chromeExtensions.json'

const categories = [
  {
		nameID: 'icons',
    name: 'Icons',
    description: 'Free icon sets for your projects',
    link: '/category/icons',
    img: '/categories/icons.webp',
    total: iconData.length,
		resources: iconData.toSorted((a, b) => b.usage - a.usage)
  },
  {
		nameID: 'colors',
    name: 'Colors',
    description: 'Color palettes for your designs',
    link: '/category/colors',
    img: '/categories/colors.webp',
    total: colorData.length,
		resources: colorData.toSorted((a, b) => b.usage - a.usage)
  },
  {
		nameID: 'fonts',
    name: 'Fonts',
    description: 'Free fonts for your projects',
    link: '/category/fonts',
    img: '/categories/fonts.webp',
    total: fontsData.length,
		resources: fontsData.toSorted((a, b) => b.usage - a.usage)
  },
  {
		nameID: 'components',
    name: 'Components',
    description: 'Ready-to-use UI components',
    link: '/category/components',
    img: '/categories/components.webp',
    total: componentsData.length,
		resources: componentsData.toSorted((a, b) => b.usage - a.usage)
  },
  {
		nameID: 'tools',
    name: 'Tools',
    description: 'Useful tools for designers',
    link: '/category/tools',
    img: '/categories/tools.webp',
    total: toolsData.length,
		resources: toolsData.toSorted((a, b) => b.usage - a.usage)
  },
  {
		nameID: 'chromeExtensions',
    name: 'Extensions',
    description: 'Chrome Tools for Designers and developers',
    link: '/category/chromeExtensions',
    img: '/categories/chromeExtensions.webp',
    total: chromeExtensionsData.length,
		resources: chromeExtensionsData.toSorted((a, b) => b.usage - a.usage)
  },
]

export default categories