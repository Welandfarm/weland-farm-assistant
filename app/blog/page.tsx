import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, User, ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample blog posts with real farming images
const blogPosts = [
  {
    id: 1,
    title: "Maximizing Maize Yields in Kenya's Central Region",
    excerpt:
      "Learn the best practices for maize cultivation in Kenya's central highlands, including soil preparation, fertilizer application, and pest management strategies.",
    date: "October 15, 2023",
    author: "John Kamau",
    image: "/images/container-farming-1.jpg",
    slug: "maximizing-maize-yields",
  },
  {
    id: 2,
    title: "Container Farming: Growing More in Less Space",
    excerpt:
      "Discover how container farming can help small-scale farmers maximize their yields using limited space and resources. Perfect for urban and peri-urban agriculture.",
    date: "September 28, 2023",
    author: "Mary Wanjiku",
    image: "/images/container-farming-2.jpg",
    slug: "container-farming-guide",
  },
  {
    id: 3,
    title: "Herb Gardening for Kenyan Households",
    excerpt:
      "Learn how to grow essential herbs and spices at home using simple container methods. Reduce costs and ensure fresh ingredients for your kitchen.",
    date: "November 2, 2023",
    author: "David Ochieng",
    image: "/images/herb-garden.jpg",
    slug: "herb-gardening-guide",
  },
  {
    id: 4,
    title: "Sustainable Farming with Simple Greenhouse Techniques",
    excerpt:
      "Explore low-cost greenhouse methods that protect your crops and extend growing seasons. Perfect for Kenya's diverse climate conditions.",
    date: "October 5, 2023",
    author: "Sarah Njeri",
    image: "/images/greenhouse-farming.jpg",
    slug: "simple-greenhouse-techniques",
  },
  {
    id: 5,
    title: "Water-Smart Farming for Dry Season Success",
    excerpt:
      "Master water conservation techniques that keep your crops thriving during Kenya's dry seasons. Learn drip irrigation and mulching strategies.",
    date: "August 20, 2023",
    author: "James Mwangi",
    image: "/images/sustainable-farming.jpg",
    slug: "water-smart-farming",
  },
  {
    id: 6,
    title: "Small-Scale Irrigation Systems That Work",
    excerpt:
      "Discover affordable irrigation solutions for small farms. From simple drip systems to efficient water management techniques.",
    date: "July 12, 2023",
    author: "Elizabeth Akinyi",
    image: "/images/container-farming-1.jpg",
    slug: "small-scale-irrigation",
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
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
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
                  <Link href={`/blog/${post.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full text-weland-green border-weland-green hover:bg-green-50"
                    >
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
