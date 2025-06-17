import React, { useRef, useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";

function Demo() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! Upload or type your podcast question, and I’ll summarize it for you." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [fileName, setFileName] = useState(null);
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    simulateBotReply(input);
  };

  const simulateBotReply = (userText) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `✅ Summary for: \"${userText}\"\nAI extracts key highlights and insights from your podcast.` }
      ]);
      setIsTyping(false);
    }, 2000);
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) return alert("Speech recognition not supported");
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };
    recognition.onend = () => setIsListening(false);
    recognition.start();
    setIsListening(true);
    recognitionRef.current = recognition;
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
    // Placeholder for actual backend upload
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 flex flex-col h-[90vh]">
        <div className="text-center p-4 border-b border-gray-700 text-red-400 text-xl font-bold">
          🎙️ PodAI Chatbot
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line shadow-md 
                ${msg.sender === "user" ? "bg-red-600 text-white" : "bg-gray-700 text-white"}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl animate-pulse text-sm">
                ⏳ Summarizing...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="border-t border-gray-700 p-3 flex gap-2 items-center">
          <label htmlFor="uploadFile" className="text-white text-xl cursor-pointer">
            <AiOutlineUpload />
          </label>
          <input id="uploadFile" type="file" onChange={handleFileUpload} className="hidden" />

          <button onClick={startListening} className={`text-white text-xl ${isListening ? 'animate-pulse' : ''}`}>
            <FaMicrophone />
          </button>

          <input
            type="text"
            placeholder="Ask about your podcast..."
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button onClick={sendMessage} className="text-red-500 text-xl hover:text-red-400">
            <FiSend />
          </button>
        </div>

        {fileName && (
          <div className="text-sm text-center text-gray-400 pb-2">📁 File uploaded: {fileName}</div>
        )}
      </div>
    </div>
  );
}

export default Demo;
