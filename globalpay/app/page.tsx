import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Coins, RefreshCw, Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CoinAnimation } from "@/components/coin-animation"
import { HowItWorks } from "@/components/how-it-works"
import { ConversionCalculator } from "@/components/conversion-calculator"
import { CountrySelector } from "@/components/country-selector"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 z-0"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
                <Globe className="h-4 w-4" />
                <span>Zero Transaction Fees Worldwide</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                The Future of <span className="text-blue-600">Borderless</span> Crypto Payments
              </h1>

              <p className="text-lg text-gray-600 md:pr-12">
                Send money globally without losing value to transaction fees. Convert to GlobalPay Coins and transfer
                instantly across borders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <CoinAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Conversion Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Try Our Conversion Calculator</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how much you can save by using GlobalPay Coins for your international transfers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Send Money</h3>
                <CountrySelector label="From Country" defaultCountry="US" />
                <ConversionCalculator />
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Receive Money</h3>
                <CountrySelector label="To Country" defaultCountry="IN" />
                <div className="space-y-4 mt-8">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Traditional Transfer</span>
                      <span className="text-xl font-semibold text-gray-800">₹83,000</span>
                    </div>
                    <div className="text-sm text-red-500 mt-1">-₹8,300 in fees (10%)</div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">With GlobalPay</span>
                      <span className="text-xl font-semibold text-green-600">₹91,300</span>
                    </div>
                    <div className="text-sm text-green-600 mt-1">+₹8,300 saved in fees</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Saving Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose GlobalPay?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our innovative platform offers unique advantages for international money transfers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Coins className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">No Transaction Fees</h3>
              <p className="text-gray-600">
                Send money globally without losing value to transaction fees. Keep 100% of your money.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <RefreshCw className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Conversions</h3>
              <p className="text-gray-600">Convert your currency to GlobalPay Coins instantly at competitive rates.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Wallet className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Redemption</h3>
              <p className="text-gray-600">Recipients can easily redeem GlobalPay Coins for their local currency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Borderless Payments?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of users who are already saving on international transfers.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Create Your Account <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg"
                alt="GlobalPay Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-white text-xl font-bold">GlobalPay</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} GlobalPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

