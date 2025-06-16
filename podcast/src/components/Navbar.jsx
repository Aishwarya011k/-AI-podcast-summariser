import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-pink-500 rounded-full flex justify-center items-center text-white font-bold">🎙</div>
        <span className="font-bold text-black text-xl">PODCAST SUMMARIZER</span>
      </div>
      <div className="hidden md:flex space-x-6 font-semibold text-gray-600">
        <Link to="/" className="hover:text-pink-500 transition">HOME</Link>
        <Link to="/blog" className="hover:text-pink-500 transition">BLOG</Link>
        <a href="#" className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition">DEMO</a>
        <a href="#" className="hover:text-pink-500 transition">TEAM</a>
        <a href="#" className="hover:text-pink-500 transition">CONTACT</a>
      </div>
    </nav>
  );
}

export default Navbar;
