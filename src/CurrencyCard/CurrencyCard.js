import React from 'react'
import './CurrencyCard.scss';

const CurrencyCard = ({ 
  id, 
  newAmount, 
  userCurrency, 
  userAmount, 
  newCurrency, 
  exchangeRate, 
  date,
  addBookmarked, 
  bookmarkedTag, 
  deleteCurrencyCard,
 }) => {
  return (
      <section className='currency-card'>
        <button onClick={() => deleteCurrencyCard(id)}>🗑</button>
        <p>On {date}, {userAmount} {userCurrency} is worth: </p>
        <h1>{newAmount} {newCurrency}</h1>        
        <p>at an exchange rate of: <b>{exchangeRate}</b></p>
        {!bookmarkedTag &&           
          <button 
            onClick={() => addBookmarked(id)} >
            Bookmark this Conversion
          </button>}  
      </section>
  )
}

export default CurrencyCard
