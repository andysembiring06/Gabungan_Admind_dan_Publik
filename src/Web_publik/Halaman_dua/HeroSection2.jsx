import React, { useState, useRef } from "react";

// Mengimpor video dari folder yang benar
import video1 from "../../assets/vidio2/beranda-2-4.mp4";
import video2 from "../../assets/vidio2/2-4-2.mp4";
import video3 from "../../assets/vidio2/2-4-3.mp4";
import video4 from "../../assets/vidio2/2-4-4.mp4";
import video5 from "../../assets/vidio2/2-4-5.mp4";

import thumbnailVideo from "../../assets/gambar-2/beranda-vidio.jpg"; // Gambar untuk poster video

const HeroSection2 = () => {
  const [selectedVideo, setSelectedVideo] = useState(video1);
  const [videoIndex, setVideoIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const videoRef = useRef(null);

  const videos = [video1, video2, video3, video4, video5];

  const goToNextVideo = () => {
    setVideoIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < videos.length) {
        setSelectedVideo(videos[nextIndex]);
        return nextIndex;
      }
      return prevIndex;
    });
  };

  const handleClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount === 1) {
        // Putar video tanpa memeriksa status
        videoRef.current.play();
      } else if (newCount === 3) {
        // Arahkan ke YouTube setelah 3 klik berturut-turut
        window.location.href = "https://www.youtube.com";
        return 0; // Reset click count setelah diarahkan
      }

      // Reset clickCount setelah 1 detik
      setTimeout(() => setClickCount(0), 1000);

      return newCount;
    });
  };

  return (
    <section className="video-section py-12 px-5 bg-gray-100 text-center">
      <h2 className="video-title text-blue-500 text-3xl font-bold mb-10">
        Cara Kerja Aplikasi Kami
      </h2>

      {/* Video Utama */}
      <div className="video-main-container mx-auto mb-10 w-[800px] h-[450px] rounded-lg overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          controls
          poster={thumbnailVideo}
          className="w-full h-full object-cover"
          onEnded={goToNextVideo}
          onClick={handleClick}
        >
          <source src={selectedVideo} type="video/mp4" />
          <source src={selectedVideo} type="video/webm" />
          <source src={selectedVideo} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection2;
