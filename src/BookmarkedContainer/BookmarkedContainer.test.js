import { render, screen, waitFor } from '@testing-library/react'
import BookmarkedContainer from './BookmarkedContainer'
import { sampleApiData, multipleSampleBookmarkedCards } from '../sampleApiData.js'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const data = multipleSampleBookmarkedCards
  const noBookmarkedConversions = []
  const removeBookmarked = jest.fn()
  const deleteCurrencyCard = jest.fn()
  const history = createMemoryHistory()
  beforeEach(() => {
    history.location.pathName='/'
    render(
      <Router history={history}>
        <BookmarkedContainer 
          bookmarkedConversions={data}
          deleteCurrencyCard={deleteCurrencyCard}
          removeBookmarked={removeBookmarked}
        />
      </Router>
    )
  })

  it('should render bookmarked cards', () => {
    const phpExchangeRate = screen.getByText('48.0303530188')
    const gbpExchangeRate = screen.getByText('0.7336110195')
    const nzdExchangeRate = screen.getByText('1.3900527879')

    expect(phpExchangeRate).toBeInTheDocument()
    expect(gbpExchangeRate).toBeInTheDocument()
    expect(nzdExchangeRate).toBeInTheDocument()
  })

  it('should show a message if there are no bookmarked cards', () => {
    history.location.pathName='/'
    render(
      <Router history={history}>
        <BookmarkedContainer 
          bookmarkedConversions={noBookmarkedConversions}
          deleteCurrencyCard={deleteCurrencyCard}
          removeBookmarked={removeBookmarked}
        />
      </Router>
    )

    const noConversionsMessage = screen.getByText(/you have not yet bookmarked any conversions\./i)
    expect(noConversionsMessage).toBeInTheDocument()
  })

  it('should route to the home path when Get a new Currency Exchange is clicked', async () => {
    userEvent.click(screen.getByRole('link', {
      name: /get a new currency exchange!/i
    }))
    await waitFor(() => expect(history.location.pathname).toBe('/'))
  })

  it('should route to the path "currency-cards" when See All Your Conversions is clicked', async () => {
    userEvent.click(screen.getByRole('link', {
      name: /see all your conversions/i
    }))
    await waitFor(() => expect(history.location.pathname).toBe('/currency-cards'))
  })
})