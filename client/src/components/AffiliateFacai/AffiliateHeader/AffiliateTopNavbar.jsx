import React, { useContext } from "react";
import bnFlag from "../../../assets/v2/bn-flag.jpg";
import { Link } from "react-router-dom";
import imageApp from "../../../assets/v2/icon-apk.png";
import emailImg from "../../../assets/v2/icon-cs.png";
import facebookImg from "../../../assets/v2/icon-telegram.png";
import telegramImg from "../../../assets/v2/icon-mail.png";
import { LanguageContext } from "@/Context/LanguageContext"; // Importing LanguageContext

const AffiliateTopNavbar = ({ toggleOpenLanguage }) => {
  const { language } = useContext(LanguageContext); // Getting current language from context

  const socialItems = [
    { title: language === "en" ? "Download App" : "অ্যাপ ডাউনলোড করুন", img: imageApp, route: "" },
    { title: language === "en" ? "Affiliate Support" : "অ্যাফিলিয়েট সাপোর্ট", img: emailImg, route: "" },
    { title: language === "en" ? "Telegram" : "টেলিগ্রাম", img: telegramImg, route: "" },
    { title: language === "en" ? "Email" : "ইমেইল", img: facebookImg, route: "" },
  ];

  return (
    <div className="bg-primary-primaryColor">
      <div className="mx-auto max-w-7xl flex justify-between py-2 px-4">
        {/* Language Flag */}
        <div className="flex gap-2 items-center cursor-pointer" onClick={toggleOpenLanguage}>
          <img src={bnFlag} alt="Bangla" className="w-[20px] h-[14px]" />
          <p className="text-textSecondaryColor">{language === "en" ? "English" : "বাংলা"}</p>
        </div>

        {/* Social Items with Images */}
        <div className="flex items-center">
          {socialItems.map(({ title, img, route }, index) => (
            <Link
              to={route}
              key={title}
              className={`flex items-center gap-1 justify-center px-3 text-gray-300 hover:text-white ${
                index !== socialItems.length - 1 && "border-r-[1px] border-gray-500"
              }`}
            >
              <img src={img} alt={title} className="w-4 h-4" />
              <span className="text-sm">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliateTopNavbar;
