import { type NextRequest, NextResponse } from "next/server"

// In a real application, you would use a proper authentication system
// This is a simplified example for demonstration purposes
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "weland2023"

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json()

    // Simple authentication check
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // In a real app, you would generate a proper JWT token
      const token = "sample-token-" + Date.now()

      return NextResponse.json({
        success: true,
        token,
        message: "Login successful",
      })
    } else {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 401 })
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
