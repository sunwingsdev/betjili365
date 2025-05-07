import React, { useContext } from "react";
import affiliateLogo from "../../../assets/v2/MCW_Aff_Logo.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/Context/LanguageContext";

const AffiliateBottomNavbar = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="bg-AffiliatePrimaryBg py-2">
      <div className="flex justify-between items-center mx-auto max-w-7xl px-4">
        <div>
          <img src={affiliateLogo} alt="" className="w-[20%]" />
        </div>
        <div className="flex text-white gap-2 whitespace-nowrap">
          <Link to="/affiliate/login">
            <p className="px-7 py-1 bg-white-to-darkblue   hover:border border border-transparent rounded cursor-pointer">
            {language === "en" ? "Login" : "লগ ইন"}
            </p>
          </Link>

          <Link to="/affiliate/signup">
            <p className="px-7 py-1 bg-gold-gradient   hover:border border border-transparent rounded cursor-pointer">
            {language === "en" ? "Sign up" : "সাইন আপ"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AffiliateBottomNavbar;
