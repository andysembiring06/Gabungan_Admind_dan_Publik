import React from "react";

const HeroSection3 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#eeeeee]">
      <div className="relative w-11/12 max-w-[1100px] shadow-md border-8 border-[#177BCD] overflow-hidden rounded-lg">
        <iframe
          className="w-full h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63702.82822526398!2d101.3996811896875!3d0.5070673999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac0e637a6af1%3A0x3039d80b220bc40!2sPekanbaru%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1234567890123"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "none" }}
        ></iframe>
        <a
          href="https://www.google.com/maps/place/Pekanbaru,+Kota+Pekanbaru,+Riau/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 right-0 bottom-0 bg-transparent"
        ></a>
      </div>
    </div>
  );
};

export default HeroSection3;
