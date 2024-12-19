const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;

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

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ikanku",
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
