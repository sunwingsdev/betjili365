import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import MenuMobile from "@/components/home/MenuMobile/MenuMobile";
import Header from "@/components/shared/header/Header";
import Footer2 from "@/components/shared/Footer/Footer2";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";
import { useGetAllSubCategoriesQuery } from "@/redux/features/allApis/categoryApi/subCategoryApi";
// import BDTModal from "@/components/BDTModalFacai/BDTModalFacai";
import { LanguageContext } from "@/Context/LanguageContext";
import Loader from "@/components/Loader/Loader";
import RegisterModal from "@/pages/home/Register/RegisterModal";
import LoginModal from "@/pages/home/Login/LoginModal";
import ForgetPasswordModal from "@/pages/home/ForgetPassword/ForgetPasswordModel";
import BDTModalFacai from "@/components/BDTModalFacai/BDTModalFacai";
import MobileColar from "@/pages/home/Home/MobileColar";

const MainLayout = () => {
  const navigation = useNavigation();

  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalForgetOpen, setIsModalForgetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { data: allCategories } = useGetAllCategoriesQuery();
  const { data: allSubCategories } = useGetAllSubCategoriesQuery();

  const toggleOpenLanguage = () => {
    setIsOpenLanguage(true);
  };

  const toggleCloseLanguage = () => {
    setIsOpenLanguage(false);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hideCommonComponents = isMobile && location.pathname === "/register";

  const menuItems = allCategories?.map((category) => ({
    ...category,
    subCategories: allSubCategories?.filter(
      (subCat) => subCat.category === category.name
    ),
  }));

  console.log("mm", menuItems);

  return (
    <>
      <div>
        {/* globalLoader */}
        {navigation.state === "loading" && <Loader />} {/* 👈 show loader */}
      </div>
      <div className="relative hidden md:block">
        {!hideCommonComponents && <Navbar menuItems={menuItems} />}
        <Outlet context={{ menuItems }} />
        {!hideCommonComponents && <Footer />}
        {!hideCommonComponents && <MenuMobile />}
      </div>
      <div className="relative block md:hidden">
        <Header
          menuItems={menuItems}
          openLoginModal={() => setIsModalLoginOpen(true)}
          openRegisterModal={() => setIsModalOpen(true)}
          openBDTFacaiModal={() => setIsOpenLanguage(true)}
        />
        <main>
          <Outlet context={{ menuItems }} />
        </main>
        <Footer2 />
        {/* <MobileColar /> */}
        {/* <MenuMobile
          toggleOpenLanguage={toggleOpenLanguage}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isModalLoginOpen={isModalLoginOpen}
          setIsModalLoginOpen={setIsModalLoginOpen}
        /> */}
      </div>
      <BDTModalFacai
        isOpenLanguage={isOpenLanguage}
        toggleCloseLanguage={toggleCloseLanguage}
        currentLang={language}
        toggleLanguage={toggleLanguage}
        setLanguage={setLanguage} // ✅ Pass this function
      />
      {isModalOpen && (
        <RegisterModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setIsModalLoginOpen={setIsModalLoginOpen}
        />
      )}
      {isModalLoginOpen && (
        <LoginModal
          isModalLoginOpen={isModalLoginOpen}
          setIsModalLoginOpen={setIsModalLoginOpen}
          setIsModalOpen={setIsModalOpen}
          setIsModalForgetOpen={setIsModalForgetOpen}
        />
      )}
      {isModalForgetOpen && (
        <ForgetPasswordModal
          isModalForgetOpen={isModalForgetOpen}
          setIsModalForgetOpen={setIsModalForgetOpen}
          setIsModalLoginOpen={setIsModalLoginOpen}
        />
      )}
    </>
  );
};

export default MainLayout;
