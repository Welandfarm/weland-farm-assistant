"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, ArrowRight } from "lucide-react"

export default function RecommendationForm() {
  const [location, setLocation] = useState("")
  const [cropType, setCropType] = useState("")
  const [farmSize, setFarmSize] = useState("")
  const [farmUnit, setFarmUnit] = useState("acres")
  const [soilDescription, setSoilDescription] = useState("")

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the data for WhatsApp
    const message = `Hello Weland Farm Assistant! 🌱

I need personalized farm recommendations. Here are my details:

📍 *Farm Location:* ${location}
🌾 *Main Crop:* ${cropType}
📏 *Farm Size:* ${farmSize} ${farmUnit}
🌱 *Soil Description:* ${soilDescription || "Not provided"}

Please provide me with tailored recommendations for soil management and crop production. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/254710546911?text=${encodedMessage}`, "_blank")
  }

  const handleWebSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Keep the original web-based functionality as backup
    // This would be the existing API call logic
    console.log("Web submission as backup option")
  }

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

  const kenyanCrops = [
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
    "Oranges",
  ]

  const isFormValid = location && cropType && farmSize

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Get Personalized Farm Recommendations</CardTitle>
          <CardDescription>
            Fill in your farm details and we'll send you tailored recommendations via WhatsApp instantly!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Farm Location (County) *
              </label>
              <Select value={location} onValueChange={setLocation} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select county" />
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
              <label htmlFor="cropType" className="text-sm font-medium">
                Main Crop *
              </label>
              <Select value={cropType} onValueChange={setCropType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  {kenyanCrops.map((crop) => (
                    <SelectItem key={crop} value={crop}>
                      {crop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="farmSize" className="text-sm font-medium">
                Farm Size *
              </label>
              <div className="flex gap-2">
                <Input
                  id="farmSize"
                  value={farmSize}
                  onChange={(e) => setFarmSize(e.target.value)}
                  placeholder="e.g., 2"
                  required
                  type="number"
                  min="0.1"
                  step="0.1"
                />
                <Select value={farmUnit} onValueChange={setFarmUnit}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="acres">Acres</SelectItem>
                    <SelectItem value="hectares">Hectares</SelectItem>
                    <SelectItem value="sqm">Square Meters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="soilDescription" className="text-sm font-medium">
                Soil Description (Optional)
              </label>
              <Textarea
                id="soilDescription"
                value={soilDescription}
                onChange={(e) => setSoilDescription(e.target.value)}
                placeholder="Describe your soil (e.g., red clay soil, sandy soil, etc.) and any issues you've noticed"
                className="min-h-[100px]"
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
                Get Recommendations via WhatsApp
              </Button>
              <Button
                type="button"
                onClick={handleWebSubmit}
                variant="outline"
                className="border-gray-300 text-gray-700"
                disabled={!isFormValid}
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Use Web Form (Alternative)
              </Button>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">Why WhatsApp?</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Get instant personalized recommendations</li>
                    <li>• Share photos of your crops and soil</li>
                    <li>• Ask follow-up questions directly</li>
                    <li>• Save recommendations for future reference</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
