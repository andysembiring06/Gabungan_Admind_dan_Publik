import React from "react";
import ikan3 from "../../assets/gambar-1/home-3.png";

const HeroSection3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 bg-cover bg-fixed">
      <div className="container-3 flex items-center max-w-screen-xl mx-auto px-5 py-10">
        <div className="phone-mockup flex-1 ml-auto flex justify-center items-center">
          <img
            src={ikan3}
            alt="Phone Mockup"
            className="phone-image w-1/3 max-w-none h-auto ml-[35%] mt-10"
          />
        </div>
        <div className="content flex-1">
          <h1 className="title text-4xl font-bold mb-8 text-white">
            Kenapa IkanKu?
          </h1>

          {/* Feature 1 */}
          <div className="feature relative flex items-center mb-8">
            <div className="feature-icon text-2xl font-bold bg-orange-500 text-blue-800 w-10 h-10 rounded-full flex justify-center items-center mr-5 relative">
              1{/* Extended dotted line */}
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full h-[100px] border-l-2 border-dotted border-orange-500"></span>
            </div>
            <div className="feature-text text-lg leading-relaxed ml-5 text-white">
              Ikan Segar Langsung ke Rumah Anda
              <br />
              Dapatkan ikan segar langsung dari peternak lokal yang diantar
              langsung ke rumah Anda. Tanpa perantara, hanya ikan berkualitas
              tinggi untuk kebutuhan harian Anda.
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature relative flex items-start mb-8">
            <div className="feature-icon text-2xl font-bold bg-orange-500 text-blue-800 w-10 h-10 rounded-full flex justify-center items-center mr-5 relative">
              2{/* Extended dotted line */}
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full h-[150px] border-l-2 border-dotted border-orange-500"></span>{" "}
              {/* Increased height for more dotted segments */}
            </div>
            <div className="feature-text text-lg leading-relaxed ml-5 text-white">
              Mudah dan Praktis
              <br />
              Cukup dengan beberapa ketukan, Anda bisa menjelajahi, memilih, dan
              memesan ikan air tawar favorit kapan saja dan di mana saja.
              Belanja cepat dan mudah, langsung dari genggaman tangan Anda.
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature relative flex items-center mb-8">
            <div className="feature-icon text-2xl font-bold bg-orange-500 text-blue-800 w-10 h-10 rounded-full flex justify-center items-center mr-5 relative">
              3 {/* No dotted line here */}
            </div>
            <div className="feature-text text-lg leading-relaxed ml-5 text-white">
              Jaminan Kesegaran
              <br />
              Kami menjamin bahwa ikan yang Anda pesan dipilih dengan cermat dan
              diproses agar tetap segar hingga sampai ke tangan Anda.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
