import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { messages, userId, sessionId } = await req.json()
    const lastMessage = messages[messages.length - 1].content

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key not found")
      return Response.json({ error: "OpenAI API key not configured" }, { status: 500 })
    }

    // For now, let's skip the embedding search and just use OpenAI directly
    // This will work without Supabase setup
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

    // Use fetch API directly with gpt-3.5-turbo model
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Changed from gpt-4 to gpt-3.5-turbo
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
      throw new Error(`OpenAI API error: ${errorData.error?.message || "Unknown error"}`)
    }

    const data = await openaiResponse.json()
    const responseText = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response."

    return Response.json({ response: responseText })
  } catch (error) {
    console.error("Error in chat API:", error)
    return Response.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}
