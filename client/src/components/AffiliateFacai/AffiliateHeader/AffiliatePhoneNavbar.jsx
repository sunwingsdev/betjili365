import React, { useState, useContext } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import affiliateLogo from "../../../assets/v2/MCW_Aff_Logo.png";
import { LanguageContext } from "@/Context/LanguageContext"; // Importing the LanguageContext
import AffModal from "@/components/AffModal/AffModal";

const AffiliatePhoneNavbar = ({ navItems,showModal,openModal }) => {
  const { language } = useContext(LanguageContext); // Getting the current language
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <div className="bg-primary-primaryColor">
        <div className="flex  justify-between items-center p-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiMenuAlt2 className="text-textSecondaryColor w-6 h-6" />
          </button>

          <div className="w-[40%]">
            <img src={affiliateLogo} alt="" className="w-full" />
          </div>

          <div className="text-textSecondaryColor flex flex-col items-center">
            <MdOutlineMessage className="text-2xl" />
            <div className="text-[10px] flex flex-col leading-tight">
              <p>AFFILIATE</p>
              <p>SUPPORT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-primary-primaryColor shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 p-2">
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl text-textSecondaryColor"
          >
            ✕
          </button>

          <div className="w-[40%]">
            <img src={affiliateLogo} alt="" className="w-full" />
          </div>

          <div className="text-textSecondaryColor flex flex-col items-center">
            <MdOutlineMessage className="text-2xl" />
            <div className="text-[10px] flex flex-col leading-tight">
              <p>AFFILIATE</p>
              <p>SUPPORT</p>
            </div>
          </div>
        </div>

        <ul>
          {navItems.map(({ key, title, link }) => (
            <div key={key}>
              <li>
                <Link
                  to={link}
                  
                  className={`flex items-center text-lg p-3 text-white
                    ${
                      key === "promotions"
                        ? "bg-gold-gradient font-semibold"
                        : activeTab === key
                        ? "text-textSecondaryColor border-textSecondaryColor bg-primary-primaryColorTwo border-b-2"
                        : "text-gray-300 hover:bg-primary-primaryColorTwo hover:border-textSecondaryColor border-b  border-white border-opacity-20 hover:border-b-2"
                    }`}
                    onClick={() => {
                      setActiveTab(key);
                      setIsOpen(false);
                      if (key === "contact") {
                        openModal(); // ✅ open modal from global context
                      }
                    }}
                >
                  <span>{title[language]}</span>
                </Link>
              </li>
            </div>
          ))}

          {/* 🔻 Hardcoded "Download App" item */}
          <li>
            <Link
              to="/"
              className="flex items-center text-lg p-3 text-gray-300 hover:bg-primary-primaryColorTwo hover:border-textSecondaryColor border-b  border-white border-opacity-20 hover:border-b-2"
              onClick={() => setIsOpen(false)}
            >
              <span>
                {language === "en" ? "Download App" : "অ্যাপ ডাউনলোড করুন"}
              </span>
            </Link>
          </li>
        </ul>

      </div>
      {showModal && (
              <AffModal/>
            )}
    </>
  );
};

export default AffiliatePhoneNavbar;
