import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Form from '../Form/Form.js'
import ExchangeContainer from '../ExchangeContainer/ExchangeContainer.js'
import { getExchangeRates } from '../apiCalls.js'


const App = () => {
  const [currencyData, setcurrencyData] = useState([])

  const addCurrencyCard = (newCurrencyCardInfo) => {
    setcurrencyData([...currencyData, newCurrencyCardInfo])
  }

  const deleteCurrencyCard = (id) => {
    const filteredCurrencyCards = currencyData.filter(card => {
      return card.id !== id
    })
    setcurrencyData(filteredCurrencyCards)
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
              <ExchangeContainer currencyData={currencyData}/>
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
/*
App shouldn't do much other than render the Form
*/

export default App;
