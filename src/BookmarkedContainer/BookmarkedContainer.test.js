import { render, screen } from '@testing-library/react'
import BookmarkedContainer from './BookmarkedContainer'
import { sampleApiData, multipleSampleBookmarkedCards } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const data = multipleSampleBookmarkedCards
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

  })

  it('should show a message if there are no bookmarked cards', () => {

  })

  // I think there should be some tests for the nav links

})