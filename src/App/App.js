import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Form from '../Form/Form.js'
import ExchangeContainer from '../ExchangeContainer/ExchangeContainer.js'
import { getExchangeRates } from '../apiCalls.js'

const App = () => {
  const [currencyData, setCurrencyData] = useState({})
  const [useEffectSwitch, setUseEffectSwitch] = useState(false)
  const [exchangeRate, setExchangeRate] = useState(null)
  const [fusedData, setFusedData] = useState([])

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

  useEffect(() => {
    if(useEffectSwitch) {
      getExchangeRates(currencyData.userCurrency)
      .then(data =>  {
        setExchangeRate(data.rates[currencyData.newCurrency])
        consolidateData(data.rates[currencyData.newCurrency])
      })
      .catch(error => console.log(error))
    }
  }, [currencyData])

  const calculateNewAmount = (exRate) => {
    const newAmount = Math.round(100 * exRate)/100 * currencyData.userAmount
    return newAmount
  }

  const consolidateData = (exRate) => {
    const calculatedAmount = calculateNewAmount(exRate)
    const newFusedData = {
      currencyData,
      newAmount: calculatedAmount,
      exchangeRate: exRate
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
              exchangeRate &&
              <ExchangeContainer 
                fusedData={fusedData}
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
