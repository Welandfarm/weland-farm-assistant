"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
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

  // Update button colors based on service type
  const getButtonClass = () => {
    if (serviceType === "test" || serviceType === "management") {
      return "bg-weland-green hover:bg-weland-green text-white"
    } else if (serviceType === "call") {
      return "bg-weland-orange hover:bg-weland-orange text-white"
    } else if (serviceType === "plan") {
      return "bg-amber-600 hover:bg-amber-700 text-white"
    } else {
      return "bg-blue-600 hover:bg-blue-700 text-white"
    }
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
              <Button className={getButtonClass()} onClick={() => setIsModalOpen(true)}>
                {ctaText}
                {serviceType === "call" ? <Phone className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              {hasSecondaryAction && (
                <Button variant="outline" className="border-weland-green text-weland-green hover:bg-green-50">
                  Learn More
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
