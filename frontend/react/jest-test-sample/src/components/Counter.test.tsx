import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from './Counter'

test('Counter', async () => {
  // ARRANGE
  render(<Counter />)

  // ACT
  await userEvent.click(screen.getByText("+1"))
  await userEvent.click(screen.getByText("+1"))
  await userEvent.click(screen.getByText("+1"))

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('3')
})
