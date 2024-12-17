import React from "react";
import fishIcon from "../../assets/gambar-1/home-4.jpeg";
import shoppingCartIcon from "../../assets/gambar-1/home-5.jpeg";
import packageIcon from "../../assets/gambar-1/home-6.jpg";
import starIcon from "../../assets/gambar-1/home-7.jpg";

const HeroSection4 = () => {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-5">
        Fitur Unggulan
      </h1>
      <p className="text-center text-sm mb-5 mx-auto w-1/2">
        Temukan kemudahan belanja ikan air tawar dengan fitur lengkap dan
        pengalaman belanja yang cepat serta aman.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Feature 1: Fish Icon */}
        <div className="bg-white rounded-lg shadow-md flex items-center p-5 group">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center mr-5 group-hover:bg-transparent group-hover:shadow-none transition-all ease-in-out duration-300">
            <img
              src={fishIcon}
              alt="Fish Icon"
              className="w-18 h-16 group-hover:opacity-80 group-hover:scale-110 group-hover:shadow-xl transition-all ease-in-out duration-300"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Beragam Kategori Ikan
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Temukan berbagai jenis ikan air tawar dengan mudah, mulai dari
              ikan konsumsi hingga ikan hias, semuanya tersedia dengan deskripsi
              lengkap.
            </p>
          </div>
        </div>

        {/* Feature 2: Shopping Cart Icon */}
        <div className="bg-white rounded-lg shadow-md flex items-center p-5 group">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center mr-5 group-hover:bg-transparent group-hover:shadow-none transition-all ease-in-out duration-300">
            <img
              src={shoppingCartIcon}
              alt="Shopping Cart Icon"
              className="w-18 h-16 group-hover:opacity-80 group-hover:scale-110 group-hover:shadow-xl transition-all ease-in-out duration-300"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Pembelian Mudah
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Nikmati proses belanja yang simpel dengan fitur keranjang,
              checkout, dan opsi pengiriman yang terintegrasi untuk pengalaman
              yang nyaman.
            </p>
          </div>
        </div>

        {/* Feature 3: Package Icon */}
        <div className="bg-white rounded-lg shadow-md flex items-center p-5 group">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center mr-5 group-hover:bg-transparent group-hover:shadow-none transition-all ease-in-out duration-300">
            <img
              src={packageIcon}
              alt="Package Icon"
              className="w-18 h-16 group-hover:opacity-80 group-hover:scale-110 group-hover:shadow-xl transition-all ease-in-out duration-300"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Pelacakan Pesanan
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Pantau status pesanan Anda, mulai dari belum dibayar, dikemas,
              hingga dikirim dan selesai.
            </p>
          </div>
        </div>

        {/* Feature 4: Star Icon */}
        <div className="bg-white rounded-lg shadow-md flex items-center p-5 group">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center mr-5 group-hover:bg-transparent group-hover:shadow-none transition-all ease-in-out duration-300">
            <img
              src={starIcon}
              alt="Star Icon"
              className="w-18 h-16 group-hover:opacity-80 group-hover:scale-110 group-hover:shadow-xl transition-all ease-in-out duration-300"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Ulasan Produk
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Baca rating dan ulasan produk untuk membantu Anda memilih dan
              meningkatkan kualitas layanan penjual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;
