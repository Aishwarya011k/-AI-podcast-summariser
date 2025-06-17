import React, { useState } from "react";

function Demo() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSummary("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    // Simulate summary generation (replace with actual API later)
    setTimeout(() => {
      setSummary("🎉 This is your AI-generated podcast summary. It will appear here when integrated with Gemini/OpenAI!");
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen  min-w-screen bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Try It Out</h1>
        <p className="mb-6 text-gray-300">Upload your podcast (audio or video) and get a smart AI summary instantly!</p>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg space-y-4">
          <input 
            type="file" 
            accept="audio/*,video/*" 
            onChange={handleFileChange} 
            className="w-full bg-gray-700 p-3 rounded" 
          />
          <button 
            type="submit" 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold"
          >
            Summarize
          </button>
        </form>

        {loading && <p className="mt-6 text-yellow-400">⏳ Processing your file...</p>}
        {summary && (
          <div className="mt-8 bg-gray-700 p-6 rounded-lg text-left text-green-300 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Summary:</h3>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Demo;
