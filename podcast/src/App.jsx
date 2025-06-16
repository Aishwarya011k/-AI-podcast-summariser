import React from "react";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex justify-center items-center text-white font-bold">🎙</div>
          <span className="font-bold color-black; text-xl">PODCAST SUMMARIZER</span>
        </div>
        <div className="space-x-6 font-semibold text-gray-600">
          <a href="#">BLOG</a>
          <a href="#" className="px-3 py-1 bg-gray-300 rounded-full text-black">DEMO</a>
          <a href="#">TEAM</a>
          <a href="#">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-24 py-16 bg-gradient-to-b from-white to-blue-50">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">AI Podcast Summarizer</h1>
          <p className="text-gray-600 mb-6">
            Upload your podcast audio and get instant summaries, highlights, and key insights powered by AI.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
            Get Started
          </button>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="/assests/podcast.svg" alt="Podcast Illustration" className="w-full" />

        </div>
      </div>
    </div>
  );
}

export default App;


