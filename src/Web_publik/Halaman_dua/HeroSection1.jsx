import React from "react";
import ikanImage from "../../assets/gambar-2/beranda-2-2.png";
import berandaBg from "../../assets/gambar-2/beranda-2-1.jpg";
import qrCodeImage from "../../assets/gambar-2/beranda-2-3.jpg";

const HeroSection1 = () => {
  return (
    <div
      className="w-full h-[110vh] bg-cover bg-top relative overflow-hidden flex flex-col justify-center pb-16"
      style={{ backgroundImage: `url(${berandaBg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,102,204,0.7)]"></div>

      <div className="relative z-10 text-white text-center mb-8 px-8 md:px-16">
        {/* Menurunkan tulisan "Dapatkan Ikan Segar Dengan Mudah Dimana Saja" sedikit */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] text-center">
          {" "}
          {/* Menurunkan teks sedikit */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-shadow-md">
            Dapatkan Ikan Segar
            <br />
            Dengan Mudah Dimana
            <br />
            Saja
          </h1>
        </div>

        {/* Menurunkan posisi gambar, QR code, dan tombol Unduh Aplikasi */}
        <div className="flex items-center justify-center gap-8 mt-[500px]">
          {" "}
          {/* Menurunkan posisi elemen lebih sedikit */}
          {/* Gambar HP di kiri dengan margin agar tidak menempel ke bawah */}
          <div className="phone ml-4">
            <img
              src={ikanImage}
              alt="Mobile App Screenshot"
              className="w-[200px] md:w-[150px] lg:w-[200px] filter drop-shadow-lg mb-0"
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            {/* QR code dengan margin agar tidak menempel */}
            <div className="qr-code bg-white p-2 rounded-lg shadow-md">
              <img
                src={qrCodeImage}
                alt="QR Code"
                className="w-[100px] h-[100px] md:w-[100px] md:h-[100px]"
              />
            </div>

            {/* Tombol Unduh Aplikasi */}
            <a
              href="https://play.google.com/store/games?hl=id&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-600 hover:ring-4 hover:ring-yellow-500 mt-2">
                Unduh Aplikasi
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
