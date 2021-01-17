import React from 'react'
import './CurrencyCard.scss';

const CurrencyCard = ({ 
  id, 
  newAmount, 
  userCurrency, 
  userAmount, 
  newCurrency, 
  exchangeRate, 
  addBookmarked, 
  deleteCurrencyCard,
 }) => {
  return (
      <section className='currency-card'>
        <button onClick={deleteCurrencyCard}>🗑</button>
        <h1>{userAmount} {userCurrency} is worth: </h1>
        <h1>{newAmount} {newCurrency}</h1>        
        <h1>at an exchange rate of: </h1>            
        <h1>{exchangeRate}</h1>   
        <button onClick={() => addBookmarked(id)} >Bookmark this Conversion</button>     
      </section>
  )
}

export default CurrencyCard;