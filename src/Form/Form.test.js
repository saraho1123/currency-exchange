import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import Form from './Form'
import { sampleApiData } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import { MemoryRouter } from 'react-router-dom'


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

  it('should render the Form with message Please ', () => {
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

  it('should select a user currency, user amount and new currency with the associate values', async () => {
    render(
      <MemoryRouter>
        <Form
          addCurrencyCard={addCurrencyCard}
        />
      </MemoryRouter>
    )

    const filteredUserCurrency = screen.getByTestId('user-currency-dropdown')
    fireEvent.change(filteredUserCurrency, {
      target: { value: 'USD' }
    })

    const userAmountInput = screen.getByPlaceholderText('Amount to exchange (up to 10,000)')
    fireEvent.change(userAmountInput, {
      target: { value: '10' }
    })

    const filteredNewCurrency = screen.getByTestId('new-currency-dropdown')
    fireEvent.change(filteredNewCurrency, {
      target: { value: 'PHP' }
    })

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

    const filteredUserCurrency = screen.getByTestId('user-currency-dropdown')
    fireEvent.change(filteredUserCurrency, {
      target: { value: 'USD' }
    })

    const userAmountInput = screen.getByPlaceholderText('Amount to exchange (up to 10,000)')
    fireEvent.change(userAmountInput, {
      target: { value: '10' }
    })


    const filteredNewCurrency = screen.getByTestId('new-currency-dropdown')
    fireEvent.change(filteredNewCurrency, {
      target: { value: 'PHP' }
    })

    expect(filteredUserCurrency).toHaveValue('USD')
    expect(userAmountInput).toHaveValue(10)
    expect(filteredNewCurrency).toHaveValue('PHP')

    expect(screen.getByRole('link', {
      name: /get currency conversion/i
    })).toBeInTheDocument()

  })

  it('should call addCurrencyCard when Get Currency Conversion is clicked', () => {
    render(
      <MemoryRouter>
        <Form
          addCurrencyCard={addCurrencyCard}
        />
      </MemoryRouter>
    )

    Date.now = jest.fn().mockImplementation(() => 1584585306565);

    const filteredUserCurrency = screen.getByTestId('user-currency-dropdown')
    fireEvent.change(filteredUserCurrency, {
      target: { value: 'USD' }
    })

    const userAmountInput = screen.getByPlaceholderText('Amount to exchange (up to 10,000)')
    fireEvent.change(userAmountInput, {
      target: { value: '10' }
    })

    const filteredNewCurrency = screen.getByTestId('new-currency-dropdown')
    fireEvent.change(filteredNewCurrency, {
      target: { value: 'PHP' }
    })

    expect(filteredUserCurrency).toHaveValue('USD')
    expect(userAmountInput).toHaveValue(10)
    expect(filteredNewCurrency).toHaveValue('PHP')

    const getCurrencyButton = screen.getByRole('link', {
      name: /get currency conversion/i
    })

    expect(getCurrencyButton).toBeInTheDocument()

    fireEvent.click(getCurrencyButton)

    expect(addCurrencyCard).toHaveBeenCalledTimes(1)
    expect(addCurrencyCard).toHaveBeenCalledWith(
      {
        "id": Date.now(),
        "newCurrency": "PHP",
        "userAmount": "10",
        "userCurrency": "USD"
      })
  })
})