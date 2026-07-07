import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm Smart Bharat AI. Ask me about government services, schemes, or required documents."
    }
  ]);

  const handleSend = () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question
    };

    const botMessage = {
      sender: "bot",
      text:
        "Thank you for your question. This is a demo AI response. You can integrate Gemini or OpenAI API here to provide real-time answers."
    };

    setMessages([...messages, userMessage, botMessage]);
    setQuestion("");
  };

  return (
    <section
      id="assistant"
      className="py-20 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          AI Civic Assistant
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Ask questions about government services, documents and schemes.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <div className="h-96 overflow-y-auto space-y-4 mb-6">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-lg p-4 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.sender === "bot" ? (
                    <Bot size={20} />
                  ) : (
                    <User size={20} />
                  )}

                  <p>{msg.text}</p>
                </div>
              </div>
            ))}

          </div>

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Ask your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 border rounded-xl px-4 py-3 outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-blue-700 text-white px-6 rounded-xl hover:bg-blue-800 transition"
            >
              <Send />
            </button>

          </div>

          <div className="mt-6 flex flex-wrap gap-3">

            <button
              onClick={() =>
                setQuestion("How do I apply for a passport?")
              }
              className="bg-blue-100 px-4 py-2 rounded-full"
            >
              Passport
            </button>

            <button
              onClick={() =>
                setQuestion("Required documents for Aadhaar?")
              }
              className="bg-blue-100 px-4 py-2 rounded-full"
            >
              Aadhaar
            </button>

            <button
              onClick={() =>
                setQuestion("Government schemes for students")
              }
              className="bg-blue-100 px-4 py-2 rounded-full"
            >
              Student Schemes
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Chatbot;