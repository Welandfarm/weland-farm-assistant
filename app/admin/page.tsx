import PDFUploader from "@/components/pdf-uploader"

export default function AdminPage() {
  return (
    <div className="bg-weland-cream min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
          <div className="max-w-md mx-auto">
            <PDFUploader />
          </div>
        </div>
      </section>
    </div>
  )
}
