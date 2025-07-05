// Backend utility for audio transcription
import express from 'express';
import multer from 'multer';
import fetch from 'node-fetch';
const router = express.Router();
const upload = multer();

// Example: Use Deepgram API for speech-to-text (replace with your own API key)
const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;

router.post('/api/audio-transcript', upload.single('audio'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No audio file uploaded' });
  try {
    const response = await fetch('https://api.deepgram.com/v1/listen', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${DEEPGRAM_API_KEY}`,
        'Content-Type': req.file.mimetype,
      },
      body: req.file.buffer,
    });
    const data = await response.json();
    const transcript = data.results?.channels?.[0]?.alternatives?.[0]?.transcript || '';
    if (!transcript) throw new Error('No transcript found');
    res.json({ transcript });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
