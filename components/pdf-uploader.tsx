// Update the PDF uploader component to handle text files as well
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, FileText, Check, AlertCircle } from "lucide-react"

export default function PDFUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setStatus("idle")
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setStatus("idle")

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(`Successfully processed ${data.documentCount} document chunks`)
      } else {
        setStatus("error")
        setMessage(data.error || "Failed to upload file")
      }
    } catch (error) {
      setStatus("error")
      setMessage("An error occurred while uploading")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-6">
        <FileText className="h-12 w-12 text-orange-500 mb-2" />
        <h3 className="text-xl font-semibold">Upload Knowledge Base</h3>
        <p className="text-sm text-gray-500 text-center mt-1">
          Upload PDF or text files to train Weland Chat with your agricultural knowledge
        </p>
      </div>

      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <Input type="file" accept=".pdf,.txt,.md" onChange={handleFileChange} className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="flex flex-col items-center justify-center cursor-pointer">
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm font-medium">{file ? file.name : "Click to select a PDF or text file"}</span>
            {file && <span className="text-xs text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</span>}
          </label>
        </div>

        <Button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          {uploading ? "Processing..." : "Upload and Process File"}
        </Button>

        {status === "success" && (
          <div className="flex items-center text-green-600 text-sm mt-2">
            <Check className="h-4 w-4 mr-1" />
            <span>{message}</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center text-red-600 text-sm mt-2">
            <AlertCircle className="h-4 w-4 mr-1" />
            <span>{message}</span>
          </div>
        )}
      </div>
    </div>
  )
}
