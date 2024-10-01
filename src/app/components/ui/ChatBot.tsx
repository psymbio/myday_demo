"use client";
import { Key, useEffect, useRef, useState } from "react";
import scenarios from "../../data/chatbot2.json";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';

export default function ChatBot() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [runningScenario, setRunningScenario] = useState<number | null>(null); // Track the running scenario
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null); // Store the interval ID

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Rendering dynamic components based on type
  const renderComponent = (component: any) => {
    switch (component.type) {
      case "calendar":
        return (
          <div>
            {component.data.map(
              (
                day: {
                  day: string;
                  profiles: {
                    profile_picture: string;
                    first_name: string;
                    last_name: string;
                  }[];
                },
                i: Key
              ) => (
                <div key={i}>
                  <strong>{day.day}:</strong>
                  <div>
                    {day.profiles.map(
                      (
                        profile: {
                          profile_picture: string;
                          first_name: string;
                          last_name: string;
                        },
                        j: Key
                      ) => (
                        <img
                          key={j}
                          src={`/people/${profile.profile_picture}`}
                          alt={`${profile.first_name} ${profile.last_name}`}
                          title={`${profile.first_name} ${profile.last_name}`}
                          className="inline-block object-cover object-center rounded-full h-10 w-10"
                        />
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        );
      case "foodMenu":
        return (
          <div>
            {component.data.map(
              (
                item: {
                  id: number;
                  name: string;
                  cost: number;
                  glutenFree: boolean;
                },
                i: Key
              ) => (
                <div key={i}>
                  <strong>{item.name}</strong>: ${item.cost.toFixed(2)}
                </div>
              )
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const sendMessage = () => {
    if (input.trim()) {
      // Ensure each user message has a defined structure
      setMessages((prev) => [
        ...prev,
        { type: "user", content: input }, // User message
      ]);
      setInput(""); // Clear input after sending
    }
  };

  const playScenario = (scenarioId: number) => {
    const scenarioArray = scenarios.scenarios;

    if (Array.isArray(scenarioArray)) {
      const scenario = scenarioArray.find((s) => s.id === scenarioId);
      if (scenario) {
        // If a scenario is already running, clear it before starting a new one
        if (runningScenario !== null && intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
          setRunningScenario(null);
        }

        // Clear existing messages before playing the new scenario
        setMessages([]);
        setRunningScenario(scenarioId);

        let i = 0;
        const delay = 3500; // Delay between each message
        
        // Immediately show the first message without delay
        if (scenario.messages.length > 0) {
          const firstMessage = scenario.messages[0];
          if (firstMessage && firstMessage.type && firstMessage.content) {
            setMessages((prev) => [...prev, firstMessage]);
            i++; // Move to the next message
          }
        }

        intervalIdRef.current = setInterval(() => {
          if (i < scenario.messages.length) {
            // Ensure each message from scenario has a defined structure
            const message = scenario.messages[i];
            if (message && message.type && message.content) {
              setMessages((prev) => [...prev, message]);
              i++;
            } else {
              console.error("Invalid message structure in scenario");
              clearInterval(intervalIdRef.current as NodeJS.Timeout); // Stop if invalid structure
              setRunningScenario(null);
            }
          } else {
            clearInterval(intervalIdRef.current as NodeJS.Timeout);
            setRunningScenario(null);
          }
        }, delay);
      } else {
        console.error("Scenario not found");
      }
    } else {
      console.error("Scenarios is not an array");
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 ${isOpen ? 'z-[100]' : 'z-10'}`}>
      {isOpen && (
        <div className="w-[22rem] sm:w-[20rem] h-[35rem] sm:h-[28rem] bg-white border border-gray-300 shadow-md rounded-md flex flex-col p-4 -translate-y-14 z-[100]">
          {/* Header */}
          <div className="text-red-600 p-3 border-b border-gray-300 font-semibold text-lg">
            Chatbot
          </div>

          {/* Scenario Buttons */}
          <div className="flex gap-2 mt-2 mb-4">
            <button
              type="button"
              onClick={() => playScenario(1)} // Play the first scenario
              className="rounded-md p-2 text-sm text-white bg-red-600 hover:bg-red-700"
            >
              <GroupsRoundedIcon />
            </button>

            <button
              type="button"
              onClick={() => playScenario(2)} // Play the second scenario (Food menu)
              className="rounded-md p-2 text-sm text-white bg-green-600 hover:bg-green-700"
            >
              <FastfoodRoundedIcon />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto" ref={messageContainerRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-3 max-w-[75%] rounded-lg ${
                  message.type === "user"
                    ? "bg-gray-100 text-black ml-auto"
                    : "bg-red-50 text-black mr-auto"
                }`}
              >
                {message.content}
                {/* Render a component if present */}
                {message.component && renderComponent(message.component)}
                {message.url && (
                  <a
                    href={message.url.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    {message.url.text}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center border-t border-gray-300 mt-2 pt-2">
            <textarea
              id="ChatbotMessage"
              className="w-full resize-none border-gray-300 align-top focus:ring-0 overflow-y-auto text-sm rounded-md p-2 focus:border-gray-600"
              rows={1}
              placeholder="Ask your MyDay related query"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></textarea>

            <button
              type="button"
              onClick={sendMessage} // Send message
              className="ml-2 rounded-md p-2 text-white bg-red-600 hover:bg-red-700"
            >
              <SendRoundedIcon />
            </button>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-md shadow-md focus:outline-none z-[100]"
      >
        <ChatBubbleOutlineRoundedIcon />
      </button>
    </div>
  );
}
