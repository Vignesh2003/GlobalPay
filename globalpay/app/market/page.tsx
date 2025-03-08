import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CryptoChart } from "@/components/crypto-chart"
import { CurrencyChart } from "@/components/currency-chart"
import { cryptoRates, exchangeRates } from "@/lib/api"

export default function MarketPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Live Market</h1>
      </div>

      <Tabs defaultValue="crypto" className="w-full mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="crypto">Cryptocurrencies</TabsTrigger>
          <TabsTrigger value="forex">Forex</TabsTrigger>
        </TabsList>

        <TabsContent value="crypto" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {Object.entries(cryptoRates)
              .slice(0, 4)
              .map(([symbol, price], i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                          <span className="font-medium text-primary">{symbol.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{symbol}</p>
                        </div>
                      </div>
                      <div
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${Math.random() > 0.5 ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"}`}
                      >
                        {Math.random() > 0.5 ? "↑" : "↓"} {(Math.random() * 5).toFixed(2)}%
                      </div>
                    </div>
                    <div className="text-xl font-bold">${price.toLocaleString()}</div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="space-y-8">
            <CryptoChart defaultCrypto="BTC" />

            <Card>
              <CardHeader>
                <CardTitle>All Cryptocurrencies</CardTitle>
                <CardDescription>Real-time prices of all available cryptocurrencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground py-2 border-b">
                    <div className="col-span-2">Name</div>
                    <div className="text-right">Price</div>
                    <div className="text-right">24h Change</div>
                    <div className="text-right">Market Cap</div>
                  </div>

                  {Object.entries(cryptoRates).map(([symbol, price], i) => {
                    const change = Math.random() * 10 - 5
                    const marketCap = price * (Math.random() * 1000000000)

                    return (
                      <div key={i} className="grid grid-cols-5 py-3 hover:bg-muted/50 rounded-lg transition-colors">
                        <div className="col-span-2 flex items-center">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <span className="font-medium text-primary">{symbol.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium">{symbol}</p>
                            <p className="text-xs text-muted-foreground">
                              {symbol === "BTC"
                                ? "Bitcoin"
                                : symbol === "ETH"
                                  ? "Ethereum"
                                  : symbol === "XRP"
                                    ? "Ripple"
                                    : symbol === "SOL"
                                      ? "Solana"
                                      : symbol === "ADA"
                                        ? "Cardano"
                                        : symbol === "DOT"
                                          ? "Polkadot"
                                          : symbol === "DOGE"
                                            ? "Dogecoin"
                                            : symbol === "SHIB"
                                              ? "Shiba Inu"
                                              : symbol === "AVAX"
                                                ? "Avalanche"
                                                : symbol === "MATIC"
                                                  ? "Polygon"
                                                  : symbol === "GP"
                                                    ? "GlobalPay Coin"
                                                    : symbol}
                            </p>
                          </div>
                        </div>
                        <div className="text-right font-medium">${price.toLocaleString()}</div>
                        <div className={`text-right ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {change >= 0 ? "+" : ""}
                          {change.toFixed(2)}%
                        </div>
                        <div className="text-right text-muted-foreground">${(marketCap / 1000000000).toFixed(2)}B</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forex" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {Object.entries(exchangeRates)
              .slice(0, 4)
              .map(([code, rate], i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-2">
                          <span className="font-medium">{code.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{code}</p>
                        </div>
                      </div>
                      <div
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${Math.random() > 0.5 ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"}`}
                      >
                        {Math.random() > 0.5 ? "↑" : "↓"} {(Math.random() * 2).toFixed(2)}%
                      </div>
                    </div>
                    <div className="text-xl font-bold">{rate.toFixed(4)}</div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="space-y-8">
            <CurrencyChart />

            <Card>
              <CardHeader>
                <CardTitle>All Currency Pairs</CardTitle>
                <CardDescription>Real-time exchange rates for major currency pairs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground py-2 border-b">
                    <div className="col-span-1">Pair</div>
                    <div className="text-right">Rate</div>
                    <div className="text-right">24h Change</div>
                    <div className="text-right">Weekly Change</div>
                  </div>

                  {Object.entries(exchangeRates).map(([code, rate], i) => {
                    if (code === "USD") return null

                    const dailyChange = Math.random() * 4 - 2
                    const weeklyChange = Math.random() * 6 - 3

                    return (
                      <div key={i} className="grid grid-cols-4 py-3 hover:bg-muted/50 rounded-lg transition-colors">
                        <div className="col-span-1 flex items-center">
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3">
                            <span className="font-medium">{code.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium">USD/{code}</p>
                          </div>
                        </div>
                        <div className="text-right font-medium">{rate.toFixed(4)}</div>
                        <div className={`text-right ${dailyChange >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {dailyChange >= 0 ? "+" : ""}
                          {dailyChange.toFixed(2)}%
                        </div>
                        <div className={`text-right ${weeklyChange >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {weeklyChange >= 0 ? "+" : ""}
                          {weeklyChange.toFixed(2)}%
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

