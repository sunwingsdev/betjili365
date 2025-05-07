import { LanguageContext } from "@/Context/LanguageContext";
import image1 from "../../../assets/betJilliImages/images/JILI-SLOT-132.png";
import image2 from "../../../assets/betJilliImages/images/JILI-SLOT-029.png";
import image3 from "../../../assets/betJilliImages/images/JILI-SLOT-082.png";
import image4 from "../../../assets/betJilliImages/images/JILI-SLOT-042.png";


// import image1 from "../../../assets/v2/JILI-SLOT-128.png";
// import image2 from "../../../assets/v2/CouchPotato.png";
// import image3 from "../../../assets/v2/1850016.png";
// import image4 from "../../../assets/v2/image_213472.png";
// import image5 from "../../../assets/v2/image_213473.png";
// import image6 from "../../../assets/v2/image_213476.png";
// import image7 from "../../../assets/v2/image_221117.png";
import { useContext } from "react";

const HomeFeatures = () => {
  const { language } = useContext(LanguageContext);
  // const images = [image1, image2, image3,
  //    image4, image5, image6, image7
  //   ];
  const images = [
    { src: image1, title: "Betjili Games" },
    { src: image2, title: "Money Coming" },
    { src: image3, title: "Cricket Sah75" },
    { src: image4, title: "Golden Empire" },
    // আরও চাইলে যুক্ত করুন
  ];
  
  return (
    <div className=" p-2">
      <h2 className="text-white border-l-4 px-2 border-textSecondaryColor text-base font-bold ">
               {language === "en" ? "Featured Games":"বৈশিষ্ট্যযুক্ত গেম "}
      </h2>
      {/* <div className="flex flex-row gap-2 py-2 overflow-x-auto">
        {images.map((image, index) => (
          <div key={index} className="min-w-[145px]  ">
            <img src={image} alt="" className="rounded-lg" />
          </div>
        ))}
      </div> */}
      <div className="flex flex-row gap-2 py-2 overflow-x-auto">
  {images.map((item, index) => (
    <div key={index} className="min-w-[145px]">
      <img
        src={item.src}
        alt=""
        className={` ${
          index === 1 ? 'h-[110px]' : ''
        } object-cover`} // হাইট অ্যাডজাস্ট
      />
      <p className=" bg-jili-bgSecondary py-1 text-sm pl-2 text-white">{item.title}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default HomeFeatures;
