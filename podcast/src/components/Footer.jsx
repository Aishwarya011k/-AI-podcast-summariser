import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left Section */}
        <div className="mb-5 md:mb-0">
          <h1 className="text-2xl font-bold text-red-500 mb-2">🎙PodSnap AI</h1>
          <p className="text-sm text-gray-400">Transform your podcasts into powerful summaries and highlights using AI. Audio or video — we got you covered.</p>
        </div>

        {/* Center Links */}
        <div className="flex space-x-6 mb-5 md:mb-0">
          <a href="/" className="hover:text-red-400 transition">Home</a>
          <a href="/blog" className="hover:text-red-400 transition">Blog</a>
          <a href="/teams" className="hover:text-red-400 transition">PODCAST</a>
          <a href="/contact" className="hover:text-red-400 transition">Contact</a>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a href="#" className="hover:text-red-400 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-red-400 transition"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-red-400 transition"><i className="fab fa-github"></i></a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-5">
        © 2025 Podcast Summarizer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
