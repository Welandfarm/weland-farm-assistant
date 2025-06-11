"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MessageSquare, User, Phone, Download } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function WelandChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Weland Farm Assistant. How can I help with your farming needs today?",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showOptions, setShowOptions] = useState(true)
  const [sessionId] = useState(() => uuidv4()) // Generate a unique session ID
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() && !loading) return

    const userMessage = input.trim()
    setInput("")
    setLoading(true)
    setShowOptions(false)

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    try {
      // Send message to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
          sessionId, // Send the session ID to track conversations
          // userId could be added here if the user is authenticated
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      // Add assistant response to chat
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])

      // Show options again after response
      setShowOptions(true)
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ])
      setShowOptions(true)
    } finally {
      setLoading(false)
    }
  }

  const handleQuickOption = (option: string) => {
    setInput(option)
    handleSubmit({ preventDefault: () => {} } as React.FormEvent)
  }

  const handleDownloadApp = () => {
    // This would link to your app download page
    window.open("/download-app", "_blank")
    setMessages((prev) => [
      ...prev,
      { role: "user", content: "I want to download the mobile app" },
      {
        role: "assistant",
        content:
          "Great! I've opened our app download page in a new tab. You can download our mobile app from there for more features and offline access.",
      },
    ])
  }

  const handleConnectAgronomist = () => {
    // This would trigger a connection to an agronomist
    setMessages((prev) => [
      ...prev,
      { role: "user", content: "I need to speak with an agronomist" },
      {
        role: "assistant",
        content:
          "I'll connect you with one of our agronomists. Please provide your phone number and a brief description of your issue, and an agronomist will call you back within 24 hours.",
      },
    ])
    setInput("My phone number is ")
  }

  // Determine if we should show crop-specific suggestions based on conversation
  const shouldShowCropSuggestions = messages.some(
    (msg) =>
      msg.content.toLowerCase().includes("maize") ||
      msg.content.toLowerCase().includes("corn") ||
      msg.content.toLowerCase().includes("crop"),
  )

  // Determine if we should show soil-specific suggestions based on conversation
  const shouldShowSoilSuggestions = messages.some(
    (msg) =>
      msg.content.toLowerCase().includes("soil") ||
      msg.content.toLowerCase().includes("fertilizer") ||
      msg.content.toLowerCase().includes("nutrient"),
  )

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-weland-orange text-white p-4 flex items-center">
        <MessageSquare className="h-5 w-5 mr-2" />
        <h3 className="font-semibold">Weland Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user" ? "bg-orange-100 text-gray-800 ml-8" : "bg-gray-100 text-gray-800"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {message.role === "assistant" ? (
                  <MessageSquare className="h-4 w-4 text-weland-orange" />
                ) : (
                  <User className="h-4 w-4 text-gray-600" />
                )}
                <p className="text-xs font-medium">{message.role === "user" ? "You" : "Weland Assistant"}</p>
              </div>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}

        {showOptions && messages.length < 3 && (
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs text-gray-500 mb-1">Quick options:</p>
            <Button
              variant="outline"
              size="sm"
              className="justify-start text-left text-sm"
              onClick={() => handleQuickOption("What fertilizer should I use for maize in Bomet County?")}
            >
              What fertilizer should I use for maize in Bomet County?
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="justify-start text-left text-sm"
              onClick={() => handleQuickOption("When is the best time to plant beans in Nakuru?")}
            >
              When is the best time to plant beans in Nakuru?
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="justify-start text-left text-sm"
              onClick={() => handleQuickOption("How do I control fall armyworm in my maize farm?")}
            >
              How do I control fall armyworm in my maize farm?
            </Button>
          </div>
        )}

        {showOptions && shouldShowCropSuggestions && (
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs text-gray-500 mb-1">Crop-specific questions:</p>
            <Button
              variant="outline"
              size="sm"
              className="justify-start text-left text-sm"
              onClick={() => handleQuickOption("What are the best maize varieties for Nyanza region?")}
            >
              What are the best maize varieties for Nyanza region?
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="justify-start text-left text-sm"
              onClick={() => handleQuickOption("How do I manage bacterial wilt in potatoes in Nyandarua?")}
            >
              How do I manage bacterial wilt in potatoes in Nyandarua?
            </Button>
          </div>
        )}

        {showOptions && shouldShowSoilSuggestions && (
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs text-gray-500 mb-1">Soil management questions:</p>
            <Button
              variant="outline"
              size="sm"
              className="justify-start text-left text-sm"
              onClick={() => handleQuickOption("How can I improve acidic soils in Western Kenya?")}
            >
              How can I improve acidic soils in Western Kenya?
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="justify-start text-left text-sm"
              onClick={() => handleQuickOption("What's the recommended lime application rate for soils in Kericho?")}
            >
              What's the recommended lime application rate for soils in Kericho?
            </Button>
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-green-50 border-weland-green text-weland-green hover:bg-green-100"
            onClick={handleDownloadApp}
          >
            <Download className="h-4 w-4 mr-1" />
            Download App
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-orange-50 border-weland-orange text-weland-orange hover:bg-orange-100"
            onClick={handleConnectAgronomist}
          >
            <Phone className="h-4 w-4 mr-1" />
            Talk to Agronomist
          </Button>
        </div>

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about farming, soil, or crops..."
          className="flex-1"
          disabled={loading}
        />
        <Button type="submit" size="icon" className="bg-weland-orange hover:bg-weland-orange" disabled={loading}>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
