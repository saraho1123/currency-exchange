import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom'
import { currencyCodes } from '../sampleApiData.js'
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

  if(!userCurrency || !userAmount || !newCurrency) {
    return (
      <section >
      <NavLink to='/currency-cards' className='nav'>See All Your Conversions</NavLink>
      <form className='user-input' >
        <select 
          className='user-currency'
          data-testid='user-currency-dropdown'
          type='text'
          value={userCurrency}
          onChange={(event) => setUserCurrency(event.target.value)}>  
          {currencyCodes.map(code => {
            return (
              <option key={code} value={code}>{code}</option>
              )
            })}
        </select>
        <input           
        type='number'
        min='1'
        max='10000'
        className='user-amount'
        placeholder='Amount to exchange (up to 10,000)'
        value={userAmount}
        onChange={(event) => setUserAmount(event.target.value)}
        />
        <select 
          className='new-currency'
          data-testid='new-currency-dropdown'
          type='text'
          value={newCurrency}
          onChange={(event) => setNewCurrency(event.target.value)}>  
          {currencyCodes.map(code => {
            return (
              <option key={code} value={code}>{code}</option>
              )
            })}
        </select>
      <NavLink to="/" className="nav">Please complete all fields</NavLink>
      </form>
    </section>
  )
} else {
    return (
      <section >
        <NavLink to='/currency-cards' className='nav'>See All Your Conversions</NavLink>
        <form className='user-input'>
          <select 
            className='user-currency'
            type='text'
            value={userCurrency}
            onChange={(event) => setUserCurrency(event.target.value)}>  
            {currencyCodes.map(code => {
              return (
                <option value={code}>{code}</option>
              )
            })}
          </select>
          <input           
          type='number'
            min='1'
            max='10000'
            className='user-amount'
            placeholder='Amount to exchange (up to 10,000)'
            value={userAmount}
            onChange={(event) => setUserAmount(event.target.value)}
          />
          <select 
            className='new-currency'
            type='text'
            value={newCurrency}
            onChange={(event) => setNewCurrency(event.target.value)}>  
            {currencyCodes.map(code => {
              return (
                <option value={code}>{code}</option>
              )
            })}
          </select>
        <NavLink onClick={getUserData} to="/currency-cards" className="nav">Get Currency Conversion </NavLink>
        </form>
      </section>
    )
  }
}

export default Form

Form.propTypes = {
  addCurrencyCard: PropTypes.func,
}
