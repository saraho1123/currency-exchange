import React from 'react'
import './Bookmarked.scss';

const Bookmarked = ({ id, newAmount, userCurrency, userAmount, newCurrency, exchangeRate, addBookmarked }) => {
  return (
    <section className='bookmarked'>
      <h1>{userAmount} {userCurrency} is worth: </h1>
      <h1>{newAmount} {newCurrency}</h1>        
      <h1>at an exchange rate of: </h1>            
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