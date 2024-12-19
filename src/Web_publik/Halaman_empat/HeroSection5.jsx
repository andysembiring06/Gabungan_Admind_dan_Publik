import React from "react";
import footerLogo from "../assets/gambar-4/image.jpg";

const Herosection5 = () => {
  return (
    <footer className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Footer Left */}
        <div className="flex-1 text-left">
          {/* Gambar - di atas Email */}
          <div className="mb-8 flex justify-start">
            <img
              src={footerLogo}
              alt="IKANKU"
              className="w-16 md:w-20 transition-transform transform hover:scale-110"
            />
          </div>

          {/* Contact Information - Ditampilkan dari kiri ke kanan */}
          <div className="flex flex-col gap-6">
            <div className="info-item">
              <h4 className="text-gray-600 text-sm mb-1">Email</h4>
              <p className="text-gray-800 text-lg">ikanku@gmail.com</p>
            </div>
            <div className="info-item">
              <h4 className="text-gray-600 text-sm mb-1">Phone Number</h4>
              <p className="text-gray-800 text-lg">+62 868-996-4445</p>
            </div>
            <div className="info-item">
              <h4 className="text-gray-600 text-sm mb-1">Address</h4>
              <p className="text-gray-800 text-lg">
                68692 Ash Grove,
                <br />
                Port Lindsay 77261-7123
              </p>
            </div>
          </div>
        </div>

        {/* Get Started - Centered and Shifted Further Right */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 md:ml-40">
          <h3 className="text-gray-800 text-xl">Get started</h3>
          <a
            href="https://play.google.com/store/games?hl=id&pli=1"
            className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg transition-colors duration-300 hover:bg-orange-600"
          >
            Unduh Aplikasi
          </a>
        </div>

        {/* Menu Links - About, Privacy, Terms, FAQ */}
        <div className="flex-1 flex flex-col gap-4 md:gap-8 text-gray-800 text-lg mt-12 ml-[25%]">
          <nav className="flex flex-col space-y-4">
            <a
              href="/about"
              className="transition-colors duration-300 hover:text-orange-500"
            >
              About us
            </a>
            <a
              href="/privacy"
              className="transition-colors duration-300 hover:text-orange-500"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="transition-colors duration-300 hover:text-orange-500"
            >
              Term of Service
            </a>
            <a
              href="/faq"
              className="transition-colors duration-300 hover:text-orange-500"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Herosection5;
