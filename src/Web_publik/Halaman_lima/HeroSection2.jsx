import React, { useState } from "react";

// Import gambar
import LocationIcon from "../../assets/gambar-5/3.jpg";
import PhoneIcon from "../../assets/gambar-5/4.jpg";
import EmailIcon from "../../assets/gambar-5/5.jpg";

const HeroSection2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Fungsi untuk menangani perubahan input
  const handleChange = (setter) => (e) => setter(e.target.value);

  // Fungsi untuk menangani submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Memeriksa apakah semua kolom sudah diisi
    const formElements = e.target.elements;

    // Mengatur validasi khusus
    formElements.name.setCustomValidity(name ? "" : "Isi dahulu semua");
    formElements.email.setCustomValidity(email ? "" : "Isi dahulu semua");
    formElements.phone.setCustomValidity(phone ? "" : "Isi dahulu semua");
    formElements.message.setCustomValidity(message ? "" : "Isi dahulu semua");

    // Jika ada kolom kosong, form tidak akan terkirim
    if (!name || !email || !phone || !message) {
      return;
    }

    // Jika semua kolom sudah diisi, kirimkan data ke WhatsApp
    const waMessage = `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nPesan: ${message}`;
    const waLink = `https://wa.me/088271003161?text=${encodeURIComponent(
      waMessage
    )}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className="bg-[rgba(238,238,238,1)] flex justify-between items-center px-16 py-0">
      {/* Konten Kiri: Bagaimana Cara Menghubungi Kami? */}
      <div className="bg-[rgba(238,238,238,1)] p-10 rounded-lg shadow-lg max-w-[400px] mr-2 flex flex-col justify-center">
        <h1 className="text-xl mb-5 ml-4">Bagaimana Cara Menghubungi Kami?</h1>
        <p className="mb-4 ml-4">
          Kami disini untuk membantu anda dengan segala pertanyaan anda.
        </p>

        {/* Lokasi */}
        <div className="flex items-center mb-4">
          <img
            src={LocationIcon}
            alt="Location"
            className="w-6 h-6 mr-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Jl. Jken Segor No. 123, Kata Nelayang, Provinsi Bahori"
            target="_blank"
            className="text-blue-600 hover:underline ml-4"
          >
            Jl. Jken Segor No. 123, Kata Nelayang, Provinsi Bahori
          </a>
        </div>

        {/* Telepon */}
        <div className="flex items-center mb-4">
          <img
            src={PhoneIcon}
            alt="Phone"
            className="w-6 h-6 mr-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          />
          <a
            href="https://wa.me/088271003161?text=Halo%20saya%20ingin%20menghubungi%20anda."
            target="_blank"
            className="text-blue-600 hover:underline ml-4"
          >
            (021) 123-4567
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center mb-4">
          <img
            src={EmailIcon}
            alt="Email"
            className="w-6 h-6 mr-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          />
          <a
            href="mailto:sembiringp34@gmail.com?subject=Pesan%20dari%20Pengguna&body=Halo%20saya%20ingin%20berkomunikasi."
            className="text-blue-600 hover:underline ml-4"
          >
            support@ikansegar.com
          </a>
        </div>
      </div>

      {/* Konten Kanan: Kirimkan Saran Anda */}
      <div className="bg-blue-600 p-10 rounded-lg shadow-lg max-w-[400px] ml-10 mt-0 flex flex-col justify-center">
        <h2 className="text-white text-2xl mb-8 ml-4">Kirimkan Saran Anda</h2>
        <form onSubmit={handleSubmit}>
          {/* Form Row 1 */}
          <div className="flex justify-between mb-5">
            <div className="w-[48%]">
              <label htmlFor="name" className="text-white block text-sm mb-2">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg text-base text-black placeholder:text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
                placeholder="Nama"
                value={name}
                onChange={handleChange(setName)}
                required
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="email" className="text-white block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg text-base text-black placeholder:text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
                placeholder="Email"
                value={email}
                onChange={handleChange(setEmail)}
                required
              />
            </div>
          </div>

          {/* Form Row 2 */}
          <div className="flex justify-between mb-5">
            <div className="w-[48%]">
              <label htmlFor="phone" className="text-white block text-sm mb-2">
                Telepon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-agray-300 rounded-lg text-base text-black placeholder:text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
                placeholder="Telepon"
                value={phone}
                onChange={handleChange(setPhone)}
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="service"
                className="text-white block text-sm mb-2"
              >
                Layanan
              </label>
              <select
                id="service"
                name="service"
                className="w-full p-3 border border-gray-300 rounded-lg text-base text-black placeholder-transparent focus:outline-none focus:border-blue-400"
                required
              >
                <option value="">Layanan</option>
                <option value="konsultasi">Konsultasi & Saran</option>
                <option value="pembelian">Keluhan & Feedback</option>
                <option value="keluhan">Pengajuan Kemitraan</option>
                <option value="pertanyaan">Pertanyaan Teknis</option>
              </select>
            </div>
          </div>

          {/* Pesan */}
          <div className="mb-5">
            <label htmlFor="message" className="text-white block text-sm mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg text-base text-black placeholder:text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400 h-24"
              placeholder="Pesan"
              value={message}
              onChange={handleChange(setMessage)}
              required
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 text-lg rounded-lg mt-4 hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection2;
