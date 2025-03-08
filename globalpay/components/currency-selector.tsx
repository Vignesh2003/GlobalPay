"use client"

import { useState, useEffect } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import { exchangeRates, cryptoRates } from "@/lib/api"

// Currency data
const currencies = [
  { value: "USD", label: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { value: "EUR", label: "Euro", symbol: "€", flag: "🇪🇺" },
  { value: "GBP", label: "British Pound", symbol: "£", flag: "🇬🇧" },
  { value: "JPY", label: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { value: "AUD", label: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
  { value: "CAD", label: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
  { value: "INR", label: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
  { value: "CNY", label: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
  { value: "BRL", label: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
  { value: "MXN", label: "Mexican Peso", symbol: "$", flag: "🇲🇽" },
]

// Cryptocurrency data
const cryptocurrencies = [
  { value: "BTC", label: "Bitcoin", symbol: "₿", icon: "/placeholder.svg?height=24&width=24" },
  { value: "ETH", label: "Ethereum", symbol: "Ξ", icon: "/placeholder.svg?height=24&width=24" },
  { value: "XRP", label: "Ripple", symbol: "XRP", icon: "/placeholder.svg?height=24&width=24" },
  { value: "SOL", label: "Solana", symbol: "SOL", icon: "/placeholder.svg?height=24&width=24" },
  { value: "ADA", label: "Cardano", symbol: "ADA", icon: "/placeholder.svg?height=24&width=24" },
  { value: "DOT", label: "Polkadot", symbol: "DOT", icon: "/placeholder.svg?height=24&width=24" },
  { value: "DOGE", label: "Dogecoin", symbol: "DOGE", icon: "/placeholder.svg?height=24&width=24" },
  { value: "SHIB", label: "Shiba Inu", symbol: "SHIB", icon: "/placeholder.svg?height=24&width=24" },
  { value: "AVAX", label: "Avalanche", symbol: "AVAX", icon: "/placeholder.svg?height=24&width=24" },
  { value: "MATIC", label: "Polygon", symbol: "MATIC", icon: "/placeholder.svg?height=24&width=24" },
  {
    value: "GP",
    label: "GlobalPay Coin",
    symbol: "GP",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg",
  },
]

interface CurrencySelectorProps {
  value: string
  onChange: (value: string) => void
  includeCrypto?: boolean
}

export function CurrencySelector({ value, onChange, includeCrypto = false }: CurrencySelectorProps) {
  const [open, setOpen] = useState(false)
  const [rates, setRates] = useState<Record<string, number>>({})

  useEffect(() => {
    // Combine exchange rates and crypto rates
    setRates({ ...exchangeRates, ...cryptoRates })
  }, [])

  const selectedCurrency =
    currencies.find((currency) => currency.value === value) ||
    (includeCrypto ? cryptocurrencies.find((crypto) => crypto.value === value) : undefined)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {selectedCurrency ? (
            <div className="flex items-center">
              {selectedCurrency.flag ? (
                <span className="mr-2 text-lg">{selectedCurrency.flag}</span>
              ) : (
                <Image
                  src={selectedCurrency.icon || "/placeholder.svg?height=24&width=24"}
                  alt={selectedCurrency.label}
                  width={20}
                  height={20}
                  className="mr-2 rounded-full"
                />
              )}
              <span>{selectedCurrency.value}</span>
            </div>
          ) : (
            "Select currency"
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup heading="Fiat Currencies">
              {currencies.map((currency) => (
                <CommandItem
                  key={currency.value}
                  value={currency.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === currency.value ? "opacity-100" : "opacity-0")} />
                  <span className="mr-2 text-lg">{currency.flag}</span>
                  <span className="mr-1">{currency.value}</span>
                  <span className="text-gray-500 text-sm">
                    {currency.label}{" "}
                    {rates[currency.value] ? `(${currency.symbol}1 = $${(1 / rates[currency.value]).toFixed(2)})` : ""}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>

            {includeCrypto && (
              <>
                <CommandSeparator />
                <CommandGroup heading="Cryptocurrencies">
                  {cryptocurrencies.map((crypto) => (
                    <CommandItem
                      key={crypto.value}
                      value={crypto.value}
                      onSelect={(currentValue) => {
                        onChange(currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", value === crypto.value ? "opacity-100" : "opacity-0")} />
                      <Image
                        src={crypto.icon || "/placeholder.svg"}
                        alt={crypto.label}
                        width={20}
                        height={20}
                        className="mr-2 rounded-full"
                      />
                      <span className="mr-1">{crypto.value}</span>
                      <span className="text-gray-500 text-sm">
                        {crypto.label} {rates[crypto.value] ? `($${rates[crypto.value].toFixed(2)})` : ""}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

