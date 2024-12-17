import React, { useState } from "react";
import mitraImage from "../../assets/gambar-4/mitra_13.jpg";

const HeroSection4 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="max-w-[1200px] mx-auto py-[100px] px-[20px] lg:px-[100px]">
      <div className="flex flex-col lg:flex-row items-center gap-[40px]">
        <div className="flex-none w-[150px] text-left lg:self-center lg:ml-[50px]">
          <h1 className="text-[98px] text-[#0066cc] font-bold leading-tight lg:text-left">
            Mitra
            <br />
            Kami
          </h1>
        </div>

        <div className="flex-1 bg-[#007bff] rounded-[10px] overflow-hidden shadow-lg p-[20px] lg:w-[650px] lg:ml-[240px]">
          <div className="flex items-center gap-[20px]">
            <img
              src={mitraImage}
              alt="Tibelat Farm Batam"
              className={`image-transform w-[120px] h-[100px] object-cover rounded cursor-pointer transition-transform duration-300 ${
                isHovered ? "scale-110" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <h2 className="text-[24px] text-white font-bold self-center">
              Tibelat Farm - Batam
            </h2>
          </div>
          <div className="mt-[10px]">
            <p className="text-[14px] text-white leading-[1.6]">
              Tibelat Farm adalah salah satu mitra kami yang berlokasi di Batam.
              Sebagai usaha budidaya ikan tawar terkemuka, Tibelat Farm
              berkomitmen untuk menyediakan ikan berkualitas tinggi dengan
              praktik budidaya yang ramah lingkungan. Dengan fasilitas modern
              dan tim yang berpengalaman, Tibelat Farm memastikan bahwa setiap
              ikan yang dihasilkan memenuhi standar mutu terbaik. Kami bangga
              bermitra dengan Tibelat Farm dalam mendukung sektor perikanan yang
              berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;
