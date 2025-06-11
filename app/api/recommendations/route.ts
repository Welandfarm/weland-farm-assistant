import { type NextRequest, NextResponse } from "next/server"

// Add more comprehensive fallback recommendations
const fallbackRecommendations: Record<string, Record<string, string>> = {
  default: {
    default:
      "**WELAND FARM ASSISTANT - AGRICULTURAL RECOMMENDATIONS**\n\n" +
      "We're currently experiencing high demand for our AI service. Here are evidence-based recommendations for farming in Kenya:\n\n" +
      "**1. SOIL PREPARATION**\n" +
      "• Test your soil pH and nutrient levels before planting\n" +
      "• Most Kenyan soils are acidic - apply lime if pH is below 5.5\n" +
      "• Add organic matter (compost, manure) to improve soil structure\n" +
      "• Plow to appropriate depth (20-30cm for most crops)\n\n" +
      "**2. FERTILIZER APPLICATION**\n" +
      "• Apply balanced NPK fertilizer at planting based on soil test results\n" +
      "• Common rates: 50kg DAP per acre for most crops\n" +
      "• Top-dress with nitrogen fertilizer (CAN/Urea) 4-6 weeks after planting\n" +
      "• Split fertilizer applications for better nutrient uptake\n\n" +
      "**3. PLANTING GUIDELINES**\n" +
      "• Plant at the onset of reliable rains\n" +
      "• Use certified seeds from reputable suppliers\n" +
      "• Follow recommended spacing for your crop\n" +
      "• Plant at proper depth (2-3 times seed diameter)\n\n" +
      "**4. PEST & DISEASE MANAGEMENT**\n" +
      "• Practice crop rotation to break pest cycles\n" +
      "• Scout fields regularly for early pest detection\n" +
      "• Use integrated pest management (IPM) approaches\n" +
      "• Apply pesticides only when necessary and follow label instructions\n\n" +
      "**5. HARVESTING**\n" +
      "• Harvest at proper maturity for maximum yield and quality\n" +
      "• Use proper post-harvest handling to reduce losses\n" +
      "• Store produce in appropriate conditions\n\n" +
      "*For personalized recommendations, please contact our agronomists at +254 710 546 911*",
  },
  Maize: {
    default:
      "**MAIZE FARMING RECOMMENDATIONS FOR KENYA**\n\n" +
      "**SOIL PREPARATION**\n" +
      "• Plow to 20-30cm depth when soil moisture is optimal\n" +
      "• Apply lime if soil pH is below 5.5 (1-2 tons per acre)\n" +
      "• Incorporate organic matter (5-10 tons manure per acre)\n" +
      "• Ensure good drainage to prevent waterlogging\n\n" +
      "**FERTILIZER RECOMMENDATIONS**\n" +
      "• Basal: Apply 50kg DAP per acre at planting\n" +
      "• Top-dressing: Apply 50kg CAN per acre when maize is knee-high\n" +
      "• For high-potential areas: Consider additional 25kg Urea per acre\n" +
      "• Apply fertilizer 5cm away from seed and cover with soil\n\n" +
      "**PLANTING**\n" +
      "• Spacing: 75cm between rows, 25-30cm between plants\n" +
      "• Plant 2-3 seeds per hole, thin to 1 plant after germination\n" +
      "• Planting depth: 3-5cm depending on soil type\n" +
      "• Best varieties for Kenya: H614, H6213, DK8031, SC Duma 43\n\n" +
      "**PEST MANAGEMENT**\n" +
      "• Monitor for fall armyworm, especially in young plants\n" +
      "• Control stalk borers using biological or chemical methods\n" +
      "• Practice crop rotation with legumes\n" +
      "• Remove crop residues to reduce pest carryover\n\n" +
      "**HARVESTING**\n" +
      "• Harvest when husks turn brown and kernels are hard\n" +
      "• Moisture content should be 20-25% for safe storage\n" +
      "• Dry to 13.5% moisture before storage\n\n" +
      "*Expected yield: 25-40 bags per acre with good management*",
  },
  Beans: {
    default:
      "**BEAN FARMING RECOMMENDATIONS FOR KENYA**\n\n" +
      "**SOIL PREPARATION**\n" +
      "• Prepare fine, well-drained seedbed\n" +
      "• Beans prefer pH 5.8-6.5\n" +
      "• Apply lime if pH is below 5.8\n" +
      "• Incorporate organic matter for better soil structure\n\n" +
      "**FERTILIZER RECOMMENDATIONS**\n" +
      "• Apply 50kg DAP per acre at planting\n" +
      "• Beans fix nitrogen - avoid heavy nitrogen fertilizers\n" +
      "• In phosphorus-deficient soils, increase DAP to 75kg per acre\n" +
      "• Apply fertilizer in furrows and mix with soil\n\n" +
      "**PLANTING**\n" +
      "• Spacing: 45-50cm between rows, 10-15cm between plants\n" +
      "• Plant 2 seeds per hole, thin to 1 plant\n" +
      "• Planting depth: 3-4cm\n" +
      "• Recommended varieties: Rosecoco, Mwitemania, Nyayo, KAT B1\n\n" +
      "**PEST & DISEASE MANAGEMENT**\n" +
      "• Monitor for bean fly, aphids, and thrips\n" +
      "• Practice crop rotation (avoid planting beans after beans)\n" +
      "• Control weeds early to reduce competition\n" +
      "• Watch for angular leaf spot and rust diseases\n\n" +
      "**HARVESTING**\n" +
      "• For dry beans: Harvest when pods turn yellow/brown\n" +
      "• For green beans: Harvest when pods are tender\n" +
      "• Harvest in dry weather to prevent mold\n\n" +
      "*Expected yield: 8-15 bags per acre depending on variety and management*",
  },
  Tea: {
    default:
      "**TEA FARMING RECOMMENDATIONS FOR KENYA**\n\n" +
      "**SOIL REQUIREMENTS**\n" +
      "• Tea prefers acidic soils (pH 4.5-5.5)\n" +
      "• Well-drained, deep soils with good organic matter\n" +
      "• Avoid waterlogged or very sandy soils\n" +
      "• Altitude: 1,200-2,700m above sea level\n\n" +
      "**FERTILIZER PROGRAM**\n" +
      "• Apply NPK 25:5:5 at 150-200kg per acre annually\n" +
      "• Split into 2-3 applications per year\n" +
      "• Apply during rainy seasons for better uptake\n" +
      "• Supplement with organic manure (5-10 tons per acre)\n\n" +
      "**PLANTING**\n" +
      "• Spacing: 0.8m x 1.2m (4,167 plants per acre)\n" +
      "• Plant during rainy seasons\n" +
      "• Dig holes 45cm x 45cm x 45cm\n" +
      "• Mulch around young plants to conserve moisture\n\n" +
      "**MANAGEMENT**\n" +
      "• Prune regularly to maintain plucking table\n" +
      "• Control weeds through mulching and manual weeding\n" +
      "• Monitor for pests: mites, thrips, and beetles\n" +
      "• Maintain field hygiene\n\n" +
      "**HARVESTING**\n" +
      "• Pluck two leaves and a bud\n" +
      "• Plucking frequency: Every 7-14 days\n" +
      "• Best time: Early morning when leaves are fresh\n\n" +
      "*Tea becomes productive after 3-4 years*",
  },
  Coffee: {
    default:
      "**COFFEE FARMING RECOMMENDATIONS FOR KENYA**\n\n" +
      "**SOIL & CLIMATE**\n" +
      "• Well-drained, deep volcanic soils preferred\n" +
      "• pH range: 6.0-6.5\n" +
      "• Altitude: 1,400-2,100m above sea level\n" +
      "• Annual rainfall: 1,000-1,800mm\n\n" +
      "**FERTILIZER PROGRAM**\n" +
      "• Apply NPK 17:17:17 at 200-300g per tree\n" +
      "• Split into 2-3 applications per year\n" +
      "• Apply during rainy seasons\n" +
      "• Supplement with organic manure\n\n" +
      "**PLANTING**\n" +
      "• Spacing: 2.7m x 2.7m (550 trees per acre)\n" +
      "• Plant at onset of rains\n" +
      "• Dig holes 60cm x 60cm x 60cm\n" +
      "• Use certified seedlings from reputable nurseries\n\n" +
      "**MANAGEMENT**\n" +
      "• Prune annually after harvest\n" +
      "• Control coffee berry disease and leaf rust\n" +
      "• Monitor for coffee berry borer\n" +
      "• Mulch around trees to conserve moisture\n\n" +
      "**HARVESTING**\n" +
      "• Pick only ripe red cherries\n" +
      "• Harvest season: October-February\n" +
      "• Process immediately after picking\n\n" +
      "*Coffee trees start producing after 3-4 years*",
  },
}

// Function to get fallback recommendation
function getFallbackRecommendation(cropType: string, location: string): string {
  const cropSpecific = fallbackRecommendations[cropType]?.default
  return cropSpecific || fallbackRecommendations.default.default
}

// Update the main function to handle quota errors better
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
        message:
          "AI service is being configured. These are evidence-based recommendations from our agricultural database.",
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

        // Check for quota-related errors
        if (
          errorData.error?.code === "insufficient_quota" ||
          errorData.error?.message?.includes("quota") ||
          errorData.error?.message?.includes("billing") ||
          errorData.error?.message?.includes("exceeded")
        ) {
          const fallbackRecommendation = getFallbackRecommendation(cropType, location)
          return NextResponse.json({
            recommendation: fallbackRecommendation,
            success: true,
            source: "fallback",
            message:
              "Our AI service is currently at capacity. These are evidence-based recommendations from our agricultural experts.",
          })
        }

        // For other errors, also use fallback
        const fallbackRecommendation = getFallbackRecommendation(cropType, location)
        return NextResponse.json({
          recommendation: fallbackRecommendation,
          success: true,
          source: "fallback",
          message:
            "AI service temporarily unavailable. These recommendations are from our agricultural knowledge base.",
        })
      }

      const data = await openaiResponse.json()
      const recommendationText = data.choices[0]?.message?.content || getFallbackRecommendation(cropType, location)

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
        message: "AI service temporarily unavailable. These are expert recommendations from our agricultural database.",
      })
    }
  } catch (error) {
    console.error("Error generating recommendations:", error)

    // Provide fallback even for general errors
    const fallbackRecommendation = fallbackRecommendations.default.default
    return NextResponse.json({
      recommendation: fallbackRecommendation,
      success: true,
      source: "fallback",
      message: "Service temporarily unavailable. Please try again later or contact our agronomists directly.",
    })
  }
}
