export const sampleApiData = {
  "rates": {
      "CAD": 1.2686407126,
      "HKD": 7.7536291653,
      "ISK": 129.1652919828,
      "PHP": 48.0303530188,
      "DKK": 6.1360112174,
      "HUF": 296.5770372814,
      "CZK": 21.6017815902,
      "GBP": 0.7336110195,
      "RON": 4.0199604091,
      "SEK": 8.3354503464,
      "IDR": 14043.9953810624,
      "INR": 73.1297426592,
      "BRL": 5.269548004,
      "RUB": 73.4823490597,
      "HRK": 6.2429891125,
      "JPY": 104.0993071594,
      "THB": 30.019795447,
      "CHF": 0.8912075223,
      "EUR": 0.8248102936,
      "MYR": 4.0359617288,
      "BGN": 1.6131639723,
      "TRY": 7.3813922798,
      "CNY": 6.4672550313,
      "NOK": 8.5044539756,
      "NZD": 1.3900527879,
      "ZAR": 15.1886341142,
      "USD": 1.0,
      "MXN": 19.8299241175,
      "SGD": 1.3271197625,
      "AUD": 1.2901682613,
      "ILS": 3.1421148136,
      "KRW": 1097.3028703398,
      "PLN": 3.7429066315
  },
  "base": "USD",
  "date": "2021-01-14"
}

export const currencyCodes = [
  "Select Currency Code",
  "AUD", 
  "BGN", 
  "BRL", 
  "CAD", 
  "CHF", 
  "CNY", 
  "CZK", 
  "DKK", 
  "EUR", 
  "GBP", 
  "HKD", 
  "HRK", 
  "HUF", 
  "IDR", 
  "ILS", 
  "INR", 
  "ISK", 
  "JPY", 
  "KRW", 
  "MXN", 
  "MYR", 
  "NOK", 
  "NZD", 
  "PHP", 
  "PLN", 
  "RON", 
  "RUB", 
  "SEK", 
  "SGD", 
  "THB", 
  "TRY", 
  "USD", 
  "ZAR"
]

export const sampleCurrencyCard = {
  id: 1234,
  newAmount: 7.34,
  userCurrency: "USD",
  userAmount: 10,
  newCurrency: "GBP",
  exchangeRate: 0.7336110195,
  date: '2021-01-14',
  bookmarkedTag: false,
}

export const multipleSampleCurrencyCards = [
  {
    currencyData: 
      {
        id: 1234,
        newCurrency: "PHP",
        userAmount: 10,
        userCurrency: "USD",
      },
    date: '2021-01-14',
    exchangeRate: 48.0303530188,
    newAmount: 480.29,
    bookmarkedTag: false,
  },
  {
    currencyData: 
      {
        id: 12345,
        newCurrency: "GBP",
        userAmount: 10,
        userCurrency: "USD",
      },
    date: '2021-01-14',
    exchangeRate: 0.7336110195,
    newAmount: 7.34,
    bookmarkedTag: false,
  },
  {
    currencyData: 
      {
        id: 123456,
        newCurrency: "NZD",
        userAmount: 10,
        userCurrency: "USD",
      },
    date: '2021-01-14',
    exchangeRate: 1.3900527879,
    newAmount: 13.94,
    bookmarkedTag: false,
  },
]

export const sampleBookmarkedCard = {
  id: 1234,
  newAmount: 7.34,
  userCurrency: "USD",
  userAmount: 10,
  newCurrency: "GBP",
  exchangeRate: 0.7336110195,
  date: '2021-01-14',
}

export const multipleSampleBookmarkedCards = [
  {
    currencyData: 
      {
        id: 1234,
        newCurrency: "PHP",
        userAmount: 10,
        userCurrency: "USD",
      },
    date: '2021-01-14',
    exchangeRate: 48.0303530188,
    newAmount: 480.29,
  },
  {
    currencyData: 
      {
        id: 12345,
        newCurrency: "GBP",
        userAmount: 10,
        userCurrency: "USD",
      },
    date: '2021-01-14',
    exchangeRate: 0.7336110195,
    newAmount: 7.34,
  },
  {
    currencyData: 
      {
        id: 123456,
        newCurrency: "NZD",
        userAmount: 10,
        userCurrency: "USD",
      },
    date: '2021-01-14',
    exchangeRate: 1.3900527879,
    newAmount: 13.94,
  },
]
