import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-weland-cream min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Weland Farm Assistant</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with our agricultural experts. We're here to help you improve your farm's productivity and
              sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details Card */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-weland-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone & WhatsApp</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:+254710546911"
                          className="block text-gray-700 hover:text-weland-green transition-colors"
                        >
                          +254 710 546 911
                        </a>
                        <a
                          href="https://wa.me/254710546911"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-weland-green hover:underline"
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
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
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
                      <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                      <p className="text-gray-700">Westlands, Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
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
              <div className="bg-weland-green rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6">
                  For urgent farming questions or emergencies, call us directly or use our WhatsApp for instant support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+254710546911"
                    className="bg-white text-weland-green px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/254710546911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-weland-orange text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-orange-600 transition-colors"
                  >
                    WhatsApp Us
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
              <h3 className="font-semibold text-gray-900 mb-3">How quickly can I get soil test results?</h3>
              <p className="text-gray-600">
                Soil test results are typically available within 5-7 business days after we receive your samples at our
                laboratory.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Do you provide services outside Nairobi?</h3>
              <p className="text-gray-600">
                Yes, we provide services across Kenya. We can arrange sample collection and consultation services in
                most counties.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What crops do you specialize in?</h3>
              <p className="text-gray-600">
                We work with all major Kenyan crops including maize, beans, potatoes, tea, coffee, and horticultural
                crops.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How much do your services cost?</h3>
              <p className="text-gray-600">
                Our pricing varies by service. Contact us for a detailed quote based on your specific needs and farm
                size.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
