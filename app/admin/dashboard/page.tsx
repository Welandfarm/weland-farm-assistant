"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { BarChart, FileText, ImageIcon, LayoutDashboard, MessageSquare, PenTool, Settings, Users } from "lucide-react"
import Link from "next/link"
import AdminBlogPosts from "@/components/admin/blog-posts"
import AdminMediaLibrary from "@/components/admin/media-library"
import AdminSettings from "@/components/admin/settings"

export default function AdminDashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("weland_admin_token")
    if (!token) {
      router.push("/admin/login")
      return
    }

    // Verify token with backend (in a real app)
    // For now, we'll just simulate authentication
    setIsAuthenticated(true)
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("weland_admin_token")
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-weland-green border-r-gray-200 border-b-gray-200 border-l-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-weland-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌱</span>
              </div>
              <span className="font-bold text-xl">Weland Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-weland-green text-sm">
                View Site
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sticky top-20">
              <nav className="space-y-1">
                <Link
                  href="/admin/dashboard"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md bg-gray-100 text-gray-900"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/admin/dashboard?tab=blog"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <FileText className="h-5 w-5" />
                  <span>Blog Posts</span>
                </Link>
                <Link
                  href="/admin/dashboard?tab=media"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <ImageIcon className="h-5 w-5" />
                  <span>Media Library</span>
                </Link>
                <Link
                  href="/admin/dashboard?tab=messages"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Messages</span>
                </Link>
                <Link
                  href="/admin/dashboard?tab=analytics"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <BarChart className="h-5 w-5" />
                  <span>Analytics</span>
                </Link>
                <Link
                  href="/admin/dashboard?tab=users"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Users className="h-5 w-5" />
                  <span>Users</span>
                </Link>
                <Link
                  href="/admin/dashboard?tab=settings"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                <TabsTrigger value="media">Media Library</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">+2 added this month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Media Files</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">48</div>
                      <p className="text-xs text-muted-foreground">Images, videos, and documents</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">7</div>
                      <p className="text-xs text-muted-foreground">3 unread messages</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common tasks you might want to perform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="bg-weland-green hover:bg-weland-green w-full justify-start">
                        <PenTool className="mr-2 h-4 w-4" />
                        Create New Blog Post
                      </Button>
                      <Button className="bg-weland-orange hover:bg-weland-orange w-full justify-start">
                        <ImageIcon className="mr-2 h-4 w-4" />
                        Upload New Media
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        View Contact Messages
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Edit Site Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="blog">
                <AdminBlogPosts />
              </TabsContent>

              <TabsContent value="media">
                <AdminMediaLibrary />
              </TabsContent>

              <TabsContent value="settings">
                <AdminSettings />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
