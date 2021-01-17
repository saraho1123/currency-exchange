import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import './ExchangeContainer.scss'
import CurrencyCard from '../CurrencyCard/CurrencyCard.js'
import Bookmarked from '../Bookmarked/Bookmarked.js'
import { getExchangeRates } from '../apiCalls.js'
import { sampleApiData } from '../sampleApiData.js'
 
const ExchangeContainer = ({ fusedData }) => {
    const currencyCards = fusedData.map(data => {
      return (
        <CurrencyCard 
        id={data.currencyData.id}
        key={data.id}
        newAmount={data.newAmount}
        userCurrency={data.currencyData.userCurrency}
        userAmount={data.currencyData.userAmount}
        newCurrency={data.currencyData.newCurrency}
        exchangeRate={data.exchangeRate}
        />
        )
      })
      return (
        fusedData &&
        <section className='container'>
          <NavLink to="/" className="nav">Get a new Currency Exchange!</NavLink>
          <h1 >This is the container for the currency cards</h1>
          { currencyCards }
        </section>
    )

  }

export default ExchangeContainer