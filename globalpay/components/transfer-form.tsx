"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send, Building } from "lucide-react"
import { CurrencySelector } from "@/components/currency-selector"
import { CountrySelector } from "@/components/country-selector"

interface TransferFormProps {
  defaultType?: "wallet" | "bank"
}

export function TransferForm({ defaultType = "wallet" }: TransferFormProps) {
  const [transferType, setTransferType] = useState(defaultType)
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("GP")
  const [recipient, setRecipient] = useState("")

  // Bank transfer fields
  const [bankName, setBankName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [swiftCode, setSwiftCode] = useState("")
  const [ifscCode, setIfscCode] = useState("")
  const [recipientCountry, setRecipientCountry] = useState("US")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfer Money</CardTitle>
        <CardDescription>Send money to GlobalPay users or bank accounts worldwide.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs
          defaultValue={transferType}
          onValueChange={(value) => setTransferType(value as "wallet" | "bank")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="wallet">
              <Send className="h-4 w-4 mr-2" />
              GlobalPay Wallet
            </TabsTrigger>
            <TabsTrigger value="bank">
              <Building className="h-4 w-4 mr-2" />
              Bank Account
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wallet" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient's GlobalPay ID</Label>
              <Input
                id="recipient"
                placeholder="Enter GlobalPay ID or email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
          </TabsContent>

          <TabsContent value="bank" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="bank-name">Bank Name</Label>
              <Input
                id="bank-name"
                placeholder="Enter bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="account-number">Account Number</Label>
                <Input
                  id="account-number"
                  placeholder="Enter account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="swift-code">SWIFT/BIC Code</Label>
                <Input
                  id="swift-code"
                  placeholder="Enter SWIFT/BIC code"
                  value={swiftCode}
                  onChange={(e) => setSwiftCode(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ifsc-code">IFSC Code (for Indian banks)</Label>
              <Input
                id="ifsc-code"
                placeholder="Enter IFSC code"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Recipient's Country</Label>
              <CountrySelector label="" defaultCountry={recipientCountry} />
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div>
              <CurrencySelector value={currency} onChange={setCurrency} includeCrypto={true} />
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Available: 125.75 GP</span>
            <span className="text-primary cursor-pointer">Send Max</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="note">Note (Optional)</Label>
          <Input id="note" placeholder="Add a message" />
        </div>

        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
          <h4 className="font-medium mb-2">Transaction Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">You Send</span>
              <span className="font-medium">
                {amount || "0"} {currency}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Transfer Method</span>
              <span>{transferType === "wallet" ? "GlobalPay Wallet" : "Bank Transfer"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Transaction Fee</span>
              <span className="text-green-600">0 {currency}</span>
            </div>
            <div className="pt-2 border-t border-primary/20 flex justify-between">
              <span className="font-medium">Recipient Gets</span>
              <span className="font-medium">
                {amount || "0"} {currency}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Send className="h-4 w-4 mr-2" />
          Send Payment
        </Button>
      </CardFooter>
    </Card>
  )
}

