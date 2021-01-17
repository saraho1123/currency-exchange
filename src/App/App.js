import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Form from '../Form/Form.js'
import ExchangeContainer from '../ExchangeContainer/ExchangeContainer.js'
import BookmarkedContainer from '../BookmarkedContainer/BookmarkedContainer.js'

import { getExchangeRates } from '../apiCalls.js'

const App = () => {
  const [currencyData, setCurrencyData] = useState({})
  const [useEffectSwitch, setUseEffectSwitch] = useState(false)
  const [exchangeRate, setExchangeRate] = useState(null)
  const [fusedData, setFusedData] = useState([])
  const [bookmarkedConversions, setBookmarkedConversions] = useState([])

  const addCurrencyCard = (newCurrencyCardInfo, userInput) => { 
    setCurrencyData(newCurrencyCardInfo)
    setUseEffectSwitch(true)
  }

  const deleteCurrencyCard = (id) => {
    const filteredCurrencyCards = currencyData.filter(card => {
      return card.id !== id
    })
    setCurrencyData(filteredCurrencyCards)
  }

  const addBookmarked = (id) => {
    console.log('bookmarked')
    console.log('id', id)
    console.log('fused', fusedData)
    const bookmarkedCards = fusedData.filter(card => {
      return card.id === id
    })
    console.group(bookmarkedCards)
    setBookmarkedConversions([...bookmarkedConversions, bookmarkedCards])
  }

  useEffect(() => {
    if(useEffectSwitch) {
      getExchangeRates(currencyData.userCurrency)
      .then(data =>  {
        setExchangeRate(data.rates[currencyData.newCurrency])
        consolidateData()
      })
      .catch(error => console.log(error))
      setUseEffectSwitch(false)
    }

  }, [currencyData])

  const calculateNewAmount = () => {
    const newAmount = Math.round(100 * exchangeRate)/100 * currencyData.userAmount
    return newAmount
  }

  const consolidateData = () => {
    const calculatedAmount = calculateNewAmount()
    const newFusedData = {
      currencyData,
      newAmount: calculatedAmount,
      exchangeRate
    }
    setFusedData([...fusedData, newFusedData])
  }

  return (
    <main>
      <section>
      <h1>Currency Exchange</h1>
      <Switch>
        <Route 
          
          path='/currency-cards'
          render={() => {
            return(
              fusedData  && 
              <ExchangeContainer 
                fusedData={fusedData}
                useEffectSwitch={useEffectSwitch}
                addBookmarked={addBookmarked}
              />
            )
          }}
        />
        <Route 
          
          path='/bookmarked-conversions'
          render={() => {
            return(
              fusedData  && 
              <BookmarkedContainer 
              bookmarkedConversions={bookmarkedConversions}
                useEffectSwitch={useEffectSwitch}
                // resetExchangeRate={resetExchangeRate} 
              />
            )
          }}
        />
        <Route
        exact
        path='/'
        render={() => {
          return (
            <Form 
              addCurrencyCard={addCurrencyCard} 
              // resetExchangeRate={resetExchangeRate}
              // deleteCurrencyCard={deleteCurrencyCard}
            />
          )
        }}
        />
      </Switch>
    </section>
      <footer>Curreny Rates for the day take from: [put the api here!]</footer>
    </main>
  )
}

export default App;
