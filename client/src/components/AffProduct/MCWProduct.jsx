import React, { useContext } from 'react';
import { LanguageContext } from '@/Context/LanguageContext';

// English Images
import enImage1 from "../../assets/affiliateImages/banner_mcw-sports-scaled.jpg";
import enImage2 from "../../assets/affiliateImages/banner_mcw-casino-1-scaled.jpg";
import enImage3 from "../../assets/affiliateImages/banner_mcw-slots-scaled.jpg";
import enImage4 from "../../assets/affiliateImages/banner_mcw-table-1-scaled.jpg";
import enImage5 from "../../assets/affiliateImages/banner_mcw-lottery-1-scaled.jpg";
import enImage6 from "../../assets/affiliateImages/MCW-Products-scaled.jpg";

// Bangla Images
import bnImage1 from "../../assets/affiliateImages/banner_mcw-sports_bn-scaled (1).jpg";
import bnImage2 from "../../assets/affiliateImages/banner_mcw-casino_bn-scaled (1).jpg";
import bnImage3 from "../../assets/affiliateImages/banner_mcw-slots_bn-scaled (1).jpg";
import bnImage4 from "../../assets/affiliateImages/banner_mcw-table_bn-scaled (1).jpg";
import bnImage5 from "../../assets/affiliateImages/banner_mcw-lottery_bn-scaled (1).jpg";
import bnImage6 from "../../assets/affiliateImages/banner_mcw-promotion_bn-scaled (1).jpg";

const MCWProduct = () => {
  const { language } = useContext(LanguageContext);

  const productImages = language === "en"
    ? [enImage1, enImage2, enImage3, enImage4, enImage5, enImage6]
    : [bnImage1, bnImage2, bnImage3, bnImage4, bnImage5, bnImage6];

  return (
    <div className="bg-AffiliatePrimaryBg">
      <div className="max-w-7xl mx-auto w-full p-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          <span className="text-textSecondaryColorTwo">MCW</span>{' '}
          {language === "en" ? "PRODUCT" : "পণ্য"}
        </h2>

        <div className="flex w-full flex-col items-center gap-4">
          {productImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              className="w-full border-2 border-textSecondaryColor rounded shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MCWProduct;
