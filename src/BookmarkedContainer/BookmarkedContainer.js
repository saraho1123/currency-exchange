import React from 'react'
import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom'
import './BookmarkedContainer.scss';
import Bookmarked from '../Bookmarked/Bookmarked.js'

const BookmarkedContainer = ({ bookmarkedConversions, removeBookmarked, deleteCurrencyCard }) => {
  if (bookmarkedConversions.length < 1) {
    return (
      <section className='bookmarked-container'>
        <NavLink to="/" className="nav">Get a new Currency Exchange!</NavLink>
        <NavLink to='/currency-cards' className='nav'>See All Your Conversions</NavLink>
        <h1>You have not yet bookmarked any conversions.</h1>
      </section>
    )
  } else if (bookmarkedConversions.length > 0) {
    const currencyCards = bookmarkedConversions.map(data => {
      return (
        <Bookmarked
          id={data.currencyData.id}
          key={data.currencyData.id}
          newAmount={data.newAmount}
          userCurrency={data.currencyData.userCurrency}
          userAmount={data.currencyData.userAmount}
          newCurrency={data.currencyData.newCurrency}
          exchangeRate={data.exchangeRate}
          date={data.date}
          removeBookmarked={removeBookmarked}
          deleteCurrencyCard={deleteCurrencyCard}
        />
        )
      })
      return (
        <section className='bookmarked-container'>
          <NavLink to="/" className="nav">Get a new Currency Exchange!</NavLink>
          <NavLink to='/currency-cards' className='nav'>See All Your Conversions</NavLink>
          <h1 >Your Bookmarked Conversions</h1>
          <div className='cards-container'>
            { currencyCards }
          </div>
        </section>
      )
  }
}

export default BookmarkedContainer;

BookmarkedContainer.propTypes = {
  bookmarkedConversions: PropTypes.array, 
  removeBookmarked: PropTypes.func.isRequired, 
  deleteCurrencyCard: PropTypes.func.isRequired,
}