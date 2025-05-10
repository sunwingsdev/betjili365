import image1 from "../../../assets/v2/image_222583.jpg";
import image2 from "../../../assets/v2/image_222713.jpg";
import image3 from "../../../assets/v2/image_222687.jpg";
import { LanguageContext } from "@/Context/LanguageContext";
import { useContext } from "react";
// import { CardSlider } from "@/components/home/CardSlider/CardSlider";
// import cardImage1 from "@/assets/card-slider/1.jpg";
// import cardImage2 from "@/assets/card-slider/2.jpg";
import cardImage1 from "../../../assets/betJilliImages/images/image_227548.jpg";
import cardImage2 from "../../../assets/betJilliImages/images/image_236701.jpg";
import cardImage3 from "../../../assets/betJilliImages/images/image_219256.jpg";
// const cardSliders = [
//   { id: 1, image: cardImage1 },
//   { id: 2, image: cardImage2 },
// ];

const HomeFavorite = () => {
  const images = [cardImage1, cardImage2, cardImage3];
  const { language } = useContext(LanguageContext);
  return (
    <div className=" mt-2 py-4">
      <div className="px-2">
        <h2 className="text-white border-l-4 px-2 border-textSecondaryColor text-base font-bold my-2">
          {language === "en" ? "Favorites" : "প্রিয় "}
        </h2>
        <div className="flex flex-row gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <div key={index} className="w-full min-w-[250px]">
              <img src={image} alt="" className="w-full rounded-lg " />
            </div>
          ))}
        </div>
        {/* <div className="flex  overflow-x-auto flex-row items-center justify-between gap-3 ">
                  <div className="md:w-1/3 rounded-lg">
                    <CardSlider cards={cardSliders} />
                  </div>
                  <div className="md:w-1/3 rounded-lg">
                    <CardSlider cards={cardSliders} />
                  </div>
                  <div className="md:w-1/3 rounded-lg">
                    <CardSlider cards={cardSliders} />
                  </div>
                </div> */}
      </div>
    </div>
  );
};

export default HomeFavorite;
