import { useContext, useEffect, useState } from "react";
import { LuUser } from "react-icons/lu";
import { PiWallet } from "react-icons/pi";
import { RiIdCardLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import Bdlogo from "../../../assets/mobile-colar/BDTHeader (1).svg";
import AccountDetailsMobile from "../AccountDetailsMobile/AccountDetailsMobile";
import { LanguageContext } from "@/Context/LanguageContext";
import RegisterModal from "@/pages/home/Register/RegisterModal";
import LoginModal from "@/pages/home/Login/LoginModal";

const MenuMobile = ({ toggleOpenLanguage,setIsModalOpen,setIsModalLoginOpen }) => {
  const { language } = useContext(LanguageContext);
  

  const { token, user } = useSelector((state) => state.auth);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  const authenticatedRoutes = [
    { icon: IoMdHome, title: "হোম", route: "/" },
    { icon: RiIdCardLine, title: "প্রমোশন", route: "" },
    {
      icon: PiWallet,
      title: "ডিপোজিট",
      route: "/profile/deposit",
      state: { method: "deposit" },
    },
    {
      icon: LuUser,
      title: "মাই একাউন্ট",
      route: "",
      onClick: () => setDrawerOpen(true),
    },
  ];

  return (
    <div
      className={`sticky bottom-0 z-40 flex flex-row items-center justify-center bg-gradient-to-b from-green-700 to-black text-white font-bold md:hidden ${
        user && token ? "justify-between px-3 py-2" : ""
      }`}
    >
      {!user && !token ? (
        <>
          <span className="font-semibold bg-gray-200 flex items-center justify-center w-1/3 py-2 gap-1 cursor-pointer">
            <img src={Bdlogo} alt="" className="h-6" />
            <span
              className="text-black text-left text-sm
            "
              onClick={toggleOpenLanguage}
            >
              
              {language === "en" ? "English":"ইংরেজি"}
              <br />
              {language === "en" ? "Bengali":"বাংলা"}
              
              
            </span>
          </span>

          <div
            onClick={() => setIsModalOpen(true)}
            className="w-1/3 bg-primary-primaryColorTwo py-4 text-center"
            
          >
            {language === "en" ? "Sign up" : "সাইন আপ "}
          </div>

          <div
          onClick={() => setIsModalLoginOpen(true)}
            className="w-1/3 bg-backgroundSecondaryColor py-4 text-center text-white"
            
          >
            {language === "en" ? "Login" : "লগ ইন"}
          </div>
        </>
      ) : (
        <>
          {authenticatedRoutes.map(
            ({ icon: Icon, title, route, onClick, state }) =>
              route ? (
                <Link
                  state={state}
                  to={route}
                  key={title}
                  className="flex flex-col items-center justify-center gap-1"
                  onClick={onClick}
                >
                  <Icon className="text-2xl" />
                  <p className="text-sm">{title}</p>
                </Link>
              ) : (
                <div
                  to={route ? route : ""}
                  key={title}
                  className="flex flex-col items-center justify-center gap-1"
                  onClick={onClick}
                >
                  <Icon className="text-2xl" />
                  <p className="text-sm">{title}</p>
                </div>
              )
          )}
        </>
      )}

      {/* Full-Height Drawer */}
      {isDrawerOpen && <AccountDetailsMobile setDrawerOpen={setDrawerOpen} />}
      
    </div>
  );
};

export default MenuMobile;
