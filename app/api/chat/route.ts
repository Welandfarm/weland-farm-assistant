import type { NextRequest } from "next/server"

// Fallback responses for when OpenAI quota is exceeded
const fallbackResponses = {
  maize:
    "For maize farming in Kenya, I recommend using NPK 17:17:17 at planting (50kg per acre) and top-dressing with CAN when the maize is knee-high (50kg per acre). Ensure proper spacing of 75cm between rows and 25cm between plants. Plant at the onset of reliable rains.",

  beans:
    "For beans in Kenya, use DAP fertilizer at planting (50kg per acre). Beans fix nitrogen naturally, so avoid heavy nitrogen fertilizers. Space rows 45cm apart with 10-15cm between plants. Plant during the rainy seasons (March-May or October-December).",

  soil: "Most Kenyan soils are acidic and may need lime application. Test your soil pH - if below 5.5, apply agricultural lime at 1-2 tons per acre. Add organic matter like compost or manure to improve soil structure and fertility.",

  fertilizer:
    "Common fertilizers in Kenya include DAP (for phosphorus), CAN (for nitrogen), NPK blends, and Urea. Apply based on soil test results. Generally, apply fertilizer at planting and top-dress 4-6 weeks after planting.",

  default:
    "I'm currently experiencing high demand. Here's some general farming advice for Kenya: Focus on soil health through organic matter addition, use certified seeds, apply fertilizers based on soil tests, practice crop rotation, and implement integrated pest management. For specific advice, please try again later or contact our agronomists directly.",
}

function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("maize") || lowerMessage.includes("corn")) {
    return fallbackResponses.maize
  } else if (lowerMessage.includes("bean")) {
    return fallbackResponses.beans
  } else if (lowerMessage.includes("soil")) {
    return fallbackResponses.soil
  } else if (lowerMessage.includes("fertilizer") || lowerMessage.includes("fertiliser")) {
    return fallbackResponses.fertilizer
  } else {
    return fallbackResponses.default
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages, userId, sessionId } = await req.json()
    const lastMessage = messages[messages.length - 1].content

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key not found")
      return Response.json({
        response:
          getFallbackResponse(lastMessage) +
          "\n\n*Note: AI service is currently being configured. This is a basic response.*",
      })
    }

    const systemPrompt = `You are Weland Chat, an agricultural assistant for Weland Farm Assistant in Kenya.
You provide advice on soil management, crop selection, and farming practices specifically for Kenyan agriculture.

Important facts about Kenyan agriculture:
- Kenya has diverse agro-ecological zones from arid to high-potential areas
- Main food crops include maize, beans, potatoes, and vegetables
- Cash crops include tea, coffee, and horticultural products
- Most farmers are smallholders with less than 2 hectares
- Common challenges include soil acidity, phosphorus deficiency, and erratic rainfall
- Kenya has two main growing seasons: the long rains (March-May) and short rains (October-December)
- Most Kenyan soils are acidic and may require lime. Phosphorus is often deficient.
- Common fertilizers in Kenya include DAP, CAN, NPK, and Urea.

Always be helpful, concise, and focused on Kenyan agriculture. Provide specific recommendations with quantities in kg per acre or hectare when possible.`

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
              content: systemPrompt,
            },
            ...messages.map((msg: any) => ({
              role: msg.role,
              content: msg.content,
            })),
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      })

      if (!openaiResponse.ok) {
        const errorData = await openaiResponse.json()
        console.error("OpenAI API error:", errorData)

        // Check if it's a quota error
        if (
          errorData.error?.code === "insufficient_quota" ||
          errorData.error?.message?.includes("quota") ||
          errorData.error?.message?.includes("billing")
        ) {
          return Response.json({
            response:
              getFallbackResponse(lastMessage) +
              "\n\n*Note: Our AI service is currently at capacity. This is a knowledge-based response from our agricultural database.*",
          })
        }

        throw new Error(`OpenAI API error: ${errorData.error?.message || "Unknown error"}`)
      }

      const data = await openaiResponse.json()
      const responseText = data.choices[0]?.message?.content || getFallbackResponse(lastMessage)

      return Response.json({ response: responseText })
    } catch (error) {
      console.error("OpenAI API error:", error)

      // Return fallback response for any OpenAI errors
      return Response.json({
        response:
          getFallbackResponse(lastMessage) +
          "\n\n*Note: Our AI service is temporarily unavailable. This response is from our agricultural knowledge base.*",
      })
    }
  } catch (error) {
    console.error("Error in chat API:", error)
    return Response.json(
      {
        response:
          "I'm sorry, I'm having technical difficulties right now. Please try again later or contact our support team directly at +254 710 546 911.",
      },
      { status: 500 },
    )
  }
}
