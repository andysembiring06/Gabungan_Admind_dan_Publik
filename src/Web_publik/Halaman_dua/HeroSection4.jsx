import React from "react";

const HeroSection4 = () => {
  return (
    <section className="bg-gray-100 py-16 flex flex-col items-center">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Mari Bergabung Bersama Kami
        </h2>
      </div>
      <a
        href="https://play.google.com/store/games?hl=id&pli=1"
        className="bg-[#ff6b35] text-white no-underline py-2 px-6 rounded text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-[#ff8557] active:scale-95"
      >
        Unduh Aplikasi
      </a>
    </section>
  );
};

export default HeroSection4;
