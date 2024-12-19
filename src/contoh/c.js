import React, { useState } from "react";
import berandaImage from "../../assets/gambar-2/beranda-2-5.png";
import berandaImage from "../../assets/gambar-2/beranda-2-6.png";
import berandaImage from "../../assets/gambar-2/beranda-2-7.png";

const HeroSection3 = () => {
  // State to manage active slide group
  const [activeSlideGroup, setActiveSlideGroup] = useState(0);

  // Array of content for cards (we are duplicating this 3 times to get 9 cards)
  const cardData = [
    { title: "Transparansi Harga & Produk Detail", imgAlt: "Product 1" },
    { title: "Sistem Review Terpercaya", imgAlt: "Product 2" },
    { title: "Varietas & Kualitas Terjamin", imgAlt: "Product 3" },
    { title: "Harga Terjangkau dan Bersahabat", imgAlt: "Product 4" },
    { title: "Pengiriman Cepat & Tepat Waktu", imgAlt: "Product 5" },
    { title: "Produk Lokal Berkualitas", imgAlt: "Product 6" },
    { title: "Pilihan Beragam untuk Setiap Kebutuhan", imgAlt: "Product 7" },
    { title: "Kualitas Premium dengan Harga Bersaing", imgAlt: "Product 8" },
    { title: "Layanan Pelanggan 24/7", imgAlt: "Product 9" },
  ];

  // Handle scroll on dot click (change 3 items per scroll)
  const handleDotClick = (index) => {
    setActiveSlideGroup(index);
  };

  // Calculate the indices for the current group of 3 cards
  const currentGroupCards = cardData.slice(
    activeSlideGroup * 3,
    activeSlideGroup * 3 + 3
  );

  return (
    <div className="bg-[#0077d4] py-16 px-4 min-h-screen flex flex-col items-center">
      <h1 className="text-white text-center text-2xl font-bold mb-10">
        Keunggulan Produk
      </h1>

      {/* Scrollable container for cards */}
      <div className="overflow-x-auto flex gap-6 justify-start max-w-[90%] mx-auto">
        {currentGroupCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center max-w-[400px] w-full bg-gradient-to-b from-white to-[#eb7c49] rounded-xl p-4 h-[350px]" // Increased card height
          >
            {/* Image with larger size */}
            <img
              src={berandaImage}
              alt={card.imgAlt}
              className="w-32 h-auto rounded-lg object-cover" // Increased image size
            />

            {/* Text next to the image */}
            <div className="ml-6 flex items-center h-full">
              <h3 className="text-lg font-bold text-[#333] text-left">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: Math.ceil(cardData.length / 3) }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeSlideGroup === index ? "bg-white" : "bg-white opacity-50"
              }`}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default HeroSection3;
