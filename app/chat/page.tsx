import WelandChat from "@/components/weland-chat"

export default function ChatPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Weland Chat</h1>
      <div className="max-w-2xl mx-auto">
        <WelandChat />
      </div>
    </div>
  )
}
