import fishImage from "../assets/gambar-4/ikan.jpg";

function HeroSection1() {
  return (
    <div className="flex justify-center items-center bg-white p-5 rounded-lg shadow-md">
      <img
        src={fishImage}
        alt="Person holding a fish"
        className="max-w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-5px] hover:shadow-lg"
      />
    </div>
  );
}

export default HeroSection1;
