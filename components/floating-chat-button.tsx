"use client"

import { useState } from "react"
import Link from "next/link"

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 w-64">
          <h3 className="font-bold text-lg mb-2">Need help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Chat with our farming experts or get quick recommendations for your farm.
          </p>
          <div className="space-y-2">
            <Link
              href="/chat"
              className="block w-full bg-weland-green text-white text-center py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Chat with Expert
            </Link>
            <Link
              href="/recommendations"
              className="block w-full bg-weland-orange text-white text-center py-2 rounded-md hover:bg-amber-600 transition-colors"
            >
              Get Recommendations
            </Link>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-weland-green text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  )
}
