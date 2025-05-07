import React, { useContext } from "react";
import iconTelegram from "../../assets/affiliateImages/icon_telegram.png";
import iconMail from "../../assets/affiliateImages/icon_email.png";
import { LanguageContext } from "@/Context/LanguageContext";

const AffiliateSupport = () => {
  const { language } = useContext(LanguageContext);
  const isBangla = language === "bn";

  return (
    <div className="bg-AffiliatePrimaryBg text-white">
      <div className="w-full mx-auto max-w-7xl py-[5%]">
        {/* large screen */}
        <div className="md:text-4xl lg:text-5xl font-semibold hidden md:block">
          <h3 className="text-center">
            {isBangla ? "অ্যাফিলিয়েট সাপোর্ট সময়:" : "Affiliate Support Hours:"}
            <span className="lg:hidden">
              <br />
            </span>
            <span className="text-textSecondaryColorTwo">
              {isBangla ? "সোমবার থেকে রবিবার" : "Monday to Sunday"}
            </span>
          </h3>
          <p className="text-textSecondaryColorTwo text-center py-2">
            7:00AM – 12:00PM <span className="text-white">(GMT+6)</span>
          </p>
        </div>

        {/* mobile screen */}
        <div className="text-4xl md:text-4xl font-semibold md:hidden uppercase pb-4">
          <p className="text-center">
            {isBangla ? "অ্যাফিলিয়েট" : "Affiliate"}
          </p>
          <p className="text-center">
            {isBangla ? "সাপোর্ট" : "Support"}
          </p>
          <p className="text-center">
            {isBangla ? "সময়:" : "Hours:"}
          </p>
          <p className="text-textSecondaryColorTwo text-center">
            {isBangla ? "সোমবার" : "Monday"}
          </p>
          <p className="text-textSecondaryColorTwo text-center">
            {isBangla ? "থেকে রবিবার" : "to Sunday"}
          </p>
          <div className="flex flex-col">
            <p className="text-textSecondaryColorTwo text-xl text-center py-2 leading-tight">
              7:00AM – 12:00PM
            </p>
            <p className="text-white text-center text-xl leading-tight">
              (GMT+6)
            </p>
          </div>
        </div>

        {/* contact section */}
        <div className="flex lg:flex-row flex-col items-center lg:justify-center gap-4 lg:gap-0 py-4">
          {/* telegram */}
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <div className="w-[15%]">
              <img src={iconTelegram} alt="" />
            </div>
            <div>
              <p>{isBangla ? "টেলিগ্রাম" : "Telegram"}</p>
              <p className="text-textSecondaryColor">MCWAFFILIATES Official</p>
            </div>
          </div>

          {/* email */}
          <div className="flex justify-center items-center gap-2 text-lg font-semibold pl-4 lg:pl-0">
            <div className="w-[15%]">
              <img src={iconMail} alt="" />
            </div>
            <div>
              <p>{isBangla ? "ইমেইল" : "Email"}</p>
              <p className="text-textSecondaryColor">
                affiliates@casinomcw.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateSupport;
