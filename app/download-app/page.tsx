import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DownloadAppPage() {
  return (
    <div className="bg-weland-cream min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8 text-center">Download Weland Farm Assistant App</h1>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Take Weland with you everywhere</h2>
                <p className="text-gray-600 mb-6">
                  Get instant access to personalized farming recommendations, soil management advice, and expert support
                  for Kenyan agriculture - even when you're offline.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-black hover:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                      <path d="M10 2c1 .5 2 2 2 5"></path>
                    </svg>
                    Download for iOS
                  </Button>
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                      <path d="M12 18h.01"></path>
                    </svg>
                    Download for Android
                  </Button>
                  <p className="text-sm text-gray-500 text-center">Available for iOS 12+ and Android 8+</p>
                </div>
              </div>
              <div className="relative h-[500px] w-full flex items-center justify-center">
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src="/images/weland-logo.png"
                    alt="Weland Agrisols Farm Assistant App"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-6 text-center">App Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Offline Access</h4>
                  <p className="text-gray-600">
                    Access your recommendations and farming guides even without an internet connection - perfect for
                    rural areas in Kenya.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-600"
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                      <path d="M12 18h.01"></path>
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
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
      </section>
    </div>
  )
}
