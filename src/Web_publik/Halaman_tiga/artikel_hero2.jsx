import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ArtikelHero2.css"; // Import file CSS

const ArtikelHero2 = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Semua"); // Default ke "Semua"
  const articlesPerPage = 6;

  // Daftar topik termasuk "Kesehatan", "Budidaya", dan "Terbaru"
  const topics = ["Semua", "Bisnis", "Kesehatan", "Budidaya", "Terbaru"];

  // Fetch articles
  const fetchArticles = () => {
    axios
      .get("http://localhost:5000/api/artikel")
      .then((response) => {
        const publishedArticles = response.data.filter(
          (article) => article.status === "published"
        );

        // Sort articles by ID (oldest to latest)
        publishedArticles.sort((a, b) => a.id - b.id);

        // ID terkecil (yang pertama dalam urutan ID setelah disortir)
        const smallestId = publishedArticles[0].id;

        // Filter articles by excluding the one with the smallest ID
        const filteredArticles = publishedArticles.filter(
          (article) => article.id !== smallestId
        );

        setArticles(filteredArticles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  // Fetch articles on initial load and periodically every 5 seconds
  useEffect(() => {
    fetchArticles();
    const interval = setInterval(fetchArticles, 5000);
    return () => clearInterval(interval);
  }, []);

  // Format the article's published date
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

  // Filter articles based on selected topic or date range
  const filteredArticles = articles.filter((article) => {
    const matchesTopic =
      selectedTopic === "Semua" ||
      article.topik.toLowerCase() === selectedTopic.toLowerCase();

    const matchesSearch = article.judul
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesDate = true;

    // Check if the article is from the last 24 hours (only for "Terbaru")
    if (selectedTopic === "Terbaru") {
      const articleDate = new Date(article.tanggal);
      const now = new Date();
      const timeDiff = now - articleDate; // Time difference in milliseconds
      const oneDayInMillis = 24 * 60 * 60 * 1000;
      matchesDate = timeDiff <= oneDayInMillis;
    }

    return matchesTopic && matchesSearch && matchesDate;
  });

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Reset to page 1 when filtering by search term or topic
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTopic]);

  const handleNavigation = (id) => {
    window.location.href = `/klikhal_${id}`; // Redirect to article page
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
              onClick={() => handleNavigation(article.id)}
            />
            <div className="articleContent">
              <h3
                className="articleTitle"
                onClick={() => handleNavigation(article.id)}
              >
                {article.judul}
              </h3>
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
