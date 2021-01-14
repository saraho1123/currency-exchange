export const getExchangeRates = (userCurrency, newCurrency) => {
  return fetch(`https://api.exchangeratesapi.io/latest?symbols=${userCurrency},${newCurrency}`)
  .then(response => response.json())
}