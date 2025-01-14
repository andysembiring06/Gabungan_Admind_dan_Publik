import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ArtikelHero2.css";

const ArtikelHero2 = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Semua");
  const articlesPerPage = 6;

  const topics = ["Semua", "Bisnis", "Kesehatan", "Budidaya", "Terbaru"];

  const fetchArticles = () => {
    axios
      .get("http://localhost:5000/api/artikel")
      .then((response) => {
        const publishedArticles = response.data.filter(
          (article) => article.status === "published"
        );

        console.log("Artikel published:", publishedArticles);

        publishedArticles.sort((a, b) => a.id - b.id);
        const smallestId = publishedArticles[0]?.id;
        const filteredArticles = publishedArticles.filter(
          (article) => article.id !== smallestId
        );
        setArticles(filteredArticles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        alert(
          "Gagal mengambil artikel. Pastikan backend berjalan dengan baik."
        );
      });
  };

  useEffect(() => {
    fetchArticles();
    const interval = setInterval(fetchArticles, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) => {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const date = new Date(dateString);
    const day = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day} ${dayOfMonth} ${month} ${year} ${hours}:${minutes}`;
  };

  const isWithinLastThreeDays = (dateString) => {
    const articleDate = new Date(dateString);
    const now = new Date();
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    return articleDate >= threeDaysAgo;
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.judul
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesCriteria = true;

    if (selectedTopic === "Kesehatan") {
      matchesCriteria = article.topik?.toLowerCase().trim() === "kesehatan";
    } else if (selectedTopic === "Terbaru") {
      matchesCriteria = isWithinLastThreeDays(article.tanggal);
    } else if (selectedTopic !== "Semua") {
      matchesCriteria =
        article.topik?.toLowerCase().trim() === selectedTopic.toLowerCase();
    }

    return matchesSearch && matchesCriteria;
  });

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTopic]);

  const handleNavigation = (id) => {
    window.location.href = `/klikhal_${id}`;
  };

  return (
    <div className="container">
      <h2 className="header">Artikel Publik</h2>
      <input
        type="text"
        placeholder="Cari artikel..."
        className="searchBar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filterButtons">
        {topics.map((topic) => (
          <button
            key={topic}
            className={`button ${selectedTopic === topic ? "active" : ""}`}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="articleList">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className="articleCard"
            onClick={() => handleNavigation(article.id)}
          >
            <img
              src={`http://localhost:5000/uploads/${article.gambar}`}
              alt={article.judul}
              className="articleImage"
            />
            <div className="articleContent">
              <h3 className="articleTitle">{article.judul}</h3>
              <p className="articleTopic">{article.topik}</p>
              <p className="articleDate">{formatDate(article.tanggal)}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="noArticles">Tidak ada artikel yang ditemukan</div>
      )}

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pageButton"
        >
          &lt;
        </button>
        <span>
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pageButton"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ArtikelHero2;
