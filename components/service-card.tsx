"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import ServiceBookingModal from "./service-booking-modal"

interface ServiceCardProps {
  icon: React.ReactNode
  iconBgColor: string
  title: string
  description: string
  ctaText: string
  ctaColor: string
  serviceType: "test" | "plan" | "consultation" | "call" | "management"
  hasSecondaryAction?: boolean
}

export default function ServiceCard({
  icon,
  iconBgColor,
  title,
  description,
  ctaText,
  ctaColor,
  serviceType,
  hasSecondaryAction = false,
}: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Generate WhatsApp message based on service type
  const getWhatsAppMessage = () => {
    const baseMessage = "Hello Weland Farm Assistant, I'm interested in"
    switch (serviceType) {
      case "test":
        return `${baseMessage} soil testing services. Can you help me get started?`
      case "plan":
        return `${baseMessage} getting a customized fertility management plan for my farm.`
      case "consultation":
        return `${baseMessage} sustainable land use consultation. I'd like to learn more.`
      case "call":
        return `${baseMessage} agronomy support. Can we schedule a consultation?`
      case "management":
        return `${baseMessage} your farm management services. Please provide more details.`
      default:
        return `${baseMessage} your services. Can you help me?`
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(getWhatsAppMessage())
    window.open(`https://wa.me/254710546911?text=${message}`, "_blank")
  }

  // Update button colors - all primary actions are now WhatsApp green
  const getButtonClass = () => {
    return "bg-green-600 hover:bg-green-700 text-white"
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex gap-4">
          <div className={`w-12 h-12 ${iconBgColor} rounded-full flex-shrink-0 flex items-center justify-center`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Button className={getButtonClass()} onClick={handleWhatsAppClick}>
                <MessageSquare className="mr-2 h-4 w-4" />
                {ctaText}
              </Button>
              {hasSecondaryAction && (
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsModalOpen(true)}
                >
                  More Details
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <ServiceBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={title}
        serviceType={serviceType}
      />
    </>
  )
}
