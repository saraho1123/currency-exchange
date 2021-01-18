import React from 'react'
import { PropTypes } from 'prop-types'
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

CurrencyCard.propTypes = {
  id: PropTypes.number.isRequired,
  newAmount: PropTypes.number.isRequired,
  userCurrency: PropTypes.string.isRequired,
  userAmount: PropTypes.number.isRequired,
  newCurrency: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  addBookmarked: PropTypes.func.isRequired,
  bookmarkedTag: PropTypes.bool,
  deleteCurrencyCard: PropTypes.func.isRequired,
}
