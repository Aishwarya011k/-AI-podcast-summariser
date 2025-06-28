import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Check if API key is configured
if (!process.env.GEMINI_API_KEY) {
  console.error("⚠️ GEMINI_API_KEY is not set in .env file");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/", (req, res) => {
  res.send("✅ Backend is running. Use POST /api/summarize");
});

app.post("/api/summarize", async (req, res) => {
  const { transcript } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(
      `You are an expert podcast summarizer. Summarize the following transcript:\n\n${transcript}`
    );

    const text = result.response.text();
    res.json({ summary: text });
  } catch (error) {
    console.error("Error summarizing:", error.message);
    res.status(500).json({ error: "Failed to summarize" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
