import { render, screen } from '@testing-library/react'
import Bookmarked from './Bookmarked'
import { sampleApiData, sampleBookmarkedCard } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const removeBookmarked = jest.fn()
  const deleteCurrencyCard = jest.fn()
  const bookmarkedCard = sampleBookmarkedCard
  const history = createMemoryHistory()
  beforeEach(() => {
    history.location.pathname = '/bookmarked-conversions'
    render(
      <Router history={history}>
        <Bookmarked
          id={bookmarkedCard.id}
          key={bookmarkedCard.id}
          newAmount={bookmarkedCard.newAmount}
          userCurrency={bookmarkedCard.userCurrency}
          userAmount={bookmarkedCard.userAmount}
          newCurrency={bookmarkedCard.newCurrency}
          exchangeRate={bookmarkedCard.exchangeRate}
          date={bookmarkedCard.date}
          removeBookmarked={removeBookmarked}
          deleteCurrencyCard={deleteCurrencyCard}
      />
    </Router>
    )
  })

  it('should render a bookmarked card if the user has bookmarked it', () => {
    const bookmarkedText = screen.getByRole('heading', {
      name: /at an exchange rate of:/i
    })
    const bookmarkedNewAmount = screen.getByRole('heading', {
      name: /0\.7336110195/i
    })
    expect(bookmarkedText).toBeInTheDocument();
    expect(bookmarkedNewAmount).toBeInTheDocument();
  })

  it('should call deleteCurrencyCard with correct argument when delete button is clicked', () => {
    userEvent.click(screen.getByRole('button', {
      name: /🗑/i
    }))
    expect(deleteCurrencyCard).toHaveBeenCalledTimes(1)
    expect(deleteCurrencyCard).toHaveBeenCalledWith(1234)
  })

  it('should call removeBookmarked with correct argument when remove button is clicked', () => {
    userEvent.click(screen.getByRole('button', {
      name: /remove from bookmarked conversions/i
    }))
    expect(removeBookmarked).toHaveBeenCalledTimes(1)
    expect(removeBookmarked).toHaveBeenCalledWith(1234)
  })
})


