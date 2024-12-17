import React, { useEffect, useState } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import "./ArtikelHero1.css"; // Impor CSS khusus

const ArtikelHero1 = () => {
  const [article, setArticle] = useState(null);
  const [smallestId, setSmallestId] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/artikel");
        const publishedArticles = response.data
          .filter((article) => article.status === "published")
          .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal));

        if (publishedArticles.length > 0) {
          // Simpan artikel pertama (berdasarkan tanggal terlama)
          setArticle(publishedArticles[0]);
          // Cari ID terkecil
          const minId = Math.min(...publishedArticles.map((a) => a.id));
          setSmallestId(minId);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString) =>
    format(parseISO(dateString), "EEEE, d MMMM yyyy", { locale: id });

  const formatTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 10) {
      return [words.slice(0, 5).join(" "), words.slice(5, 10).join(" ")];
    } else if (words.length > 5) {
      return [words.slice(0, 5).join(" "), words.slice(5).join(" ")];
    }
    return [title];
  };

  const formatContent = (content) => {
    const words = content.split(" ");
    if (words.length > 20) {
      return [words.slice(0, 10).join(" "), words.slice(10, 20).join(" ")];
    } else if (words.length > 10) {
      return [words.slice(0, 10).join(" "), words.slice(10).join(" ")];
    }
    return [content];
  };

  return (
    <div className="bg-hero-container">
      <div className="bg-hero-content">
        <div className="hero-article">
          {article ? (
            <div key={article.id}>
              <a href={smallestId ? `/klikhal_${smallestId}` : "#"}>
                <img
                  src={`http://localhost:5000/uploads/${article.gambar}`}
                  alt={article.judul}
                  className="hero-image"
                />
              </a>
              <div className="hero-text">
                {formatTitle(article.judul).map((line, index) => (
                  <h3 key={index} className="hero-title">
                    {line}
                  </h3>
                ))}
                {formatContent(article.konten).map((line, index) => (
                  <p key={index} className="hero-paragraph">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-article">Tidak ada artikel</div>
          )}
        </div>
        {article && article.tanggal && (
          <div className="article-date">{formatDate(article.tanggal)}</div>
        )}
      </div>
    </div>
  );
};

export default ArtikelHero1;
