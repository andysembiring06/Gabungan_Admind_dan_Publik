import React from "react";
import { Link } from "react-router-dom"; // Impor Link dari react-router-dom
import backgroundImage from "../../assets/gambar-5/1.jpg";
import logoImage from "../../assets/gambar-5/image.png";

const Navbar = () => {
  return (
    <div className="relative w-full max-w-screen-xl h-screen overflow-hidden">
      <img
        src={backgroundImage}
        alt="Background Image"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-gradient-to-b from-transparent to-black/50">
        <div className="absolute top-5 left-24 transition-transform transform hover:scale-110 hover:filter drop-shadow-xl">
          <img src={logoImage} alt="Ikanku Logo" className="w-[170px]" />
        </div>

        <a
          href="https://wa.me/6288271003161?text=Halo%2C%20Saya%20tertarik%20dengan%20ikan%20segar%20yang%20ditawarkan!" // Mengarah ke WhatsApp langsung dengan pesan pre-filled
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-8 right-24 text-2xl font-bold cursor-pointer hover:scale-110 hover:text-shadow-xl"
        >
          Dapatkan <br />
          Ikan Segar <br />
          Sekarang!
        </a>

        <div className="text-center mt-32">
          <h1 className="text-5xl font-bold mb-2 text-shadow-xl">
            Hubungi Kami
          </h1>
          <div className="inline-block bg-black/40 px-3 py-2 rounded">
            {/* Tautan untuk "Beranda" */}
            <Link
              to="/"
              className="text-white hover:text-gray-300 hover:text-shadow-xl"
            >
              Beranda
            </Link>
            {" - "}
            {/* Tautan untuk "Hubungi Kami", diarahkan ke WhatsApp */}
            <a
              href="https://wa.me/6288271003161?text=Halo%2C%20Saya%20ingin%20menghubungi%20Anda%20untuk%20informasi%20lebih%20lanjut."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 hover:text-shadow-xl"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
