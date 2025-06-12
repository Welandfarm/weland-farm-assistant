export default function Footer() {
  return (
    <footer className="py-12 bg-weland-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <img
              src="/images/weland-logo.png"
              alt="Weland Agrisols Logo"
              className="h-16 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
              }}
            />
            <div className="text-left">
              <div className="text-xl font-bold">WELAND AGRISOLS</div>
              <div className="text-sm opacity-90">Farm Assistant</div>
            </div>
          </div>
          <p className="text-lg">&copy; 2023 Weland Agrisols. All rights reserved. | Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  )
}
