import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex justify-center items-center text-white font-bold">🎙</div>
          <span className="font-bold text-black text-xl">PODCAST SUMMARIZER</span>
        </div>
        <div className="hidden md:flex space-x-6 font-semibold text-gray-600">
          <a href="#" className="hover:text-pink-500 transition">BLOG</a>
             <a href="#" className="hover:text-pink-500 transition">DEMO</a>
          <a href="#" className="hover:text-pink-500 transition">TEAM</a>
          <a href="#" className="hover:text-pink-500 transition">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-b from-white to-blue-100">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Podcast Summarizer
          </h1>
          <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
            Upload your podcast audio or video and get instant summaries, highlights, and key insights powered by advanced AI.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        {/* Right Illustration */}
        <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="/assests/podcast.svg" alt="Podcast Illustration" className="w-full" />

        </div>
      </div>

      {/* About Section */}
      <div className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg max-w-5xl mx-auto transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About AI Podcast Summarizer
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
            AI Podcast Summarizer is a powerful AI-driven platform designed to automatically analyze your podcasts, interviews, or meetings — whether in audio or video format.
            Using cutting-edge models like Gemini 1.5 and Vertex AI, the app transcribes your files, generates concise summaries, extracts highlights, identifies key questions, and presents actionable insights.
            Save time, boost productivity, and instantly capture the essence of every conversation — all powered by advanced AI technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;



