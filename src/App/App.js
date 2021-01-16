import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Form from '../Form/Form.js'
import ExchangeContainer from '../ExchangeContainer/ExchangeContainer.js'
import { getExchangeRates } from '../apiCalls.js'


const App = () => {
  const [currencyData, setCurrencyData] = useState([])
  const [userInput, setUserInput] = useState(false)
  const [exchangeRate, setExchangeRate] = useState(null)
  // const [fusedData, setFusedData] = useState([])

  const addCurrencyCard = (newCurrencyCardInfo, userInput) => {
    
    setCurrencyData([...currencyData, newCurrencyCardInfo])
    // console.log('new currency', currencyData/*[(currencyData.length) - 1]*/)
    setUserInput(true)
  }

  const deleteCurrencyCard = (id) => {
    const filteredCurrencyCards = currencyData.filter(card => {
      return card.id !== id
    })
    setCurrencyData(filteredCurrencyCards)
  }

  useEffect(() => {
    if(userInput) {
      console.log(currencyData[currencyData.length - 1].userCurrency)
      getExchangeRates(currencyData[currencyData.length - 1].userCurrency)
      .then(data =>  {
        console.log('new currency', currencyData[currencyData.length - 1].newCurrency)
        setExchangeRate(data.rates[currencyData[currencyData.length - 1].newCurrency])
        consolidateData()
      })
      .catch(error => console.log(error))
    }
 }, [currencyData])

  // const getExchangeData = () => {
  //   if(userInput) {
  //     console.log('new currency', currencyData)
  //     getExchangeRates(currencyData[currencyData.length - 1].userCurrency)
  //     .then(data =>  {
  //       setExchangeRate(data.rates[currencyData.newCurrency])
  //       // getUserData(userCurrency, userAmount, newCurrency)
  //     })
  //     .catch(error => console.log(error))
  //   }
  // }

  const resetExchangeRate = () => {
    setUserInput(false)
    setExchangeRate(null)
  }

  const calculateNewAmount = () => {
    const newAmount = Math.round(100 * exchangeRate)/100 * currencyData[currencyData.length - 1].userAmount
    return newAmount
  }

  const consolidateData = () => {
    const calculatedAmount = calculateNewAmount()
    const newFusedData = {
      // id: currencyData.id,
      newAmount: calculatedAmount,
      // userCurrency: currencyData.userCurrency, 
      // userAmount: currencyData.userAmount,
      // newCurrency: currencyData.newCurrency,
      currencyData,
      exchangeRate
    }
    return [newFusedData]
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
              exchangeRate  &&
              <ExchangeContainer 
                fusedData={consolidateData()}
                // currencyData={currencyData} 
                // exchangeRate={exchangeRate}
                resetExchangeRate={resetExchangeRate} 
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
              resetExchangeRate={resetExchangeRate}
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
