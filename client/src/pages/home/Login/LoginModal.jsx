import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import LoginFacai from "./LoginFacai";
import { LanguageContext } from "@/Context/LanguageContext";

const LoginModal = ({isModalLoginOpen, setIsModalLoginOpen,setIsModalOpen,setIsModalForgetOpen}) => {
  const { language } = useContext(LanguageContext);
    
    const handleRegisterOpen = () => {
        setIsModalOpen(true);
        setIsModalLoginOpen(false);
      };

  return (
    <div className="fixed inset-0 z-50  text-white sm:hidden">
      <div className="flex items-center w-full bg-primary-primaryColor justify-between py-2 p-4">
        
        <h2 className="ml-4  text-center w-full font-semibold">
          {language === "en" ? "Login":"লগ ইন"}
          </h2>
        <button onClick={() => setIsModalLoginOpen(false)} className="text-white text-xl">
        <RxCross2 />
        </button>
      </div>
      <div className="h-screen overflow-y-auto">
       
      <LoginFacai 
      handleRegisterOpen={handleRegisterOpen}
      setIsModalForgetOpen={setIsModalForgetOpen}
      />
       
      </div>
    </div>
  );
};

export default LoginModal;
