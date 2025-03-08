"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCw } from "lucide-react"
import Image from "next/image"

export function ConversionCalculator() {
  const [amount, setAmount] = useState("1000")
  const [gpCoins, setGpCoins] = useState("100")

  useEffect(() => {
    // Convert USD to GP Coins (10 USD = 1 GP Coin)
    const numericAmount = Number.parseFloat(amount) || 0
    setGpCoins((numericAmount / 10).toFixed(2))
  }, [amount])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="usd-amount">Amount (USD)</Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500">$</span>
          </div>
          <Input
            id="usd-amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="flex items-center justify-center my-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <RefreshCw className="h-5 w-5 text-blue-600" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="gp-amount">GlobalPay Coins</Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg"
              alt="GP"
              width={16}
              height={16}
              className="rounded-full"
            />
          </div>
          <Input id="gp-amount" type="text" value={gpCoins} readOnly className="pl-8" />
        </div>
        <p className="text-sm text-gray-500 mt-1">1 GlobalPay Coin = $10 USD</p>
      </div>
    </div>
  )
}

