import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-weland-green text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative h-16 w-16 mr-3">
              <Image
                src="/images/weland-logo.png"
                alt="Weland Agrisols Logo"
                fill
                className="object-contain filter brightness-0 invert"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">WELAND AGRISOLS</h3>
              <p className="text-sm">Farm Assistant</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/recommendations" className="hover:underline">
              Recommendations
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/chat" className="hover:underline">
              Chat
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        <div className="text-center text-sm">
          <p>© 2023 Weland Agrisols. All rights reserved. | Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  )
}
