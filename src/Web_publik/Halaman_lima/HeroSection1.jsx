import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Apa Itu IkanKu ?",
      answer:
        "Aplikasi marketplace ikan tawar yang menghubungkan konsumen dengan petani lokal.",
    },
    {
      question: "Bagaimana cara mendaftar di aplikasi ini ?",
      answer:
        "Anda dapat mendaftar dengan mengisi formulir pendaftaran yang tersedia di aplikasi dengan mencantumkan data diri lengkap.",
    },
    {
      question:
        "Bagaimana cara melakukan pembelian ikan tawar di aplikasi ini ?",
      answer:
        "Pilih ikan yang ingin dibeli, masukkan ke keranjang, pilih metode pembayaran, dan selesaikan transaksi.",
    },
    {
      question: "Apa saja metode pembayaran yang tersedia ?",
      answer:
        "Kami menyediakan berbagai metode pembayaran seperti transfer bank, e-wallet, dan pembayaran tunai.",
    },
    {
      question: "Apakah ada kebijakan pengembalian produk ?",
      answer:
        "Ya, kami memiliki kebijakan pengembalian produk dalam waktu 24 jam jika produk tidak sesuai dengan deskripsi.",
    },
    {
      question: "Bagaimana cara memberikan ulasan atau rating produk?",
      answer:
        "Setelah menerima produk, Anda dapat memberikan ulasan dan rating melalui halaman detail pesanan.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}
    >
      <div className="max-w-3xl mx-auto bg-blue-500 rounded-xl p-6 mt-20 mb-20">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Pertanyaan Yang Sering Diajukan
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-3">
            {faqData.slice(0, 3).map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <button
                  className="w-full p-3 text-left flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-sm">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeIndex === index && (
                  <div className="px-3 pb-3">
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {faqData.slice(3, 6).map((item, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-3 text-left flex justify-between items-center"
                  onClick={() => toggleAccordion(index + 3)}
                >
                  <span className="font-medium text-sm">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeIndex === index + 3 ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeIndex === index + 3 && (
                  <div className="px-3 pb-3">
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
