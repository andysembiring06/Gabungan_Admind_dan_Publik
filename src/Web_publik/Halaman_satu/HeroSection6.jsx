import React from "react";

const HeroSection6 = () => {
  return (
    <section className="bg-gray-100 py-8 px-[10%] flex justify-between items-center">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto py-4 px-4">
        <h2 className="text-2xl font-bold text-gray-800 m-0">
          Mari Bergabung Bersama Kami
        </h2>
        <a
          href="https://play.google.com/store/games?hl=id&pli=1"
          className="bg-[#ff6b35] text-white no-underline py-2 px-6 rounded text-lg cursor-pointer transition duration-300 ease-in-out inline-block hover:bg-[#ff8557] active:scale-95"
        >
          Unduh Aplikasi
        </a>
      </div>
    </section>
  );
};

export default HeroSection6;
