import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const style = {
  container: {
    position: "relative",
    padding: "20px",
  },
  tombolContainer: {
    position: "absolute",
    top: "10px",
    right: "100px",
    display: "flex",
    gap: "10px",
  },
  tombol: {
    backgroundColor: "#5cb85c",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  tombolSimpan: {
    backgroundColor: "#f0ad4e",
  },
  editorContainer: {
    marginTop: "60px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
  },
  dropdownContainer: {
    marginBottom: "20px",
  },
  dropdown: {
    width: "100%", // Full width of the screen
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    textAlign: "left", // Left-align the label
  },
  successMessage: {
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#5cb85c",
    color: "white",
    padding: "15px",
    borderRadius: "5px",
    fontWeight: "bold",
    zIndex: "9999",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  okButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  dateContainer: {
    marginTop: "20px",
    textAlign: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  dateBox: {
    backgroundColor: "#f8f9fa",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "10px",
    fontWeight: "bold",
  },
  countContainer: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    display: "block", // Stack vertically
    gap: "10px",
  },
  countBox: {
    backgroundColor: "#f8f9fa",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontWeight: "bold",
    marginBottom: "10px", // Added margin between boxes
  },
  inputFile: {
    display: "none",
  },
  uploadButtonContainer: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 9999, // Ensure it's in front of other elements
  },
  uploadButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  titikTiga: {
    position: "absolute",
    top: "10px",
    right: "50px", // Adjusted from "10px" to add space
    cursor: "pointer",
    fontSize: "24px", // Increased size
    fontWeight: "bold",
    color: "#5cb85c", // Added color for visibility
    transition: "transform 0.3s ease", // Added transition for better interaction
  },
  navbar: {
    position: "absolute",
    top: "50px",
    right: "10px",
    width: "300px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    padding: "10px",
  },
  box: {
    backgroundColor: "#f8f9fa",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "10px",
  },
  imageText: {
    marginTop: "10px", // Added margin for spacing below the image upload button
  },
};

const Artikel = () => {
  const [konten, setKonten] = useState("");
  const [topik, setTopik] = useState("");
  const [gambar, setGambar] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [dateTime, setDateTime] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const quillRef = useRef(null);

  const navigate = useNavigate(); // Deklarasikan navigate

  const handleImageChange = (e) => {
    setGambar(e.target.files[0]);
  };

  const handleEditorChange = (value) => {
    setKonten(value);
  };

  const extractPlainText = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    return doc.body.innerText.trim();
  };

  const extractJudul = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const h1Element = doc.querySelector("h1");
    return h1Element ? h1Element.innerText.trim() : "";
  };

  const extractContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const unwantedTags = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "a",
    ];
    unwantedTags.forEach((tag) => {
      const elements = doc.querySelectorAll(tag);
      elements.forEach((element) => element.remove());
    });

    return doc.body.innerText.trim();
  };

  const getCharacterCount = (text) => {
    return text.replace(/\s+/g, "").length;
  };

  const getWordCount = (text) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word).length;
  };

  const handleSubmit = (e, status) => {
    e.preventDefault();

    const judul = extractJudul(konten);
    const plainTextKonten = extractPlainText(konten);
    const extractedContent = extractContent(konten);

    if (!judul) {
      setError("Judul (gunakan <h1> di editor) harus diisi.");
      setSuccess("");
      return;
    }

    if (!extractedContent) {
      setError("Konten artikel tidak boleh kosong.");
      setSuccess("");
      return;
    }

    if (!topik) {
      setError("Topik harus dipilih.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("konten", extractedContent);
    formData.append("status", status);
    formData.append("topik", topik);
    formData.append("tanggal_penulisan", dateTime);

    if (gambar) {
      formData.append("gambar", gambar);
    }

    axios
      .post("http://localhost:5000/api/artikel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setSuccess(
          `Artikel berhasil disimpan sebagai ${
            status === "draft" ? "draft" : "published"
          }`
        );
        setError("");
        setKonten("");
        setTopik("");
        setGambar(null);
        setFileInputKey(Date.now());

        // Navigasi ke DashboardAdmin setelah berhasil
        navigate("/DashboardAdmin"); // Ganti dengan path yang sesuai
      })
      .catch(() => {
        setError("Terjadi kesalahan saat menyimpan artikel");
        setSuccess("");
      });
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const optionsDate = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };

      const formattedDate = now.toLocaleDateString("id-ID", optionsDate);
      const formattedTime = now.toLocaleTimeString("id-ID", optionsTime);

      setDateTime({
        date: formattedDate,
        time: formattedTime,
      });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const characterCountTitle = getCharacterCount(extractJudul(konten));
  const characterCountContent = getCharacterCount(extractContent(konten));
  const wordCount = getWordCount(extractPlainText(konten));

  return (
    <div style={style.container}>
      {error && (
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
      )}
      {success && (
        <div style={style.successMessage}>
          {success}
          <button style={style.okButton} onClick={() => setSuccess("")}>
            Ok
          </button>
        </div>
      )}

      <div
        style={style.titikTiga}
        onClick={() => setShowNavbar((prev) => !prev)}
      >
        ⋮
      </div>

      {showNavbar && (
        <div style={style.navbar}>
          <div style={style.countContainer}>
            <div style={style.countBox}>
              Jumlah karakter judul: {characterCountTitle}
            </div>
            <div style={style.countBox}>
              Jumlah karakter konten: {characterCountContent}
            </div>
            <div style={style.countBox}>Jumlah kata: {wordCount}</div>
          </div>

          <div style={style.box}>
            <div style={style.label}>Pilih Topik</div>
            <select
              style={style.dropdown}
              value={topik}
              onChange={(e) => setTopik(e.target.value)}
            >
              <option value="">Pilih...</option>
              <option value="Bisnis">Bisnis</option>
              <option value="Kesehatan ">Kesehatan</option>
              <option value="Budidaya">Budidaya</option>
            </select>
          </div>

          <div style={style.box}>
            <div style={style.label}>Waktu Penulisan</div>
            <div style={style.dateBox}>
              {dateTime.date}, {dateTime.time}
            </div>
          </div>
        </div>
      )}

      <div style={style.tombolContainer}>
        <button
          style={{ ...style.tombol, ...style.tombolSimpan }}
          onClick={(e) => handleSubmit(e, "draft")}
        >
          Simpan
        </button>
        <button
          style={style.tombol}
          onClick={(e) => handleSubmit(e, "published")}
        >
          Submit
        </button>
      </div>

      <div style={style.editorContainer}>
        <ReactQuill
          ref={quillRef}
          value={konten}
          onChange={handleEditorChange}
          placeholder="Tulis artikel Anda di sini..."
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline"],
              ["link"],
              [{ align: [] }],
              [{ color: [] }, { background: [] }],
            ],
          }}
        />
      </div>

      <div style={style.uploadButtonContainer}>
        <label htmlFor="file-upload" style={style.uploadButton}>
          Upload Gambar
        </label>
        <input
          type="file"
          id="file-upload"
          key={fileInputKey}
          onChange={handleImageChange}
          style={style.inputFile}
        />
      </div>

      {gambar && (
        <div style={style.imageText}>Gambar terpilih: {gambar.name}</div>
      )}
    </div>
  );
};

export default Artikel;
