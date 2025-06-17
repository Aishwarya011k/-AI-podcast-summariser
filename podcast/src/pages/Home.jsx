import React from "react";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen  min-w-screen bg-gradient-to-b from-white via-blue-50 to-purple-50 font-sans">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-b from-white to-blue-100">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Brief Cast: AI Podcast Summariser
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
      <Footer />
    </div>
  );
}

export default Home;
