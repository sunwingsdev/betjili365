import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/Context/LanguageContext";
import AffModal from "@/components/AffModal/AffModal";


const AffiliateBottomNavbarTwo = ({ navItems,showModal,openModal }) => {
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("home");
  

  

  return (
    <>
      {/* Bottom Navbar */}
      <div className="bg-componentBgPrimary">
        <div className="flex justify-start mx-auto max-w-7xl px-2">
          {navItems.map(({ key, title, icon, link }) => (
            <div key={key} className="flex items-center">
              <Link
                to={link}
                onClick={() => {
                  setActiveTab(key);
                  if (key === "contact") openModal(); // example: open modal on Contact click
                }}
                className={`flex items-center gap-1 px-6 py-4  
                  ${
                    key === "promotions"
                      ? "bg-gold-gradient text-white font-semibold"
                      : activeTab === key
                      ? "text-textSecondaryColor border-textSecondaryColor bg-primary-primaryColorTwo border-b-2"
                      : "text-gray-300 hover:bg-primary-primaryColorTwo hover:border-textSecondaryColor hover:border-b-2 hover:text-white"
                  }`}
              >
                {icon ? (
                  icon
                ) : (
                  <span className="text-sm">{title[language]}</span>
                )}
              </Link>
              <p className="text-white">|</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <AffModal/>
      )}
    </>
  );
};

export default AffiliateBottomNavbarTwo;
