import { render, screen, waitFor } from '@testing-library/react'
import selectEvent from 'react-select-event'
import Form from './Form'
import { sampleApiData } from '../sampleApiData.js'
import '@testing-library/jest-dom'  // npm install --save-dev @testing-library/jest-dom
import userEvent from '@testing-library/user-event'
import { Router, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Bookmarked', () => {
  const sampleData = sampleApiData
  const addCurrencyCard = jest.fn()
  let formUserCurreny
  let formUserAmount
  let formnNewCurreny

  const history = createMemoryHistory()
  beforeEach(() => {
    // history.location.pathName='/'
    render(
      <MemoryRouter>
        <Form 
          addCurrencyCard={addCurrencyCard}        
        />
      </MemoryRouter>
    )
  })
  screen.debug()

    // formUserCurreny = screen.getByTestId('user-currency-dropdown')
    // selectForm = screen.getByTestId('select-form')

    // formUserAmount = screen.getByPlaceholderText(/amount to exchange \(up to 10,000\)/i)
    // formNewCurreny = screen.getByTestId('new-currency-dropdown')


  it('should render the Form on page load', () => {
      const formUserCurreny = screen.getByTestId('user-currency-dropdown')
      // const formUserAmount = screen.getByPlaceholderText(/amount to exchange \(up to 10,000\)/i)
      // const formnewCurreny = screen.getByTestId('new-currency-dropdown')
    expect(formUserCurreny).toBeInTheDocument()
    // expect(formUserAmount).toBeInTheDocument()
    // expect(formnewCurreny).toBeInTheDocument()
  })

  it('should ask the user to Please Complete All Fields if all 3 fields are not complete', () => {

  })


  it('should display a currency card when all fields are complete and the Get Currency Conversion button is clicked', async () => {
    // // await selectEvent.select(getByLabelText('Food'), ['Strawberry', 'Mango'])
    // const userCurrencyChoice = await waitFor(() => screen.getAllByText(/usd/i))
    // const userAmountChoice = await waitFor(() => screen.getByPlaceholderText('Amount to exchange (up to 10,000)'))
    // const newCurrencyChoice = await waitFor(() => screen.getAllByText(/php/i))

    // expect(getByTestId('user-currency-dropdown')).toHaveFormValues({ usd: '' })

    // selectEvent.select(userCurrencyChoice)
    // selectEvent.select(userAmountChoice)
    // selectEvent.select(newCurrencyChoice)

    // userEvent.click(screen.getByText('Get Currency Conversion'))
  })

  it('should show a message if there are no currency cards', () => {

  })

  // I think there should be some tests for the nav links

})