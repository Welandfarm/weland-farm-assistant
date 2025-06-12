"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, Leaf, TestTube, Calendar, Phone } from "lucide-react"

export default function WhatsAppQuickActions() {
  const quickActions = [
    {
      icon: <TestTube className="h-5 w-5" />,
      title: "Soil Testing",
      message:
        "Hello Weland Farm Assistant! I'm interested in soil testing services for my farm. Can you provide me with information about the process, pricing, and how to get started?",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "Crop Advice",
      message:
        "Hello Weland Farm Assistant! I need advice about crop selection and farming practices for my area. Can you help me choose the best crops for my soil and climate conditions?",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Farm Management",
      message:
        "Hello Weland Farm Assistant! I'm interested in your farm management services. Can you tell me more about how you help farmers manage their operations from planting to harvest?",
      color: "bg-amber-600 hover:bg-amber-700",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "General Inquiry",
      message:
        "Hello Weland Farm Assistant! I have some questions about your services and would like to learn more about how you can help improve my farming operations.",
      color: "bg-gray-600 hover:bg-gray-700",
    },
  ]

  const handleQuickAction = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/254710546911?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Quick WhatsApp Actions</h3>
      <p className="text-gray-600 mb-6">Get instant help with these common inquiries:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            onClick={() => handleQuickAction(action.message)}
            className={`${action.color} text-white p-4 h-auto flex flex-col items-center space-y-2 text-center`}
          >
            <div className="flex items-center space-x-2">
              {action.icon}
              <MessageSquare className="h-4 w-4" />
            </div>
            <span className="font-semibold">{action.title}</span>
          </Button>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">Or start a custom conversation by clicking any WhatsApp button above</p>
      </div>
    </div>
  )
}
