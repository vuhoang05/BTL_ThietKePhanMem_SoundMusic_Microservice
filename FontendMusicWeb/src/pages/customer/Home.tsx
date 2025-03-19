import { useState, useEffect, useRef } from "react";
import axios from "axios";
import SongItem from "./SongItem";
import { ISong } from "../../type";
import Player from "./Player";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home: React.FC = () => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/songs")
      .then((response) => setSongs(response.data))
      .catch((error) => console.error("Lỗi lấy danh sách bài hát:", error));
  }, []);

  const handleTogglePlay = (index: number) => {
    if (currentSongIndex === index) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  return (

    <>
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-white">Đề xuất cho bạn</h1>

        <div className="relative">
          <button
            onClick={() => scrollRef.current && (scrollRef.current.scrollLeft -= 300)}
            className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 rounded-full shadow-lg text-white hover:bg-opacity-75 transition hidden md:flex"
          >
            <ChevronLeft size={30} />
          </button>

          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide flex space-x-4 flex-nowrap p-2">
            {songs.map((song, index) => (
              <SongItem
                key={song._id}
                song={song}
                isPlaying={currentSongIndex === index && isPlaying}
                onTogglePlay={() => handleTogglePlay(index)}
              />
            ))}
          </div>

          <button
            onClick={() => scrollRef.current && (scrollRef.current.scrollLeft += 300)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 rounded-full shadow-lg text-white hover:bg-opacity-75 transition hidden md:flex"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {songs.length > 0 && (
          <Player
            song={songs[currentSongIndex]}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onNext={handleNextSong}
            onPrev={handlePrevSong}
          />
        )}
      </div>
    </div>
  <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-white">Hot hit</h1>
            <div ref={scrollRef} className="overflow-x-auto scrollbar-hide flex space-x-4 flex-nowrap p-2">
              {songs.map((song, index) => (
                <SongItem
                  key={song._id}
                  song={song}
                  isPlaying={currentSongIndex === index && isPlaying}
                  onTogglePlay={() => handleTogglePlay(index)}
                />
              ))}
            </div>
          {songs.length > 0 && (
            <Player
              song={songs[currentSongIndex]}
              isPlaying={isPlaying}
              onTogglePlay={() => setIsPlaying(!isPlaying)}
              onNext={handleNextSong}
              onPrev={handlePrevSong}
            />
          )}
        </div>
    
    </>
  );
};

export default Home;
