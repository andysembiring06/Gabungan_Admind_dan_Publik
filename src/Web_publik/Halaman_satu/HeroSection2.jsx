import React from "react";
import ikanImage2 from "../../assets/gambar-1/home-2.jpg";

function HeroSection2() {
  return (
    <div className="flex items-center max-w-[1200px] mx-auto px-[20px] py-[40px]">
      <div className="flex-1 mr-[30px] relative">
        {/* Gambar Ikan dengan animasi zoom-in dan efek saturasi saat hover */}
        <img
          src={ikanImage2}
          alt="Ikan"
          className="max-w-[75%] h-auto rounded-[8px] ml-[50px] transition-transform duration-300 ease-out transform hover:scale-105 hover:brightness-110"
          style={{ transform: "translateX(15%)" }} // Menggeser gambar 15% ke kanan
        />
      </div>
      <div className="flex-1">
        <h1 className="text-[36px] font-bold text-[#333] mb-[10px]">
          Apa itu IkanKu?
        </h1>
        <p className="text-[18px] text-[#555] leading-[1.5] mb-[20px]">
          Cari ikan segar tanpa ribet? IkanKu solusinya! Temukan ikan air tawar
          berkualitas langsung dari petani dengan harga terbaik, hanya lewat
          aplikasi. Pesan sekarang, dan nikmati kemudahan mendapatkan ikan segar
          di dalam pintu Anda!
        </p>
      </div>
    </div>
  );
}

export default HeroSection2;
