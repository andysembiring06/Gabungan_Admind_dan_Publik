import React from "react";
import telefonImage from "../../assets/gambar-5/4.jpg";
import emailImage from "../../assets/gambar-5/5.jpg";
import locationImage from "../../assets/gambar-5/3.jpg";

const HeroSection4 = () => {
  // Functions to handle click/hover events
  const handlePhoneClick = () => {
    window.location.href = "https://wa.me/088271003161?text=Hello"; // Redirects to WhatsApp to send a message
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:sembiringp34@gmail.com"; // Opens the email client to send an email
  };

  const handleLocationClick = () => {
    window.location.href =
      "https://www.google.com/maps/search/?api=1&query=Jl.+Ikan+Segar+No.+123%2C+Kota+Nelayan%2C+Provinsi+Bahari";
  };

  const handleImageHover = (e) => {
    e.currentTarget.classList.add("scale-110");
  };

  const handleImageLeave = (e) => {
    e.currentTarget.classList.remove("scale-110");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#f0f0f0] py-20">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#0077cc]">Satu Klik</h2>
        <p className="text-5xl font-bold text-[#0077cc]">
          Berhubung Dengan Kami
        </p>
      </div>

      {/* Contact Cards Section */}
      <div className="w-full max-w-screen-xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Telepon Card */}
        <div
          className="bg-[#0077cc] text-white p-6 rounded-lg flex flex-col items-center gap-4 max-w-[230px] cursor-pointer"
          onClick={handlePhoneClick}
        >
          <div
            className="w-16 h-16 mb-4 bg-white rounded-lg p-2 hover:scale-110 transition-transform"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={telefonImage}
              alt="Telepon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-white text-xl font-bold">Telepon</div>
          <div className="text-sm">(021) 123-4567</div>
        </div>

        {/* Email Card */}
        <div
          className="bg-[#0077cc] text-white p-6 rounded-lg flex flex-col items-center gap-4 max-w-[230px] cursor-pointer"
          onClick={handleEmailClick}
        >
          <div
            className="w-16 h-16 mb-4 bg-white rounded-lg p-2 hover:scale-110 transition-transform"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={emailImage}
              alt="Email"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-white text-xl font-bold">Email</div>
          <div className="text-sm">support@ikansegar.com</div>
        </div>

        {/* Lokasi Card */}
        <div
          className="bg-[#0077cc] text-white p-6 rounded-lg flex flex-col items-center gap-4 max-w-[230px] cursor-pointer"
          onClick={handleLocationClick}
        >
          <div
            className="w-16 h-16 mb-4 bg-white rounded-lg p-2 hover:scale-110 transition-transform"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={locationImage}
              alt="Lokasi"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-white text-xl font-bold">Lokasi</div>
          <div className="text-sm">
            <span>Jl. Ikan Segar No. 123, Kota</span>
            <br />
            <span>Nelayan, Provinsi Bahari</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;
