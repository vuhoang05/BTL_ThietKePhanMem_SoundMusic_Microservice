import React, { useRef, useEffect, useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Shuffle, Volume2 } from "lucide-react";
import { ISong } from "../../type";

interface PlayerProps {
  song: ISong;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Player: React.FC<PlayerProps> = ({ song, isPlaying, onTogglePlay, onNext, onPrev }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = volume;

      const updateTime = () => setCurrentTime(audio.currentTime);
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [song, volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = song.src;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [song]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(e.target.value);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between z-50">
      <div className="flex items-center space-x-4 w-1/4">
        <img src={song.cover} alt={song.title} className="w-12 h-12 rounded-md" />
        <div>
          <h2 className="text-lg">{song.title}</h2>
          <p className="text-gray-400">{song.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-2/4">
        <div className="flex items-center space-x-4 mb-2">
          <button className="text-gray-400 hover:text-white">
            <Shuffle size={20} />
          </button>
          <button onClick={onPrev} className="text-gray-400 hover:text-white">
            <SkipBack size={28} />
          </button>
          <button onClick={onTogglePlay} className="p-4 bg-white text-black rounded-full hover:bg-gray-300">
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <button onClick={onNext} className="text-gray-400 hover:text-white">
            <SkipForward size={28} />
          </button>
        </div>

        <div className="flex items-center w-full space-x-4">
          <span className="text-sm text-gray-400">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-400">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 w-1/4 justify-end">
        <Volume2 size={20} className="text-gray-400" />
        <input
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolumeChange}
          className="w-24 h-1 bg-gray-600 rounded-lg cursor-pointer"
        />
      </div>

      <audio ref={audioRef} src={song.src} />
    </div>
  );
};

export default Player;