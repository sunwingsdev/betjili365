import React, { useContext, useState } from "react";
import image1 from "../../assets/affiliateImages/banner-mob_ipl2025.jpg";
import image2 from "../../assets/affiliateImages/600x400.jpg";
import image3 from "../../assets/affiliateImages/MCW-Affi_BDT_EN_Aff-Promo_NL_600x400.jpg";
import image4 from "../../assets/affiliateImages/EN_BDT_Affiliate-Promo_600x400-1.jpg";
import image5 from "../../assets/affiliateImages/banner_mob_MCBC .jpg";
import image6 from "../../assets/affiliateImages/MCW_BDT_EN_Affi-Promo_IPL-Giveaway_NL_600x400 .jpg";
import image7 from "../../assets/affiliateImages/Untitled-1.pngPromo-Page_600x400 .png";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/Context/LanguageContext";

const tabs = [
  { key: "ongoing", title_en: "ONGOING", title_bn: "চলমান" },
  { key: "completed", title_en: "COMPLETED", title_bn: "সমাপ্ত" },
];

const ongoingItems = [
  {
    key: "Ongoing1",
    status_en: "ONGOING",
    status_bn: "চলমান",
    text: "Indian Premier League Diamond Vault 2025",
    img: image1,
    link: "/affiliate/diamond-volt",
  },
  {
    key: "Ongoing2",
    status_en: "ONGOING",
    status_bn: "চলমান",
    text: "New Affiliates Exclusive Offer Up to 52% Weekly Commission",
    img: image2,
    link: "",
  },
  {
    key: "Ongoing3",
    status_en: "ONGOING",
    status_bn: "চলমান",
    text: "Affiliate FTD Boost",
    img: image3,
    link: "",
  },
  {
    key: "Ongoing4",
    status_en: "ONGOING",
    status_bn: "চলমান",
    text: "AFFILIATE REFERRAL PROGRAM",
    img: image4,
    link: "",
  },
];

const completedItems = [
  {
    key: "Completed1",
    status_en: "COMPLETED",
    status_bn: "সমাপ্ত",
    text: "BPL 2025 Mystery Cricket Box Challenge",
    img: image5,
    link: "",
  },
  {
    key: "Completed2",
    status_en: "COMPLETED",
    status_bn: "সমাপ্ত",
    text: "MCW AFFILIATES IPL 26,000,000.00 GIVE AWAY",
    img: image6,
    link: "",
  },
  {
    key: "Completed3",
    status_en: "COMPLETED",
    status_bn: "সমাপ্ত",
    text: "MCW AFFILIATES T20 CRICKET THRILL SPINS",
    img: image7,
    link: "",
  },
];

const MCWPromotions = () => {
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <div className="bg-AffiliatePrimaryBg">
      <div className="max-w-5xl mx-auto p-4">
        <h3 className="text-center text-white text-4xl py-8">
          <span className="text-textSecondaryColorTwo">MCW</span>{" "}
          {language === "bn" ? "প্রচারাভিযান" : "PROMOTION"}
        </h3>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row w-full mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`w-full py-2 uppercase text-white font-bold ${
                activeTab === tab.key
                  ? "bg-backgroundSecondaryColor"
                  : "bg-primary-primaryColor"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {language === "bn" ? tab.title_bn : tab.title_en}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 text-white lg:grid-cols-2 gap-4 gap-y-16 md:px-4 lg:px-0 px-0">
          {(activeTab === "ongoing" ? ongoingItems : completedItems).map(
            (item) => (
              <div
                key={item.key}
                className="rounded shadow-md flex flex-col items-center text-center"
              >
                <button
                  className={`text-white text-lg w-full py-2 rounded ${
                    (language === "bn"
                      ? item.status_bn === "চলমান"
                      : item.status_en === "ONGOING")
                      ? "bg-[#158000]"
                      : "bg-[#800000]"
                  }`}
                >
                  {language === "bn" ? item.status_bn : item.status_en}
                </button>

                <img
                  src={item.img}
                  alt="Promo"
                  className="w-full object-cover"
                />

                <p className="mb-3 w-full bg-componentBgPrimary text-white py-4 text-3xl">
                  {item.text}
                </p>

                
                  <Link
                    to={item.link}
                    className="bg-white-to-darkblue w-full px-4 py-2 rounded mb-2 text-center"
                  >
                    {language === "bn" ? "বিস্তারিত দেখুন" : "MORE DETAILS"}
                  </Link>
                

                <Link
                  className="bg-gold-gradient w-full px-4 py-2 rounded"
                  to="/affiliate/signup"
                >
                  <button>{language === "bn" ? "সাইন আপ করুন" : "SIGN UP"}</button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MCWPromotions;
