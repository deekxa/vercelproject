import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

// Custom Arrows for the slider
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-3 shadow-md hover:bg-black/70 transition-all duration-300"
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-3xl" />
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-3 shadow-md hover:bg-black/70 transition-all duration-300"
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-3xl" />
    </button>
  );
}

const images = [
  {
    image: "/image/head.png",
    text: "Aavash, when your plate’s stacked with Nepali thali, but you still think achar is the missing puzzle piece. What a tragedy, huh?",
  },
  {
    image: "/image/head.png",
    text: "Ah, the Nepali thali, perfectly balanced... but wait, Aavash still can’t sit still without a side of achar. Ever heard of contentment?",
  },
  {
    image: "/image/head.png",
    text: "Seriously, Aavash? The Nepali thali’s staring you in the face, but you're still out hunting for achar. Time to reassess your life choices, mate.",
  },
  {
    image: "/image/head.png",
    text: "Nepali thali? Check. But of course, Aavash is still wandering the streets looking for achar. Because, well, that’s his idea of a good time.",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="home-container relative bg-gradient-to-t from-[#1F2937] via-[#374151] to-[#111827] min-h-screen">
      <Slider {...settings}>
        {images.map((slide, index) => (
          <div key={index} className="relative h-[80vh] flex justify-center items-center">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="max-h-full w-full object-cover rounded-lg shadow-xl "
              style={{ objectFit: "contain" }}  // Ensuring the image doesn't zoom
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
              <div className="bg-gradient-to-r from-black/50 to-black/80 text-white px-6 py-3 rounded-lg shadow-2xl max-w-lg mx-auto">
                <p className="text-lg md:text-xl font-semibold tracking-wide">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Title */}
      <h1 className="title text-5xl md:text-6xl font-extrabold text-center text-white mt-8 animate__animated animate__fadeIn animate__delay-1s">
        Aavash's Achar Obsession – The Journey of True Taste
      </h1>

      {/* Call-to-Action */}
    </div>
  );
};

export default Home;
