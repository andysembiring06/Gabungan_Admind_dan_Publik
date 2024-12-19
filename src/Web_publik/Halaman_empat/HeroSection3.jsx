import React from "react";
import img1 from "../../assets/gambar-4/1.png";
import img2 from "../../assets/gambar-4/2.png";
import img3 from "../../assets/gambar-4/3.png";
import img4 from "../../assets/gambar-4/4.png";
import img5 from "../../assets/gambar-4/5.png";
import img6 from "../../assets/gambar-4/6.png";
import img7 from "../../assets/gambar-4/7.png";
import img8 from "../../assets/gambar-4/8.png";
import img9 from "../../assets/gambar-4/9.png";
import img10 from "../../assets/gambar-4/10.png";
import img11 from "../../assets/gambar-4/11.png";
import img12 from "../../assets/gambar-4/12.png";

const HeroSection3 = () => {
  return (
    <div className="bg-[#0088FF] min-h-screen py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12">
        <h1 className="text-center text-3xl font-bold text-[#0088FF] mb-12">
          Tim Kami
        </h1>

        {/* Founder & CEO Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Founder & CEO</h2>
          <div className="flex items-center justify-center">
            {/* Bagian Gambar - 2 kolom layout */}
            <div className="grid grid-cols-2 gap-8 w-1/2">
              <div className="flex items-center gap-2">
                <img
                  src={img1}
                  alt="Surya Fahriandi"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Surya Fahriandi</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img2}
                  alt="Mohamad Feby"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Mohamad Feby</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img3}
                  alt="Naufal Fadhilah"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Naufal Fadhilah</p>
              </div>
            </div>

            {/* Garis Vertikal */}
            <div className="w-0.5 bg-gray-400 mx-8 self-stretch"></div>

            {/* Deskripsi */}
            <div className="w-1/2 pl-4 flex justify-center">
              <p className="text-base text-left leading-relaxed text-gray-700">
                Founder yang memiliki visi dan misi kuat untuk menghadirkan
                inovasi dalam marketplace ikan tawar, beliau memiliki kemampuan
                luar biasa dalam membangun tim dan mengarahkan bisnis ke arah
                yang lebih baik, dengan fokus pada pertumbuhan ekonomi lokal dan
                kesejahteraan masyarakat.
              </p>
            </div>
          </div>
        </div>

        {/* Designer Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Designer</h2>
          <div className="flex items-center justify-center">
            {/* Bagian Gambar - 2 kolom layout */}
            <div className="grid grid-cols-2 gap-8 w-1/2">
              <div className="flex items-center gap-2">
                <img
                  src={img4}
                  alt="Dicky Aryadi"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Dicky Aryadi</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img5}
                  alt="Hafid Daris F"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Hafid Daris F</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img6}
                  alt="Rita Yuliana"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Ririn FItri Wulandari</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img7}
                  alt="Miftahul Fazra"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Miftahul Fazra</p>
              </div>
            </div>

            {/* Garis Vertikal */}
            <div className="w-0.5 bg-gray-400 mx-8 self-stretch"></div>

            {/* Deskripsi */}
            <div className="w-1/2 pl-4 flex justify-center">
              <p className="text-base text-left leading-relaxed text-gray-700">
                Para desainer berbakat yang berfokus pada User Experience (UX)
                dan User Interface (UI). Dengan pemahaman mendalam tentang
                kebutuhan pengguna, mereka merancang antar muka yang intuitif
                dan estetik untuk memberikan pengalaman terbaik dalam
                menggunakan aplikasi ini.
              </p>
            </div>
          </div>
        </div>

        {/* Developer Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Developer</h2>
          <div className="flex items-center justify-center">
            {/* Bagian Gambar - 2 kolom layout */}
            <div className="grid grid-cols-2 gap-8 w-1/2">
              <div className="flex items-center gap-2">
                <img
                  src={img8}
                  alt="Ali Fadhilah"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Absar Rakha</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img9}
                  alt="Budi Santoso"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Andi Sembiring</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img10}
                  alt="Citra Dewi"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Muhammad Dzakwan</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img11}
                  alt="Joko Wahyudi"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Zia Djulyanza</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={img12}
                  alt="Siti Nurbaya"
                  className="w-32 h-32 rounded-lg object-cover transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500"
                />
                <p className="text-sm font-normal">Muhammad Dzaky</p>
              </div>
            </div>

            {/* Garis Vertikal */}
            <div className="w-0.5 bg-gray-400 mx-8 self-stretch"></div>

            {/* Deskripsi */}
            <div className="w-1/2 pl-4 flex justify-center">
              <p className="text-base text-left leading-relaxed text-gray-700">
                Developer dengan keahlian dalam membangun platform berbasis web
                dan mobile yang responsif. Mereka berkomitmen untuk
                mengembangkan teknologi yang dapat mendukung kemajuan bisnis dan
                memberikan kemudahan bagi pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
