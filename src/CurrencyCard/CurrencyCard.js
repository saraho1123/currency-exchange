import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './CurrencyCard.scss';

const CurrencyCard = ({ currencyCards }) => {

  return (
      <section className='currency-card'>
        <h1>This would be an individual Currency Card</h1>
        {/* <h2>{currencyCards.newAmount}</h2> */}
        
      </section>
  )
}

/*
Render a currency card
There needs to be a button on each card to bookmark and delete
*/



export default CurrencyCard;