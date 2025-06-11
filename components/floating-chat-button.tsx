"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import WelandChat from "./weland-chat"

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 z-50 w-[90%] max-w-[350px] h-[500px] md:h-[550px] shadow-2xl rounded-lg overflow-hidden">
          <WelandChat />
          <Button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 h-8 w-8 p-0 rounded-full bg-white text-gray-500 hover:bg-gray-100"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-weland-orange hover:bg-weland-orange shadow-lg"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
