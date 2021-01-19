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
  const [bookmarkedTag, setBookmarkedTag] = useState(false)
  const [fusedData, setFusedData] = useState([])
  const [bookmarkedConversions, setBookmarkedConversions] = useState([])

  const addCurrencyCard = (newCurrencyCardInfo) => {
    setCurrencyData(newCurrencyCardInfo)
    setUseEffectSwitch(true)
  }

  const deleteCurrencyCard = (id) => {
    const filteredCurrencyCards = fusedData.filter(card => {
      return card.currencyData.id !== id
    })
    setFusedData(filteredCurrencyCards)
    setBookmarkedConversions(filteredCurrencyCards)
  }

  const addBookmarked = (id) => {
    const bookmarkedCards = fusedData.find(card => {
      return card.currencyData.id === id
    })
    setBookmarkedConversions([...bookmarkedConversions, bookmarkedCards])
    setBookmarkedTag(true)
  }

  const removeBookmarked = (id) => {
    const filteredCards = fusedData.filter(card => {
      return card.currencyData.id !== id
    })
    setBookmarkedConversions(filteredCards)
    setBookmarkedTag(false)
  }

  useEffect(() => {
    if (useEffectSwitch) {
      getExchangeRates(currencyData.userCurrency)
        .then(data => {
          consolidateData(data.rates[currencyData.newCurrency], data.date)
        })
        .catch(error => console.log(error))
      setUseEffectSwitch(false)
    }

  }, [currencyData])

  const calculateNewAmount = (exRate) => {
    const newAmount = Math.round(1000 * exRate) / 1000 * currencyData.userAmount
    return newAmount
  }

  const consolidateData = (exRate, date) => {
    const calculatedAmount = calculateNewAmount(exRate)
    const newFusedData = {
      currencyData,
      newAmount: calculatedAmount,
      exchangeRate: exRate,
      date: date,
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
              return (
                fusedData &&
                <ExchangeContainer
                  fusedData={fusedData}
                  addBookmarked={addBookmarked}
                  deleteCurrencyCard={deleteCurrencyCard}
                  bookmarkedTag={bookmarkedTag}
                />
              )
            }}
          />
          <Route
            
            path='/bookmarked-conversions'
            render={() => {
              return (
                fusedData &&
                <BookmarkedContainer
                  bookmarkedConversions={bookmarkedConversions}
                  deleteCurrencyCard={deleteCurrencyCard}
                  removeBookmarked={removeBookmarked}
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
