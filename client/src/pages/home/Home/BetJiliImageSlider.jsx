import  { useEffect, useState } from 'react';
import image1 from "../../../assets/betJilliImages/slidersImages/image_219047.jpg";
import image2 from "../../../assets/betJilliImages/slidersImages/image_221527.jpg";
import image3 from "../../../assets/betJilliImages/slidersImages/image_219789.jpg";
import image4 from "../../../assets/betJilliImages/slidersImages/image_219492.jpg";
import image5 from "../../../assets/betJilliImages/slidersImages/image_217324.jpg";


const BetJiliImageSlider = () => {
    const images = [image1, image2, image3, image4, image5];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000); // 3 seconds interval
      
          return () => clearInterval(interval);
        }, [images.length]);
    return (
        <div className="w-full bg-primary-primaryColorJili flex flex-col items-center ">
        <div className="relative  w-full grid   lg:grid-cols-1 ">
          <img
            src={images[currentIndex]}
            alt=""
            className="w-full h-32 lg:hidden flex md:h-auto  "
          />
          {/* <img
            src={imagesLarger[currentIndex]}
            alt=""
            className="w-full h-auto hidden lg:flex  "
          /> */}

          <div className="absolute bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-jili-bgPrimary" : "bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
};

export default BetJiliImageSlider;