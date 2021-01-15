export const getExchangeRates = async (userCurrency, newCurrency) => {
  const response = await fetch(`https://api.exchangeratesapi.io/latest?symbols=${userCurrency},${newCurrency}`)
  const data = await response.json()
  return data
  // return fetch(`https://api.exchangeratesapi.io/latest?symbols=${userCurrency},${newCurrency}`)
  //   .then(response => response.json())
}