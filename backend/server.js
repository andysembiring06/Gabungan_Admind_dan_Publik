// Import dotenv untuk mengakses variabel lingkungan
require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();

// Gunakan variabel lingkungan dari .env atau default ke nilai tertentu
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Koneksi MySQL menggunakan variabel dari .env
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost", // Default ke localhost jika tidak ada di .env
  user: process.env.DB_USER || "root", // Default ke root jika tidak ada di .env
  password: process.env.DB_PASSWORD || "", // Default ke kosong jika tidak ada di .env
  database: process.env.DB_NAME || "ikanku", // Default ke "ikanku" jika tidak ada di .env
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

app.post("/api/artikel", upload.single("gambar"), (req, res) => {
  const { judul, konten, status, topik } = req.body;
  const gambar = req.file ? req.file.filename : null;
  const tanggal = new Date().toISOString().slice(0, 19).replace("T", " ");
  const sql =
    "INSERT INTO articles (judul, konten, tanggal, status, gambar, topik) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(sql, [judul, konten, tanggal, status, gambar, topik], (err) => {
    if (err) {
      console.error("Error inserting article:", err);
      return res.status(500).send("Error inserting article");
    }
    res.status(200).send("Article successfully added!");
  });
});

app.get("/api/artikel", (req, res) => {
  const sql = "SELECT * FROM articles ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching articles:", err);
      return res.status(500).send("Error fetching articles");
    }
    res.status(200).json(result);
  });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
