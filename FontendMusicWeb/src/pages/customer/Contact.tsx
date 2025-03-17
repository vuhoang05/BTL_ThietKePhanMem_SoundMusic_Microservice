import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import UploadSong from "./Upload";

const songs = [
  {
    id: 1,
    title: "Lofi Chill",
    artist: "Unknown",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://i.pinimg.com/originals/e5/d5/11/e5d511c5e8beec6292faa403282ad6ee.jpg",
  },
  {
    id: 2,
    title: "Relaxing Piano",
    artist: "Unknown",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://source.unsplash.com/200x200/?piano",
  },
  {
    id: 3,
    title: "Acoustic Guitar",
    artist: "Unknown",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://source.unsplash.com/200x200/?guitar",
  },
];

export default function Contact() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = songs[currentSongIndex];

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  return (

        <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-2xl w-96">
          <UploadSong/>
        <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-48 h-48 rounded-lg shadow-lg"
        />
        <h2 className="text-xl font-semibold mt-4">{currentSong.title}</h2>
        <p className="text-gray-400">{currentSong.artist}</p>

        <div className="flex items-center space-x-4 mt-4">
            <button onClick={handlePrev} className="p-2 bg-gray-700 rounded-full">
            <SkipBack size={24} />
            </button>
            <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 bg-blue-500 text-white rounded-full"
            >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>
            <button onClick={handleNext} className="p-2 bg-gray-700 rounded-full">
            <SkipForward size={24} />
            </button>
        </div>

        <ReactAudioPlayer
            src={currentSong.src}
            autoPlay={isPlaying}
            controls={false}
            onEnded={handleNext}
        />
        </div>
 
  );
}
