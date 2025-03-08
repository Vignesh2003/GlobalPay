import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Globe, History, Send } from "lucide-react"
import { BalanceCard } from "@/components/balance-card"
import { CurrencyConverter } from "@/components/currency-converter"
import { CryptoChart } from "@/components/crypto-chart"
import { CurrencyChart } from "@/components/currency-chart"
import { TransferForm } from "@/components/transfer-form"
import { RecentTransactions } from "@/components/recent-transactions"
import { MarketOverview } from "@/components/market-overview"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button variant="outline" size="sm">
            <DollarSign className="h-4 w-4 mr-2" />
            Add Funds
          </Button>
          <Button size="sm">
            <Send className="h-4 w-4 mr-2" />
            Send Money
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <BalanceCard />

          <Tabs defaultValue="convert" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="convert">Convert</TabsTrigger>
              <TabsTrigger value="send">Send Money</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
            </TabsList>

            <TabsContent value="convert" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Currency Converter</CardTitle>
                  <CardDescription>
                    Convert between currencies and cryptocurrencies with real-time rates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CurrencyConverter />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="send" className="pt-4">
              <TransferForm />
            </TabsContent>

            <TabsContent value="charts" className="pt-4">
              <div className="space-y-8">
                <CryptoChart defaultCrypto="GP" />
                <CurrencyChart />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="h-4 w-4 mr-2" />
                Add Funds
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Send className="h-4 w-4 mr-2" />
                Send to Friend
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <History className="h-4 w-4 mr-2" />
                Recurring Payments
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="h-4 w-4 mr-2" />
                Currency Exchange Rates
              </Button>
            </CardContent>
          </Card>

          <MarketOverview />

          <RecentTransactions />
        </div>
      </div>
    </div>
  )
}

