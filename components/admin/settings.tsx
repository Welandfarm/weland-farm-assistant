"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Loader2, Save } from "lucide-react"

export default function AdminSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [settings, setSettings] = useState({
    siteName: "Weland Farm Assistant",
    siteDescription:
      "Site-specific, crop-specific soil fertility recommendations using AI, weather data, and localized soil reports.",
    contactEmail: "welandagrisols@gmail.com",
    contactPhone: "+254 710 546 911",
    address: "Westlands, Nairobi, Kenya",
    socialLinks: {
      facebook: "https://facebook.com/welandfarm",
      twitter: "https://twitter.com/welandfarm",
      instagram: "https://instagram.com/welandfarm",
    },
    features: {
      enableBlog: true,
      enableChat: true,
      enableRecommendations: true,
    },
  })

  const handleSaveSettings = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // You could add a toast notification here
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Site Settings</h2>
        <Button className="bg-weland-green hover:bg-weland-green" onClick={handleSaveSettings} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic information about your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input
                  id="site-name"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  value={settings.siteDescription}
                  onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-logo">Site Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <Input type="file" id="site-logo" className="max-w-xs" />
                    <p className="text-xs text-gray-500 mt-1">Recommended size: 200x200px</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="favicon">Favicon</Label>
                <Input type="file" id="favicon" className="max-w-xs" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Your business contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email Address</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Phone Number</Label>
                <Input
                  id="contact-phone"
                  value={settings.contactPhone}
                  onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-hours">Business Hours</Label>
                <Textarea
                  id="business-hours"
                  placeholder="Monday - Friday: 8:00 AM - 6:00 PM&#10;Saturday: 9:00 AM - 4:00 PM&#10;Sunday: Closed"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature Settings</CardTitle>
              <CardDescription>Enable or disable website features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Blog</h3>
                  <p className="text-sm text-gray-500">Enable the blog section on your website</p>
                </div>
                <Switch
                  checked={settings.features.enableBlog}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      features: { ...settings.features, enableBlog: checked },
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Chat Assistant</h3>
                  <p className="text-sm text-gray-500">Enable the AI chat assistant feature</p>
                </div>
                <Switch
                  checked={settings.features.enableChat}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      features: { ...settings.features, enableChat: checked },
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Recommendations Engine</h3>
                  <p className="text-sm text-gray-500">Enable the farm recommendations feature</p>
                </div>
                <Switch
                  checked={settings.features.enableRecommendations}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      features: { ...settings.features, enableRecommendations: checked },
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Your social media profiles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  value={settings.socialLinks.facebook}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      socialLinks: { ...settings.socialLinks, facebook: e.target.value },
                    })
                  }
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  value={settings.socialLinks.twitter}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      socialLinks: { ...settings.socialLinks, twitter: e.target.value },
                    })
                  }
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={settings.socialLinks.instagram}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      socialLinks: { ...settings.socialLinks, instagram: e.target.value },
                    })
                  }
                  placeholder="https://instagram.com/yourprofile"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
