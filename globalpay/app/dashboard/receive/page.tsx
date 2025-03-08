import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Download, QrCode, Share2 } from "lucide-react"
import Image from "next/image"
import { CountrySelector } from "@/components/country-selector"

export default function ReceivePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Receive GlobalPay Coins</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Your GlobalPay ID</CardTitle>
              <CardDescription>Share your ID to receive GlobalPay Coins from anyone.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                    <QrCode className="h-24 w-24 text-blue-600" />
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
                    className="w-full p-2 pr-10 border border-gray-300 rounded-md bg-gray-50"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Save QR
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Redeem GlobalPay Coins</CardTitle>
              <CardDescription>Convert your GlobalPay Coins to your local currency.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full p-2 pl-8 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Available: 100 GP</span>
                  <span className="text-blue-600 cursor-pointer">Redeem Max</span>
                </div>
              </div>

              <CountrySelector label="Redeem To Currency" defaultCountry="US" />

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-gray-900 mb-2">Redemption Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">You Redeem</span>
                    <span className="font-medium">50 GP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exchange Rate</span>
                    <span>1 GP = $10 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Redemption Fee</span>
                    <span className="text-green-600">$0 USD</span>
                  </div>
                  <div className="pt-2 border-t border-blue-200 flex justify-between">
                    <span className="font-medium">You Receive</span>
                    <span className="font-medium">$500 USD</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Redeem Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

