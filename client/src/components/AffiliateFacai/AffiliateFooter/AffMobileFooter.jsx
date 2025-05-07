import { LanguageContext } from "@/Context/LanguageContext";
import React, { useContext } from "react";
import bnFlag from "../../../assets/v2/bn-flag.jpg";
import { Link } from "react-router-dom";

const AffMobileFooter = ({ toggleOpenLanguage }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="fixed  bottom-0 flex  left-0 w-full bg-black    z-40  flex-row items-center justify-center   text-white font-bold ">
      <span
        className="font-semibold bg-backgroundSecondaryColor flex items-center justify-center w-1/3 py-4 gap-1 cursor-pointer"
        onClick={toggleOpenLanguage}
      >
        <img src={bnFlag} alt="" className="h-6" />
        <span
          className="text-white text-center text-sm
                        "
        >
          {language === "en" ? "English" : " বাংলা"}
        </span>
      </span>

      <Link
        to="/affiliate/signup"
        className="w-1/3 bg-primary-primaryColorTwo py-4 text-center block"
      >
        {language === "en" ? "Sign up" : "সাইন আপ"}
      </Link>

      <Link to="/affiliate/login"
      className="w-1/3 bg-backgroundSecondaryColor py-4 text-center text-white"
      >
        
          {language === "en" ? "Login" : "লগ ইন"}
        
      </Link>
    </div>
  );
};

export default AffMobileFooter;
