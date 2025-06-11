import { type NextRequest, NextResponse } from "next/server"

// Fallback recommendations by crop type and region
const fallbackRecommendations: Record<string, Record<string, string>> = {
  default: {
    default:
      "We're currently experiencing high demand. Here are some general recommendations for farming in Kenya:\n\n" +
      "1. Soil Preparation: Test your soil pH and nutrient levels before planting. Most Kenyan soils benefit from organic matter addition.\n\n" +
      "2. Fertilizer: Apply balanced NPK fertilizer at planting. Consider top-dressing with CAN or Urea during the growing season.\n\n" +
      "3. Planting: Follow recommended spacing for your crop. Plant at the onset of rains for rain-fed agriculture.\n\n" +
      "4. Pest Management: Practice integrated pest management combining cultural, biological and chemical controls.\n\n" +
      "5. Harvesting: Harvest at proper maturity to maximize yield and quality.",
  },
  Maize: {
    default:
      "Basic recommendations for maize in Kenya:\n\n" +
      "1. Soil Preparation: Plow to a depth of 20-30cm. Ensure good drainage.\n\n" +
      "2. Fertilizer: Apply 50kg DAP per acre at planting. Top-dress with 50kg CAN when knee-high.\n\n" +
      "3. Planting: Space rows 75cm apart, 25-30cm between plants. Plant at onset of reliable rains.\n\n" +
      "4. Pest Management: Monitor for fall armyworm and stalk borers. Control weeds early.\n\n" +
      "5. Harvesting: Harvest when husks turn brown and kernels are hard.",
  },
  Beans: {
    default:
      "Basic recommendations for beans in Kenya:\n\n" +
      "1. Soil Preparation: Prepare a fine seedbed. Beans prefer well-drained soils with pH 5.8-6.5.\n\n" +
      "2. Fertilizer: Apply 50kg DAP per acre at planting. Beans fix nitrogen so heavy N fertilizer isn't needed.\n\n" +
      "3. Planting: Space rows 45-50cm apart, 10-15cm between plants. Plant at onset of rains.\n\n" +
      "4. Pest Management: Watch for bean fly, aphids and thrips. Practice crop rotation.\n\n" +
      "5. Harvesting: Harvest when pods turn yellow for dry beans, or earlier for green beans.",
  },
  Tea: {
    default:
      "Basic recommendations for tea in Kenya:\n\n" +
      "1. Soil Preparation: Tea prefers acidic soils (pH 4.5-5.5). Ensure good drainage.\n\n" +
      "2. Fertilizer: Apply NPK 25:5:5 at 150-200kg per acre split into 2-3 applications per year.\n\n" +
      "3. Planting: Space plants 0.8m x 1.2m. Mulch around young plants.\n\n" +
      "4. Pest Management: Monitor for mites, thrips and beetles. Maintain field hygiene.\n\n" +
      "5. Harvesting: Pluck two leaves and a bud every 7-14 days depending on growth rate.",
  },
}

// Get fallback recommendation based on crop type and location
function getFallbackRecommendation(cropType: string, location: string): string {
  // Try to get crop-specific and location-specific recommendation
  if (fallbackRecommendations[cropType]?.[location]) {
    return fallbackRecommendations[cropType][location]
  }

  // Try to get crop-specific recommendation
  if (fallbackRecommendations[cropType]?.default) {
    return fallbackRecommendations[cropType].default
  }

  // Return default recommendation
  return fallbackRecommendations.default.default
}

export async function POST(req: NextRequest) {
  try {
    const { location, cropType, farmSize, soilDescription } = await req.json()

    console.log("Recommendation request:", { location, cropType, farmSize, soilDescription })

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key not found")
      const fallbackRecommendation = getFallbackRecommendation(cropType, location)
      return NextResponse.json({
        recommendation: fallbackRecommendation,
        success: true,
        source: "fallback",
      })
    }

    try {
      // Use fetch API directly with gpt-3.5-turbo model
      const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are an agricultural expert specializing in Kenyan farming conditions. Provide detailed, practical advice that Kenyan farmers can implement. Use metric units (kg/ha, cm, etc.) and refer to products and practices that are common in Kenya.",
            },
            {
              role: "user",
              content: `Generate detailed farming recommendations for a farm in Kenya with the following details:
              
              Location: ${location}, Kenya
              Crop Type: ${cropType}
              Farm Size: ${farmSize}
              Soil Description: ${soilDescription || "Unknown - please provide general recommendations"}
              
              Provide specific recommendations for:
              1. Soil preparation
              2. Fertilizer application (types, amounts, and timing)
              3. Planting (spacing, depth, timing)
              4. Pest and disease management
              5. Harvesting
              
              Format the response in a clear, structured way that a Kenyan farmer can easily follow.
              Include specific product names and application rates that are available in Kenya.
              Consider the typical soil conditions and climate patterns in ${location}, Kenya.
              Remember that Kenya has two main growing seasons: the long rains (March-May) and short rains (October-December).`,
            },
          ],
          max_tokens: 2000,
          temperature: 0.7,
        }),
      })

      if (!openaiResponse.ok) {
        const errorData = await openaiResponse.json()
        console.error("OpenAI API error:", errorData)

        // If quota exceeded or any other OpenAI error, use fallback
        const fallbackRecommendation = getFallbackRecommendation(cropType, location)
        return NextResponse.json({
          recommendation: fallbackRecommendation,
          success: true,
          source: "fallback",
        })
      }

      const data = await openaiResponse.json()
      const recommendationText = data.choices[0]?.message?.content || "Unable to generate recommendations at this time."

      console.log("OpenAI response received successfully")

      return NextResponse.json({
        recommendation: recommendationText,
        success: true,
        source: "openai",
      })
    } catch (error) {
      console.error("Error with OpenAI API:", error)

      // If any error occurs with OpenAI, use fallback
      const fallbackRecommendation = getFallbackRecommendation(cropType, location)
      return NextResponse.json({
        recommendation: fallbackRecommendation,
        success: true,
        source: "fallback",
      })
    }
  } catch (error) {
    console.error("Error generating recommendations:", error)

    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json({ error: "API configuration issue. Our team has been notified." }, { status: 500 })
      }
      if (error.message.includes("quota")) {
        return NextResponse.json({
          recommendation: fallbackRecommendations.default.default,
          success: true,
          source: "fallback",
        })
      }
      return NextResponse.json({ error: "An error occurred. Please try again later." }, { status: 500 })
    }

    return NextResponse.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
