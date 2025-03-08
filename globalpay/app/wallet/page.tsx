import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BalanceCard } from "@/components/balance-card"
import { RecentTransactions } from "@/components/recent-transactions"
import { ArrowUpRight, CreditCard, QrCode, Send } from "lucide-react"
import Image from "next/image"

export default function WalletPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Wallet</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button variant="outline" size="sm">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Deposit
          </Button>
          <Button size="sm">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <BalanceCard />

          <Tabs defaultValue="assets" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="receive">Receive</TabsTrigger>
            </TabsList>

            <TabsContent value="assets" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Assets</CardTitle>
                  <CardDescription>Manage your cryptocurrencies and fiat currencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 dark:bg-blue-900">
                          <span className="font-bold text-blue-600 dark:text-blue-300">GP</span>
                        </div>
                        <div>
                          <p className="font-medium">GlobalPay Coin</p>
                          <p className="text-sm text-muted-foreground">GP</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">125.75 GP</p>
                        <p className="text-sm text-muted-foreground">≈ $1,257.50</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 dark:bg-orange-900">
                          <span className="font-bold text-orange-600 dark:text-orange-300">BTC</span>
                        </div>
                        <div>
                          <p className="font-medium">Bitcoin</p>
                          <p className="text-sm text-muted-foreground">BTC</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">0.0025 BTC</p>
                        <p className="text-sm text-muted-foreground">≈ $168.11</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 dark:bg-purple-900">
                          <span className="font-bold text-purple-600 dark:text-purple-300">ETH</span>
                        </div>
                        <div>
                          <p className="font-medium">Ethereum</p>
                          <p className="text-sm text-muted-foreground">ETH</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">0.15 ETH</p>
                        <p className="text-sm text-muted-foreground">≈ $528.28</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 dark:bg-green-900">
                          <span className="font-bold text-green-600 dark:text-green-300">$</span>
                        </div>
                        <div>
                          <p className="font-medium">US Dollar</p>
                          <p className="text-sm text-muted-foreground">USD</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$750.00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="pt-4">
              <RecentTransactions />
            </TabsContent>

            <TabsContent value="receive" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Receive Funds</CardTitle>
                  <CardDescription>Share your wallet details to receive funds</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="w-48 h-48 bg-white p-4 rounded-lg shadow-sm">
                          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                            <QrCode className="h-24 w-24 text-primary" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Your GlobalPay ID</label>
                        <div className="relative">
                          <input
                            type="text"
                            value="globalpay_user123"
                            readOnly
                            className="w-full p-2 pr-10 border border-input rounded-md bg-muted"
                          />
                          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-copy"
                            >
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-download mr-2"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                          </svg>
                          Save QR
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-share-2 mr-2"
                          >
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                          </svg>
                          Share
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Select Asset to Receive</label>
                        <select className="w-full p-2 border border-input rounded-md">
                          <option value="GP">GlobalPay Coin (GP)</option>
                          <option value="BTC">Bitcoin (BTC)</option>
                          <option value="ETH">Ethereum (ETH)</option>
                          <option value="USD">US Dollar (USD)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Network</label>
                        <select className="w-full p-2 border border-input rounded-md">
                          <option value="GP">GlobalPay Network</option>
                          <option value="ETH">Ethereum (ERC-20)</option>
                          <option value="BSC">Binance Smart Chain (BEP-20)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Wallet Address</label>
                        <div className="relative">
                          <input
                            type="text"
                            value="0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
                            readOnly
                            className="w-full p-2 pr-10 border border-input rounded-md bg-muted text-xs md:text-sm"
                          />
                          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-copy"
                            >
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-sm">
                        <p className="font-medium text-yellow-800 dark:text-yellow-300 mb-1">Important</p>
                        <p className="text-yellow-700 dark:text-yellow-400">
                          Only send GlobalPay Coin (GP) to this address. Sending any other asset may result in permanent
                          loss.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                <Send className="h-4 w-4 mr-2" />
                Send Money
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                Deposit Funds
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="h-4 w-4 mr-2" />
                Link Bank Account
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-refresh-cw mr-2"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
                Convert Currency
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GlobalPay Card</CardTitle>
              <CardDescription>Your virtual card for online and offline payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 rounded-xl text-white">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg"
                      alt="GlobalPay Logo"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-credit-card"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-blue-100">Card Number</p>
                  <p className="font-mono">•••• •••• •••• 4589</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-blue-100">Card Holder</p>
                    <p>John Doe</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Expires</p>
                    <p>05/25</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye mr-2"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Details
                </Button>
                <Button variant="outline" className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock mr-2"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Freeze Card
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

