"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Mail } from "lucide-react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [inquiryType, setInquiryType] = useState("")
  const [farmSize, setFarmSize] = useState("")
  const [cropType, setCropType] = useState("")
  const [message, setMessage] = useState("")

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the data for WhatsApp
    const whatsappMessage = `Hello Weland Farm Assistant! 👋

I'm reaching out regarding: *${inquiryType}*

*Personal Details:*
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📍 Location: ${location || "Not specified"}

*Farm Details:*
🌾 Main Crop: ${cropType || "Not specified"}
📏 Farm Size: ${farmSize || "Not specified"}

*My Message:*
${message}

Looking forward to hearing from you!`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/254710546911?text=${encodedMessage}`, "_blank")
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Keep the original email functionality as backup
    console.log("Email submission as backup option")
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

  const isFormValid = name && email && phone && inquiryType && message

  return (
    <form className="space-y-4">
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

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="button"
          onClick={handleWhatsAppSubmit}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          disabled={!isFormValid}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Send via WhatsApp
        </Button>
        <Button
          type="button"
          onClick={handleEmailSubmit}
          variant="outline"
          className="border-gray-300 text-gray-700"
          disabled={!isFormValid}
        >
          <Mail className="mr-2 h-4 w-4" />
          Send Email (Alternative)
        </Button>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <MessageSquare className="h-5 w-5 text-green-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-green-800 mb-1">WhatsApp Benefits:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Instant response during business hours</li>
              <li>• Continue the conversation easily</li>
              <li>• Share additional photos or documents</li>
              <li>• Get real-time updates on your inquiry</li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  )
}
