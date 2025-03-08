"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CreditCard, Send } from "lucide-react"
import { getUserBalance } from "@/lib/api"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

export function RecentTransactions() {
  const [transactions, setTransactions] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      const data = getUserBalance()
      setTransactions(data.recentTransactions)
      setIsLoading(false)
    }, 800)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-2">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-muted rounded-full mr-3"></div>
                      <div>
                        <div className="h-4 w-32 bg-muted rounded mb-1"></div>
                        <div className="h-3 w-24 bg-muted rounded"></div>
                      </div>
                    </div>
                    <div className="h-4 w-16 bg-muted rounded"></div>
                  </div>
                ))
            : transactions.map((tx, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        tx.type === "received"
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                          : tx.type === "sent"
                            ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                            : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
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
                      <p className="font-medium text-sm">
                        {tx.type === "received"
                          ? `Received from ${tx.from}`
                          : tx.type === "sent"
                            ? `Sent to ${tx.to}`
                            : `Converted ${tx.fromAmount} ${tx.fromCurrency} to ${tx.toAmount} ${tx.toCurrency}`}
                      </p>
                      <p className="text-xs text-muted-foreground">{formatDistanceToNow(new Date(tx.date))} ago</p>
                    </div>
                  </div>
                  <div
                    className={`font-medium ${
                      tx.type === "received"
                        ? "text-green-600 dark:text-green-400"
                        : tx.type === "sent"
                          ? "text-red-600 dark:text-red-400"
                          : "text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {tx.type === "received" ? "+" : tx.type === "sent" ? "-" : ""}
                    {tx.type === "converted" ? "" : `${tx.amount} ${tx.currency}`}
                  </div>
                </div>
              ))}
        </div>

        <Button variant="ghost" className="w-full mt-4" asChild>
          <Link href="/transactions">View All Transactions</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

