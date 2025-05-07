import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import ForgetPassword from "./ForgetPassword";

const ForgetPasswordModal = ({
  isModalForgetOpen,
  setIsModalForgetOpen,
  setIsModalLoginOpen,
}) => {
  const handleLoginOpenTwo = () => {
    setIsModalForgetOpen(false);
    setIsModalLoginOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50  text-white ">
      <div className="flex items-center w-full bg-backgroundSecondaryColor justify-between p-4">
        <button
          onClick={() => setIsModalForgetOpen(false)}
          className="text-white text-2xl"
        >
          <FaChevronLeft />
        </button>
        <h2 className="ml-4 text-xl text-center w-full font-semibold">
          Forget Password
        </h2>
      </div>
      <div className=" h-screen overflow-y-auto">
        <ForgetPassword handleLoginOpenTwo={handleLoginOpenTwo} />
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
