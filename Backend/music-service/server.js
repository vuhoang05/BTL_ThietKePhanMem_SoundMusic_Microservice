const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch(err => console.error("❌ Lỗi kết nối MongoDB:", err));


const SongSchema = new mongoose.Schema({
  title: String,
  artist: String,
  src: String,
  cover: String,
});

const Song = mongoose.model("Song", SongSchema);
// const songs = [
//     {
//       title: "Rap-t",
//       artist: "23Setb",
//       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//       cover: "https://th.bing.com/th/id/OIP.LeeLWDpyE-41sTJmk1SDBwHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"
//     },
//     {
//       title: "Love",
//       artist: "Taylor",
//       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//       cover: "https://th.bing.com/th/id/R.3e4229ffd23ccb3e68d2375ba94753e4?rik=Z%2bzAxqvt%2f9bTyA&pid=ImgRaw&r=0"
//     },
//     {
//       title: "Young",
//       artist: "21 Savage",
//       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//       cover: "https://th.bing.com/th/id/OIP.J0i6V2456LpfjzpV1NkLowHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//       title: "Rap-t",
//       artist: "23Setb",
//       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//       cover: "https://th.bing.com/th/id/OIP.LeeLWDpyE-41sTJmk1SDBwHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"
//     },
//     {
//       title: "Love",
//       artist: "Taylor",
//       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//       cover: "https://th.bing.com/th/id/R.3e4229ffd23ccb3e68d2375ba94753e4?rik=Z%2bzAxqvt%2f9bTyA&pid=ImgRaw&r=0"
//     },
//     {
//       title: "Young",
//       artist: "21 Savage",
//       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//       cover: "https://th.bing.com/th/id/OIP.J0i6V2456LpfjzpV1NkLowHaHa?rs=1&pid=ImgDetMain"
//     }
//   ];
  
//   async function seedDB() {
//     await Song.insertMany(songs);
//     console.log("✅ Đã thêm dữ liệu mẫu vào MongoDB!");
//     mongoose.connection.close();
//   }
  
//   seedDB();

// API lấy danh sách bài hát
app.get("/songs", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

// API thêm bài hát
app.post("/songs", async (req, res) => {
  const newSong = new Song(req.body);
  await newSong.save();
  res.status(201).json(newSong);
});

app.listen(5001, () => console.log("Music Service chạy trên cổng 5001"));
