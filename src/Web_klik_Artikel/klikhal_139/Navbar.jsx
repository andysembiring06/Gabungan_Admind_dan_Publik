import React from "react";
import { Link } from "react-router-dom"; // Import Link dari React Router
import logo from "../../assets/gambar-1/image.png"; // Gambar logo

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-1 px-8 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-16 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </Link>

        {/* Menu Navigasi */}
        <ul className="flex space-x-8">
          <li>
            {/* Link ke Beranda (Halaman 1) */}
            <Link className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-blue-500 before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300">
              Beranda
            </Link>
          </li>
          <li>
            {/* Link ke Produk (Halaman 2) */}
            <Link
              to="/halaman_dua" // Mengarah ke halaman_dua
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-blue-500 before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300"
            >
              Produk
            </Link>
          </li>
          <li>
            {/* Link ke Artikel (Halaman 3) */}
            <Link
              to="/Halaman_tiga" // Mengarah ke halaman_tiga
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-blue-500 before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300"
            >
              Artikel
            </Link>
          </li>
          <li>
            {/* Link ke Tentang Kami (Halaman 4) */}
            <Link
              to="/Halaman_empat" // Mengarah ke halaman_empat
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-blue-500 before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300"
            >
              Tentang Kami
            </Link>
          </li>
        </ul>

        {/* Tombol Hubungi Kami (Halaman 5) */}
        <div>
          <Link
            to="/Halaman_lima" // Mengarah ke halaman_lima
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition-transform duration-500 ease-out transform hover:scale-125 hover:rotate-6 hover:shadow-2xl hover:from-blue-600 hover:to-blue-700"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
