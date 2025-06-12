"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X, Phone } from "lucide-react"

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const closeChat = () => {
    setIsOpen(false)
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Weland Farm Assistant, I need help with my farming needs.")
    window.open(`https://wa.me/254710546911?text=${message}`, "_blank")
  }

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 z-50 w-[90%] max-w-[350px] shadow-2xl rounded-lg overflow-hidden bg-white border border-gray-200">
          {/* Quick Action Header */}
          <div className="bg-green-600 text-white p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Contact Weland Farm Assistant</h3>
              <Button
                onClick={closeChat}
                className="h-6 w-6 p-0 rounded-full bg-white/20 text-white hover:bg-white/30"
                size="icon"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
            <p className="text-sm text-green-100">Choose your preferred contact method:</p>
          </div>

          {/* Contact Options */}
          <div className="p-4 space-y-3">
            <Button onClick={openWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
              <MessageSquare className="mr-3 h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">WhatsApp (Recommended)</div>
                <div className="text-xs text-green-100">Instant response • Share photos</div>
              </div>
            </Button>

            <Button
              onClick={() => {
                closeChat()
                // Small delay to allow modal to close before opening web chat
                setTimeout(() => {
                  window.location.href = "/chat"
                }, 100)
              }}
              variant="outline"
              className="w-full justify-start border-gray-300"
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">Web Chat</div>
                <div className="text-xs text-gray-500">AI-powered assistant</div>
              </div>
            </Button>

            <Button
              onClick={() => window.open("tel:+254710546911")}
              variant="outline"
              className="w-full justify-start border-gray-300"
            >
              <Phone className="mr-3 h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="text-xs text-gray-500">+254 710 546 911</div>
              </div>
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-200"
          size="icon"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      )}
    </>
  )
}
