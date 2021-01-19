import React from 'react'
import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom'
import './ExchangeContainer.scss'
import CurrencyCard from '../CurrencyCard/CurrencyCard.js'
 
const ExchangeContainer = ({ fusedData, addBookmarked, deleteCurrencyCard, bookmarkedTag }) => {
  if (fusedData.length < 1) {
    return (
      <section className='container'>
        <NavLink to="/" className="nav">Get a new Currency Exchange!</NavLink>
        <h1>You have not completed any conversions yet.</h1>
      </section>
    )
  } else {
    const currencyCards = fusedData.map(data => {
      return (
        <CurrencyCard 
          id={data.currencyData.id}
          key={data.currencyData.id}
          newAmount={data.newAmount}
          userCurrency={data.currencyData.userCurrency}
          userAmount={data.currencyData.userAmount}
          newCurrency={data.currencyData.newCurrency}
          exchangeRate={data.exchangeRate}
          date={data.date}
          addBookmarked={addBookmarked}
          bookmarkedTag={bookmarkedTag}
          deleteCurrencyCard={deleteCurrencyCard}
        />
        )
      })
    return (
      fusedData &&
      <section className='container'>
        <NavLink to="/" className="nav">Get a new Currency Exchange!</NavLink>
        <NavLink to="/bookmarked-conversions" className="nav">See Your Bookmarked Conversions</NavLink>
        <h1 >Your Currency Conversions</h1>
        <div className='cards-container'>
          { currencyCards }
        </div>
      </section>
    )
   }
  }

export default ExchangeContainer

ExchangeContainer.propTypes = {
  fusedData: PropTypes.array, 
  addBookmarked: PropTypes.func, 
  deleteCurrencyCard: PropTypes.func, 
  bookmarkedTag: PropTypes.bool,
}
