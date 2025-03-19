import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="flex justify-around items-center p-4 bg-black text-white">
      {/* Logo + Home */}
      <div className="flex items-center space-x-4">
        <p className="text-3xl font-bold text-blue-400">SoundShare </p>
        <button className="">
          <FontAwesomeIcon icon={faHome}/>
        </button>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full w-1/3">
        <Search size={20} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Bạn muốn phát nội dung gì?"
          className="bg-transparent outline-none w-full text-white placeholder-gray-400"
        />
      </div>

      {/* Hành động & Avatar */}
      <div className="flex items-center space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
          Khám phá
        </button>
        <button className="text-gray-400 hover:text-white">
          Cài đặt Ứng dụng
        </button>
        <Bell size={20} className="text-gray-400 hover:text-white" />
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-gray-600 rounded-full">
              <img src="https://th.bing.com/th/id/OIP.Fb9TlA92Z8VTbWXSNfvWIAHaHa?rs=1&pid=ImgDetMain" className="rounded-full" alt="" />
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Header;
