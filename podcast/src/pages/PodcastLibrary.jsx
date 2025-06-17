import React from 'react';

function PodcastLibrary() {
  const trendingPodcasts = [
    {
      id: 1,
      title: "The AI Dilemma - Lex Fridman",
      description: "Lex Fridman discusses the dangers and promises of AI.",
      videoUrl: "https://www.youtube.com/embed/CKvHJ60eCBE",
    },
    {
      id: 2,
      title: "The Joe Rogan Experience #1368 - Elon Musk",
      description: "Elon Musk talks about AI, Neuralink, and humanity's future.",
      videoUrl: "https://www.youtube.com/embed/ycPr5-27vSI",
    },
  ];

  const audioPodcasts = [
    {
      id: 1,
      title: "DeepMind and the race to AGI",
      description: "The latest breakthroughs in reinforcement learning.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "AI in Healthcare",
      description: "How artificial intelligence is changing medicine.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-5">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 mb-16 text-center tracking-wide animate-pulse">🎙 Podcast Library</h1>

      {/* Trending Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-red-500 pl-4">🔥 Trending Video Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trendingPodcasts.map(podcast => (
            <div key={podcast.id} className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition duration-300">
              <div className="overflow-hidden rounded-xl mb-4">
                <iframe 
                  className="rounded-xl w-full h-60"
                  src={podcast.videoUrl}
                  title={podcast.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-2xl font-bold text-pink-400 mb-2">{podcast.title}</h3>
              <p className="text-gray-400">{podcast.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audio Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-red-500 pl-4">🎧 Trending Audio Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {audioPodcasts.map(audio => (
            <div key={audio.id} className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">{audio.title}</h3>
              <p className="text-gray-400 mb-4">{audio.description}</p>
              <audio controls className="w-full rounded-lg">
                <source src={audio.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PodcastLibrary;
