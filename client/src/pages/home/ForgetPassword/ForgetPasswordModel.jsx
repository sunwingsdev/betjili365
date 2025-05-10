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

  const handleBackgroundClick = () => {
    setIsModalForgetOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 text-white bg-black/5  backdrop-blur-sm flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      {/* Modal container */}
      <div
        className="w-full h-full md:w-[380px] md:h-auto md:rounded-xl md:overflow-hidden md:shadow-lg bg-primary-primaryColor flex flex-col"
        onClick={(e) => e.stopPropagation()} // prevent outside click from closing
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-primary-primaryColor">
          <h2 className="text-xl text-center w-full font-semibold">Forget Password</h2>
          <button
            onClick={() => setIsModalForgetOpen(false)}
            className="text-white text-2xl"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto ">
          <ForgetPassword handleLoginOpenTwo={handleLoginOpenTwo} />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
