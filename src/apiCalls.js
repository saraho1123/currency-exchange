export const getExchangeRates = async (userCurrency) => {
  const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${userCurrency}`)
  const data = await response.json()
  return data
}
