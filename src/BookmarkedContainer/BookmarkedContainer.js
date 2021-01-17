import React from 'react'
import { NavLink } from 'react-router-dom'

import './BookmarkedContainer.scss';
import Bookmarked from '../Bookmarked/Bookmarked.js'


const BookmarkedContainer = ({ bookmarkedConversions, removeBookmark }) => {
  console.log('bookmarked array', bookmarkedConversions)
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
        removeBookmark={removeBookmark}
      />
      )
    })
    return (
      <section className='container'>
        <NavLink to="/" className="nav">Get a new Currency Exchange!</NavLink>
        <NavLink to='/bookmarked-conversions' className='nav'>See Bookmarked Conversions</NavLink>
        <h1 >This is the container for the currency cards</h1>
        { currencyCards }
      </section>
  )
}

export default BookmarkedContainer;