import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock, MessageSquare, CheckCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-weland-cream min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Weland Farm Assistant</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get instant help on WhatsApp or reach out through our other contact methods. We're here to help you
              improve your farm's productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Primary WhatsApp Contact */}
      <section className="pb-8">
        <div className="container">
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">WhatsApp - Our Primary Contact</h2>
              <p className="text-xl text-green-700 mb-6">
                Get instant responses from our agricultural experts. Available during business hours with quick replies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Why Choose WhatsApp?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-green-700">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Instant responses during business hours</span>
                  </div>
                  <div className="flex items-center space-x-3 text-green-700">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Share photos of your crops, soil, or farm issues</span>
                  </div>
                  <div className="flex items-center space-x-3 text-green-700">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Voice messages for complex questions</span>
                  </div>
                  <div className="flex items-center space-x-3 text-green-700">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Direct connection to our agricultural experts</span>
                  </div>
                  <div className="flex items-center space-x-3 text-green-700">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Easy to schedule consultations and follow-ups</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Quick Start Options</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20need%20help%20with%20soil%20testing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white hover:bg-green-50 border border-green-200 rounded-lg p-3 transition-colors"
                  >
                    <div className="font-medium text-green-800">Soil Testing Inquiry</div>
                    <div className="text-sm text-green-600">Get started with soil analysis</div>
                  </a>
                  <a
                    href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20need%20fertilizer%20recommendations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white hover:bg-green-50 border border-green-200 rounded-lg p-3 transition-colors"
                  >
                    <div className="font-medium text-green-800">Fertilizer Advice</div>
                    <div className="text-sm text-green-600">Get crop-specific recommendations</div>
                  </a>
                  <a
                    href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20have%20a%20farming%20question"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white hover:bg-green-50 border border-green-200 rounded-lg p-3 transition-colors"
                  >
                    <div className="font-medium text-green-800">General Farming Question</div>
                    <div className="text-sm text-green-600">Ask anything about farming</div>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20need%20help%20with%20my%20farming%20needs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl rounded-lg font-semibold transition-colors shadow-lg"
              >
                <MessageSquare className="mr-3 h-6 w-6" />
                Start WhatsApp Chat Now
              </a>
              <div className="mt-4">
                <a href="tel:+254710546911" className="text-green-700 hover:text-green-800 font-medium text-lg">
                  Or call directly: +254 710 546 911
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alternative Contact Methods</h2>
            <p className="text-lg text-gray-600">
              Prefer other ways to reach us? We're available through these channels too.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Email Contact Form</h3>
              <p className="text-gray-600 mb-6">
                For detailed inquiries or if you prefer email communication. We'll respond within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details Card */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">WhatsApp (Primary)</h4>
                      <div className="space-y-1">
                        <a
                          href="tel:+254710546911"
                          className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
                        >
                          +254 710 546 911
                        </a>
                        <a
                          href="https://wa.me/254710546911"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-green-600 hover:underline"
                        >
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-weland-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                      <a
                        href="mailto:welandagrisols@gmail.com"
                        className="text-gray-700 hover:text-weland-green transition-colors"
                      >
                        welandagrisols@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                      <p className="text-gray-700">Westlands, Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-green-600 rounded-xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Need Immediate Help?</h4>
                <p className="mb-6">
                  For urgent farming questions or emergencies, WhatsApp us directly for the fastest response.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/254710546911?text=Hello%20Weland%20Farm%20Assistant,%20I%20have%20an%20urgent%20farming%20question"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp Now
                  </a>
                  <a
                    href="tel:+254710546911"
                    className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-800 transition-colors flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services and how we can help your farm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How quickly do you respond on WhatsApp?</h3>
              <p className="text-gray-600">
                We typically respond within 15-30 minutes during business hours (8 AM - 6 PM, Monday-Friday). For urgent
                matters, we often respond even faster.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Can I send photos through WhatsApp?</h3>
              <p className="text-gray-600">
                Yes! WhatsApp is perfect for sharing photos of your crops, soil conditions, or any farming issues.
                Visual information helps us provide better recommendations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Do you provide services outside Nairobi?</h3>
              <p className="text-gray-600">
                Yes, we provide services across Kenya. WhatsApp makes it easy to coordinate sample collection and
                consultation services in most counties.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Is WhatsApp consultation free?</h3>
              <p className="text-gray-600">
                Initial consultations and basic farming advice on WhatsApp are free. We'll let you know if any
                specialized services require payment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
