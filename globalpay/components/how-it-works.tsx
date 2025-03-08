"use client"

import { motion } from "framer-motion"
import { ArrowRight, DollarSign, Coins, Send, Wallet } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: "Load Your Account",
      description: "Deposit your local currency into your GlobalPay account securely.",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Coins className="h-6 w-6 text-purple-600" />,
      title: "Convert to GlobalPay Coins",
      description: "Exchange your currency for GlobalPay Coins at a rate of $10 = 1 GP Coin.",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
    },
    {
      icon: <Send className="h-6 w-6 text-green-600" />,
      title: "Send Globally Without Fees",
      description: "Transfer GlobalPay Coins to anyone, anywhere with zero transaction fees.",
      color: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
    },
    {
      icon: <Wallet className="h-6 w-6 text-amber-600" />,
      title: "Recipient Redeems Locally",
      description: "Recipients convert GlobalPay Coins to their local currency instantly.",
      color: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How GlobalPay Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes international transfers easy and fee-free.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${step.color} border ${step.borderColor} rounded-xl p-6 relative`}
              >
                <div className={`w-12 h-12 ${step.iconBg} rounded-full flex items-center justify-center mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

