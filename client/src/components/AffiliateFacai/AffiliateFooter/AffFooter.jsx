import React, { useContext } from "react";
import affiliateLogo from "../../../assets/v2/MCW_Aff_Logo.png";
import brandLogo from "../../../assets/v2/NC_entrypage-banner.png";
import AffMobileFooter from "./AffMobileFooter";
import { LanguageContext } from "@/Context/LanguageContext"; // Importing LanguageContext
import { Link } from "react-router-dom";

const AffFooter = ({ toggleOpenLanguage }) => {
  const { language } = useContext(LanguageContext); // Getting current language

  return (
    <div>
      {/* large Design */}
      <div className="bg-primary-primaryColor py-4 hidden lg:block">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-4">
          <div className="w-[20%]">
            <img src={affiliateLogo} alt="" className="w-full" />
          </div>
          <div className="whitespace-nowrap flex flex-col items-center text-white">
            <p>
              {language === "en"
                ? "Official Brand Partner"
                : "অফিশিয়াল ব্র্যান্ড পার্টনার"}
            </p>
            <img src={brandLogo} alt="" className="w-[30%]" />
          </div>
          <div>
            <p className="text-white whitespace-nowrap">
              <strong className="text-textSecondaryColor">
                {language === "en"
                  ? "Payment Agent Partnership"
                  : "পেমেন্ট এজেন্ট পার্টনারশিপ"}
              </strong>{" "}
              |{" "}
              <Link to="/affiliate/conditions">
            <strong className="text-textSecondaryColor pl-0 md:pl-2">
              {language === "en" ? "Terms & Conditions" : "টার্মস এবং কন্ডিশনস"}
            </strong>
            </Link>
            </p>
            <p className="text-white">
              {language === "en"
                ? "© 2022 MCW Copyrights. All Rights Reserved"
                : "© ২০২২ এমসিডব্লিউ কপিরাইট। সকল অধিকার সংরক্ষিত"}
            </p>
          </div>
        </div>
      </div>

      {/* small device */}

      <div className="bg-primary-primaryColor pb-32 py-4 lg:hidden">
        <div className="px-4 text-lg">
          <p className="text-white whitespace-nowrap">
            <strong className="text-textSecondaryColor">
              {language === "en"
                ? "Payment Agent Partnership "
                : "পেমেন্ট এজেন্ট পার্টনারশিপ "}
            </strong>
            | 
            <div className="md:hidden ">
            
            </div>
            <Link to="/affiliate/conditions">
            <strong className="text-textSecondaryColor pl-0 md:pl-2">
              {language === "en" ? "Terms & Conditions" : "টার্মস এবং কন্ডিশনস"}
            </strong>
            </Link>
          </p>
        </div>
        <div className="p-4">
          <hr />
        </div>

        <div className="px-4 py-2 flex flex-col items-start gap-3">
          <div className="w-[80%] md:w-[60%]">
            <img src={affiliateLogo} alt="" className="w-full" />
          </div>
          <div className="whitespace-nowrap flex flex-col items-start text-sm text-white">
            <p className="text-textSecondaryColor">
              {language === "en"
                ? " Trusted Brand Partner of New City VIP "
                : "অফিশিয়াল ব্র্যান্ড পার্টনার"}
            </p>
            <img src={brandLogo} alt="" className="w-[30%]" />
          </div>
        </div>
        <div className="flex flex-col text-sm leading-tight items-start px-4">
          <p className="text-textSecondaryColor">Best Quality Platform</p>
          <p className="text-white">
            {language === "en"
              ? "© 2022 MCW Copyrights. All Rights Reserved"
              : "MCWAffiliates © 2022 সর্বস্বত্ব সংরক্ষিত।"}
          </p>
        </div>
      </div>

      {/* small Design */}
      <div className="lg:hidden">
        <AffMobileFooter toggleOpenLanguage={toggleOpenLanguage} />
      </div>
    </div>
  );
};

export default AffFooter;
