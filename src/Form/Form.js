import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import './Form.scss'
import ExchangeContainer from '../ExchangeContainer/ExchangeContainer.js'
import { getExchangeRates } from '../apiCalls.js'

const Form = (props) => {
  const [userCurrency, setUserCurrency] = useState('')
  const [userAmount, setUserAmount] = useState('')
  const [newCurrency, setNewCurrency] = useState('')
  const [exchangeRate, setExchangeRate] = useState(null)

  const getExchangeData = async (event) => {
    event.preventDefault()
    await getExchangeRates(userCurrency)
    .then(data =>  {
      setExchangeRate(data.rates[newCurrency])
      console.log(exchangeRate)
      getUserData()
    })
  }




  const calculateNewAmount = () => {
    const newAmount = Math.round(100 * exchangeRate)/100 * userAmount
    return newAmount
  }

  const getUserData = () => {
    const newExchange = {
      id: Date.now(),
      newAmount: calculateNewAmount(),
      userCurrency, 
      userAmount,
      newCurrency,
      exchangeRate
    }
    props.addCurrencyCard(newExchange)
    clearInputs()
  }

  const clearInputs = () => {
    setUserCurrency('')
    setUserAmount('')
    setNewCurrency('')
  }

  const returnRedirect = () => {
    return <Redirect to='/currency-exchange' />
  }
  

  const toInputUppercase = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };
  
  return (
    <section >
      <form onSubmit={event => getExchangeData(event)} className='user-input'>
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
        <NavLink to="/currency-cards" className="nav">
          <input
            type='submit'
            value='Get Currency Conversion'   
          />
        </NavLink>
      </form>
      

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



  // useEffect(() => {
  //   if(exchangeRate === 0) {
  //     // let exchangeRate = 0
  //       getExchangeRates(userCurrency)
  //       .then(data =>  setExchangeRate(data.rates[newCurrency]))
  //       // .then(console.log(exchangeRate))
  //       .then(getUserData(exchangeRate))
  //   }
  // }, [exchangeRate])