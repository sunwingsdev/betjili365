import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import slider1 from "../../../assets/betJilliImages/slidersImages/image_237518.jpg";
import slider2 from "../../../assets/betJilliImages/slidersImages/image_219046.jpg";
import slider3 from "../../../assets/betJilliImages/slidersImages/image_221526.jpg";
import slider4 from "../../../assets/betJilliImages/slidersImages/image_219788.jpg";
import slider5 from "../../../assets/betJilliImages/slidersImages/image_219491.jpg";

const DesktopSlider = () => {
  const slides = [slider1, slider2, slider3, slider4, slider5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [autoSlide, setAutoSlide] = useState(true);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
    setAutoSlide(false); // Stop auto slide on manual click
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setAutoSlide(false); // Stop auto slide on manual click
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slow auto slide (3s)

    return () => clearInterval(interval);
  }, [autoSlide, currentIndex]);

  // Restart autoSlide after manual interaction (optional)
  useEffect(() => {
    if (!autoSlide) {
      const timeout = setTimeout(() => {
        setAutoSlide(true); // Restart auto slide after 10s
      }, 1000); // Adjust timing as needed
      return () => clearTimeout(timeout);
    }
  }, [autoSlide]);

  const getPrevIndex = () =>
    currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;

  return (
    <div className="relative  w-full overflow-hidden">
      {/* Left (Previous) Preview Image */}
      <div className="absolute top-0 left-0 w-[5%] h-full z-0">
        <img
          src={slides[getPrevIndex()]}
          alt="Previous"
          className="w-full h-full object-cover rounded-lg opacity-60"
        />
      </div>

      {/* Right (Next) Preview Image */}
      <div className="absolute top-0 right-0 w-[5%] h-full z-0">
        <img
          src={slides[getNextIndex()]}
          alt="Next"
          className="w-full h-full object-cover rounded-lg opacity-60"
        />
      </div>

      {/* Center/Main Image */}
      <div className="relative z-10 w-[87%] mx-auto h-full rounded-lg overflow-hidden">
        <div
          key={currentIndex}
          className={`w-full h-full transition-transform duration-700 ${
            direction === "next" ? "animate-slide-left" : "animate-slide-right"
          }`}
        >
          <img
            src={slides[currentIndex]}
            alt="Current"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-2 rounded-full z-20"
        >
          <GrPrevious />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-2 rounded-full z-20"
        >
          <GrNext />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "next" : "prev");
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-jili-bgPrimary"
                  : "bg-white opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopSlider;
