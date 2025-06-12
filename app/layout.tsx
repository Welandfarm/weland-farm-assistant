import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import FloatingChatButton from "@/components/floating-chat-button"
import Footer from "@/components/footer"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Weland Farm Assistant",
  description: "Site-specific, crop-specific soil fertility recommendations using AI and weather data",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/images/weland-logo.png" alt="Weland Agrisols Logo" className="h-10 w-auto" />
                <span className="font-bold text-xl text-weland-green hidden sm:block">Farm Assistant</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-weland-green">
                  Home
                </Link>
                <Link href="/recommendations" className="text-gray-600 hover:text-weland-green">
                  Recommendations
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-weland-green">
                  Blog
                </Link>
                <Link href="/chat" className="text-gray-600 hover:text-weland-green">
                  Chat
                </Link>
                <Link href="/download-app" className="text-gray-600 hover:text-weland-green">
                  Download App
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-weland-green">
                  Contact
                </Link>
              </nav>
              <div className="md:hidden">
                {/* Mobile menu button would go here */}
                <button className="text-gray-600">Menu</button>
              </div>
            </div>
          </div>
        </header>
        {children}
        <Footer />
        <FloatingChatButton />
      </body>
    </html>
  )
}
