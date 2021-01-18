import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import App from './App'
import { sampleApiData } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { getExchangeRates } from '../apiCalls.js'
jest.mock('../apiCalls.js')

describe('Bookmarked', () => {
  const removeBookmarked = jest.fn()
  const addBookmarked = jest.fn()
  const deleteCurrencyCard = jest.fn()
  const history = createMemoryHistory()
  beforeEach(async () => {
    const sampleData = sampleApiData
    history.location.pathName='/'
    await act(async() => {
      render(
      <Router history={history}>
        <App />
      </Router>
      )
    })
  })

  it('should render the Form on page load', () => {
    // const history = createMemoryHistory()
    // // beforeEach(() => {
    //   const sampleData = sampleApiData
    //   // act(() => {
    //     history.location.pathName='/'
    //   // })
    //   render(
    //     <Router history={history}>
    //       <App />
    //     </Router>
    //   )
    // // })
    const formUserCurreny = screen.getByTestId('user-currency-dropdown')
    const formUserAmount = screen.getByPlaceholderText(/amount to exchange \(up to 10,000\)/i)
    const formnewCurreny = screen.getByTestId('new-currency-dropdown')
    expect(formUserCurreny).toBeInTheDocument()
    expect(formUserAmount).toBeInTheDocument()
    expect(formnewCurreny).toBeInTheDocument()
  })

  it('should render a currency card when all fields are complete and Get Currency Conversion is clicked', async () => {
    getExchangeRates.mockResolvedValueOnce(sampleApiData)
    const formUserCurreny = screen.getByTestId('user-currency-dropdown')
    // const filteredUserCurrency = screen.getByTestId('user-currency-dropdown')
    fireEvent.change(formUserCurreny, {
      target: {value: 'USD'}
    })
    
    const userAmountInput = screen.getByPlaceholderText('Amount to exchange (up to 10,000)')
    fireEvent.change(userAmountInput, {
      target: {value: '10'}
    })
    
    
    const filteredNewCurrency = screen.getByTestId('new-currency-dropdown')
    fireEvent.change(filteredNewCurrency, {
      target: {value: 'PHP'}
    })
    
    expect(formUserCurreny).toHaveValue('USD')
    expect(userAmountInput).toHaveValue(10)
    expect(filteredNewCurrency).toHaveValue('PHP')
    
    const getCurrencyButton = screen.getByRole('link', {
      name: /get currency conversion/i
    })
    
    expect(getCurrencyButton).toBeInTheDocument()
    
    await act(async () => {
      userEvent.click(getCurrencyButton)
    })

    const phpExchangeRate = await waitFor(() => screen.getByText('48.0303530188'))

    expect(phpExchangeRate).toBeInTheDocument()
  })
  
})
