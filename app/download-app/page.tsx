import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Apple, Smartphone, MessageSquare } from "lucide-react"

export default function DownloadAppPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Download Weland Farm Assistant App</h1>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Take Weland with you everywhere</h2>
            <p className="text-gray-600 mb-6">
              Get instant access to personalized farming recommendations, soil management advice, and expert support for
              Kenyan agriculture - even when you're offline.
            </p>
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-black hover:bg-gray-800">
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                <Smartphone className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
              <p className="text-sm text-gray-500 text-center">Available for iOS 12+ and Android 8+</p>
            </div>
          </div>
          <div className="relative h-[500px] w-full">
            <Image
              src="/placeholder.svg?height=500&width=300"
              alt="Weland Farm Assistant Mobile App"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-6 text-center">App Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Offline Access</h4>
              <p className="text-gray-600">
                Access your recommendations and farming guides even without an internet connection - perfect for rural
                areas in Kenya.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-semibold mb-2">Farm Tracking</h4>
              <p className="text-gray-600">
                Track your farm activities, record inputs, and monitor progress throughout Kenya's growing seasons.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Direct Support</h4>
              <p className="text-gray-600">
                Chat directly with Kenyan agronomists and receive personalized advice for your specific farming
                challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Don't have a smartphone? You can still access our services via SMS.</p>
          <Button variant="outline">Learn about SMS Service</Button>
        </div>
      </div>
    </div>
  )
}
