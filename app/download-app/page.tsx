import { Button } from "@/components/ui/button"
import { ArrowRight, Download, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DownloadApp() {
  return (
    <main className="bg-weland-cream min-h-screen">
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Download Our App</h1>
            <p className="text-xl text-gray-600">
              Get soil fertility recommendations, chat with experts, and manage your farm on the go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex justify-center">
              <div className="relative w-64 h-[500px] bg-gray-100 rounded-3xl overflow-hidden border-8 border-gray-800 shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-800 z-10 flex justify-center items-center">
                  <div className="w-20 h-4 bg-gray-700 rounded-full"></div>
                </div>
                <div className="h-full w-full overflow-hidden pt-6 pb-10">
                  <div className="bg-weland-green h-full w-full flex flex-col items-center justify-center p-4">
                    <img
                      src="/images/weland-logo.png"
                      alt="Weland Agrisols Logo"
                      className="w-32 h-auto mb-6 filter brightness-0 invert"
                    />
                    <h3 className="text-white text-xl font-bold mb-2">WELAND AGRISOLS</h3>
                    <p className="text-white text-sm mb-8">Farm Assistant</p>
                    <div className="bg-white/20 w-full p-4 rounded-lg mb-4">
                      <div className="h-4 bg-white/40 rounded mb-2"></div>
                      <div className="h-4 bg-white/40 rounded w-3/4"></div>
                    </div>
                    <div className="bg-white/20 w-full p-4 rounded-lg mb-4">
                      <div className="h-4 bg-white/40 rounded mb-2"></div>
                      <div className="h-4 bg-white/40 rounded w-1/2"></div>
                    </div>
                    <div className="mt-auto">
                      <div className="bg-white text-weland-green font-bold py-2 px-6 rounded-full">Get Started</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Weland Farm Assistant Mobile App</h2>
              <p className="text-lg text-gray-600 mb-8">
                Access all our services from your smartphone. Get personalized recommendations, chat with our experts,
                and track your farm's progress wherever you are.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-weland-green" />
                  <span className="text-gray-700">Offline access to recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-weland-green" />
                  <span className="text-gray-700">Push notifications for weather alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-weland-green" />
                  <span className="text-gray-700">Take and upload photos of your crops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-weland-green" />
                  <span className="text-gray-700">Track your farm's progress over time</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-black text-white p-2 rounded-full mr-3">
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
                      >
                        <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                        <path d="M12 19v2" />
                        <path d="M12 3V1" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M19 12h2" />
                        <path d="M3 12h2" />
                        <path d="m17.66 6.34 1.41-1.41" />
                        <path d="m4.93 19.07 1.41-1.41" />
                      </svg>
                    </span>
                    Android App
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Download our Android app from Google Play Store or directly as an APK file.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-weland-green hover:bg-weland-green text-white">
                      <Download className="mr-2 h-5 w-5" />
                      Download APK
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700">
                      Google Play
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-black text-white p-2 rounded-full mr-3">
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
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                        <path d="M10 2c1 .5 2 2 2 5" />
                      </svg>
                    </span>
                    iOS App
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Download our iOS app from the Apple App Store for iPhone and iPad.
                  </p>
                  <Button variant="outline" className="border-gray-300 text-gray-700">
                    App Store
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-black text-white p-2 rounded-full mr-3">
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
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="M6 8h4" />
                        <path d="M14 8h4" />
                        <path d="M6 12h4" />
                        <path d="M14 12h4" />
                        <path d="M6 16h4" />
                        <path d="M14 16h4" />
                      </svg>
                    </span>
                    Web App
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Use our web app directly from your browser. No download required.
                  </p>
                  <Link href="/recommendations">
                    <Button className="bg-weland-orange hover:bg-weland-orange text-white">
                      Open Web App
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Need Help Installing?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is ready to assist you with downloading and installing the app on your device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20need%20help%20installing%20the%20app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Installation Help
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
