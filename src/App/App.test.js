import { render, screen, waitFor } from '@testing-library/react'
import selectEvent from 'react-select-event'
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
    const formUserCurreny = screen.getByTestId('user-currency-dropdown')
    const formUserAmount = screen.getByPlaceholderText(/amount to exchange \(up to 10,000\)/i)
    const formnewCurreny = screen.getByTestId('new-currency-dropdown')
    expect(formUserCurreny).toBeInTheDocument()
    expect(formUserAmount).toBeInTheDocument()
    expect(formnewCurreny).toBeInTheDocument()
  })

  // it('should display a currency card when all fields are complete and the Get Currency Conversion button is clicked', async () => {
  //   // await selectEvent.select(getByLabelText('Food'), ['Strawberry', 'Mango'])
  //   const userCurrencyChoice = await waitFor(() => screen.getAllByText(/usd/i))
  //   const userAmountChoice = await waitFor(() => screen.getByText(/10/i))
  //   const newCurrencyChoice = await waitFor(() => screen.getAllByText(/php/i))

  //   selectEvent.click()

  //   userEvent.click(screen.getByText('Get Currency Conversion'))
  // })
})