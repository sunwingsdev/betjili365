import React from "react";
import image from "../../assets/affiliateImages/M1_BDT_EN_IPL-2025_Diamond-Vault_Pop-up_1280x720.jpg";
import { RxCross2 } from "react-icons/rx";

const AffModal = ({ closeModal, handleImageClick, videoActive, showModal }) => {
  if (!showModal) return null;

  const thumbnail = image;
  const videoEmbedUrl = "https://www.youtube.com/embed/CUNEHa5xHAs?autoplay=1";

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center px-4"
      onClick={closeModal}
    >
      <div
        className="relative border-8 border-textSecondaryColorTwo rounded overflow-hidden w-full max-w-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 p-2 bg-backgroundSecondaryColor rounded-full text-white hover:bg-red-600 transition"
          onClick={closeModal}
        >
          <RxCross2 size={20} />
        </button>

        {/* Image or Video */}
        {!videoActive ? (
          <img
            src={thumbnail}
            alt="Thumbnail"
            onClick={handleImageClick}
            className="cursor-pointer w-full h-auto object-cover"
          />
        ) : (
          <div className="w-full aspect-video">
            <iframe
              src={videoEmbedUrl}
              title="Modal Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AffModal;
