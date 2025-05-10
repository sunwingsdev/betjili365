import { useState, useEffect } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import slider1 from "../../../assets/betJilliImages/slidersImages/image_237518.jpg";
import slider2 from "../../../assets/betJilliImages/slidersImages/image_219046.jpg";
import slider3 from "../../../assets/betJilliImages/slidersImages/image_221526.jpg";
import slider4 from "../../../assets/betJilliImages/slidersImages/image_219788.jpg";
import slider5 from "../../../assets/betJilliImages/slidersImages/image_219491.jpg";

const DesktopSlider = () => {
  const slides = [slider1, slider2, slider3, slider4, slider5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getPrevIndex = () =>
    currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;

  return (
    <div className="relative mt-8 w-full overflow-hidden">
      {/* Slider container */}
      <div className="relative   w-full">
        {/* Previous Image (left 10%) */}
        <div className="absolute top-0 left-0 w-[5%] h-full ">
          <img
            src={slides[getPrevIndex()]}
            alt="Previous"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Current Image (center 80%) */}
        <div className="mx-auto max-w-6xl  z-10 relative">
          <img
            src={slides[currentIndex]}
            alt="Current"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Next Image (right 10%) */}
        <div className="absolute top-0 right-0 w-[5%] h-full ">
          <img
            src={slides[getNextIndex()]}
            alt="Next"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Navigation Buttons */}

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
        <div className="relative w-full max-w-6xl h-full">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-2 rounded-full pointer-events-auto"
          >
            <GrPrevious />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-2 rounded-full pointer-events-auto"
          >
            <GrNext />
          </button>

          {/* Dot Navigation */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-jili-bgPrimary" : "bg-white opacity-50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSlider;
