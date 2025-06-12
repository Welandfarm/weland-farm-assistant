import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, location, inquiryType, farmSize, cropType, message } = await req.json()

    console.log("Contact form submission received:", {
      name,
      email,
      phone,
      location,
      inquiryType,
      farmSize,
      cropType,
      message,
      timestamp: new Date().toISOString(),
    })

    // For now, just return success
    // In production, you would save this to your database and send notifications
    return NextResponse.json({
      success: true,
      message: "Message sent successfully. We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
