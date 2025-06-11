"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Upload, ImageIcon, FileText, Film, Trash2, Copy } from "lucide-react"

// Sample media items
const sampleMedia = [
  {
    id: 1,
    name: "hero-image.jpg",
    type: "image",
    url: "/placeholder.svg?height=200&width=300",
    size: "1.2 MB",
    dimensions: "1200 x 800",
    uploaded: "2023-10-15",
  },
  {
    id: 2,
    name: "soil-testing.jpg",
    type: "image",
    url: "/placeholder.svg?height=200&width=300",
    size: "0.8 MB",
    dimensions: "800 x 600",
    uploaded: "2023-09-28",
  },
  {
    id: 3,
    name: "farm-guide.pdf",
    type: "document",
    url: "#",
    size: "2.4 MB",
    dimensions: "",
    uploaded: "2023-11-02",
  },
  {
    id: 4,
    name: "fertilizer-application.mp4",
    type: "video",
    url: "#",
    size: "15.6 MB",
    dimensions: "1920 x 1080",
    uploaded: "2023-10-20",
  },
  {
    id: 5,
    name: "maize-varieties.jpg",
    type: "image",
    url: "/placeholder.svg?height=200&width=300",
    size: "0.9 MB",
    dimensions: "1000 x 750",
    uploaded: "2023-11-05",
  },
  {
    id: 6,
    name: "crop-rotation-chart.png",
    type: "image",
    url: "/placeholder.svg?height=200&width=300",
    size: "0.5 MB",
    dimensions: "1200 x 900",
    uploaded: "2023-10-10",
  },
]

export default function AdminMediaLibrary() {
  const [media, setMedia] = useState(sampleMedia)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMedia, setSelectedMedia] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState("all")

  const filteredMedia = media.filter((item) => {
    // Filter by search term
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())

    // Filter by type
    if (activeTab === "all") return matchesSearch
    return matchesSearch && item.type === activeTab
  })

  const handleSelectMedia = (id: number) => {
    if (selectedMedia.includes(id)) {
      setSelectedMedia(selectedMedia.filter((item) => item !== id))
    } else {
      setSelectedMedia([...selectedMedia, id])
    }
  }

  const handleDeleteSelected = () => {
    setMedia(media.filter((item) => !selectedMedia.includes(item.id)))
    setSelectedMedia([])
  }

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    // You could add a toast notification here
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Media Library</h2>
        <Button className="bg-weland-green hover:bg-weland-green">
          <Upload className="mr-2 h-4 w-4" />
          Upload New
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Media Files</CardTitle>
          <CardDescription>Manage your images, videos, and documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>

              {selectedMedia.length > 0 && (
                <Button variant="outline" className="text-red-500" onClick={handleDeleteSelected}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected ({selectedMedia.length})
                </Button>
              )}
            </div>

            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All Media</TabsTrigger>
                <TabsTrigger value="image">Images</TabsTrigger>
                <TabsTrigger value="video">Videos</TabsTrigger>
                <TabsTrigger value="document">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredMedia.map((item) => (
                    <div
                      key={item.id}
                      className={`border rounded-md overflow-hidden ${
                        selectedMedia.includes(item.id) ? "ring-2 ring-weland-green" : ""
                      }`}
                    >
                      <div className="relative">
                        <div className="absolute top-2 left-2">
                          <input
                            type="checkbox"
                            checked={selectedMedia.includes(item.id)}
                            onChange={() => handleSelectMedia(item.id)}
                            className="h-4 w-4 rounded border-gray-300 text-weland-green focus:ring-weland-green"
                          />
                        </div>
                        <div className="h-40 bg-gray-100 flex items-center justify-center">
                          {item.type === "image" ? (
                            <img
                              src={item.url || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          ) : item.type === "video" ? (
                            <Film className="h-12 w-12 text-gray-400" />
                          ) : (
                            <FileText className="h-12 w-12 text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-sm truncate" title={item.name}>
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {item.size} {item.dimensions && `• ${item.dimensions}`}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => handleCopyUrl(item.url)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {filteredMedia.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                      <ImageIcon className="h-12 w-12 text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900">No media found</h3>
                      <p className="text-gray-500 mt-1">
                        {searchTerm ? `No results for "${searchTerm}"` : "Upload some files to see them here"}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
