import React, { useContext, useEffect, useState } from "react";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import iconCasino from "../../../assets/betJilliImages/logos/icon-casino.svg";
import iconSport from "../../../assets/betJilliImages/logos/icon-sport.svg";
import iconSlot from "../../../assets/betJilliImages/logos/icon-slot.svg";
import iconTable from "../../../assets/betJilliImages/logos/icon-table.svg";
import iconCrash from "../../../assets/betJilliImages/logos/icon-crash.svg";
import iconLottery from "../../../assets/betJilliImages/logos/icon-lottery.svg";
import iconFish from "../../../assets/betJilliImages/logos/icon-fish.svg";
import iconArcade from "../../../assets/betJilliImages/logos/icon-arcade.svg";
import iconCock from "../../../assets/betJilliImages/logos/icon-cockfighting.svg";

import iconPromotion from "../../../assets/betJilliImages/logos/icon-promotion.svg";
import iconDownload from "../../../assets/betJilliImages/logos/icon-download.svg";
import iconAffiliate from "../../../assets/betJilliImages/logos/icon-affiliate.svg";
import iconAmbassador from "../../../assets/betJilliImages/logos/icon-ambassador.svg";

import iconCustomer from "../../../assets/betJilliImages/logos/icon-customer.svg";
import iconLine from "../../../assets/betJilliImages/logos/icon-line.svg";
import iconTelegram from "../../../assets/betJilliImages/logos/icon-telegram.svg";
import iconMail from "../../../assets/betJilliImages/logos/icon-email.svg";

import iconLogin from "../../../assets/betJilliImages/logos/icon-login.svg";
import iconHome from "../../../assets/betJilliImages/logos/icon-home.svg";

import { RiLoginBoxFill } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/Context/LanguageContext";

const MenuHeader = () => {
  const { language } = useContext(LanguageContext);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const t = (en, bn) => (language === "bn" ? bn : en);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const sectionOneItems = [
    { key: "slot", img: iconSlot, label: t("Slot", "স্লট"), link: "/slot" },
    { key: "casino", img: iconCasino, label: t("Casino", "ক্যাসিনো"), link: "/casino" },
    { key: "sport", img: iconSport, label: t("Sport", "স্পোর্টস"), link: "/sport" },
    { key: "table", img: iconTable, label: t("Table", "টেবিল"), link: "/table" },
    { key: "crash", img: iconCrash, label: t("Crash", "ক্র্যাশ"), link: "/crash" },
    { key: "lottery", img: iconLottery, label: t("Lottery", "লটারি"), link: "/lottery" },
    { key: "fishing", img: iconFish, label: t("Fishing", "ফিশিং"), link: "/fishing" },
    { key: "arcade", img: iconArcade, label: t("Arcade", "আর্কেড"), link: "/arcade" },
  ];

  const sectionTwoItems = [
    { key: "Promotion", img: iconPromotion, label: t("Promotion", "প্রমোশন"), link: "/promotion" },
    { key: "Download", img: iconDownload, label: t("Download", "ডাউনলোড"), link: "/download" },
    { key: "Affiliate", img: iconAffiliate, label: t("Affiliate", "অ্যাফিলিয়েট"), link: "/affiliate" },
    { key: "Ambassador", img: iconAmbassador, label: t("Ambassador", "অ্যাম্বাসেডর"), link: "/ambassador" },
  ];

  const sectionThreeItems = [
    { key: "Contact", img: iconCustomer, label: t("Contact Us", "যোগাযোগ করুন"), link: "/contact" },
    { key: "Line", img: iconLine, label: t("Line", "লাইন"), link: "/line" },
    { key: "Telegram", img: iconTelegram, label: t("Telegram", "টেলিগ্রাম"), link: "/telegram" },
    { key: "Mail1", img: iconMail, label: t("Mail", "মেইল"), link: "/mail1" },
    { key: "Mail2", img: iconMail, label: t("Mail", "মেইল"), link: "/mail2" },
  ];
  

  return (
    <div className="bg-transparent shadow-md pl-2 flex flex-col">
      <div className="py-1 flex justify-end">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 transition-all"
        >
          <span
            className={`text-sm font-semibold ${!isDark ? "text-black" : "text-white"}`}
          >
            {isDark ? "Dark" : "Light"}
          </span>
          <div className="w-10 h-5 bg-gray-400 rounded-full relative">
            <div
              className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300 flex items-center justify-center text-xs ${
                isDark ? "right-0.5" : "left-0.5"
              }`}
            >
              {isDark ? "🌙" : "☀️"}
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center gap-3 px-4 bg-jili-bgSecondary">
        <video
          id="coinVideo"
          autoPlay
          muted
          loop
          playsInline
          className="w-[45%]"
          poster="https://img.m156b.com/mb/h5/assets/images/dark/animation/head-coin.png?v=1746501713506"
        >
          <source
            type="video/quicktime"
            src="https://img.m156b.com/mb/h5/assets/images/dark/animation/head-coin.mov?v=1746501713506"
          />
          <source
            type="video/webm"
            src="https://img.m156b.com/mb/h5/assets/images/dark/animation/head-coin.webm?v=1746501713506"
          />
          Your browser does not support the video tag.
        </video>
        <h2 className="text-xs text-jili-textSecondary font-bold">
          {t("Hi Welcome", "স্বাগতম")}
        </h2>
      </div>

      <div className="bg-jili-bgPrimary py-2 text-black font-semibold text-xs rounded-b-md">
        <div className="flex justify-between px-4">
          <button className="flex items-center gap-2 py-2 rounded">
            <RiLoginBoxFill />
            {t("Login", "লগইন")}
          </button>
          <button className="flex items-center gap-2 py-2 rounded">
            <IoMdPersonAdd />
            {t("Sign Up", "সাইন আপ")}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <div className="grid grid-cols-3 gap-1 w-full">
          {sectionOneItems.map((item) => (
            <Link
              key={item.key}
              to={item.link}
              className="flex flex-col bg-jili-bgSecondary items-center text-center py-2 w-full rounded"
            >
              <div
                className="w-7 h-7"
                style={{
                  backgroundColor: "#FFE400",
                  WebkitMaskImage: `url(${item.img})`,
                  maskImage: `url(${item.img})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
              <p className="text-[10px]">{item.label}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 py-2 bg-jili-bgSecondary">
          {sectionTwoItems.map((item) => (
            <div key={item.key} className="flex flex-col items-center text-center">
              <Link to={item.link} className="flex flex-col items-center text-center">
                <img src={item.img} alt={item.label} className="w-7 h-7" />
                <p className="text-[10px]">{item.label}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 py-2 bg-jili-bgSecondary">
          {sectionThreeItems.map((item) => (
            <div key={item.key} className="flex flex-col items-center text-center">
              <Link to={item.link} className="flex flex-col items-center text-center">
                <img src={item.img} alt={item.label} className="w-7 h-7" />
                <p className="text-[10px]">{item.label}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-auto flex justify-between pt-4 text-[10px] p-4 bg-jili-bgSecondary">
          <Link className="flex items-center gap-2">
            <img src={iconHome} alt="" className="w-7 h-7" />
            <button>{t("Home", "হোম")}</button>
          </Link>
          <Link className="flex items-center gap-2">
            <img src={iconLogin} alt="" className="w-7 h-7" />
            <button>{t("Login", "লগইন")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
