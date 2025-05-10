import { RxCross2 } from "react-icons/rx";
import RegisterFacai from "./RegisterFacai";

const RegisterModal = ({ isModalOpen, setIsModalOpen, setIsModalLoginOpen }) => {
  const handleLoginOpen = () => {
    setIsModalOpen(false);
    setIsModalLoginOpen(true);
  };
  const handleBackgroundClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 text-white bg-white/5  backdrop-blur-sm flex justify-center items-center"
    onClick={handleBackgroundClick} // close on background click
    >
      {/* Responsive modal container */}
      <div className="w-full h-full md:w-[380px] md:h-auto md:rounded-xl md:overflow-hidden md:shadow-lg bg-primary-primaryColor flex flex-col"
      onClick={(e) => e.stopPropagation()} 
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-primary-primaryColor">
          <h2 className="text-xl text-center w-full font-semibold">Sign Up</h2>
          <button onClick={() => setIsModalOpen(false)} className="text-white text-2xl">
            <RxCross2 />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <RegisterFacai
            setIsModalOpen={setIsModalOpen}
            handleLoginOpen={handleLoginOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
