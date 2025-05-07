import LoginForm from "@/components/shared/auth/LoginForm";
import Modal from "@/components/shared/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeImg from "../../../assets/mobile-colar/toolbar-icon-home.svg";
import promoImg from "../../../assets/mobile-colar/toolbar-icon-promotion.svg";
import depoImg from "../../../assets/mobile-colar/toolbar-icon-deposit.svg";
import myImg from "../../../assets/mobile-colar/toolbar-icon-mine.svg";
import { useSelector } from "react-redux";

const MobileColar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token, user } = useSelector((state) => state.auth);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleSaveChanges = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-b from-green-700 to-black">
      {token && user ? (
        <div className="flex items-center justify-between px-1 py-2">
          <div className="flex flex-col items-center">
            <img src={homeImg} alt="home image" className="w-6" />
            <p className="text-white">হোম</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={promoImg} alt="promotion image" className="w-6" />
            <p className="text-white">প্রমোশন</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={depoImg} alt="deposit image" className="w-6" />
            <p className="text-white">ডিপোজিট</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={myImg} alt="my acc image" className="w-6" />
            <p className="text-white">মাই একাউন্ট</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex items-center justify-center gap-2 bg-white w-1/3 py-2 cursor-pointer">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
              alt=""
            />
            <p>
              BDT <br />
              বাংলা
            </p>
          </div>
          <button
            onClick={handleModalOpen}
            className="bg-green-500 text-white font-bold w-1/3 py-5 cursor-pointer"
          >
            লগইন
          </button>
          <Link
            className="bg-yellow-500 text-black font-bold w-1/3 py-5 cursor-pointer"
            to="/register"
          >
            <button className="flex items-center justify-center  w-full">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
        title={`${import.meta.env.VITE_SITE_NAME} এ আপনাকে স্বাগতম`}
        onSave={handleSaveChanges}
      >
        <LoginForm closeModal={handleModalClose} />
      </Modal>
    </div>
  );
};

export default MobileColar;
