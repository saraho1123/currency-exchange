import { render, screen } from '@testing-library/react'
import App from './App'
import { sampleApiData } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const removeBookmarked = jest.fn()
  const addBookmarked = jest.fn()
  const deleteCurrencyCard = jest.fn()
  const history = createMemoryHistory()
  beforeEach(() => {
    const sampleData = sampleApiData
    // act(() => {
      history.location.pathName='/'
    // })
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  })

  it('should render the Form on page load', () => {
    const formUserAmount = screen.getByRole('spinbutton')
    expect(formUserAmount).toBeInTheDocument()
  })
})