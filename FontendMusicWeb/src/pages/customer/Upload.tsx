import { useState } from "react";
import axios from "axios";

export default function UploadSong() {
  const [song, setSong] = useState({
    title: "",
    artist: "",
    src: "",
    cover: "",
  });

  const handleChange = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post("http://localhost:5001/songs", song);
      alert("Bài hát đã được thêm!");
      setSong({ title: "", artist: "", src: "", cover: "" }); // Reset form
    } catch (error) {
      console.error("Lỗi khi thêm nhạc:", error);
    }
  };

  return (
    <div className="flex flex-col p-6 bg-gray-800 text-white rounded-lg w-96">
      <h2 className="text-xl font-semibold mb-4">Thêm Bài Hát</h2>
      
      <input
        type="text"
        name="title"
        placeholder="Tên bài hát"
        value={song.title}
        onChange={handleChange}
        className="p-2 mb-2 rounded text-black"
      />

      <input
        type="text"
        name="artist"
        placeholder="Nghệ sĩ"
        value={song.artist}
        onChange={handleChange}
        className="p-2 mb-2 rounded text-black"
      />

      <input
        type="text"
        name="src"
        placeholder="Link nhạc"
        value={song.src}
        onChange={handleChange}
        className="p-2 mb-2 rounded text-black"
      />

      <input
        type="text"
        name="cover"
        placeholder="Link ảnh bìa"
        value={song.cover}
        onChange={handleChange}
        className="p-2 mb-2 rounded text-black"
      />

      <button
        onClick={handleUpload}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
    </div>
  );
}
