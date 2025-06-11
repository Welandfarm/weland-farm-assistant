"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PenTool, Trash2, Eye, ArrowUpDown, Search, Plus } from "lucide-react"

// Sample blog post data
const samplePosts = [
  {
    id: 1,
    title: "Maximizing Maize Yields in Kenya's Central Region",
    excerpt: "Learn the best practices for maize cultivation in Kenya's central highlands...",
    status: "published",
    date: "2023-10-15",
    author: "John Kamau",
  },
  {
    id: 2,
    title: "Soil Health: The Foundation of Sustainable Farming",
    excerpt: "Discover how maintaining soil health can lead to long-term agricultural success...",
    status: "published",
    date: "2023-09-28",
    author: "Mary Wanjiku",
  },
  {
    id: 3,
    title: "Climate-Smart Agriculture Techniques for Small-Scale Farmers",
    excerpt: "Practical approaches to adapt farming practices to changing climate conditions...",
    status: "draft",
    date: "2023-11-02",
    author: "David Ochieng",
  },
]

export default function AdminBlogPosts() {
  const [posts, setPosts] = useState(samplePosts)
  const [searchTerm, setSearchTerm] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [currentPost, setCurrentPost] = useState<any>(null)

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleNewPost = () => {
    setCurrentPost({
      id: Date.now(),
      title: "",
      excerpt: "",
      content: "",
      status: "draft",
      date: new Date().toISOString().split("T")[0],
      author: "Admin",
    })
    setIsEditing(true)
  }

  const handleEditPost = (post: any) => {
    setCurrentPost({ ...post, content: "Sample content for this blog post..." })
    setIsEditing(true)
  }

  const handleSavePost = () => {
    if (currentPost) {
      const postIndex = posts.findIndex((p) => p.id === currentPost.id)
      if (postIndex >= 0) {
        // Update existing post
        const updatedPosts = [...posts]
        updatedPosts[postIndex] = currentPost
        setPosts(updatedPosts)
      } else {
        // Add new post
        setPosts([...posts, currentPost])
      }
      setIsEditing(false)
      setCurrentPost(null)
    }
  }

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  if (isEditing) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{currentPost.id ? "Edit Blog Post" : "Create New Blog Post"}</CardTitle>
          <CardDescription>
            {currentPost.id ? "Update the details of your blog post" : "Create a new blog post for your website"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Post Title
              </label>
              <Input
                id="title"
                value={currentPost.title}
                onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                placeholder="Enter post title"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="excerpt" className="text-sm font-medium">
                Excerpt
              </label>
              <Textarea
                id="excerpt"
                value={currentPost.excerpt}
                onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                placeholder="Brief summary of the post"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                Content
              </label>
              <Textarea
                id="content"
                value={currentPost.content}
                onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                placeholder="Full blog post content"
                rows={10}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-medium">
                  Status
                </label>
                <Select
                  value={currentPost.status}
                  onValueChange={(value) => setCurrentPost({ ...currentPost, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Publication Date
                </label>
                <Input
                  id="date"
                  type="date"
                  value={currentPost.date}
                  onChange={(e) => setCurrentPost({ ...currentPost, date: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="featured-image" className="text-sm font-medium">
                Featured Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <input type="file" id="featured-image" className="hidden" />
                <label
                  htmlFor="featured-image"
                  className="cursor-pointer text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Click to upload an image
                </label>
                <p className="text-xs text-gray-500 mt-2">PNG, JPG or WEBP (max. 2MB)</p>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button className="bg-weland-green hover:bg-weland-green" onClick={handleSavePost}>
                Save Post
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Button className="bg-weland-green hover:bg-weland-green" onClick={handleNewPost}>
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center space-x-1">
                      <span>Title</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">Status</th>
                  <th className="text-left p-4 font-medium text-gray-500">Date</th>
                  <th className="text-left p-4 font-medium text-gray-500">Author</th>
                  <th className="text-right p-4 font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{post.title}</div>
                        <div className="text-sm text-gray-500">{post.excerpt}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{post.date}</td>
                    <td className="p-4 text-gray-600">{post.author}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleEditPost(post)}>
                          <PenTool className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
