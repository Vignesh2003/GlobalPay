import { Button } from "@/components/ui/button"
import { Globe, Menu, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg"
                  alt="GlobalPay Logo"
                  width={36}
                  height={36}
                  className="mr-3"
                />
                <span className="text-xl font-bold text-gray-900">GlobalPay</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/dashboard/send" className="text-gray-600 hover:text-gray-900">
                Send
              </Link>
              <Link href="/dashboard/receive" className="text-gray-600 hover:text-gray-900">
                Receive
              </Link>
              <Link href="/dashboard/history" className="text-gray-600 hover:text-gray-900">
                History
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}

