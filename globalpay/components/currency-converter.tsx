"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RefreshCw, ArrowDownUp } from "lucide-react"
import { CurrencySelector } from "@/components/currency-selector"
import { convertCurrency, convertCrypto, exchangeRates, cryptoRates } from "@/lib/api"

export function CurrencyConverter() {
  const [fromAmount, setFromAmount] = useState("1000")
  const [toAmount, setToAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("GP")
  const [isLoading, setIsLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  // Calculate conversion when inputs change
  useEffect(() => {
    calculateConversion(fromAmount, fromCurrency, toCurrency)
  }, [fromAmount, fromCurrency, toCurrency])

  // Function to calculate conversion
  const calculateConversion = (amount: string, from: string, to: string) => {
    const numericAmount = Number.parseFloat(amount) || 0

    if (numericAmount <= 0) {
      setToAmount("0")
      return
    }

    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      let result

      // Check if either currency is a crypto
      if (cryptoRates[from as keyof typeof cryptoRates] || cryptoRates[to as keyof typeof cryptoRates]) {
        result = convertCrypto(numericAmount, from, to)
      } else {
        result = convertCurrency(numericAmount, from, to)
      }

      setToAmount(result.toFixed(to === "BTC" ? 8 : to === "ETH" ? 6 : 2))
      setIsLoading(false)
      setLastUpdated(new Date())
    }, 500)
  }

  // Swap currencies
  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setFromAmount(toAmount)
    calculateConversion(toAmount, toCurrency, fromCurrency)
  }

  // Get exchange rate text
  const getExchangeRateText = () => {
    if (isLoading) return "Calculating..."

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

    // Calculate the exchange rate
    let rate

    if (cryptoRates[fromCurrency as keyof typeof cryptoRates] && cryptoRates[toCurrency as keyof typeof cryptoRates]) {
      // Crypto to crypto
      rate = fromRate / toRate
      return `1 ${fromCurrency} = ${rate.toFixed(toCurrency === "BTC" ? 8 : 6)} ${toCurrency}`
    } else if (cryptoRates[fromCurrency as keyof typeof cryptoRates]) {
      // Crypto to fiat
      rate = fromRate * toRate
      return `1 ${fromCurrency} = ${rate.toFixed(2)} ${toCurrency}`
    } else if (cryptoRates[toCurrency as keyof typeof cryptoRates]) {
      // Fiat to crypto
      rate = 1 / fromRate / toRate
      return `1 ${fromCurrency} = ${rate.toFixed(toCurrency === "BTC" ? 8 : 6)} ${toCurrency}`
    } else {
      // Fiat to fiat
      rate = toRate / fromRate
      return `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label htmlFor="from-amount">You Send</Label>
          <span className="text-sm text-gray-500">Last updated: {lastUpdated.toLocaleTimeString()}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Input
              id="from-amount"
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <CurrencySelector value={fromCurrency} onChange={setFromCurrency} includeCrypto={true} />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" size="icon" className="rounded-full" onClick={handleSwap}>
          <ArrowDownUp className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <Label htmlFor="to-amount">You Receive</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Input
              id="to-amount"
              type="text"
              value={toAmount}
              readOnly
              className={`w-full ${isLoading ? "opacity-50" : ""}`}
            />
          </div>
          <div>
            <CurrencySelector value={toCurrency} onChange={setToCurrency} includeCrypto={true} />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600">{getExchangeRateText()}</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 p-0 h-auto"
          onClick={() => calculateConversion(fromAmount, fromCurrency, toCurrency)}
        >
          <RefreshCw className="h-3 w-3 mr-1" />
          Refresh
        </Button>
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-medium text-gray-900 mb-2">Transaction Summary</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">You Send</span>
            <span className="font-medium">
              {fromAmount} {fromCurrency}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Exchange Rate</span>
            <span>{getExchangeRateText()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction Fee</span>
            <span className="text-green-600">0 {fromCurrency}</span>
          </div>
          <div className="pt-2 border-t border-blue-200 flex justify-between">
            <span className="font-medium">Recipient Gets</span>
            <span className="font-medium">
              {toAmount} {toCurrency}
            </span>
          </div>
        </div>
      </div>

      <Button className="w-full bg-blue-600 hover:bg-blue-700">Continue</Button>
    </div>
  )
}

