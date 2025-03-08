import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CryptoChart } from "@/components/crypto-chart"
import { CurrencyConverter } from "@/components/currency-converter"
import { cryptoRates } from "@/lib/api"

export default function CryptoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Cryptocurrency</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button variant="outline" size="sm">
            View Portfolio
          </Button>
          <Button size="sm">Buy Crypto</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            name: "Bitcoin",
            symbol: "BTC",
            price: cryptoRates.BTC,
            change: 2.4,
            color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            price: cryptoRates.ETH,
            change: -0.8,
            color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
          },
          {
            name: "GlobalPay Coin",
            symbol: "GP",
            price: cryptoRates.GP,
            change: 5.2,
            color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
          },
        ].map((crypto, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${crypto.color}`}>
                    <span className="font-bold">{crypto.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{crypto.name}</h3>
                    <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
                  </div>
                </div>
                <div
                  className={`text-sm font-medium px-2 py-1 rounded-full ${crypto.change >= 0 ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"}`}
                >
                  {crypto.change >= 0 ? "↑" : "↓"} {Math.abs(crypto.change)}%
                </div>
              </div>
              <div className="text-2xl font-bold mb-4">${crypto.price.toLocaleString()}</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Sell
                </Button>
                <Button size="sm" className="flex-1">
                  Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CryptoChart defaultCrypto="GP" />

          <Card>
            <CardHeader>
              <CardTitle>Popular Cryptocurrencies</CardTitle>
              <CardDescription>Track and trade the most popular cryptocurrencies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(cryptoRates).map(([symbol, price], i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
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
                    <div className="text-right">
                      <p className="font-medium">${price.toLocaleString()}</p>
                      <p className={`text-xs ${Math.random() > 0.5 ? "text-green-600" : "text-red-600"}`}>
                        {Math.random() > 0.5 ? "↑" : "↓"} {(Math.random() * 5).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Convert Crypto</CardTitle>
              <CardDescription>Exchange between cryptocurrencies and fiat currencies</CardDescription>
            </CardHeader>
            <CardContent>
              <CurrencyConverter />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your GlobalPay Coins</CardTitle>
              <CardDescription>Manage your GlobalPay Coin balance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 dark:bg-blue-900">
                    <span className="font-bold text-blue-600 dark:text-blue-300">GP</span>
                  </div>
                  <div>
                    <h3 className="font-medium">GlobalPay Coin</h3>
                    <p className="text-sm text-muted-foreground">GP</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">125.75 GP</p>
                  <p className="text-sm text-muted-foreground">≈ $1,257.50</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Send
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Receive
                </Button>
                <Button size="sm" className="flex-1">
                  Buy More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

