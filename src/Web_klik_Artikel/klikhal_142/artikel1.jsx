import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

const KlikhalArticle = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // ID artikel utama
  const ARTIKEL_UTAMA_ID = 142; // Sesuaikan dengan ID artikel utama

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/artikel");
        const publishedArticles = response.data.filter(
          (article) => article.status === "published"
        );

        if (publishedArticles.length > 0) {
          // Cari artikel utama berdasarkan ID
          const mainArticle = publishedArticles.find(
            (article) => article.id === ARTIKEL_UTAMA_ID
          );
          setArticle(mainArticle);

          if (mainArticle) {
            // Artikel Terbaru: ID lebih besar dari artikel utama
            const trendingArticlesList = publishedArticles
              .filter(
                (trendingArticle) => trendingArticle.id > ARTIKEL_UTAMA_ID
              )
              .sort((a, b) => a.id - b.id) // Urutkan ID secara ascending
              .slice(0, 4); // Ambil 4 artikel pertama
            setTrendingArticles(trendingArticlesList);

            // Artikel Terkait: Topik yang sama, selain artikel utama
            let relatedArticlesList = publishedArticles.filter(
              (relatedArticle) =>
                relatedArticle.topik === mainArticle.topik &&
                relatedArticle.id !== mainArticle.id
            );

            // Jika tidak ada artikel yang dekat, cari yang lebih jauh tapi tetap dengan topik yang sama
            if (relatedArticlesList.length === 0) {
              relatedArticlesList = publishedArticles.filter(
                (relatedArticle) => relatedArticle.topik === mainArticle.topik
              );
            }

            // Urutkan artikel terkait berdasarkan ID terdekat dengan artikel utama
            relatedArticlesList = relatedArticlesList
              .sort(
                (a, b) =>
                  Math.abs(a.id - ARTIKEL_UTAMA_ID) -
                  Math.abs(b.id - ARTIKEL_UTAMA_ID)
              )
              .slice(0, 3); // Ambil 3 artikel terkait yang terdekat

            setRelatedArticles(relatedArticlesList);
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Fungsi untuk memformat tanggal
  const formatDate = (dateString) =>
    format(parseISO(dateString), "EEEE, d MMMM yyyy", { locale: id });

  // Fungsi untuk mendapatkan warna berdasarkan topik
  const getStatusColor = (topic) => {
    switch (topic) {
      case "bisnis":
        return "#f59e0b"; // Business - Yellow
      case "kesehatan":
        return "#10b981"; // Health - Green
      case "budidaya":
        return "#3b82f6"; // Budidaya - Blue
      default:
        return "#6b7280"; // Default Gray
    }
  };

  // Fungsi untuk menangani judul yang panjang
  const handleTitleOverflow = (title) => {
    const words = title.split(" ");
    if (words.length <= 8) {
      return title;
    }
    const firstEightWords = words.slice(0, 8).join(" ");
    return (
      <>
        {firstEightWords}
        <br />
        {words.slice(8).join(" ")}
      </>
    );
  };

  // Tampilan loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Jika tidak ada artikel utama
  if (!article) {
    return (
      <div className="text-center text-2xl text-gray-500 mt-20">
        Artikel tidak ditemukan
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Judul Artikel dengan padding */}
      <div className="mb-8 mt-40">
        {" "}
        {/* Increased margin-top for more space */}
        <h1 className="text-4xl font-bold leading-tight">
          {handleTitleOverflow(article.judul)}
        </h1>
      </div>

      {/* Gambar Utama */}
      <div className="mb-6">
        <img
          src={`http://localhost:5000/uploads/${article.gambar}`}
          alt={article.judul}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Informasi Topik dan Tanggal */}
      <div className="mb-6">
        <span
          className="inline-block px-3 py-1 rounded text-white text-sm font-semibold mb-2"
          style={{ backgroundColor: getStatusColor(article.topik) }}
        >
          {article.topik}
        </span>
        <p className="text-gray-600">{formatDate(article.tanggal)}</p>
      </div>

      {/* Layout Dua Kolom */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Kolom Kiri: Konten Utama */}
        <div className="md:w-2/3">
          <div className="prose max-w-none">
            <p>{article.konten}</p>
          </div>
        </div>

        {/* Kolom Kanan: Artikel Terbaru */}
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold -mt-16 mb-10">Artikel Terbaru</h3>
          {trendingArticles.map((trendingArticle) => (
            <div
              key={trendingArticle.id}
              className="mb-4 p-4 border rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
              onClick={() => navigate(`/klikhal_${trendingArticle.id}`)}
            >
              <div className="flex items-center">
                <img
                  src={`http://localhost:5000/uploads/${trendingArticle.gambar}`}
                  alt={trendingArticle.judul}
                  className="w-28 h-28 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold mb-1 line-clamp-2">
                    {trendingArticle.judul}
                  </h4>
                  <div
                    className="inline-block px-2 py-1 rounded text-white text-xs mb-1"
                    style={{
                      backgroundColor: getStatusColor(trendingArticle.topik),
                    }}
                  >
                    {trendingArticle.topik}
                  </div>
                  <p className="text-xs text-gray-600">
                    {formatDate(trendingArticle.tanggal)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artikel Terkait */}
      <div className="mt-12">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Artikel Terkait</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.id}
                className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/klikhal_${relatedArticle.id}`)}
              >
                <img
                  src={`http://localhost:5000/uploads/${relatedArticle.gambar}`}
                  alt={relatedArticle.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {relatedArticle.judul}
                  </h4>
                  <div
                    className="inline-block px-2 py-1 rounded text-white text-xs mb-2"
                    style={{
                      backgroundColor: getStatusColor(relatedArticle.topik),
                    }}
                  >
                    {relatedArticle.topik}
                  </div>
                  <p className="text-xs text-gray-600">
                    {formatDate(relatedArticle.tanggal)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KlikhalArticle;
