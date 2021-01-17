import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Form.scss'

const Form = (props) => {
  const [userCurrency, setUserCurrency] = useState('')
  const [userAmount, setUserAmount] = useState('')
  const [newCurrency, setNewCurrency] = useState('')

  const getUserData = async () => {
    const newExchange = {
      id: Date.now(),
      userCurrency, 
      userAmount,
      newCurrency,
    }
    await props.addCurrencyCard(newExchange)
    clearInputs()
  }

  const clearInputs = () => {
    setUserCurrency('')
    setUserAmount('')
    setNewCurrency('')
  }

  const toInputUppercase = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };
  
  return (
    <section >
      <form className='user-input'>
        <input 
          type='text'
          className='user-currency'
          placeholder='Type country of your currency'
          onInput={toInputUppercase}
          value={userCurrency}
          onChange={(event) => setUserCurrency(event.target.value)}
        />
        <input           
        type='number'
          min='1'
          max='10000'
          className='user-amount'
          placeholder='Amount to exchange (up to 10,000)'
          value={userAmount}
          onChange={(event) => setUserAmount(event.target.value)}
        />
        <input 
          type='text'
          className='new-currency'
          placeholder='Type country of currency you want'
          onInput={toInputUppercase}
          value={newCurrency}
          onChange={(event) => setNewCurrency(event.target.value)}
        />
      <NavLink onClick={getUserData} to="/currency-cards" className="nav">Get Currency Conversion </NavLink>
      </form>
    </section>
  )
}

export default Form;
