import React, { useState } from "react";
import ikanImage from "../assets/gambar-4/hp-1.jpg";

function HeroSection2() {
  const [contentText, setContentText] = useState(
    "Menjadi platform terpercaya yang menghubungkan konsumen dengan produk ikan tawar berkualitas melalui transparansi, inovasi, dan pelayanan unggul."
  );

  const changeContent = (section) => {
    if (section === "visi") {
      setContentText(
        "Menjadi platform terpercaya yang menghubungkan konsumen dengan produk ikan tawar berkualitas melalui transparansi, inovasi, dan pelayanan unggul."
      );
    } else if (section === "misi") {
      setContentText(
        "Misi kami adalah mendukung pertumbuhan ekonomi lokal dengan meningkatkan nilai jual ikan tawar melalui inovasi dan layanan berkualitas."
      );
    } else if (section === "tujuan") {
      setContentText(
        "Tujuan kami adalah menjaga keberlanjutan sektor perikanan sambil menjadi penyedia ikan tawar yang paling dapat diandalkan."
      );
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-[#0088FF] text-4xl font-bold mb-4">
            Marketplace Ikan Tawar Inovatif
          </h1>
          <h2 className="text-[#0088FF] text-3xl font-bold mb-6">
            Visi Misi dan Tujuan Kami
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dengan fokus kepada kebutuhan pengguna, kami berkomitmen
            menghadirkan solusi inovatif yang meningkatkan nilai jual ikan air
            tawar, mendukung pertumbuhan ekonomi lokal dan kualitas di setiap
            transaksi. Kesuksesan anda dalam mendapatkan produk ikan segar
            adalah pencapaian tertinggi kami.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
          <div className="w-64 flex-shrink-0">
            <img
              src={ikanImage}
              alt="IkanKu App"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className="text-3xl font-bold mb-6 text-[#0088FF]">IkanKu</h3>
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => changeContent("visi")}
                className={`px-6 py-1.5 rounded-full text-sm border ${
                  contentText.includes("platform terpercaya")
                    ? "bg-[#FF6B35] text-white border-[#FF6B35]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                Visi
              </button>
              <button
                onClick={() => changeContent("misi")}
                className={`px-6 py-1.5 rounded-full text-sm border ${
                  contentText.includes("nilai jual")
                    ? "bg-[#FF6B35] text-white border-[#FF6B35]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                Misi
              </button>
              <button
                onClick={() => changeContent("tujuan")}
                className={`px-6 py-1.5 rounded-full text-sm border ${
                  contentText.includes("penyedia ikan tawar")
                    ? "bg-[#FF6B35] text-white border-[#FF6B35]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                Tujuan
              </button>
            </div>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{
                fontSize: "18px", // Ukuran font untuk memastikan tetap terlihat jelas
                lineHeight: "1.6", // Jarak antar baris agar lebih rapi
                maxHeight: "4.8em", // Membatasi paragraf hingga 3 baris
                overflow: "hidden", // Menyembunyikan teks yang melebihi 3 baris
                textOverflow: "ellipsis", // Menampilkan tanda "..." jika teks terpotong
              }}
            >
              {contentText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
