import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Form from '../Form/Form.js'
import ExchangeContainer from '../ExchangeContainer/ExchangeContainer.js'

const App = () => {
  const [currencyCards, setCurrencyCards] = useState([])

  const addCurrencyCard = (newCurrencyCard) => {
    setCurrencyCards([...currencyCards, newCurrencyCard])
  }

  const deleteCurrencyCard = (id) => {
    const filteredCurrencyCards = currencyCards.filter(card => {
      return card.id !== id
    })
    setCurrencyCards(filteredCurrencyCards)
  }

  return (
    <main>
      <section>
      <h1>Currency Exchange</h1>
      <Switch>
        <Route 
           
          path='/currency-cards'
          component={ ExchangeContainer }
          // render={() => {
          //   <ExchangeContainer currencyCards={currencyCards}/>
          // }}
        />
        <Route
        exact
        path='/'
        render={() => {
          return (
            <Form 
              addCurrencyCard={addCurrencyCard} 
              currencyCards={currencyCards} 
              deleteCurrencyCard={deleteCurrencyCard}
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
