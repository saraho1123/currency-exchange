import { render, screen } from '@testing-library/react'
import ExchangeContainer from './ExchangeContainer'
import { sampleApiData, multipleSampleCurrencyCards } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const sampleFusedCards = multipleSampleCurrencyCards
  const removeBookmarked = jest.fn()
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

  })

  it('should show a message if there are no currency cards', () => {

  })

  // I think there should be some tests for the nav links

})