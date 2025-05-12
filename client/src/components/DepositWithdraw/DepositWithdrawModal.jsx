import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { LanguageContext } from "@/Context/LanguageContext";
import DepositWithdrawTabs from "./DepositWithdrawTabs/DepositWithdrawTabs";

const DepositWithdrawModal = ({
  isModalDWOpen,
  setIsModalDWOpen,
  //   setIsModalOpen,
  setIsModalForgetOpen,
}) => {
  const { language } = useContext(LanguageContext);

  const handleBackgroundClick = () => {
    setIsModalDWOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 text-white bg-black/5  backdrop-blur-sm flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      {/* Modal container */}
      <div
        className="w-full h-full md:w-[380px] md:h-auto md:rounded-xl md:overflow-hidden md:shadow-lg md:my-auto md:mx-auto bg-primary-primaryColor flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent background click from closing when clicking inside
      >
        {/* Header */}
        <div className="flex items-center  justify-between py-2 px-4 bg-primary-primaryColor">
          <h2 className="text-center w-full font-semibold">
            {language === "en" ? "My Wallet" : "মাই ওয়ালেট"}
          </h2>
          <button
            onClick={() => setIsModalDWOpen(false)}
            className="text-white text-xl"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1   ">
          <DepositWithdrawTabs />
        </div>
      </div>
    </div>
  );
};

export default DepositWithdrawModal;
