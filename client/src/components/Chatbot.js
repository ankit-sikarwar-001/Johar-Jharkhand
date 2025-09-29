// Chatbot.jsx
import React, { useState } from "react";

// Categorized FAQ
const faqCategories = [
  {
    category: "Nature & Tourist Spots",
    faqs: [
      {
        question: "What are the must-visit waterfalls in Jharkhand?",
        answer:
          "Some popular waterfalls include Hundru Falls, Jonha Falls, Dassam Falls, and Hirni Falls. Best visited during or just after monsoon.",
      },
      {
        question: "Which national parks can I explore for wildlife?",
        answer:
          "Betla National Park, Palamu Tiger Reserve, and Hazaribagh Wildlife Sanctuary offer tigers, elephants, and leopards.",
      },
      {
        question: "Are there any eco-tourism villages to visit?",
        answer:
          "Yes, villages around Netarhat and Patratu Valley offer eco-friendly homestays and sustainable tourism experiences.",
      },
    ],
  },
  {
    category: "Travel & Transportation",
    faqs: [
      {
        question: "How can I travel within Jharkhand?",
        answer:
          "Jharkhand is accessible by air, rail, and road. Local buses, taxis, and private vehicles are common options.",
      },
      {
        question: "Are local buses and taxis safe for tourists?",
        answer:
          "Yes, generally safe. Prefer registered taxis or prepaid cabs. Local buses are economical but check schedules in advance.",
      },
    ],
  },
  {
    category: "Culture & Festivals",
    faqs: [
      {
        question: "Which tribal festivals are worth attending?",
        answer:
          "Sohrai, Sarhul, Karma, and Karam festivals showcase music, dance, and rituals.",
      },
      {
        question: "Can I experience traditional tribal dances or music?",
        answer:
          "Yes! Festivals and cultural centers organize performances, especially during Sarhul and Sohrai.",
      },
    ],
  },
  {
    category: "Food & Cuisine",
    faqs: [
      {
        question: "Which local dishes are a must-try?",
        answer:
          "Handia (rice beer), Rugra (wild mushrooms), Thekua, Dhuska, Pitha, Chilka Roti, and festival sweets.",
      },
    ],
  },
  {
    category: "Shopping & Handicrafts",
    faqs: [
      {
        question: "Where can I buy tribal handicrafts and jewelry?",
        answer:
          "Ranchi Haat, Khadi Bhandar, and local village fairs for bamboo works, dokra art, and jewelry.",
      },
    ],
  },
  {
    category: "Accommodation & Services",
    faqs: [
      {
        question: "Are there eco-friendly homestays or lodges?",
        answer:
          "Yes, eco-friendly homestays are available in Netarhat, Patratu, and other eco-tourism villages.",
      },
    ],
  },
  {
    category: "Safety & Tips",
    faqs: [
      {
        question: "Is Jharkhand safe for solo travelers?",
        answer:
          "Yes, but exercise general safety precautions. Avoid remote areas after dark.",
      },
    ],
  },
  {
    category: "Miscellaneous",
    faqs: [
      {
        question: "Can I get maps and AR/VR previews of tourist spots?",
        answer:
          "Yes, some eco-tourism websites and apps provide interactive maps and AR/VR previews.",
      },
    ],
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (cat) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const addBotReply = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuestionClick = (q, a) => {
    setMessages((prev) => [...prev, { sender: "user", text: q }]);
    addBotReply(a);
  };

  const handleSearch = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const allFAQs = faqCategories.flatMap((cat) => cat.faqs);
    const match = allFAQs.find((f) =>
      f.question.toLowerCase().includes(input.toLowerCase())
    );

    const botReply = match
      ? match.answer
      : "Sorry 😔, I don’t have info on that. Try asking about places, food, handicrafts, or travel.";

    setInput("");
    addBotReply(botReply);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-xl transition-transform transform hover:scale-110"
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed z-50 bottom-20 right-5 w-80 sm:w-96 max-h-[80vh] bg-gradient-to-b from-green-50 to-white border border-green-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-3 text-lg font-semibold flex items-center gap-2">
            <span className="bg-white text-green-600 w-7 h-7 flex items-center justify-center rounded-full font-bold">
              🟢
            </span>
            Jharkhand Tourism Bot
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-white">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center italic">
                👋 Hi! Ask me about Jharkhand tourism.
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold">
                    🤖
                  </div>
                )}
                <div
                  className={`p-2 rounded-lg max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-green-100 text-green-900"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                    👤
                  </div>
                )}
              </div>
            ))}

            {/* Typing animation */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold">
                  🤖
                </div>
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg flex gap-1">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce delay-150">●</span>
                  <span className="animate-bounce delay-300">●</span>
                </div>
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="flex items-center border-t bg-green-50 px-2 py-2">
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleSearch}
              className="ml-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              ➤
            </button>
          </div>

          {/* Categorized FAQ Buttons */}
          <div className="border-t p-2 flex flex-col gap-2 bg-white max-h-48 overflow-y-auto">
            {faqCategories.map((cat, idx) => (
              <div key={idx}>
                <button
                  onClick={() => toggleCategory(cat.category)}
                  className="w-full text-left bg-green-100 border border-green-300 px-2 py-1 rounded-lg hover:bg-green-200 font-semibold transition"
                >
                  {cat.category}
                </button>
                {expandedCategories[cat.category] &&
                  cat.faqs.map((item, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        handleQuestionClick(item.question, item.answer)
                      }
                      className="ml-4 mt-1 w-[95%] text-left bg-green-50 border border-green-200 px-2 py-1 rounded hover:bg-green-100 text-xs transition"
                    >
                      {item.question}
                    </button>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
