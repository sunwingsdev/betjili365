import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import LoginFacai from "./LoginFacai";

const LoginModal = ({isModalLoginOpen, setIsModalLoginOpen,setIsModalOpen,setIsModalForgetOpen}) => {
    
    const handleRegisterOpen = () => {
        setIsModalOpen(true);
        setIsModalLoginOpen(false);
      };

  return (
    <div className="fixed inset-0 z-50  text-white sm:hidden">
      <div className="flex items-center w-full bg-componentBgPrimary justify-between p-4">
        <button onClick={() => setIsModalLoginOpen(false)} className="text-white text-2xl">
          <FaChevronLeft />
        </button>
        <h2 className="ml-4 text-xl text-center w-full font-semibold">Login</h2>
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
