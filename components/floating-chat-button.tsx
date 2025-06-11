"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import WelandChat from "./weland-chat"

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const closeChat = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 z-50 w-[90%] max-w-[350px] h-[500px] md:h-[550px] shadow-2xl rounded-lg overflow-hidden bg-white">
          <div className="relative h-full">
            <Button
              onClick={closeChat}
              className="absolute top-3 right-3 h-8 w-8 p-0 rounded-full bg-white text-gray-500 hover:bg-gray-100 z-10 shadow-md border"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
            <WelandChat />
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-weland-orange hover:bg-weland-orange shadow-lg hover:shadow-xl transition-all duration-200"
          size="icon"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      )}
    </>
  )
}
