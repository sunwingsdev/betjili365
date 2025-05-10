import { useContext, useEffect, useRef, useState } from "react";
import MainLogo from "../../../assets/betJilliImages/logos/logo.png";
import bgImage from "../../../assets/betJilliImages/images/BD.png";
import logo1 from "../../../assets/v2/deccan-gladiators-ChfQU95Q.png";
import logo2 from "../../../assets/v2/sunrisers-eastern-cape-4BShiuSM.png";
import logo3 from "../../../assets/v2/quetta-gladiators.png";
import logo4 from "../../../assets/v2/bologna-fc-1909-n8kXOhaz.png";
import promoIcon from "../../../assets/v2/icon-promotion.png";
import vipIcon from "../../../assets/v2/icon-vip.png";
import affiliateIcon from "../../../assets/v2/icon-affiliate.png";
import partnerIcon from "../../../assets/v2/icon-partnerships.png";
// import iconAll from "../../../assets/v2/icon-all-provider.svg";
import partnerLogo from "../../../assets/v2/afc-bournemouth.png";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";
import { MdOutlineChat } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import MenuHeader from "./MenuHeader";
import { LanguageContext } from "@/Context/LanguageContext";

const Header = ({ menuItems,openLoginModal,openRegisterModal,openBDTFacaiModal }) => {
  const { language } = useContext(LanguageContext);
  const { data: homeControls } = useGetHomeControlsQuery();
  const { data: allHomeGames } = useGetAllHomeGamesQuery();
  const images = [logo1, logo2, logo3, logo4];

  const navItems = [
    {
      name: "প্রমোশনস",
      image: promoIcon,
      isLocal: true,
      route: "/promotional-offer",
    },
    {
      name: "ভিআইপি",
      image: vipIcon,
      isLocal: true,
      route: "/vip",
    },
  ];
  const navItems2 = [
    {
      name: "এফিলিয়েট",
      image: affiliateIcon,
      isLocal: true,
      route: "/affiliate",
    },
    {
      name: "পার্টনারশিপ",
      image: partnerIcon,
      isLocal: true,
      route: "/partnership",
    },
  ];

  const combinedMenuItems = [...(menuItems || []), ...navItems];

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.scrollTo(0, 0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Every 2 seconds move one item

    return () => clearInterval(interval);
  }, [images.length]);

  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );

  return (
    <div className="bg-primary-primaryColor text-white z-50">
      <div className="flex flex-row items-center justify-between px-2 py-1 w-full">
        <div className="flex flex-row items-center justify-between gap-2">
          <HiMenuAlt2
            onClick={() => setIsOpen(!isOpen)}
            className="text-textSecondaryColor w-6 h-6"
          />
          {/* Shadow Overlay */}
          {/* {isOpen && (
            <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
          )} */}
          <AnimatePresence>
          {isOpen && (
  <>
    {/* Overlay - click করলে close হবে */}
    <motion.div
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsOpen(false)} 
    >
      {/* Cross button - overlay এর ভিতরে top-right এ */}
      <div className="absolute top-1 right-3 z-50">
        <button
          className="text-white font-semibold text-2xl"
          onClick={(e) => {
            e.stopPropagation(); // Bubble phase-এ propagation বন্ধ করবে
            setIsOpen(false);
          }}
        >
         <RxCross2 />
        </button>
      </div>
    </motion.div>

    {/* Sidebar MenuHeader */}
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 z-50  w-[70%] h-screen overflow-y-auto  bg-transparent shadow-lg"
    >
      <MenuHeader />
    </motion.div>
  </>
)}

          </AnimatePresence>

          {/* Sidebar (Menu) */}
          {/* <div
            ref={menuRef}
            className={`fixed z-50 top-0 left-0 h-screen overflow-y-auto pb-4 w-[50%] text-white shadow-lg transform bg-componentBgPrimary backdrop-blur-lg ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            <div className=" hidden flex-col items-center gap-y-2 py-3">
              <Link to="/">
                <img
                  src={`${import.meta.env.VITE_BASE_API_URL}${
                    logoHomeControl?.image
                  }`}
                  alt=""
                  className="h-9 lg:h-12"
                />
              </Link>

              <div className="flex flex-col text-xs items-center">
                <p> ফ্রন্ট অফ শার্ট পার্টনার </p>
                <img src={partnerLogo} alt="" className="w-12 h-12" />
              </div>
            </div>
            {menuItems?.length > 0 && (
              <ul className="flex flex-col gap-y-2">
                {menuItems?.map((item, index) => (
                  <div key={index} className="">
                    <Link to={item.route} onClick={() => handleClick(index)}>
                      <li
                        className={`flex items-center border-b border-white ${
                          openIndex === index ? "bg-componentBgSecondary" : ""
                        } ${
                          [13, 14, 15, 16].includes(index)
                            ? "border w-36 mx-auto text-left text-white space-x-1 font-bold"
                            : ""
                        } border-opacity-50 pl-2 py-2 space-x-2 text-center cursor-pointer`}
                      >
                        <img
                          src={`${import.meta.env.VITE_BASE_API_URL}${
                            item.image
                          }`}
                          alt={item.name}
                          className="w-6 h-auto"
                        />
                        <span
                          className={`text-xs ${
                            [13, 14, 15, 16].includes(index) ? "text-left" : ""
                          } font-medium`}
                        >
                          {item.name}
                        </span>
                      </li>
                    </Link>
                  </div>
                ))}
              </ul>
            )}
            <div className="bg-primary-primaryColor py-1.5">
              {navItems?.length > 0 && (
                <ul className="flex flex-col gap-y-2 my-2 bg-componentBgSecondary">
                  {navItems?.map((item, index) => (
                    <div key={index} className="">
                      <Link to={item.route} onClick={() => handleClick(index)}>
                        <li
                          className={`flex items-center border-b border-white ${
                            openIndex === index ? "bg-componentBgSecondary" : ""
                          } ${
                            [13, 14, 15, 16].includes(index)
                              ? "border w-36 mx-auto text-left text-white space-x-1 font-bold"
                              : ""
                          } border-opacity-50 pl-2 py-2 space-x-2 text-center cursor-pointer`}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-6 h-auto"
                          />
                          <span
                            className={`text-xs ${
                              [13, 14, 15, 16].includes(index)
                                ? "text-left"
                                : ""
                            } font-medium`}
                          >
                            {item.name}
                          </span>
                        </li>
                      </Link>
                    </div>
                  ))}
                </ul>
              )}
            </div>

            <div className="px-3 py-1.5">
              {navItems2?.length > 0 && (
                <ul className="flex flex-col gap-2 pt-2">
                  {navItems2?.map((item, index) => (
                    <div key={index} className="">
                      <Link to={item.route} onClick={() => handleClick(index)}>
                        <li
                          className={`flex items-center bg-componentBgSecondary ${
                            openIndex === index ? "bg-componentBgSecondary" : ""
                          } ${
                            [13, 14, 15, 16].includes(index)
                              ? "border w-36 mx-auto text-left text-white space-x-1 font-bold"
                              : ""
                          } border-opacity-50 pl-2 py-2 space-x-2 text-center cursor-pointer`}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-6 h-auto"
                          />
                          <span
                            className={`text-xs ${
                              [13, 14, 15, 16].includes(index)
                                ? "text-left"
                                : ""
                            } font-medium`}
                          >
                            {item.name}
                          </span>
                        </li>
                      </Link>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          </div> */}

          {/* Image-container */}
          <AnimatePresence>
            {isOpen && openIndex !== null && (
              <motion.div
                key={openIndex}
                initial={{ x: "-50%", opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: "-50%", opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed h-screen z-50 overflow-y-auto left-[50%] top-0 flex flex-col items-center space-y-2 bg-componentBgSecondary p-2 shadow-lg"
              >
                {/* যদি এক্সক্লুসিভ ক্যাটেগরি হয়, তাহলে allHomeGames থেকে ফিল্টার করে দেখাবে */}
                {combinedMenuItems[openIndex]?.name === "এক্সক্লুসিভ"
                  ? allHomeGames
                      ?.filter((game) => game.category === "এক্সক্লুসিভ")
                      .map((game, index) => (
                        <Link to={`/category/demo/${game._id}`} key={index}>
                          <div className="flex flex-col p-2 w-full justify-center items-center border-b border-white border-opacity-50">
                            <img
                              src={`${import.meta.env.VITE_BASE_API_URL}${
                                game.image
                              }`}
                              alt="Exclusive Game"
                              className="w-20 h-24 m-0"
                            />
                          </div>
                        </Link>
                      ))
                  : combinedMenuItems[openIndex].subCategories?.map(
                      (subCategory, index) => (
                        <Link
                          to={`/category/${subCategory.category}`}
                          key={index}
                        >
                          <div className="flex flex-col p-2 w-full justify-center items-center border-b border-white border-opacity-50">
                            <img
                              src={`${import.meta.env.VITE_BASE_API_URL}${
                                subCategory.image
                              }`}
                              alt={subCategory.name}
                              className="w-12 h-12 bg-yellow-500 m-0"
                            />
                            {subCategory.name && (
                              <p className="text-white text-[10px] whitespace-nowrap">
                                {subCategory.name}
                              </p>
                            )}
                          </div>
                        </Link>
                      )
                    )}
              </motion.div>
            )}
          </AnimatePresence>
          {/* <Link to="/">
          <img
            src={`${import.meta.env.VITE_BASE_API_URL}${
              logoHomeControl?.image
            }`}
            alt="logo"
            className="w-16"
          />
        </Link> */}
          <Link to="/">
            <img src={MainLogo} alt="logo" className="w-20" />
          </Link>
        </div>

        {/* <div className="w-16 md:w-40 md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 50}%)` }} // Move one item at a time
          >
            {images?.map((image, i) => (
              <img
                key={i}
                className="w-6 md:w-8 mx-1"
                src={image}
                alt="Sponsor"
              />
            ))}
          </div>
        </div> */}
        {/* <div className="flex flex-row  gap-1 text-green">
          <div className="flex flex-col items-center">
            <FaArrowRightFromBracket />
            <p className="text-xs">App</p>
          </div>
          <div className="flex flex-col items-center">
            <IoMdHelpCircleOutline />
            <p className="text-xs">Help</p>
          </div>
        </div> */}
        {/* <div className="flex flex-row  gap-1 text-textSecondaryColor">
          <div className="flex flex-col items-center">
            <MdOutlineChat className="" />
            <p className="text-xs">Live Chat</p>
          </div>
        </div> */}

        <div className="flex gap-1 justify-end items-center text-xs w-[45%]">
          <button
          onClick={openLoginModal}
          className="px-2 pb-1 text-[10px] whitespace-nowrap bg-jili-bgPrimary text-black rounded-md">
            {language === "en"? "Login":"লগ ইন"}
            
          </button>
          <button
          onClick={openRegisterModal}
          className="px-2 pb-1 text-[10px] whitespace-nowrap bg-white text-black rounded-md">
            
            {language === "en" ? "Sign Up" : "সাইন আপ"}
          </button>
          <div
          onClick={openBDTFacaiModal}
          className="w-[10%]">
            <img src={bgImage} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
