import { type NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const hasOpenAI = !!process.env.OPENAI_API_KEY
    const hasSupabaseUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
    const hasSupabaseKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY

    let openaiTest = null
    if (hasOpenAI) {
      try {
        // Test OpenAI API with a simple request
        const testResponse = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Hello" }],
            max_tokens: 5,
          }),
        })

        if (testResponse.ok) {
          openaiTest = { status: "working", model: "gpt-3.5-turbo" }
        } else {
          const errorData = await testResponse.json()
          openaiTest = { status: "error", error: errorData.error?.message }
        }
      } catch (error) {
        openaiTest = { status: "error", error: error.message }
      }
    }

    return NextResponse.json({
      status: "API is working",
      environment: {
        openai_configured: hasOpenAI,
        openai_test: openaiTest,
        supabase_url_configured: hasSupabaseUrl,
        supabase_key_configured: hasSupabaseKey,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Test API error:", error)
    return NextResponse.json({ error: "Test API failed" }, { status: 500 })
  }
}
