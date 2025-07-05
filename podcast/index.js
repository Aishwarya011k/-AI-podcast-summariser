import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI("AIzaSyCAT68T0NK5ZUuUc9nEi50YL6T7x0WbO1I");

export const summarizePodcast = async (transcript) => {
  if (!transcript || transcript.trim().length === 0) {
    return "⚠️ Please provide some text to summarize.";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are an expert podcast summarizer. Create a concise yet informative summary of the following podcast transcript:\n\n${transcript}`;
    
    const result = await model.generateContent(prompt);
    const summary = result.response.text();
    
    return summary || "⚠️ No summary generated.";
  } catch (error) {
    console.error("Summarization error:", error);
    if (error.message.includes("API key")) {
      return "⚠️ Invalid API key. Please check your Gemini API configuration.";
    }
    return `⚠️ Error: ${error.message}`;
  }
};
