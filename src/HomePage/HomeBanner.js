import Slider from "react-slick";
import banner1 from "./../Assets/HomePageAssets/Banner1.jpg";
import banner2 from "./../Assets/HomePageAssets/Banner2.jpg";
import banner3 from "./../Assets/HomePageAssets/Banner3.jpg";
import banner4 from "./../Assets/HomePageAssets/Banner4.jpg";

// Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 
               bg-gray-800/50 hover:bg-gray-800 text-white p-3 rounded-full flex items-center justify-center"
    onClick={onClick}
  >
    <i className="pi pi-angle-right text-xl"></i>
  </button>
);

// Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 
               bg-gray-800/50 hover:bg-gray-800 text-white p-3 rounded-full flex items-center justify-center"
    onClick={onClick}
  >
    <i className="pi pi-angle-left text-xl"></i>
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
    <div className="w-full h-screen overflow-hidden relative">
      <Slider {...settings} className="h-full">
        {[banner2,banner1, banner3, banner4].map((img, idx) => (
          <div key={idx} className="w-full h-screen">
            <img
              src={img}
              alt={`banner-${idx}`}
              className="w-full h-full object-cover"
              style={{ minHeight: "100vh" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
