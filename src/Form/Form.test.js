import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Form from './Form'
import { sampleApiData } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const sampleData = sampleApiData
  const addCurrencyCard = jest.fn()
  let userCurrency
  let userAmount
  let newCurrency

  beforeEach(() => {
    userCurrency = 'USD'
    userAmount = 10
    newCurrency = 'PHP'
  })

  it('should render the Form', () => {
    render(
      <MemoryRouter>
        <Form 
          addCurrencyCard={addCurrencyCard}        
        />
      </MemoryRouter>
    )
    const form = screen.getByTestId('form')
    const formUserCurreny = screen.getByTestId('user-currency-dropdown')
    const formUserAmount = screen.getByPlaceholderText(/amount to exchange \(up to 10,000\)/i)
    const formnewCurreny = screen.getByTestId('new-currency-dropdown')
    expect(form).toBeInTheDocument()
    expect(formUserCurreny).toBeInTheDocument()
    expect(formUserAmount).toBeInTheDocument()
    expect(formnewCurreny).toBeInTheDocument()
  })

  it('should ask the user to Please Complete All Fields if all 3 fields are not complete', () => {

  })


  it('should select a user currency, user amount and new currency with the associate values', async () => {
    render(
      <MemoryRouter>
        <Form 
          addCurrencyCard={addCurrencyCard}        
        />
      </MemoryRouter>
    )

    const filteredUserCurrency = screen.getByTestId('USD')
    fireEvent.change(filteredUserCurrency, {
      target: {value: 'USD'}
    })
    // const dropdownUserCurrency = await waitFor(() => screen.getByDisplayValue(/usd/i))

    const userAmountInput = screen.getByPlaceholderText('Amount to exchange (up to 10,000)')
    fireEvent.change(userAmountInput, {
      target: {value: '10'}
    })
    // const userAmountChoice = await waitFor(() => screen.getByDisplayValue(/10/i))


    const filteredNewCurrency = screen.getByTestId('PHP')
    fireEvent.change(filteredNewCurrency, {
      target: {value: 'PHP'}
    })
    // const dropdownNewCurrency = await waitFor(() => screen.getByText('PHP'))


    expect(filteredUserCurrency).toHaveValue('USD')
    expect(userAmountInput).toHaveValue(10)
    expect(filteredNewCurrency).toHaveValue('PHP')
  })

  it('should show Get Currency Conversion nav link if all fields are complete', () => {
    render(
      <MemoryRouter>
        <Form 
          addCurrencyCard={addCurrencyCard}        
        />
      </MemoryRouter>
    )

    const filteredUserCurrency = screen.getByTestId('USD')
    fireEvent.change(filteredUserCurrency, {
      target: {value: 'USD'}
    })
    // const dropdownUserCurrency = await waitFor(() => screen.getByDisplayValue(/usd/i))

    const userAmountInput = screen.getByPlaceholderText('Amount to exchange (up to 10,000)')
    fireEvent.change(userAmountInput, {
      target: {value: '10'}
    })
    // const userAmountChoice = await waitFor(() => screen.getByDisplayValue(/10/i))


    const filteredNewCurrency = screen.getByTestId('PHP')
    fireEvent.change(filteredNewCurrency, {
      target: {value: 'PHP'}
    })
    // const dropdownNewCurrency = await waitFor(() => screen.getByText('PHP'))

    expect(filteredUserCurrency).toHaveValue('USD')
    expect(userAmountInput).toHaveValue(10)
    expect(filteredNewCurrency).toHaveValue('PHP')

    expect(screen.getByRole('link', {
      name: /get currency conversion/i
    })).toBeInTheDocument()

  //  userEvent.click(screen.getByRole('link', {
  //     name: /get currency conversion/i
  // })
  })

  // I think there should be some tests for the nav links

})