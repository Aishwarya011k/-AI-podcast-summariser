// Backend utility for fetching YouTube transcript
import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY;

router.post('/api/youtube-transcript', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'No YouTube URL provided' });
  try {
    // AssemblyAI: Submit YouTube URL for transcription
    const transcriptRes = await fetch('https://api.assemblyai.com/v2/transcript', {
      method: 'POST',
      headers: {
        'authorization': ASSEMBLYAI_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        audio_url: url
      })
    });
    const transcriptData = await transcriptRes.json();
    if (!transcriptData.id) {
      console.error('AssemblyAI submission error:', transcriptData);
      throw new Error(transcriptData.error || 'Failed to submit YouTube URL to AssemblyAI');
    }

    // Poll for transcript completion
    let status = transcriptData.status;
    let transcriptText = '';
    let pollRes, pollData;
    let pollCount = 0;
    while (status !== 'completed' && status !== 'failed' && pollCount < 30) { // up to 2 minutes
      await new Promise(r => setTimeout(r, 4000));
      pollRes = await fetch(`https://api.assemblyai.com/v2/transcript/${transcriptData.id}`, {
        headers: { 'authorization': ASSEMBLYAI_API_KEY }
      });
      pollData = await pollRes.json();
      status = pollData.status;
      pollCount++;
      if (pollData.error) {
        console.error('AssemblyAI polling error:', pollData);
        throw new Error(pollData.error);
      }
    }
    if (status === 'completed') {
      transcriptText = pollData.text;
      res.json({ transcript: transcriptText });
    } else if (status === 'failed') {
      console.error('AssemblyAI failed:', pollData);
      throw new Error(pollData.error || 'AssemblyAI failed to transcribe YouTube audio');
    } else {
      throw new Error('AssemblyAI timed out waiting for transcript. Try a shorter video.');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
