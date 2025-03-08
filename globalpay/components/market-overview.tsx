"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cryptoRates, exchangeRates } from "@/lib/api"
import Link from "next/link"

export function MarketOverview() {
  const [cryptos, setCryptos] = useState<any[]>([])
  const [currencies, setCurrencies] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      // Process crypto data
      const cryptoData = [
        { symbol: "BTC", name: "Bitcoin", price: cryptoRates.BTC, change: 2.4 },
        { symbol: "ETH", name: "Ethereum", price: cryptoRates.ETH, change: -0.8 },
        { symbol: "GP", name: "GlobalPay Coin", price: cryptoRates.GP, change: 5.2 },
      ]

      // Process currency data
      const currencyData = [
        { code: "EUR", name: "Euro", rate: exchangeRates.EUR, change: 0.2 },
        { code: "GBP", name: "British Pound", rate: exchangeRates.GBP, change: 0.5 },
        { code: "INR", name: "Indian Rupee", rate: exchangeRates.INR, change: -0.3 },
      ]

      setCryptos(cryptoData)
      setCurrencies(currencyData)
      setIsLoading(false)
    }, 800)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Current rates for popular currencies and cryptocurrencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Cryptocurrencies</div>
            <div className="space-y-2">
              {isLoading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-muted rounded-full mr-3"></div>
                          <div>
                            <div className="h-4 w-24 bg-muted rounded"></div>
                            <div className="h-3 w-12 bg-muted rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="h-4 w-20 bg-muted rounded"></div>
                          <div className="h-3 w-12 bg-muted rounded mt-1 ml-auto"></div>
                        </div>
                      </div>
                    ))
                : cryptos.map((crypto, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium text-primary">{crypto.symbol.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{crypto.name}</p>
                          <p className="text-xs text-muted-foreground">{crypto.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${crypto.price.toLocaleString()}</p>
                        <p className={`text-xs ${crypto.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {crypto.change >= 0 ? "↑" : "↓"} {Math.abs(crypto.change)}%
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Fiat Currencies (vs USD)</div>
            <div className="space-y-2">
              {isLoading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-muted rounded-full mr-3"></div>
                          <div>
                            <div className="h-4 w-24 bg-muted rounded"></div>
                            <div className="h-3 w-12 bg-muted rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="h-4 w-20 bg-muted rounded"></div>
                          <div className="h-3 w-12 bg-muted rounded mt-1 ml-auto"></div>
                        </div>
                      </div>
                    ))
                : currencies.map((currency, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">{currency.code.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{currency.name}</p>
                          <p className="text-xs text-muted-foreground">{currency.code}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{currency.rate.toFixed(4)}</p>
                        <p className={`text-xs ${currency.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {currency.change >= 0 ? "↑" : "↓"} {Math.abs(currency.change)}%
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        <Button variant="ghost" className="w-full mt-4 text-primary" asChild>
          <Link href="/market">
            View All Markets <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

