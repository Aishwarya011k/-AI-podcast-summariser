import React, { useRef, useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { summarizePodcast } from "../api/gemini";
import axios from "axios";

function Demo() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! Upload, speak, or paste your podcast transcript or query. I’ll summarize it for you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [showTranscript, setShowTranscript] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);

    const summary = await summarizePodcast(input);
    setMessages((prev) => [...prev, { sender: "bot", text: summary }]);
    setIsTyping(false);
  };

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in your browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setInput(spokenText);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
    setIsListening(true);
    recognitionRef.current = recognition;
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);

      if (file.type === "text/plain") {
        const text = await file.text();
        setTranscript(text);
        setInput(text);
        setShowTranscript(true);
      } else {
        alert("Only .txt files are supported.");
      }
    }
  };

  // Handle YouTube link transcript fetch
  const handleYoutubeTranscript = async () => {
    if (!youtubeUrl.trim()) return;
    setIsTyping(true);
    try {
      const res = await axios.post("http://localhost:5000/api/youtube-transcript", { url: youtubeUrl });
      setTranscript(res.data.transcript);
      setInput(res.data.transcript);
      setShowTranscript(true);
      setMessages((prev) => [...prev, { sender: "bot", text: "Transcript fetched from YouTube!" }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Failed to fetch YouTube transcript." }]);
    }
    setIsTyping(false);
  };

  // Handle audio file transcript fetch
  const handleAudioTranscript = async () => {
    if (!audioFile) return;
    setIsTyping(true);
    try {
      const formData = new FormData();
      formData.append("audio", audioFile);
      const res = await axios.post("http://localhost:5000/api/audio-transcript", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTranscript(res.data.transcript);
      setInput(res.data.transcript);
      setShowTranscript(true);
      setMessages((prev) => [...prev, { sender: "bot", text: "Transcript fetched from audio!" }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Failed to transcribe audio." }]);
    }
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 flex flex-col h-[90vh]">
        <div className="text-center p-4 border-b border-gray-700 text-red-400 text-xl font-bold">
          🎙️ PodAI Chatbot
        </div>

        {/* New: YouTube and Audio Inputs */}
        <div className="flex flex-col md:flex-row gap-2 p-4 border-b border-gray-700">
          <input
            type="text"
            placeholder="Paste YouTube link..."
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
          <button
            onClick={handleYoutubeTranscript}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500"
          >
            Get YouTube Transcript
          </button>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudioFile(e.target.files[0])}
            className="hidden"
            id="audio-upload"
          />
          <label
            htmlFor="audio-upload"
            className="bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-500"
          >
            Upload Audio
          </label>
          <button
            onClick={handleAudioTranscript}
            className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-600"
          >
            Get Audio Transcript
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line shadow-md 
                ${
                  msg.sender === "user"
                    ? "bg-red-600 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
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

        <div className="border-t border-gray-700">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="w-full p-2 flex items-center justify-center text-gray-400 hover:text-white"
          >
            {showTranscript ? (
              <>
                Hide Transcript <MdExpandLess className="ml-1" />
              </>
            ) : (
              <>
                Show Transcript <MdExpandMore className="ml-1" />
              </>
            )}
          </button>
          {showTranscript && (
            <div className="p-4 bg-gray-900/50 max-h-48 overflow-y-auto">
              {transcript ? (
                <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                  {transcript}
                </pre>
              ) : (
                <p className="text-gray-400 text-center">
                  No transcript available yet. Upload a file or paste text.
                </p>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-gray-700 p-3 flex gap-2 items-center">
          <label htmlFor="uploadFile" className="text-white text-xl cursor-pointer">
            <AiOutlineUpload />
          </label>
          <input
            id="uploadFile"
            type="file"
            onChange={handleFileUpload}
            className="hidden"
          />

          <button
            onClick={startListening}
            className={`text-white text-xl ${isListening ? "animate-pulse" : ""}`}
          >
            <FaMicrophone />
          </button>

          <input
            type="text"
            placeholder="Paste transcript or ask a question..."
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="text-red-500 text-xl hover:text-red-400"
          >
            <FiSend />
          </button>
        </div>

        {fileName && (
          <div className="text-sm text-center text-gray-400 pb-2">
            📁 File uploaded: {fileName}
          </div>
        )}
      </div>
    </div>
  );
}

export default Demo;

