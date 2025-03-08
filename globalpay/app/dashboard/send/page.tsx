import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Users } from "lucide-react"
import Image from "next/image"
import { CountrySelector } from "@/components/country-selector"

export default function SendPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Send GlobalPay Coins</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Send to a Contact</CardTitle>
            <CardDescription>Send GlobalPay Coins to your contacts without any transaction fees.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {["John Doe", "Alice Smith", "Robert Johnson"].map((name, i) => (
                <div
                  key={i}
                  className="border border-gray-200 hover:border-blue-300 rounded-lg p-4 cursor-pointer transition-colors flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl font-medium text-blue-600">{name.charAt(0)}</span>
                  </div>
                  <span className="font-medium">{name}</span>
                  <span className="text-sm text-gray-500">Last sent: 3 days ago</span>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              <Users className="h-4 w-4 mr-2" />
              View All Contacts
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send to New Recipient</CardTitle>
            <CardDescription>Send GlobalPay Coins to anyone by email or GlobalPay ID.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Recipient</label>
              <input
                type="email"
                placeholder="Email or GlobalPay ID"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Amount (GP Coins)</label>
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
                <input type="number" placeholder="0.00" className="w-full p-2 pl-8 border border-gray-300 rounded-md" />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Available: 100 GP</span>
                <span className="text-blue-600 cursor-pointer">Send Max</span>
              </div>
            </div>

            <CountrySelector label="Recipient's Country" defaultCountry="IN" />

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-medium text-gray-900 mb-2">Transaction Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">You Send</span>
                  <span className="font-medium">50 GP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Exchange Rate</span>
                  <span>1 GP = ₹830 INR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction Fee</span>
                  <span className="text-green-600">₹0 INR</span>
                </div>
                <div className="pt-2 border-t border-blue-200 flex justify-between">
                  <span className="font-medium">Recipient Gets</span>
                  <span className="font-medium">₹41,500 INR</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Note (Optional)</label>
              <textarea
                placeholder="Add a message"
                className="w-full p-2 border border-gray-300 rounded-md h-20 resize-none"
              ></textarea>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4 mr-2" />
              Send Payment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

