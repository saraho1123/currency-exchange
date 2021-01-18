import { render, screen, waitFor } from '@testing-library/react'
import CurrencyCard from './CurrencyCard'
import { sampleApiData, sampleCurrencyCard } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const removeBookmarked = jest.fn()
  const addBookmarked = jest.fn()
  const deleteCurrencyCard = jest.fn()
  const currencyCard = sampleCurrencyCard
  const history = createMemoryHistory()
  beforeEach(() => {
    history.location.pathname = '/bookmarked-conversions'
    render(
      <Router history={history}>
        <CurrencyCard 
          id={currencyCard.id}
          key={currencyCard.id}
          newAmount={currencyCard.newAmount}
          userCurrency={currencyCard.userCurrency}
          userAmount={currencyCard.userAmount}
          newCurrency={currencyCard.newCurrency}
          exchangeRate={currencyCard.exchangeRate}
          date={currencyCard.date}
          addBookmarked={addBookmarked}
          bookmarkedTag={currencyCard.bookmarkedTag}
          deleteCurrencyCard={deleteCurrencyCard}
        />
    </Router>
    )
  })

  it('should render a bookmarked card if the user has bookmarked it', () => {
    const currencyCardExchangeRate = screen.getByText(/at an exchange rate of:/i)
    expect(currencyCardExchangeRate).toBeInTheDocument()
  })

  it('should call addBookmarked with correct argument when add to bookmarked button is clicked', () => {
    userEvent.click(screen.getByRole('button', {
      name: /bookmark this conversion/i
    }))
    expect(addBookmarked).toHaveBeenCalledTimes(1)
    expect(addBookmarked).toHaveBeenCalledWith(1234)
  })

  it('should call deleteCurrencyCard with correct argument when delete button is clicked', () => {
    userEvent.click(screen.getByRole('button', {
      name: /🗑/i
    }))
    expect(deleteCurrencyCard).toHaveBeenCalledTimes(1)
    expect(deleteCurrencyCard).toHaveBeenCalledWith(1234)
  })

})
