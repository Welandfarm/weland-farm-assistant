"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, ArrowRight, AlertCircle } from "lucide-react"

export default function RecommendationForm() {
  const [location, setLocation] = useState("")
  const [cropType, setCropType] = useState("")
  const [farmSize, setFarmSize] = useState("")
  const [soilDescription, setSoilDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [recommendation, setRecommendation] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isUsingFallback, setIsUsingFallback] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setIsUsingFallback(false)

    try {
      const response = await fetch("/api/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location,
          cropType,
          farmSize,
          soilDescription,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate recommendations")
      }

      setRecommendation(data.recommendation)

      // Check if we're using fallback recommendations
      if (data.source === "fallback") {
        setIsUsingFallback(true)
      }
    } catch (err) {
      console.error("Recommendation error:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setRecommendation(null)
    setIsUsingFallback(false)
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

  return (
    <div className="w-full max-w-4xl mx-auto">
      {recommendation ? (
        <Card>
          <CardHeader>
            <CardTitle>Your Personalized Recommendations</CardTitle>
            <CardDescription>
              Based on your farm in {location} growing {cropType}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isUsingFallback && (
              <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-md text-sm mb-4 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>
                  We're currently experiencing high demand. These are general recommendations for your crop and region.
                </span>
              </div>
            )}
            <div className="whitespace-pre-line bg-gray-50 p-4 rounded-md">{recommendation}</div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleReset}>
              Generate Another Recommendation
            </Button>
            <Button className="bg-weland-orange hover:bg-weland-orange">Save Recommendation</Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Get Personalized Farm Recommendations</CardTitle>
            <CardDescription>
              Fill in the details about your farm to receive tailored recommendations for soil management and crop
              production in Kenya.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">{error}</div>
              )}

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Farm Location (County)
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
                  Main Crop
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
                  Farm Size
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
                  <Select defaultValue="acres">
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

              <Button type="submit" className="w-full bg-weland-orange hover:bg-weland-orange" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Recommendations...
                  </>
                ) : (
                  <>
                    Get Recommendations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
