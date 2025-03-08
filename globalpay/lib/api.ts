// This file simulates API responses for currency and crypto data

// Exchange rates against USD
export const exchangeRates = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.79,
  JPY: 151.72,
  AUD: 1.52,
  CAD: 1.37,
  INR: 83.42,
  CNY: 7.24,
  BRL: 5.16,
  MXN: 16.82,
}

// Crypto rates against USD
export const cryptoRates = {
  BTC: 67245.32,
  ETH: 3521.87,
  XRP: 0.51,
  SOL: 142.63,
  ADA: 0.45,
  DOT: 6.78,
  DOGE: 0.12,
  SHIB: 0.000023,
  AVAX: 34.21,
  MATIC: 0.72,
  GP: 10, // GlobalPay Coin (1 GP = $10 USD)
}

// Generate historical data for charts
export function generateHistoricalData(days = 30, volatility = 0.02) {
  const now = new Date()
  const data = []

  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    data.push({
      date: date.toISOString().split("T")[0],
      value: 1 + (Math.random() * 2 - 1) * volatility * i,
    })
  }

  return data
}

// Generate crypto historical data
export function generateCryptoHistoricalData(symbol: string, days = 30) {
  const baseValue = cryptoRates[symbol as keyof typeof cryptoRates] || 10
  const volatility = symbol === "BTC" ? 0.05 : symbol === "ETH" ? 0.07 : 0.1
  const now = new Date()
  const data = []

  let currentValue = baseValue

  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Add some randomness but maintain a trend
    const change = (Math.random() * 2 - 1) * volatility * baseValue
    currentValue = Math.max(currentValue + change, baseValue * 0.7)

    data.push({
      date: date.toISOString().split("T")[0],
      value: currentValue,
    })
  }

  return data
}

// Generate currency pair historical data
export function generateCurrencyPairData(fromCurrency: string, toCurrency: string, days = 30) {
  const fromRate = exchangeRates[fromCurrency as keyof typeof exchangeRates] || 1
  const toRate = exchangeRates[toCurrency as keyof typeof exchangeRates] || 1
  const baseRate = toRate / fromRate

  const now = new Date()
  const data = []

  let currentRate = baseRate
  const volatility = 0.01 // 1% daily volatility

  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Add some randomness but maintain a trend
    const change = (Math.random() * 2 - 1) * volatility * baseRate
    currentRate = Math.max(currentRate + change, baseRate * 0.95)

    data.push({
      date: date.toISOString().split("T")[0],
      value: currentRate,
    })
  }

  return data
}

// Convert currency
export function convertCurrency(amount: number, fromCurrency: string, toCurrency: string) {
  const fromRate = exchangeRates[fromCurrency as keyof typeof exchangeRates] || 1
  const toRate = exchangeRates[toCurrency as keyof typeof exchangeRates] || 1

  return (amount / fromRate) * toRate
}

// Convert to/from crypto
export function convertCrypto(amount: number, fromCurrency: string, toCurrency: string) {
  let fromRate, toRate

  // Check if fromCurrency is a crypto
  if (cryptoRates[fromCurrency as keyof typeof cryptoRates]) {
    fromRate = cryptoRates[fromCurrency as keyof typeof cryptoRates]
  } else {
    fromRate = exchangeRates[fromCurrency as keyof typeof exchangeRates] || 1
  }

  // Check if toCurrency is a crypto
  if (cryptoRates[toCurrency as keyof typeof cryptoRates]) {
    toRate = cryptoRates[toCurrency as keyof typeof cryptoRates]
  } else {
    toRate = exchangeRates[toCurrency as keyof typeof exchangeRates] || 1
  }

  // If fromCurrency is a crypto, convert to USD first
  if (cryptoRates[fromCurrency as keyof typeof cryptoRates]) {
    const usdAmount = amount * fromRate

    // If toCurrency is also a crypto
    if (cryptoRates[toCurrency as keyof typeof cryptoRates]) {
      return usdAmount / toRate
    }
    // If toCurrency is a fiat currency
    else {
      return usdAmount * toRate
    }
  }
  // If fromCurrency is a fiat currency
  else {
    // Convert to USD first
    const usdAmount = amount / fromRate

    // If toCurrency is a crypto
    if (cryptoRates[toCurrency as keyof typeof cryptoRates]) {
      return usdAmount / toRate
    }
    // If toCurrency is also a fiat currency
    else {
      return usdAmount * toRate
    }
  }
}

// Get user's GlobalPay balance
export function getUserBalance() {
  return {
    GP: 125.75,
    USD: 1257.5,
    recentTransactions: [
      {
        id: "tx1",
        type: "received",
        amount: 25,
        currency: "GP",
        from: "John Doe",
        date: "2023-03-05T10:30:00Z",
      },
      {
        id: "tx2",
        type: "sent",
        amount: 10,
        currency: "GP",
        to: "Alice Smith",
        date: "2023-03-03T14:20:00Z",
      },
      {
        id: "tx3",
        type: "converted",
        fromAmount: 500,
        fromCurrency: "USD",
        toAmount: 50,
        toCurrency: "GP",
        date: "2023-03-01T09:15:00Z",
      },
      {
        id: "tx4",
        type: "received",
        amount: 60.75,
        currency: "GP",
        from: "Robert Johnson",
        date: "2023-02-28T16:45:00Z",
      },
    ],
  }
}

