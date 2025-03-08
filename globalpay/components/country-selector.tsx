"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"

const countries = [
  {
    value: "US",
    label: "United States",
    currency: "USD",
    flag: "🇺🇸",
  },
  {
    value: "IN",
    label: "India",
    currency: "INR",
    flag: "🇮🇳",
  },
  {
    value: "GB",
    label: "United Kingdom",
    currency: "GBP",
    flag: "🇬🇧",
  },
  {
    value: "CA",
    label: "Canada",
    currency: "CAD",
    flag: "🇨🇦",
  },
  {
    value: "AU",
    label: "Australia",
    currency: "AUD",
    flag: "🇦🇺",
  },
  {
    value: "JP",
    label: "Japan",
    currency: "JPY",
    flag: "🇯🇵",
  },
  {
    value: "EU",
    label: "European Union",
    currency: "EUR",
    flag: "🇪🇺",
  },
  {
    value: "CN",
    label: "China",
    currency: "CNY",
    flag: "🇨🇳",
  },
  {
    value: "BR",
    label: "Brazil",
    currency: "BRL",
    flag: "🇧🇷",
  },
  {
    value: "MX",
    label: "Mexico",
    currency: "MXN",
    flag: "🇲🇽",
  },
]

interface CountrySelectorProps {
  label: string
  defaultCountry: string
}

export function CountrySelector({ label, defaultCountry }: CountrySelectorProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultCountry)

  const selectedCountry = countries.find((country) => country.value === value)

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
            {selectedCountry ? (
              <div className="flex items-center">
                <span className="mr-2 text-lg">{selectedCountry.flag}</span>
                <span>
                  {selectedCountry.label} ({selectedCountry.currency})
                </span>
              </div>
            ) : (
              "Select country"
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === country.value ? "opacity-100" : "opacity-0")} />
                    <span className="mr-2 text-lg">{country.flag}</span>
                    {country.label} ({country.currency})
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

