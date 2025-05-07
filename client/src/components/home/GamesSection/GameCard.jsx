import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import Modal from "@/components/shared/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Link to={`/category/demo/${game?._id}`} className="rounded-md">
        <div className="relative rounded-md group overflow-hidden bg-[#333]">
          {/* Gradient background with reduced opacity */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>

          {/* Image */}
          <img
            className="w-full h-48 md:h-32 object-cover rounded-t-md z-0"
            src={`${import.meta.env.VITE_BASE_API_URL}${game?.image}`}
            alt=""
          />

          {/* Black overlay that appears on hover */}
          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-0 z-20 transition-opacity duration-300 group-hover:opacity-70 rounded-[20px] lg:rounded-xl"></div>

          {/* Play button */}
          <div className="absolute flex flex-col items-center justify-center gap-2 whitespace-nowrap text-xs top-1/4 left-1/2 transform -translate-x-1/2 translate-y-16 opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
            <Link
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block"
            >
              <PrimaryButton>প্লে গেম</PrimaryButton>
            </Link>
            {game?.link && (
              <Link to={`/category/demo/${game?._id}`}>
                <p className="px-2 py-1 rounded border border-slate-600 hover:bg-slate-200 hover:text-black text-white text-center">
                  Demo
                </p>
              </Link>
            )}
          </div>

          {/* Title */}
          <div className="md:absolute bottom-0 text-white z-30">
            <h2 className="font-semibold text-sm p-2 px-2 whitespace-nowrap overflow-hidden">
              {game?.title}
            </h2>
          </div>
        </div>
      </Link>

      {/* Modal */}
      <Modal
        title={"Oops!!!"}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </Modal>
    </>
  );
};

export default GameCard;
