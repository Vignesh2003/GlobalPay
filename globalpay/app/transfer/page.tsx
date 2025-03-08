import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TransferForm } from "@/components/transfer-form"
import { RecentTransactions } from "@/components/recent-transactions"

export default function TransferPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Money Transfer</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="globalpay" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="globalpay">GlobalPay Wallet</TabsTrigger>
              <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
              <TabsTrigger value="crypto">Crypto Transfer</TabsTrigger>
            </TabsList>

            <TabsContent value="globalpay" className="pt-4">
              <TransferForm defaultType="wallet" />
            </TabsContent>

            <TabsContent value="bank" className="pt-4">
              <TransferForm defaultType="bank" />
            </TabsContent>

            <TabsContent value="crypto" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Crypto Transfer</CardTitle>
                  <CardDescription>Send cryptocurrency to any wallet address</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Recipient's Wallet Address</label>
                    <input
                      type="text"
                      placeholder="Enter wallet address"
                      className="w-full p-2 border border-input rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Cryptocurrency</label>
                    <select className="w-full p-2 border border-input rounded-md">
                      <option value="GP">GlobalPay Coin (GP)</option>
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="SOL">Solana (SOL)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amount</label>
                    <input type="number" placeholder="0.00" className="w-full p-2 border border-input rounded-md" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Available: 125.75 GP</span>
                      <span className="text-primary cursor-pointer">Send Max</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Network</label>
                    <select className="w-full p-2 border border-input rounded-md">
                      <option value="GP">GlobalPay Network</option>
                      <option value="ETH">Ethereum (ERC-20)</option>
                      <option value="BSC">Binance Smart Chain (BEP-20)</option>
                      <option value="SOL">Solana</option>
                    </select>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-medium mb-2">Transaction Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">You Send</span>
                        <span className="font-medium">10 GP</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Network Fee</span>
                        <span className="text-green-600">0.01 GP</span>
                      </div>
                      <div className="pt-2 border-t border-primary/20 flex justify-between">
                        <span className="font-medium">Recipient Gets</span>
                        <span className="font-medium">9.99 GP</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md">
                    Send Crypto
                  </button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Transfer Limits</CardTitle>
              <CardDescription>Your current transfer limits and verification status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Daily Limit</span>
                  <span className="font-medium">$10,000</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">$2,500 used</span>
                  <span className="text-muted-foreground">$7,500 remaining</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Limit</span>
                  <span className="font-medium">$50,000</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">$7,500 used</span>
                  <span className="text-muted-foreground">$42,500 remaining</span>
                </div>
              </div>

              <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-sm">
                <p className="font-medium text-yellow-800 dark:text-yellow-300 mb-1">Verification Status: Level 2</p>
                <p className="text-yellow-700 dark:text-yellow-400">
                  Complete identity verification to increase your transfer limits.
                </p>
              </div>
            </CardContent>
          </Card>

          <RecentTransactions />
        </div>
      </div>
    </div>
  )
}

