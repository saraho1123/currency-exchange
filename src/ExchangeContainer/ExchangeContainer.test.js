import { render, screen, waitFor } from '@testing-library/react'
import ExchangeContainer from './ExchangeContainer'
import { sampleApiData, multipleSampleCurrencyCards } from '../sampleApiData.js'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const sampleFusedCards = multipleSampleCurrencyCards
  const noFusedCards = []
  const addBookmarked = jest.fn()
  const deleteCurrencyCard = jest.fn()
  const history = createMemoryHistory()
  beforeEach(() => {
    history.location.pathName='/'
    render(
      <Router history={history}>
        <ExchangeContainer 
          fusedData={sampleFusedCards}
          addBookmarked={addBookmarked}
          deleteCurrencyCard={deleteCurrencyCard}
          bookmarkedTag={sampleFusedCards.bookmarkedTag}
        />
      </Router>
    )
  })

  it('should render currency cards', () => {
    const phpExchangeRate = screen.getByText('48.0303530188')
    const gbpExchangeRate = screen.getByText('0.7336110195')
    const nzdExchangeRate = screen.getByText('1.3900527879')

    expect(phpExchangeRate).toBeInTheDocument()
    expect(gbpExchangeRate).toBeInTheDocument()
    expect(nzdExchangeRate).toBeInTheDocument()
  })

  it('should show a message if there are no currency cards', () => {
    history.location.pathName='/'
    render(
      <Router history={history}>
        <ExchangeContainer 
          fusedData={noFusedCards}
          addBookmarked={addBookmarked}
          deleteCurrencyCard={deleteCurrencyCard}
          bookmarkedTag={noFusedCards.bookmarkedTag}
        />
      </Router>
    )

    const noConversionsMessage = screen.getByRole('heading', {
      name: /you have not completed any conversions yet\./i
    })
    expect(noConversionsMessage).toBeInTheDocument()
  })

  it('should route to the home path when Get a new Currency Exchange is clicked', async () => {
    userEvent.click(screen.getByRole('link', {
      name: /get a new currency exchange!/i
    }))
    await waitFor(() => expect(history.location.pathname).toBe('/'))
  })

  it('should route to the path "bookmarked-conversions" when See Your Bookmarked Conversions is clicked', async () => {
    userEvent.click(screen.getByRole('link', {
      name: /see your bookmarked conversions/i
    }))
    await waitFor(() => expect(history.location.pathname).toBe('/bookmarked-conversions'))
  })
})