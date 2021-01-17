import React from 'react'
import './Bookmarked.scss';

const Bookmarked = ({ id, newAmount, userCurrency, userAmount, newCurrency, exchangeRate, addBookmarked }) => {
  return (
    <section className='bookmarked'>
    <h1>{newAmount}</h1>        
    <h1>{userCurrency}</h1>        
    <h1>{userAmount}</h1>        
    <h1>{newCurrency}</h1>        
    <h1>{exchangeRate}</h1>   
  </section>
  )
}

/*
This should just render a subset of the CurrencyCards
It will need a button to return to Form or to all CurrencyCards
I honestly don't think I"m going to need this one! oops!
*/

export default Bookmarked;