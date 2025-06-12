import RecommendationForm from "@/components/recommendation-form"

export default function RecommendationsPage() {
  return (
    <div className="bg-weland-cream min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8 text-center">Farm Recommendations for Kenya</h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized recommendations for your farm based on your location, crop type, and soil conditions. Our
            AI-powered system provides tailored advice for Kenyan farming conditions.
          </p>
          <RecommendationForm />
        </div>
      </section>
    </div>
  )
}
