import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, location, message, serviceType, preferredDate } = await req.json()

    // Log the request for debugging
    console.log("Service request received:", {
      firstName,
      lastName,
      email,
      phone,
      location,
      message,
      serviceType,
      preferredDate,
    })

    // For now, just return success
    // In production, you would save this to your database
    return NextResponse.json({
      success: true,
      message: "Service request submitted successfully. Our team will contact you within 24 hours.",
    })
  } catch (error) {
    console.error("Error submitting service request:", error)
    return NextResponse.json({ error: "Failed to submit service request" }, { status: 500 })
  }
}
