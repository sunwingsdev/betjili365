import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
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
      <div className="flex items-center w-full bg-componentBgPrimary justify-between p-4">
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-white text-2xl"
        >
          <FaChevronLeft />
        </button>
        <h2 className="ml-4 text-xl text-center w-full font-semibold">
          Sign Up
        </h2>
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
