import { Outlet } from "react-router-dom";

import AffiliateNavbar from "@/components/AffiliateFacai/AffiliateHeader/AffiliateNavbar";
import AffFooter from "@/components/AffiliateFacai/AffiliateFooter/AffFooter";
import { useContext, useState } from "react";
import { LanguageContext } from "@/Context/LanguageContext";

// import BDTModal from "@/components/BDTModalFacai/BDTModalFacai";
import BDTModalFacai from "@/components/BDTModalFacai/BDTModalFacai";
import AffModal from "@/components/AffModal/AffModal";

const AffiliateFacaiLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoActive, setVideoActive] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const openModal = () => {
    setShowModal(true);
    setVideoActive(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setVideoActive(false);
  };

  const handleImageClick = () => {
    setVideoActive(true);
  };

  const toggleOpenLanguage = () => {
    setIsOpenLanguage(true);
  };

  const toggleCloseLanguage = () => {
    setIsOpenLanguage(false);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <>
      <div className="App">
        <AffiliateNavbar
          toggleOpenLanguage={toggleOpenLanguage}
          openModal={openModal}
          closeModal={closeModal}
          videoActive={videoActive}
          handleImageClick={handleImageClick}
          showModal={showModal}
        />
        <main>
          <Outlet />
        </main>
        <AffFooter toggleOpenLanguage={toggleOpenLanguage} />
      </div>

      <BDTModalFacai
        isOpenLanguage={isOpenLanguage}
        toggleCloseLanguage={toggleCloseLanguage}
        currentLang={language}
        toggleLanguage={toggleLanguage}
        setLanguage={setLanguage} // ✅ Pass this function
      />
      <AffModal
        openModal={openModal}
        closeModal={closeModal}
        videoActive={videoActive}
        handleImageClick={handleImageClick}
        showModal={showModal}
      />
    </>
  );
};

export default AffiliateFacaiLayout;
