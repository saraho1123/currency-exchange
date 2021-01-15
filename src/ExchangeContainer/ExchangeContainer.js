import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import './ExchangeContainer.scss'
import CurrencyCard from '../CurrencyCard/CurrencyCard.js'
import Bookmarked from '../Bookmarked/Bookmarked.js'
import { getExchangeRates } from '../apiCalls.js'
import { sampleApiData } from '../sampleApiData.js'
 
const ExchangeContainer = ({ currencyInputData }) => {
  const [exchangeRate, setExchangeRate] = useState(0)
  const [rateDay, setRateDay] = useState('')
  const [newAmount, setNewAmount] = useState(0)
  const [allCurrencyData, setAllCurrencyData] = useState([])


  useEffect(() => {
    if(exchangeRate === '') {
      // getExchangeRates(currencyInputData.userCurrency, currencyInputData.newCurrency)
      // .then(data => setExchangeRate(data.rates[currencyInputData.newCurrency]))
      setExchangeRate(0.7336110195)
      createNewCurrencyData()
      // .then(createNewCurrencyData())
      // .then(setallCurrencyData([...allCurrencyData, ]))
      // .catch(error => console.log(error))
      
    }
  }, [exchangeRate])

  const calculateNewCurrency = () => {
    setNewAmount(currencyInputData.userCurrency * exchangeRate)
  }

  const createNewCurrencyData = () => {
    calculateNewCurrency()
    const newCurrencyData = {
      id: currencyInputData.id,
      key: currencyInputData.id,
      userCurrency: currencyInputData.userCurrency,
      userAmount: currencyInputData.userAmount,
      newCurrency: currencyInputData.newCurrency,
      newAmount: newAmount,
    }
    setAllCurrencyData({...allCurrencyData, newCurrencyData})
    console.log('currencyDataArray', allCurrencyData)
  }

  // const currencyCards = allCurrencyData.map(inputData => {
  //   return (
  //     <CurrencyCard 
  //       userCurrency={inputData.userCurrency}
  //       userAmount={inputData.userAmount}
  //       newCurrency={inputData.newCurrency}
  //       newAmount={newAmount}
  //     />
  //   )
  // })

  return (
    <section className='container'>
      <h1 >This is the container for the currency cards</h1>

    <NavLink to="/" className="nav">Get a new Currency Exchange!</NavLink>

    </section>
  )
}


  // if(props.currencyCards) {
  //   const currencyCards = props.currencyCards.map(card => {
  //     return (
        
  //     )
  //   })
  // }
/*
I think the api call should be here using the props passed from Form and then pass the manipulated data from the api call to each
individual CurrencyCard

There should be a button to display bookmarked cards/return to all cards 
*/


export default ExchangeContainer