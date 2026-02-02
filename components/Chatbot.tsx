"use client";

import { useState } from "react";

const FAQ_RESPONSES: Record<string, string> = {
  location:
    "Villa Omaly is located near Rancamaya Golf Estate, just minutes from Bogor City.",
  facilities:
    "We offer private rooms, a communal hall, swimming pool, and outdoor entertainment areas.",
  booking:
    "You can contact us via the Contact page or WhatsApp to check availability and pricing.",
  default:
    "I can help with location, facilities, or booking information 😊",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "bot" | "user"; text: string }[]
  >([
    {
      sender: "bot",
      text: "Hi! 👋 I'm the Villa Omaly assistant. How can I help you?",
    },
  ]);

  function sendMessage(text: string) {
    const key = text.toLowerCase();

    let reply = FAQ_RESPONSES.default;
    if (key.includes("where") || key.includes("location"))
      reply = FAQ_RESPONSES.location;
    if (key.includes("facility") || key.includes("room"))
      reply = FAQ_RESPONSES.facilities;
    if (key.includes("book") || key.includes("price"))
      reply = FAQ_RESPONSES.booking;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
      { sender: "bot", text: reply },
    ]);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 p-4 text-white shadow-lg hover:bg-green-700"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-xl bg-white shadow-xl">
          <div className="rounded-t-xl bg-green-700 p-4 text-white font-semibold">
            Villa Omaly Assistant
          </div>

          <div className="h-64 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-gray-700"
                    : "ml-auto bg-green-600 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t p-3">
            <input
              type="text"
              placeholder="Ask about location, facilities..."
              className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                  sendMessage(e.currentTarget.value);
                  e.currentTarget.value = "";
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
