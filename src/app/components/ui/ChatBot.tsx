"use client"; // Add this line to make the component a Client Component

import { useState } from "react";
import FeatherIcon from "feather-icons-react";

// Define the type for each message
interface Message {
  type: "user" | "bot"; // Message can be from 'user' or 'bot'
  text: string; // Text content of the message
}

export default function ChatBot() {
  // State to store the messages with the correct type
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      // Add the user message
      const newMessages: Message[] = [
        ...messages,
        { type: "user", text: input }, // User message
        { type: "bot", text: "Hello" }, // Static bot response
      ];
      setMessages(newMessages);
      setInput(""); // Clear input
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col p-3 -translate-y-14">
          {/* Header */}
          <div className="text-black p-3 rounded-t-lg font-bold">Chatbot</div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg max-w-lg break-words ${
                  message.type === "user" ? "bg-gray-100 self-end" : "text-left"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <div className="flex items-start">
              <textarea
                id="ChatbotMessage"
                className="w-full resize-none border-none align-top focus:ring-0 overflow-y-auto text-sm"
                style={{ maxHeight: "6rem" }} // 3 rows, adjust for your line height
                rows="1"
                placeholder="Ask your MyDay related query"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>

              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim()} // Disable button if input is empty or only contains whitespace
                className={`ml-2 mt-auto rounded p-2 text-sm text-white ${
                  !input.trim() ? "bg-gray-400" : "bg-black hover:bg-rose-600"
                }`}
              >
                <FeatherIcon icon="arrow-up" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 bg-rose-600 text-white p-3 rounded-md shadow-lg focus:outline-none"
      >
        <FeatherIcon icon={isOpen ? "x" : "message-square"} />
      </button>
    </div>
  );
}
