import React, { useContext } from "react";
import imgShareEn from "../../assets/affiliateImages/img_revenueShare.png";
import imgShareBn from "../../assets/affiliateImages/img_revenueShare_bn.png"; 
import { LanguageContext } from "@/Context/LanguageContext";

const CalculationFormula = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "COMMISSION CALCULATION FORMULA:",
      image: imgShareEn,
    },
    bn: {
      heading: "কমিশন গণনার সূত্রঃ",
      image: imgShareBn,
    },
  };

  return (
    <div className="bg-AffiliatePrimaryBg py-[4%]">
      <div className="w-full mx-auto max-w-7xl">
        <h3 className="text-center text-white md:text-4xl lg:text-4xl text-3xl py-6">
          {content[language].heading}
        </h3>
        <div className="w-[90%] mx-auto lg:w-full">
          <img src={content[language].image} alt="Commission Formula" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default CalculationFormula;
