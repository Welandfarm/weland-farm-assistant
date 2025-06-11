import PDFUploader from "@/components/pdf-uploader"

export default function AdminPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <div className="max-w-md mx-auto">
        <PDFUploader />
      </div>
    </div>
  )
}
