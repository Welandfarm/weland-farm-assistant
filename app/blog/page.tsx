import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, User, ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Maximizing Maize Yields in Kenya's Central Region",
    excerpt:
      "Learn the best practices for maize cultivation in Kenya's central highlands, including soil preparation, fertilizer application, and pest management strategies.",
    date: "October 15, 2023",
    author: "John Kamau",
    image: "/placeholder.svg?height=200&width=400",
    slug: "maximizing-maize-yields",
  },
  {
    id: 2,
    title: "Soil Health: The Foundation of Sustainable Farming",
    excerpt:
      "Discover how maintaining soil health can lead to long-term agricultural success. This article covers organic matter management, crop rotation, and soil testing.",
    date: "September 28, 2023",
    author: "Mary Wanjiku",
    image: "/placeholder.svg?height=200&width=400",
    slug: "soil-health-foundation",
  },
  {
    id: 3,
    title: "Climate-Smart Agriculture Techniques for Small-Scale Farmers",
    excerpt:
      "Practical approaches to adapt farming practices to changing climate conditions, focusing on water conservation, drought-resistant crops, and sustainable land management.",
    date: "November 2, 2023",
    author: "David Ochieng",
    image: "/placeholder.svg?height=200&width=400",
    slug: "climate-smart-agriculture",
  },
  {
    id: 4,
    title: "Effective Pest Management for Kenyan Crops",
    excerpt:
      "Learn about integrated pest management strategies that combine biological, cultural, and chemical controls to protect your crops while minimizing environmental impact.",
    date: "October 5, 2023",
    author: "Sarah Njeri",
    image: "/placeholder.svg?height=200&width=400",
    slug: "effective-pest-management",
  },
  {
    id: 5,
    title: "Water Conservation Techniques for Dry Season Farming",
    excerpt:
      "Explore methods to maximize water efficiency during Kenya's dry seasons, including drip irrigation, mulching, and selecting drought-tolerant crop varieties.",
    date: "August 20, 2023",
    author: "James Mwangi",
    image: "/placeholder.svg?height=200&width=400",
    slug: "water-conservation-techniques",
  },
  {
    id: 6,
    title: "Profitable Crop Rotation Systems for Small Farms",
    excerpt:
      "Discover how strategic crop rotation can improve soil fertility, break pest cycles, and increase overall farm productivity and profitability.",
    date: "July 12, 2023",
    author: "Elizabeth Akinyi",
    image: "/placeholder.svg?height=200&width=400",
    slug: "profitable-crop-rotation",
  },
]

export default function BlogPage() {
  return (
    <div className="bg-weland-cream min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Weland Farm Blog</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, practical advice, and success stories for Kenyan farmers
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm space-x-4">
                    <span className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="text-weland-green border-weland-green hover:bg-green-50">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
