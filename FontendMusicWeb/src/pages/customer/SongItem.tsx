import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import { ISong } from "../../types/Song";

interface SongItemProps {
  song: ISong;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const SongItem: React.FC<SongItemProps> = ({ song, onTogglePlay, isPlaying }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-900 rounded-lg shadow-lg text-white cursor-pointer hover:bg-gray-800 transition-all duration-300 min-w-[180px] w-44"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onTogglePlay}
    >
      {/* Ảnh bài hát */}
      <div className="relative">
        <img src={song.cover} alt={song.title} className="w-full h-44 object-cover rounded-md" />

        {/* Nút Play/Pause hiển thị khi hover */}
        {hovered && (
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-300 text-black p-3 rounded-full shadow-lg">
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </div>
          </button>
        )}
      </div>

      {/* Thông tin bài hát */}
      <h2 className="text-lg font-semibold mt-2 mx-2 mb-2">{song.title}</h2>
      <p className="text-gray-400 mx-2 mb-4">{song.artist}</p>
    </div>
  );
};

export default SongItem;
