"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Send, CreditCard, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import { getUserBalance } from "@/lib/api"

export function BalanceCard() {
  const [balance, setBalance] = useState({ GP: 0, USD: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [hideBalance, setHideBalance] = useState(false)

  useEffect(() => {
    fetchBalance()
  }, [])

  const fetchBalance = () => {
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      const data = getUserBalance()
      setBalance({
        GP: data.GP,
        USD: data.USD,
      })
      setIsLoading(false)
    }, 800)
  }

  const toggleHideBalance = () => {
    setHideBalance(!hideBalance)
  }

  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 md:p-8">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center">
              <p className="text-blue-100">Available Balance</p>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-blue-100 hover:text-white hover:bg-transparent ml-1"
                onClick={toggleHideBalance}
              >
                {hideBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            <h2 className="text-3xl font-bold mt-1">
              {isLoading ? (
                <div className="h-8 w-32 bg-blue-300/30 animate-pulse rounded"></div>
              ) : hideBalance ? (
                "••••••"
              ) : (
                `${balance.GP.toFixed(2)} GP`
              )}
            </h2>
            <p className="text-blue-100 mt-1">
              {isLoading ? (
                <div className="h-5 w-24 bg-blue-300/30 animate-pulse rounded"></div>
              ) : hideBalance ? (
                "••••••"
              ) : (
                `≈ $${balance.USD.toFixed(2)} USD`
              )}
            </p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg"
              alt="GlobalPay Coin"
              width={48}
              height={48}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <Button className="bg-white/10 hover:bg-white/20 text-white">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 text-white">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Receive
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 text-white">
            <CreditCard className="h-4 w-4 mr-2" />
            Top Up
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="text-sm font-medium text-gray-500 mb-3">Recent Activity</div>
        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-2">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-gray-200 animate-pulse rounded-full mr-3"></div>
                  <div>
                    <div className="h-4 w-32 bg-gray-200 animate-pulse rounded mb-1"></div>
                    <div className="h-3 w-24 bg-gray-200 animate-pulse rounded"></div>
                  </div>
                </div>
                <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {getUserBalance()
              .recentTransactions.slice(0, 3)
              .map((tx, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        tx.type === "received"
                          ? "bg-green-100 text-green-600"
                          : tx.type === "sent"
                            ? "bg-red-100 text-red-600"
                            : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {tx.type === "received" ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : tx.type === "sent" ? (
                        <Send className="h-4 w-4" />
                      ) : (
                        <CreditCard className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {tx.type === "received"
                          ? `Received from ${tx.from}`
                          : tx.type === "sent"
                            ? `Sent to ${tx.to}`
                            : `Converted ${tx.fromAmount} ${tx.fromCurrency} to ${tx.toAmount} ${tx.toCurrency}`}
                      </p>
                      <p className="text-xs text-gray-500">{new Date(tx.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div
                    className={`font-medium ${
                      tx.type === "received" ? "text-green-600" : tx.type === "sent" ? "text-red-600" : "text-blue-600"
                    }`}
                  >
                    {tx.type === "received" ? "+" : tx.type === "sent" ? "-" : ""}
                    {tx.type === "converted" ? "" : `${tx.amount} ${tx.currency}`}
                  </div>
                </div>
              ))}
          </div>
        )}
        <Button variant="ghost" className="w-full mt-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
          View All Transactions
        </Button>
      </CardContent>
    </Card>
  )
}

