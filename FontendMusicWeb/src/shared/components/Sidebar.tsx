import React from "react";
import { Plus } from "lucide-react";

const playlists = [
  { name: "EDM Sampling", cover: "https://th.bing.com/th/id/OIP._xxqbbOVibbWwURMMbBtcwHaEo?rs=1&pid=ImgDetMain" },
  { name: "Cute Circus", cover: "https://th.bing.com/th/id/OIP.nXYU6Qp1sqDMsv7KMGIU_AHaHa?rs=1&pid=ImgDetMain" },
  { name: "My Love Mine All Mine", cover: "https://media.pitchfork.com/photos/65046760640cfa4228535929/16:9/w_1280,c_limit/MyLoveMineAllMineVideoStill.jpg" },
  { name: "EDM Sampling", cover: "https://th.bing.com/th/id/OIP._xxqbbOVibbWwURMMbBtcwHaEo?rs=1&pid=ImgDetMain" },
  { name: "Cute Circus", cover: "https://th.bing.com/th/id/OIP.nXYU6Qp1sqDMsv7KMGIU_AHaHa?rs=1&pid=ImgDetMain" },
  { name: "My Love Mine All Mine", cover: "https://media.pitchfork.com/photos/65046760640cfa4228535929/16:9/w_1280,c_limit/MyLoveMineAllMineVideoStill.jpg" }
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/5 h-screen bg-black text-white p-4 flex flex-col">
      {/* Thư viện */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Thư viện</h2>
        <Plus size={20} className="cursor-pointer hover:text-gray-400" />
      </div>

      {/* Menu */}
      <div className="space-y-2 text-gray-400">
        <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-gray-700">
            <span>📁</span> <span>Tạo playlist</span>
          </button>
        <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-gray-700">
          <span>🎵</span> <span>Bài hát đã thích</span>
        </button>
        <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-gray-700">
          <span>📁</span> <span>Tập bài hát của bạn</span>
        </button>
      </div>

      {/* Danh sách playlist với ảnh */}
      <div className="mt-6">
        <h3 className="text-gray-400 mb-2">Playlist</h3>
        <ul className="space-y-2">
          {playlists.map((playlist, index) => (
            <li key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
              <img src={playlist.cover} alt={playlist.name} className="w-10 h-10 rounded-md" />
              <span>{playlist.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

