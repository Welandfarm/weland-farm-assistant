"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Loader2, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [inquiryType, setInquiryType] = useState("")
  const [farmSize, setFarmSize] = useState("")
  const [cropType, setCropType] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          location,
          inquiryType,
          farmSize,
          cropType,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSuccess(true)
      // Reset form
      setName("")
      setEmail("")
      setPhone("")
      setLocation("")
      setInquiryType("")
      setFarmSize("")
      setCropType("")
      setMessage("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inquiryTypes = [
    "Soil Testing",
    "Fertilizer Recommendations",
    "Crop Consultation",
    "Farm Management Services",
    "General Inquiry",
    "Technical Support",
    "Partnership Opportunities",
  ]

  const kenyanCounties = [
    "Baringo",
    "Bomet",
    "Bungoma",
    "Busia",
    "Elgeyo-Marakwet",
    "Embu",
    "Garissa",
    "Homa Bay",
    "Isiolo",
    "Kajiado",
    "Kakamega",
    "Kericho",
    "Kiambu",
    "Kilifi",
    "Kirinyaga",
    "Kisii",
    "Kisumu",
    "Kitui",
    "Kwale",
    "Laikipia",
    "Lamu",
    "Machakos",
    "Makueni",
    "Mandera",
    "Marsabit",
    "Meru",
    "Migori",
    "Mombasa",
    "Murang'a",
    "Nairobi",
    "Nakuru",
    "Nandi",
    "Narok",
    "Nyamira",
    "Nyandarua",
    "Nyeri",
    "Samburu",
    "Siaya",
    "Taita-Taveta",
    "Tana River",
    "Tharaka-Nithi",
    "Trans-Nzoia",
    "Turkana",
    "Uasin Gishu",
    "Vihiga",
    "Wajir",
    "West Pokot",
  ]

  const cropTypes = [
    "Maize",
    "Beans",
    "Potatoes",
    "Sweet Potatoes",
    "Cassava",
    "Bananas",
    "Coffee",
    "Tea",
    "Sugarcane",
    "Rice",
    "Wheat",
    "Sorghum",
    "Millet",
    "Tomatoes",
    "Onions",
    "Kale (Sukuma Wiki)",
    "Cabbage",
    "Avocados",
    "Mangoes",
    "Mixed Farming",
    "Other",
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">{error}</div>
      )}

      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm flex items-center">
          <CheckCircle className="h-4 w-4 mr-2" />
          Your message has been sent successfully! We'll get back to you within 24 hours.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-weland-green"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+254 7XX XXX XXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-weland-green"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-weland-green"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium text-gray-700">
            County/Location
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="border border-gray-300 focus:border-weland-green">
              <SelectValue placeholder="Select your county" />
            </SelectTrigger>
            <SelectContent>
              {kenyanCounties.map((county) => (
                <SelectItem key={county} value={county}>
                  {county}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="inquiryType" className="text-sm font-medium text-gray-700">
            Type of Inquiry *
          </label>
          <Select value={inquiryType} onValueChange={setInquiryType} required>
            <SelectTrigger className="border border-gray-300 focus:border-weland-green">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="farmSize" className="text-sm font-medium text-gray-700">
            Farm Size (Optional)
          </label>
          <Input
            id="farmSize"
            type="text"
            placeholder="e.g., 2 acres, 1 hectare"
            value={farmSize}
            onChange={(e) => setFarmSize(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-weland-green"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cropType" className="text-sm font-medium text-gray-700">
            Main Crop (Optional)
          </label>
          <Select value={cropType} onValueChange={setCropType}>
            <SelectTrigger className="border border-gray-300 focus:border-weland-green">
              <SelectValue placeholder="Select main crop" />
            </SelectTrigger>
            <SelectContent>
              {cropTypes.map((crop) => (
                <SelectItem key={crop} value={crop}>
                  {crop}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message *
        </label>
        <Textarea
          id="message"
          placeholder="Please describe your inquiry, farming challenges, or how we can help you..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-weland-green"
        />
      </div>

      <Button type="submit" className="w-full bg-weland-green hover:bg-weland-green text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <Mail className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
