const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Membuat folder uploads jika belum ada
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

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

// Koneksi database menggunakan konfigurasi dotenv
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

// Endpoint untuk menambah artikel
app.post("/api/artikel", upload.single("gambar"), (req, res) => {
  const { judul, konten, status, topik } = req.body;
  const gambar = req.file ? req.file.filename : null;
  const tanggal = new Date().toISOString().slice(0, 19).replace("T", " ");
  
  const sql = "INSERT INTO articles (judul, konten, tanggal, status, gambar, topik) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(sql, [judul, konten, tanggal, status, gambar, topik], (err) => {
    if (err) {
      console.error("Error inserting article:", err);
      return res.status(500).send({ error: "Error inserting article", message: err.message });
    }
    res.status(200).send("Article successfully added!");
  });
});

// Endpoint untuk mengambil artikel
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

// Menyajikan file yang diupload melalui endpoint /uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Menjalankan server pada port yang ditentukan
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
