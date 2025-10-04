import Slider from "react-slick";
import myVideo from "./../Assets/HomePageAssets/bannerVideo.mp4";
import banner1 from "./../Assets/HomePageAssets/Banner1.jpg";
import banner2 from "./../Assets/HomePageAssets/Banner2.jpg";
import banner3 from "./../Assets/HomePageAssets/Banner3.jpg";
import banner4 from "./../Assets/HomePageAssets/Banner4.jpg";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full"
    onClick={onClick}
  >
    &rarr;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full"
    onClick={onClick}
  >
    &larr;
  </button>
);

export default function ResponsiveBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Mobile Video */}
      <video
        className="w-full h-full object-cover block md:hidden"
        src={myVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hidden md:block w-full h-full relative">
        <Slider {...settings} className="h-full">
          {[banner1, banner2, banner3, banner4].map((img, idx) => (
            <div key={idx} className="w-full h-screen">
              <img
                src={img}
                alt={`banner-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
