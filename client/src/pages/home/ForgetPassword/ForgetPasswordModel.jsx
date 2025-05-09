import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
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
      <div className="flex items-center w-full bg-primary-primaryColor justify-between p-4">
        
        <h2 className="ml-4 text-xl text-center w-full font-semibold">
          Forget Password
        </h2>
        <button
          onClick={() => setIsModalForgetOpen(false)}
          className="text-white text-2xl"
        >
          <RxCross2 />
        </button>
      </div>
      <div className=" h-screen overflow-y-auto">
        <ForgetPassword handleLoginOpenTwo={handleLoginOpenTwo} />
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
