"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Key, RefreshCw, Settings, BarChart } from "lucide-react"

export default function APISettingsPage() {
  const [apiStatus, setApiStatus] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [testResult, setTestResult] = useState<any>(null)

  const checkAPIStatus = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/test")
      const data = await response.json()
      setApiStatus(data)
    } catch (error) {
      setApiStatus({ error: "Failed to check API status" })
    } finally {
      setIsLoading(false)
    }
  }

  const testOpenAI = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Hello, this is a test message" }],
          sessionId: "test-session",
        }),
      })

      const data = await response.json()
      setTestResult(data)
    } catch (error) {
      setTestResult({ error: "Test failed" })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkAPIStatus()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">API Settings & Status</h1>
          <p className="text-gray-600 mt-2">Monitor and configure your API integrations</p>
        </div>

        <Tabs defaultValue="status" className="space-y-6">
          <TabsList>
            <TabsTrigger value="status">API Status</TabsTrigger>
            <TabsTrigger value="quota">Quota Management</TabsTrigger>
            <TabsTrigger value="fallback">Fallback Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="status">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    API Configuration
                  </CardTitle>
                  <CardDescription>Current API setup and connectivity status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={checkAPIStatus} disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Checking...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Refresh Status
                      </>
                    )}
                  </Button>

                  {apiStatus && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">OpenAI API</span>
                        <Badge variant={apiStatus.environment?.openai_configured ? "default" : "destructive"}>
                          {apiStatus.environment?.openai_configured ? "Configured" : "Not Configured"}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Supabase URL</span>
                        <Badge variant={apiStatus.environment?.supabase_url_configured ? "default" : "secondary"}>
                          {apiStatus.environment?.supabase_url_configured ? "Configured" : "Not Configured"}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Supabase Key</span>
                        <Badge variant={apiStatus.environment?.supabase_key_configured ? "default" : "secondary"}>
                          {apiStatus.environment?.supabase_key_configured ? "Configured" : "Not Configured"}
                        </Badge>
                      </div>

                      {apiStatus.environment?.openai_test && (
                        <div className="mt-4 p-3 bg-gray-50 rounded-md">
                          <h4 className="text-sm font-medium mb-2">OpenAI Test Result:</h4>
                          <div className="flex items-center">
                            {apiStatus.environment.openai_test.status === "working" ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            <span className="text-sm">
                              {apiStatus.environment.openai_test.status === "working"
                                ? `Working (Model: ${apiStatus.environment.openai_test.model})`
                                : `Error: ${apiStatus.environment.openai_test.error}`}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Test AI Chat</CardTitle>
                  <CardDescription>Send a test message to verify the chat functionality</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={testOpenAI} disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Testing...
                      </>
                    ) : (
                      "Test Chat API"
                    )}
                  </Button>

                  {testResult && (
                    <div className="p-3 bg-gray-50 rounded-md">
                      <h4 className="text-sm font-medium mb-2">Test Response:</h4>
                      <p className="text-sm text-gray-700">{testResult.response || testResult.error}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quota">
            <Card>
              <CardHeader>
                <CardTitle>Quota Management</CardTitle>
                <CardDescription>Handle API quota limits and billing issues</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Quota Exceeded Error Solutions:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Check your OpenAI billing dashboard</li>
                      <li>• Add payment method or increase usage limits</li>
                      <li>• The system automatically uses fallback responses when quota is exceeded</li>
                      <li>• Fallback responses are based on agricultural expertise and remain helpful</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Current Status</h3>
                    <p className="text-sm text-gray-600">
                      When quota is exceeded, the system automatically switches to expert-curated responses
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Fallback Active</h3>
                    <p className="text-sm text-gray-600">
                      Users receive agricultural advice from our knowledge base instead of AI-generated responses
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Quick Fixes:</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://platform.openai.com/account/billing" target="_blank" rel="noopener noreferrer">
                        <Key className="mr-2 h-4 w-4" />
                        Open OpenAI Billing Dashboard
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://platform.openai.com/account/usage" target="_blank" rel="noopener noreferrer">
                        <BarChart className="mr-2 h-4 w-4" />
                        Check Usage Statistics
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fallback">
            <Card>
              <CardHeader>
                <CardTitle>Fallback System</CardTitle>
                <CardDescription>Configure responses when AI services are unavailable</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your website has a robust fallback system that provides expert agricultural advice even when AI
                    services are unavailable. This ensures users always receive helpful information.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fallback-message">Fallback Message</Label>
                    <Input
                      id="fallback-message"
                      value="AI service temporarily unavailable. These recommendations are from our agricultural knowledge base."
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Chat Fallbacks</h4>
                      <p className="text-sm text-gray-600">
                        Crop-specific responses for maize, beans, soil management, and fertilizer advice
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Recommendation Fallbacks</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive farming guides for major Kenyan crops including tea, coffee, and vegetables
                      </p>
                    </div>
                  </div>

                  <Button className="w-full">Update Fallback Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
