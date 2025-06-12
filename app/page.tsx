import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart,
  CloudSun,
  FlaskRoundIcon as Flask,
  Mail,
  MapPin,
  Users,
  CheckCircle,
  MessageSquare,
} from "lucide-react"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-weland-cream">
      {/* Hero Section */}
      <section id="hero" className="relative py-24 md:py-32 overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Healthy Soil, <span className="text-weland-green">Higher Yields</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Site-specific, crop-specific soil fertility recommendations using AI, weather data, and localized soil
                reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/recommendations">
                  <Button size="lg" className="bg-weland-orange hover:bg-weland-orange text-white px-8 py-4 text-lg">
                    Get Recommendations
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-green-800">Get Instant Help on WhatsApp</span>
                </div>
                <p className="text-green-700 text-sm mb-3">
                  Chat with our agricultural experts directly for immediate assistance with your farming needs.
                </p>
                <a
                  href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20need%20help%20with%20my%20farming%20needs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <img
                  src="/images/container-farming-1.jpg"
                  alt="Container farming with blue buckets growing various plants on red Kenyan soil"
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-weland-cream">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Weland Farm Assistant</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2017 to empower Kenyan farmers with data-driven insights, Weland Farm Assistant combines
              agricultural expertise with cutting-edge technology to boost productivity and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-weland-green rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🌱</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To transform agriculture in Kenya through accessible, data-driven soil management solutions that
                increase yields while promoting sustainable farming practices.
              </p>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-weland-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">☀️</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Combining local knowledge with AI and weather data to provide tailored recommendations that work
                specifically for Kenyan soil conditions and farming practices.
              </p>
            </div>

            {/* Our Impact */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Helping thousands of farmers increase yields while practicing sustainable agriculture, contributing to
                food security and environmental conservation across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-weland-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Input Your Details</h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your location, crop type, and current season through our simple interface.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-weland-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our system processes your data along with soil maps, weather patterns, and crop requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive detailed, actionable recommendations tailored to your specific farming conditions.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recommendations">
                <Button size="lg" className="bg-weland-orange hover:bg-weland-orange text-white px-8 py-4 text-lg">
                  Try It Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/download-app">
                <Button size="lg" className="bg-weland-green hover:bg-weland-green text-white px-8 py-4 text-lg">
                  Download Our App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Weland Chat Section */}
      <section className="py-20 bg-weland-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Weland Chat</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get instant answers to your farming questions with our AI-powered chat assistant. Available 24/7 to
                provide guidance on soil management, crop selection, and best practices.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-weland-green" />
                  <span className="text-gray-700">Ask about specific crop requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-weland-green" />
                  <span className="text-gray-700">Get fertilizer application advice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-weland-green" />
                  <span className="text-gray-700">Troubleshoot common soil issues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-weland-green" />
                  <span className="text-gray-700">Learn about sustainable farming practices</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20have%20farming%20questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-colors"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <Link href="/chat">
                  <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg">
                    Try Web Chat
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4 max-w-xs">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-weland-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">AI</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">AI Assistant</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Hello! I'm your Weland Farm Assistant. How can I help with your farming needs today?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-green-100 rounded-lg p-4 max-w-xs">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-700">You</span>
                    </div>
                    <p className="text-sm text-gray-700">What fertilizer should I use for maize in Bomet County?</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4 max-w-xs">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-weland-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">AI</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">AI Assistant</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      For maize in Bomet County, I recommend using NPK 17:17:17 at planting, followed by CAN
                      top-dressing when the maize is knee-high. Bomet soils are typically acidic, so consider adding
                      lime if your soil pH is below 5.5. Would you like more specific recommendations based on your
                      exact location?
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-weland-green"
                />
                <Button className="bg-weland-green hover:bg-weland-green px-4 py-2">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to improve your farm's productivity and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Flask className="h-6 w-6 text-weland-green" />}
              iconBgColor="bg-green-100"
              title="Soil Testing"
              description="Comprehensive soil analysis to understand nutrient levels, pH, and organic matter content for informed decision-making."
              ctaText="Order via WhatsApp"
              ctaColor="bg-green-600 hover:bg-green-700"
              serviceType="test"
            />

            <ServiceCard
              icon={<BarChart className="h-6 w-6 text-amber-600" />}
              iconBgColor="bg-amber-100"
              title="Fertility Management Plans"
              description="Customized fertilizer recommendations based on your specific soil conditions and crop requirements."
              ctaText="Get Plan via WhatsApp"
              ctaColor="bg-green-600 hover:bg-green-700"
              serviceType="plan"
            />

            <ServiceCard
              icon={<CloudSun className="h-6 w-6 text-blue-600" />}
              iconBgColor="bg-blue-100"
              title="Sustainable Land Use"
              description="Guidance on crop rotation, cover crops, and conservation practices to maintain soil health long-term."
              ctaText="Book via WhatsApp"
              ctaColor="bg-green-600 hover:bg-green-700"
              serviceType="consultation"
            />

            <ServiceCard
              icon={<Users className="h-6 w-6 text-weland-orange" />}
              iconBgColor="bg-orange-100"
              title="Agronomy Support"
              description="Expert advice from agricultural specialists to help implement recommendations and troubleshoot issues."
              ctaText="Chat on WhatsApp"
              ctaColor="bg-green-600 hover:bg-green-700"
              serviceType="call"
            />

            <div className="md:col-span-2">
              <ServiceCard
                icon={<BarChart className="h-6 w-6 text-weland-green" />}
                iconBgColor="bg-green-100"
                title="Farm Management Services"
                description="We manage your investment from land preparation to harvest, guaranteeing you higher yields, without the headaches and time-consuming challenges of regular visits to manage farm operations."
                ctaText="Request via WhatsApp"
                ctaColor="bg-green-600 hover:bg-green-700"
                serviceType="management"
                hasSecondaryAction={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-weland-cream">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Get instant help on WhatsApp or use our contact form for detailed inquiries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* WhatsApp Primary Contact */}
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">WhatsApp - Our Primary Contact</h3>
                <p className="text-green-700">Get instant responses from our agricultural experts</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-green-700">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Instant responses during business hours</span>
                </div>
                <div className="flex items-center space-x-3 text-green-700">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Share photos of your crops/soil</span>
                </div>
                <div className="flex items-center space-x-3 text-green-700">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Voice messages for complex questions</span>
                </div>
                <div className="flex items-center space-x-3 text-green-700">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Direct connection to our experts</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20need%20help%20with%20my%20farming%20needs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start WhatsApp Chat
                </a>
                <div className="text-center">
                  <a href="tel:+254710546911" className="text-green-700 hover:text-green-800 font-medium">
                    Or call: +254 710 546 911
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Secondary */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Alternative Contact Form</h3>
              <p className="text-gray-600 mb-6">For detailed inquiries or if you prefer email communication.</p>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">WhatsApp (Primary)</h4>
                <a
                  href="https://wa.me/254710546911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  +254 710 546 911
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-weland-orange" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <a
                  href="mailto:welandagrisols@gmail.com"
                  className="text-gray-700 hover:text-weland-green transition-colors"
                >
                  welandagrisols@gmail.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <span className="text-gray-700">Westlands, Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-weland-green text-white">
        <div className="container">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <img
                src="/images/weland-logo.png"
                alt="Weland Agrisols Logo"
                className="h-16 w-auto filter brightness-0 invert"
              />
              <div className="text-left">
                <div className="text-xl font-bold">WELAND AGRISOLS</div>
                <div className="text-sm opacity-90">Farm Assistant</div>
              </div>
            </div>
            <p className="text-lg">&copy; 2023 Weland Agrisols. All rights reserved. | Nairobi, Kenya</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
