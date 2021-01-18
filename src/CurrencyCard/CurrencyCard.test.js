import { render, screen } from '@testing-library/react'
import CurrencyCard from './CurrencyCard'
import { sampleApiData } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const removeBookmarked = jest.fn()
  const addBookmarked = jest.fn()
  const deleteCurrencyCard = jest.fn()
  const bookmarkedCard = {
    id: 1234,
    newAmount: 7.34,
    userCurrency: "USD",
    userAmount: 10,
    newCurrency: "GBP",
    exchangeRate: 0.7336110195,
    date: '2021-01-14',
    bookmarkedTag: false,
  }
  const history = createMemoryHistory()
  beforeEach(() => {
    history.location.pathname = '/bookmarked-conversions'
    render(
      <Router history={history}>
        <CurrencyCard 
          id={bookmarkedCard.id}
          key={bookmarkedCard.id}
          newAmount={bookmarkedCard.newAmount}
          userCurrency={bookmarkedCard.userCurrency}
          userAmount={bookmarkedCard.userAmount}
          newCurrency={bookmarkedCard.newCurrency}
          exchangeRate={bookmarkedCard.exchangeRate}
          date={bookmarkedCard.date}
          addBookmarked={addBookmarked}
          bookmarkedTag={bookmarkedCard.bookmarkedTag}
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

    // could add tests that pathname is updated when nav links are clicked
})
