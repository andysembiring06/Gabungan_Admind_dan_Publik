import React from "react";
import ikanImage from "../../assets/gambar-1/home-1.png"; // Pastikan path sesuai dengan struktur proyek Anda

const HeroSection = () => {
  return (
    <div className="bg-[#1E88E5] min-h-[30px] w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content */}
          <div className="flex-1 text-white lg:text-left mb-8 lg:mb-0 pl-12 lg:ml-12">
            {/* Padding kiri ditambahkan */}
            <h1 className="text-2xl lg:text-5xl font-bold mb-4 lg:ml-4">
              {/* Margin kiri ditambahkan */}
              Belanja Ikan Mudah
            </h1>
            <h2 className="text-2xl lg:text-5xl font-bold mb-8 lg:ml-4">
              {/* Margin kiri ditambahkan */}
              Dengan IkanKu
            </h2>
            <a
              href="https://play.google.com/store/games"
              className="inline-block bg-[#FF5722] hover:bg-[#F4511E] text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300 lg:ml-4"
            >
              Download on Google Play
            </a>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex-1 relative flex justify-center items-center mt-12">
            <img
              src={ikanImage}
              alt="IkanKu App Mockup"
              className="max-w-[220px] h-auto object-contain mt-8" // Increased margin-top here
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
