import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom';
import './Form.scss';
import ExchangeContainer from '../ExchangeContainer/ExchangeContainer.js'


const Form = (props) => {
  const [userCurrency, setUserCurrency] = useState('')
  const [userAmount, setUserAmount] = useState('')
  const [newCurrency, setNewCurrency] = useState('')

  const handleSearchChange = event => {
    setUserCurrency(event.target.value)
    setUserAmount(event.target.value)
    setNewCurrency(event.target.value)
  }

  useEffect(() => {
    handleSearchChange()
      // const newExchange = {
      //   id: Date.now(),
      //   userCurrency, 
      //   userAmount,
      //   newCurrency
      // }
      // props.addCurrencyCard(newExchange)
      clearInputs()
    }, [userCurrency, userAmount, newCurrency])

  const clearInputs = () => {
    setUserCurrency('')
    setUserAmount('')
    setNewCurrency('')
  }
  
  return (
    <section >
      <form className='user-input'>
        <input 
          type='text'
          className='user-currency'
          placeholder='Type country of your currency'
          value={userCurrency}
          onChange={event => handleSearchChange(event)}
        />
        <input           
        type='number'
          min='1'
          max='10000'
          className='user-amount'
          placeholder='Amount to exchange (up to 10,000)'
          value={userAmount}
          onChange={handleSearchChange}
        />
        <input 
          type='text'
          className='new-currency'
          placeholder='Type country of currency you want'
          value={newCurrency}
          onChange={handleSearchChange}
        />
      </form>
      <NavLink  to="/currency-cards" className="nav">Get Currency Conversion</NavLink>

    </section>
  )
}

/*

NOTES FOR TOMORROW:
useEffect is causing an endless loop
right now, cannot read property target of undefined
need to stop for the night as I am tired and will probably do better in the morning
Form should take in user input and route to ExchangeContainer, passing the user input

I think I should have a button to get to 'bookmarked' from here??
*/

export default Form;