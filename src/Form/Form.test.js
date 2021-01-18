import { render, screen } from '@testing-library/react'
import Form from './Form'
import { sampleApiData } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const sampleData = sampleApiData
  const addCurrencyCard = jest.fn()
  // const addBookmarked = jest.fn()
  // const deleteCurrencyCard = jest.fn()
  const history = createMemoryHistory()
  beforeEach(() => {
    history.location.pathName='/'
    render(
      <Router history={history}>
        <Form 
          addCurrencyCard={addCurrencyCard}        
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