"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { generateCurrencyPairData, exchangeRates } from "@/lib/api"
import { CurrencySelector } from "@/components/currency-selector"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"
import { formatDistanceToNow } from "date-fns"

export function CurrencyChart() {
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [timeframe, setTimeframe] = useState("30d")
  const [chartData, setChartData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  useEffect(() => {
    fetchChartData()
  }, [fromCurrency, toCurrency, timeframe])

  const fetchChartData = () => {
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      const days = timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : timeframe === "90d" ? 90 : 365
      const data = generateCurrencyPairData(fromCurrency, toCurrency, days)
      setChartData(data)
      setIsLoading(false)
      setLastUpdated(new Date())
    }, 800)
  }

  const getCurrentRate = () => {
    const fromRate = exchangeRates[fromCurrency as keyof typeof exchangeRates] || 1
    const toRate = exchangeRates[toCurrency as keyof typeof exchangeRates] || 1
    return toRate / fromRate
  }

  const getPercentChange = () => {
    if (chartData.length < 2) return 0

    const firstValue = chartData[0].value
    const lastValue = chartData[chartData.length - 1].value

    return ((lastValue - firstValue) / firstValue) * 100
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <CardTitle>Currency Exchange Rates</CardTitle>
            <CardDescription>Real-time currency exchange rate data</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">From Currency</label>
              <CurrencySelector value={fromCurrency} onChange={setFromCurrency} includeCrypto={false} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">To Currency</label>
              <CurrencySelector value={toCurrency} onChange={setToCurrency} includeCrypto={false} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div>
              <div className="text-2xl font-bold">
                1 {fromCurrency} = {getCurrentRate().toFixed(4)} {toCurrency}
              </div>
              <div className={`text-sm ${getPercentChange() >= 0 ? "text-green-600" : "text-red-600"}`}>
                {getPercentChange() >= 0 ? "↑" : "↓"} {Math.abs(getPercentChange()).toFixed(2)}% ({timeframe})
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Tabs value={timeframe} onValueChange={setTimeframe} className="w-full">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="7d">7D</TabsTrigger>
                  <TabsTrigger value="30d">30D</TabsTrigger>
                  <TabsTrigger value="90d">90D</TabsTrigger>
                  <TabsTrigger value="1y">1Y</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className={`h-[300px] ${isLoading ? "opacity-50" : ""}`}>
            {chartData.length > 0 && (
              <ChartContainer>
                <Chart className="h-[300px]">
                  <ChartXAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => {
                      const date = new Date(value)
                      return date.toLocaleDateString(undefined, { month: "short", day: "numeric" })
                    }}
                  />
                  <ChartYAxis tickLine={false} axisLine={false} tickFormatter={(value) => value.toFixed(4)} />
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <ChartTooltipContent>
                            <div className="text-sm font-medium text-gray-900">
                              {new Date(payload[0].payload.date).toLocaleDateString()}
                            </div>
                            <div className="text-sm font-bold">
                              1 {fromCurrency} = {(payload[0].value as number).toFixed(4)} {toCurrency}
                            </div>
                          </ChartTooltipContent>
                        )
                      }
                      return null
                    }}
                  />
                  <ChartLine dataKey="value" stroke="#1E88E5" strokeWidth={2} dot={false} />
                  <ChartArea dataKey="value" fill="#1E88E5" fillOpacity={0.1} />
                </Chart>
              </ChartContainer>
            )}
          </div>

          <div className="text-xs text-gray-500 text-right">Last updated: {formatDistanceToNow(lastUpdated)} ago</div>
        </div>
      </CardContent>
    </Card>
  )
}

