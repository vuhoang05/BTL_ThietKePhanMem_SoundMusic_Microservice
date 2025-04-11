import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SongItem from "./SongItem";
import Player from "./Player";
import { ISong } from "../../types/Song";
import { getSongs } from "../../api/song.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faHeart } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const getSong = async () => {
    const data = await getSongs();
    setSongs(data);
  };

  useEffect(() => {
    getSong();
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
    <div className="flex h-screen overflow-hidden bg-black text-white">
      {/* Nội dung chính, có scroll riêng */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Đề xuất cho bạn</h1>
          <div className="relative">
            <button
              onClick={() => scrollRef.current && (scrollRef.current.scrollLeft -= 300)}
              className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition hidden md:flex"
              title="Back"
            >
              <ChevronLeft size={30} />
            </button>
            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide flex space-x-4 flex-nowrap p-2"
            >
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
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition hidden md:flex"
              title="Next"
            >
              <ChevronRight size={30} />
            </button>
          </div>
          <h1 className="text-2xl font-bold mb-4">Hot hit</h1>
          <div className="relative">
            <button
              onClick={() => scrollRef.current && (scrollRef.current.scrollLeft -= 300)}
              className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition hidden md:flex"
              title="Back"
            >
              <ChevronLeft size={30} />
            </button>
            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide flex space-x-4 flex-nowrap p-2"
            >
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
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition hidden md:flex"
              title="Next"
            >
              <ChevronRight size={30} />
            </button>
          </div>

        </div>

        {/* Player nằm dưới cùng */}
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

      {/* Sidebar cố định bên phải */}
      {songs.length > 0 && (
          <div className="w-[350px] bg-gradient-to-b from-[#1e1e1e] to-black border-l border-gray-700 p-6 text-white shrink-0 hidden lg:flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🎧</span>
                <h2 className="text-lg font-semibold">Đang phát</h2>
              </div>
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">Now</span>
            </div>

            <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                src={songs[currentSongIndex]?.cover}
                alt={songs[currentSongIndex]?.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="space-y-1 mb-4">
              <h3 className="text-xl font-bold truncate">{songs[currentSongIndex]?.title}</h3>
              <p className="text-xl text-gray-400">{songs[currentSongIndex]?.artist || "Không rõ nghệ sĩ"}</p>
              <p className="text-sm text-gray-500">Phát từ danh sách đề xuất</p>
            </div>
            <div className="flex items-center justify-between mb-4">
      <button
        title="Yêu thích"
        className="flex items-center gap-2 text-gray-300 hover:text-pink-500 transition text-pink-500"
        onClick={() => alert("Đã thêm vào yêu thích! ❤️")}
      >
        <FontAwesomeIcon icon={faHeart}/>
        <span className="text-sm">Yêu thích</span>
      </button>

      <button
        title="Thêm vào Playlist"
        className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
        onClick={() => alert("Đã thêm vào playlist! ➕")}
      >
        <FontAwesomeIcon icon={faAdd}/>
        <span className="text-sm">Playlist</span>
      </button>
    </div>
            <div className="mt-3 mb-4 text-sm text-gray-300">
              <p className="mb-1">✨ <span className="text-white font-semibold">Thể loại:</span> Lofi Chill</p>
              <p className="mb-1">💬 <span className="text-white font-semibold">Tâm trạng:</span> Thư giãn, sâu lắng</p>
              <p className="mb-1">📖 <span className="text-white font-semibold">Giới thiệu:</span> Một bản nhạc nhẹ nhàng giúp bạn tập trung hoặc thư giãn sau ngày dài.</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default Home;
