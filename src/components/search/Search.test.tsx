import { test, expect } from 'vitest'
import { render, screen, renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Search } from './Search'
import { useResourcifyStore } from '../../store/resourcify'

test ('You must present the results correctly according to the status', async () => {
  const user = userEvent.setup()
  render(<Search />)

  const searchInput = screen.getByRole('searchbox')
  expect(searchInput ).toBeDefined()

  await user.type(searchInput , 'Icons')
  const renderedResults = screen.getAllByRole('heading', { level: 3 }).map(item => item.textContent)

  const { result } = renderHook(() => useResourcifyStore(store => store.results))
  const expectedResults = result.current.slice(0, 6)

  expect(renderedResults).toHaveLength(expectedResults.length)
  expectedResults.forEach((item, index) => expect(renderedResults[index]).toBe(item.name))
})