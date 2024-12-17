import React, { useState } from "react";
import imgRina from "../../assets/gambar-1/home-8.jpg";
import imgDewi from "../../assets/gambar-1/home-9.jpg";
import imgSari from "../../assets/gambar-1/home-10.jpg";
import imgAni from "../../assets/gambar-1/home-8.jpg";
import imgBudi from "../../assets/gambar-1/home-9.jpg";
import imgCitra from "../../assets/gambar-1/home-10.jpg";
import imgDani from "../../assets/gambar-1/home-8.jpg";
import imgEka from "../../assets/gambar-1/home-9.jpg";
import imgFajar from "../../assets/gambar-1/home-10.jpg";

const HeroSection5 = () => {
  const features = [
    {
      name: "Rina",
      img: imgRina,
      testimonial:
        "Sangat mudah dan praktis! Ikan yang saya terima selalu segar, dan pelayanannya cepat.",
    },
    {
      name: "Dewi",
      img: imgDewi,
      testimonial:
        "Harga ikannya jauh lebih murah daripada di pasar, dan kualitasnya luar biasa.",
    },
    {
      name: "Sari",
      img: imgSari,
      testimonial:
        "Pertama kali pesan, langsung jatuh cinta dengan kemudahan aplikasi ini. Sangat membantu!",
    },
    {
      name: "Ani",
      img: imgAni,
      testimonial:
        "Pelayanannya cepat dan memuaskan. Ikan datang dalam kondisi sangat segar.",
    },
    {
      name: "Budi",
      img: imgBudi,
      testimonial:
        "Suka banget dengan aplikasi ini, sangat membantu untuk kebutuhan sehari-hari.",
    },
    {
      name: "Citra",
      img: imgCitra,
      testimonial:
        "Aplikasinya mudah digunakan dan kualitas ikannya sangat bagus!",
    },
    {
      name: "Dani",
      img: imgDani,
      testimonial:
        "Saya sangat puas dengan layanan ini, ikannya segar dan cepat sampai.",
    },
    {
      name: "Eka",
      img: imgEka,
      testimonial:
        "Pengalaman belanja ikan yang sangat memuaskan, pasti akan pesan lagi!",
    },
    {
      name: "Fajar",
      img: imgFajar,
      testimonial:
        "Pelayanan sangat profesional, kualitas ikan tidak pernah mengecewakan.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const startIdx = currentPage * itemsPerPage;
  const visibleFeatures = features.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-10">
        Testimoni
      </h1>

      <div className="flex justify-center space-x-6">
        {visibleFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-600 rounded-lg shadow-lg p-6 w-80 flex flex-col items-center text-center relative"
          >
            <div className="w-20 h-20 bg-white rounded-full overflow-hidden mb-8 shadow-lg absolute -top-10">
              <img
                src={feature.img}
                alt={feature.name}
                className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                style={{ width: "80px", height: "80px" }} // Fixed image size
              />
            </div>
            <p
              className="text-white text-sm mb-4 mt-10"
              style={{ fontSize: "16px" }}
            >
              {feature.testimonial}
            </p>
            <p className="text-white font-bold mt-4">{feature.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-3">
        {Array.from({ length: Math.ceil(features.length / itemsPerPage) }).map(
          (_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => handlePageChange(pageIndex)}
              className={`w-4 h-4 rounded-full ${
                pageIndex === currentPage ? "bg-orange-500" : "bg-gray-400"
              }`}
            ></button>
          )
        )}
      </div>
    </div>
  );
};

export default HeroSection5;
