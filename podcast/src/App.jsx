import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PodcastLibrary from "./pages/PodcastLibrary";
import Demo from "./pages/Demo";

function App() {
  return (
    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/teams" element={<PodcastLibrary />} />
               <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    
  );
}

export default App;



