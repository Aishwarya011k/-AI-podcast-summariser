import React from "react";

function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50 font-sans">
      {/* Header */}
      <header className="text-center py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Revolutionizing Podcast Summarization with AI</h1>
        <p className="text-lg md:text-xl">Turning hours of conversation into minutes of insights ✨</p>
      </header>

      {/* Section 1 */}
      <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-24 py-20 gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Podcast Summarization?</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Podcasts are rich with knowledge, but time-consuming to consume. Our AI Podcast Summarizer transforms long podcasts into brief, actionable summaries that you can digest in minutes — helping you stay informed and save time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're a creator, student, professional, or casual listener, AI Podcast Summarizer empowers you to get to the heart of any conversation instantly.
          </p>
        </div>
        <div className="md:w-1/2 h-1/6">
          <img
            className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            src="/assests/podcast1.svg"
            alt="Podcast Illustration"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col md:flex-row items-center px-6 md:px-24 py-20 gap-10 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="md:w-1/2">
          <img
            className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            src="/assests/podcast3.png"
            alt="AI Voice Analysis"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of AI</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Powered by advanced models like Gemini 1.5 Pro and Vertex AI, our system intelligently transcribes, summarizes, extracts highlights, and identifies key insights from both audio and video formats.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            No matter the accent, speaker, or background noise — our AI handles it all, delivering professional-grade summaries every time.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-24 py-20 gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Built For Everyone</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            🎙 Podcasters - Auto-generate show notes & highlights  
            📚 Students - Summarize lectures instantly  
            👔 Professionals - Turn meetings into action items  
            📰 Content Creators - Extract viral clips & quotes
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe information should be accessible, digestible, and actionable for everyone — and AI makes that possible.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            src="https://undraw.io/assets/undraw_time_management.svg"
            alt="Time Saving"
          />
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience The Future of Summarization</h2>
        <p className="text-lg md:text-xl mb-10">Let AI turn hours of conversation into minutes of insights.</p>
        <button className="bg-white text-pink-500 font-bold text-lg px-8 py-4 rounded-full hover:scale-110 transition-all duration-300">
          Try Now
        </button>
      </div>
    </div>
  );
}

export default Blog;
