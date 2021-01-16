import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import './ExchangeContainer.scss'
import CurrencyCard from '../CurrencyCard/CurrencyCard.js'
import Bookmarked from '../Bookmarked/Bookmarked.js'
import { getExchangeRates } from '../apiCalls.js'
import { sampleApiData } from '../sampleApiData.js'
 
const ExchangeContainer = ({ currencyData }) => {

  const currencyCards = currencyData.map(data => {
    return (
      <CurrencyCard 
        id={data.id}
        key={data.id}
        newAmount={data.newAmount}
        userCurrency={data.userCurrency}
        userAmount={data.userAmount}
        newCurrency={data.newCurrency}
        exchangeRate={data.exchangeRate}
      />
    )
  })

  return (
    <section className='container'>
      <h1 >This is the container for the currency cards</h1>
      { currencyCards }
      <NavLink to="/" className="nav">Get a new Currency Exchange!</NavLink>

    </section>
  )
}


  // if(props.currencyCards) {
  //   const currencyCards = props.currencyCards.map(card => {
  //     return (
        
  //     )
  //   })
  // }
/*
I think the api call should be here using the props passed from Form and then pass the manipulated data from the api call to each
individual CurrencyCard

There should be a button to display bookmarked cards/return to all cards 
*/


export default ExchangeContainer