import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/login/image.jpg";
import FilterDropdown from "./FilterDropdown";
import ProfileMenu from "./ProfileMenu";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "User"
  );
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || ""
  );

  // New state to handle deletion confirmation
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/artikel")
      .then((response) => {
        setArticles(response.data);
        setFilteredArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
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

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle article deletion
  const handleDelete = (articleId) => {
    setArticleToDelete(articleId);
    setShowDeleteConfirmation(true);
  };

  // Confirm deletion with async/await and handling API response
  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/artikel/${articleToDelete}`
      );
      console.log("Article deleted:", articleToDelete, response); // Debugging log to check response

      if (response.status === 200 || response.status === 204) {
        // Successfully deleted, update state
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article.id !== articleToDelete)
        );
        setFilteredArticles((prevArticles) =>
          prevArticles.filter((article) => article.id !== articleToDelete)
        );
        setShowDeleteConfirmation(false);
        setArticleToDelete(null);
      } else {
        console.error("Failed to delete article: ", response);
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setArticleToDelete(null);
  };

  const applyFilter = ({ status, timeRange }) => {
    let filtered = articles;
    if (status) {
      filtered = filtered.filter((article) => article.status === status);
    }
    if (timeRange) {
      const now = new Date();
      const timeRangeInMilliseconds = {
        "1h": 1 * 60 * 60 * 1000,
        "24h": 24 * 60 * 60 * 1000,
        "7d": 7 * 24 * 60 * 60 * 1000,
        "30d": 30 * 24 * 60 * 60 * 1000,
        "3m": 90 * 24 * 60 * 60 * 1000,
        "6m": 180 * 24 * 60 * 60 * 1000,
      };

      const filterTime = timeRangeInMilliseconds[timeRange];
      if (filterTime) {
        filtered = filtered.filter((article) => {
          const articleDate = new Date(article.tanggal);
          return now - articleDate <= filterTime;
        });
      }
    }
    setFilteredArticles(filtered);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <ProfileMenu
          username={username}
          setUsername={setUsername}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
        />
      </div>

      <div className="flex justify-between items-center mt-8 px-8">
        <FilterDropdown onApplyFilter={applyFilter} />
        <Link
          to="/Tambah_artikel"
          className="bg-orange-500 text-white p-4 rounded-lg shadow-lg hover:bg-orange-600 flex items-center gap-2"
        >
          <span>Tambah Artikel</span>
          <FaPlus size={20} />
        </Link>
      </div>

      <div className="mt-8">
        <div style={styles.artikelList}>
          {currentArticles.map((article) => (
            <div key={article.id} style={styles.artikelCard}>
              <img
                src={`http://localhost:5000/uploads/${article.gambar}`}
                alt={article.judul}
                style={styles.artikelImage}
              />
              <div style={styles.artikelContent}>
                <h3 style={styles.artikelTitle}>{article.judul}</h3>
                <p style={styles.artikelStatus}>
                  {article.status === "published" ? "Sudah Diposting" : "Draft"}
                </p>
                <p style={styles.artikelDate}>{formatDate(article.tanggal)}</p>
              </div>
              <div style={styles.iconContainer}>
                <div style={styles.iconWrapper}>
                  <Link to={{ pathname: "/Tambah_artikel", state: article }}>
                    <button style={styles.editButton}>
                      <FaEdit style={styles.editIcon} />
                    </button>
                  </Link>
                  <span style={styles.iconLabel}>Edit</span>
                </div>

                <div style={styles.iconWrapper}>
                  <button
                    onClick={() => handleDelete(article.id)}
                    style={styles.deleteButton}
                  >
                    <FaTrash style={styles.deleteIcon} />
                  </button>
                  <span style={styles.iconLabel}>Hapus</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confirmation Dialog */}
        {showDeleteConfirmation && (
          <div style={styles.confirmationDialog}>
            <p>Apakah Anda yakin ingin menghapus artikel ini?</p>
            <button onClick={confirmDelete} style={styles.confirmButton}>
              Hapus
            </button>
            <button onClick={cancelDelete} style={styles.cancelButton}>
              Batal
            </button>
          </div>
        )}

        <div style={styles.pagination}>
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            style={styles.pageButton}
          >
            &lt;
          </button>
          <span style={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={styles.pageButton}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  artikelList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    paddingLeft: "56px",
    paddingRight: "56px",
    paddingTop: "32px",
    paddingBottom: "32px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },
  artikelCard: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    position: "relative",
  },
  artikelImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "16px",
  },
  artikelContent: {
    flex: 1,
  },
  artikelTitle: {
    color: "black",
    fontWeight: "bold",
  },
  artikelStatus: {
    color: "#007bff",
    margin: "4px 0",
  },
  artikelDate: {
    color: "gray",
  },
  iconContainer: {
    position: "absolute",
    top: "16px",
    right: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: "6px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  editIcon: {
    color: "white",
  },
  iconLabel: {
    fontSize: "12px",
    color: "gray",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: "6px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteIcon: {
    color: "white",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "32px",
  },
  pageButton: {
    padding: "8px 16px",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  pageInfo: {
    fontSize: "16px",
    alignSelf: "center",
  },
  confirmationDialog: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  confirmButton: {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Dashboard;
