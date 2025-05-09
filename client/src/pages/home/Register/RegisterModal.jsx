import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import RegisterFacai from "./RegisterFacai";

const RegisterModal = ({
  isModalOpen,
  setIsModalOpen,
  setIsModalLoginOpen,
}) => {
  const handleLoginOpen = () => {
    setIsModalOpen(false);
    setIsModalLoginOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50  text-white sm:hidden">
      <div className="flex items-center w-full bg-primary-primaryColor justify-between p-4">
       
        <h2 className="ml-4 text-xl text-center w-full font-semibold">
          Sign Up
        </h2>
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-white text-2xl"
        >
         <RxCross2 />
        </button>
      </div>
      <div className="h-screen overflow-y-auto">
        <RegisterFacai
          setIsModalOpen={setIsModalOpen}
          handleLoginOpen={handleLoginOpen}
        />
      </div>
    </div>
  );
};

export default RegisterModal;
