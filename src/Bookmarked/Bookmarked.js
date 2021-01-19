import React from 'react'
import { PropTypes } from 'prop-types'
import './Bookmarked.scss';

const Bookmarked = ({ 
  id, 
  newAmount, 
  userCurrency, 
  userAmount, 
  newCurrency, 
  exchangeRate, 
  date,
  deleteCurrencyCard,
  removeBookmarked }) => {
  if(id !== undefined) {
    return (
      <section className='bookmarked'>
        <button onClick={() => deleteCurrencyCard(id)}>🗑</button>
        <p>On {date}, </p>
        <p>{userAmount} {userCurrency} is worth: </p>
        <h1 className='new-conversion'>{newAmount} {newCurrency}</h1>        
        <h1>at an exchange rate of: </h1>            
        <h1>{exchangeRate}</h1> 
        <button onClick={()=> removeBookmarked(id)}>Remove From Bookmarked Conversions</button>
      </section>
    )
  }
}

export default Bookmarked;

Bookmarked.propTypes = {
  id: PropTypes.number.isRequired,
  newAmount: PropTypes.number.isRequired,
  userCurrency: PropTypes.string.isRequired, 
  userAmount: PropTypes.number.isRequired, 
  newCurrency: PropTypes.string.isRequired, 
  exchangeRate: PropTypes.number.isRequired, 
  deleteCurrencyCard: PropTypes.func.isRequired,
  removeBookmarked: PropTypes.func.isRequired,
};
