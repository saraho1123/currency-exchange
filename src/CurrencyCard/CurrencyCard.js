import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './CurrencyCard.scss';

const CurrencyCard = ({ newAmount, userCurrency, userAmount, newCurrency, exchangeRate }) => {
  return (
      <section className='currency-card'>
        <h1>{newAmount}</h1>        
        <h1>{userCurrency}</h1>        
        <h1>{userAmount}</h1>        
        <h1>{newCurrency}</h1>        
        <h1>{exchangeRate}</h1>   
        <button>Bookmark this Conversion</button>     
      </section>
  )
}

/*
Render a currency card
There needs to be a button on each card to bookmark and delete
*/



export default CurrencyCard;