import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const ProfileMenu = () => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate for redirection

  // On component mount, retrieve the stored username and profile image from localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedProfileImage = localStorage.getItem("profileImage");

    if (savedUsername) {
      setUsername(savedUsername);
    }
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, []); // Empty dependency array to run once when component mounts

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result); // Save the updated image to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Optionally, don't remove items from localStorage if you want to keep the data after logout
    // localStorage.removeItem("username");
    // localStorage.removeItem("profileImage");
    setUsername(""); // Reset username state
    setProfileImage(""); // Reset profile image state

    // Redirect to login page (or home page)
    navigate("/login"); // Use react-router to redirect
  };

  const handleNameChange = () => {
    const newName = prompt("Masukkan nama baru:", username);
    if (newName) {
      setUsername(newName);
      localStorage.setItem("username", newName); // Update localStorage with new username
    }
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundSize: "cover",
          }}
        >
          {!profileImage && <span className="text-sm text-gray-500">?</span>}
        </div>
        <span className="ml-2 font-medium">{username || "Guest"}</span>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 bg-white shadow-lg rounded-lg mt-2 p-2 w-48">
          <ul>
            <li
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={handleNameChange}
            >
              Ganti Nama
            </li>
            <li className="p-2 cursor-pointer hover:bg-gray-200">
              <input
                type="file"
                ref={fileInputRef}
                className="p-1 hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <span onClick={() => fileInputRef.current.click()}>
                Ganti Foto Profil
              </span>
            </li>
            <li
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={handleLogout} // Call handleLogout when clicking Keluar
            >
              Keluar
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
