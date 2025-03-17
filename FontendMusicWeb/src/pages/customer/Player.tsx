import { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { Play, Pause, SkipForward, SkipBack, Upload } from "lucide-react";
import UploadSong from "./Upload";

export default function Player() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5001/songs").then((response) => {
      setSongs(response.data);
    });
  }, []);

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

  if (songs.length === 0) return <p>Loading...</p>;
  const currentSong = songs[currentSongIndex];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-2xl w-96">
      
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
