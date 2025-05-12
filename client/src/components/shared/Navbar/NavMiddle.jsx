import { useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { FaArrowRight, FaHome, FaUser, FaCog } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import PrimaryButton from "../Buttons/PrimaryButton";
import Container from "../Container";
import { RiMenu2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineExitToApp, MdOutlineHelpCenter } from "react-icons/md";
import LoginForm from "../auth/LoginForm";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { logout, setSingleUser } from "@/redux/slices/authSlice";
import { useToasts } from "react-toast-notifications";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { useLazyGetUserByIdQuery } from "@/redux/features/allApis/usersApi/usersApi";
import depositImage from "../../../assets/betJilliImages/images/icon-deposit.svg";
import { IoReload } from "react-icons/io5";
// import iconHome from "../../../assets/betJilliImages/logos/icon-home.svg";
import iconCasino from "../../../assets/betJilliImages/logos/icon-casino.svg";
import iconSport from "../../../assets/betJilliImages/logos/icon-sport.svg";
import iconSlot from "../../../assets/betJilliImages/logos/icon-slot.svg";
import iconTable from "../../../assets/betJilliImages/logos/icon-table.svg";
import iconCrash from "../../../assets/betJilliImages/logos/icon-crash.svg";
import iconLottery from "../../../assets/betJilliImages/logos/icon-lottery.svg";
import iconFish from "../../../assets/betJilliImages/logos/icon-fish.svg";
import iconArcade from "../../../assets/betJilliImages/logos/icon-arcade.svg";
import iconCock from "../../../assets/betJilliImages/logos/icon-cockfighting.svg";
import iconPromotion from "../../../assets/betJilliImages/logos/icon-promotion.svg";
import iconDownload from "../../../assets/betJilliImages/logos/icon-download.svg";
import iconAffiliate from "../../../assets/betJilliImages/logos/icon-affiliate.svg";
import iconAmbassador from "../../../assets/betJilliImages/logos/icon-ambassador.svg";
import iconCustomer from "../../../assets/betJilliImages/logos/icon-customer.svg";
import iconLine from "../../../assets/betJilliImages/logos/icon-line.svg";
import iconTelegram from "../../../assets/betJilliImages/logos/icon-telegram.svg";
import iconMail from "../../../assets/betJilliImages/logos/icon-email.svg";
import iconLogin from "../../../assets/betJilliImages/logos/icon-login.svg";
import iconHome from "../../../assets/betJilliImages/logos/icon-home.svg";
import SpinLoader from "../loaders/Spinloader";
import { LanguageContext } from "@/Context/LanguageContext";
import iconCricket from "../../../assets/betJilliImages/images/icon-exchange.svg";
import iconSaba from "../../../assets/betJilliImages/images/provider-saba.png";
import iconEvo from "../../../assets/betJilliImages/images/provider-evo.png";
import iconSexy from "../../../assets/betJilliImages/images/provider-awcmsexy.png";
import iconJili from "../../../assets/betJilliImages/images/provider-awcmjili.png";
import iconJDB from "../../../assets/betJilliImages/images/provider-jdb.png";
import bgImage from "../../../assets/betJilliImages/images/BD.png";

import Sidebar from "./Sidebar";

const NavMiddle = ({
  navItems,
  openLoginModal,
  openRegisterModal,
  openBDTFacaiModal,
  openDWModal,
}) => {
  const { language } = useContext(LanguageContext);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const t = (en, bn) => (language === "bn" ? bn : en);
  const { data: homeControls } = useGetHomeControlsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { token, user, singleUser } = useSelector((state) => state.auth);
  const [getSingleUser] = useLazyGetUserByIdQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close the sidebar when clicking outside
  const handleOutsideClick = (event) => {
    if (event.target.id === "overlay") {
      setIsSidebarOpen(false);
    }
  };

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  // Loading state
  const [loading, setLoading] = useState(false);

  // Fetch user balance on component mount
  useEffect(() => {
    if (!user) return;
    getSingleUser(user?._id).then(({ data }) => {
      dispatch(setSingleUser(data)); // Save singleUser to Redux
    });
  }, [user]);

  const reloadBalance = () => {
    if (!user) return;

    setLoading(true); // Set loading state to true

    getSingleUser(user?._id)
      .then(({ data }) => {
        dispatch(setSingleUser(data)); // Update Redux store with the latest balance
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after data is fetched
      });
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = () => {
    setIsModalOpen(false);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    addToast("Logout successful", {
      appearance: "success",
      autoDismiss: true,
    });
    navigate("/");
  };
  const icons = [
    { key: "home", img: iconHome, label: t("Home", "হোম"), link: "/" },
    {
      key: "sport",
      img: iconSport,
      label: t("Sport", "স্পোর্টস"),
      link: "/sport",
    },
    {
      key: "casino",
      img: iconCasino,
      label: t("Casino", "ক্যাসিনো"),
      link: "/casino",
    },
    { key: "slot", img: iconSlot, label: t("Slot", "স্লট"), link: "/slot" },

    {
      key: "table",
      img: iconTable,
      label: t("Table", "টেবিল"),
      link: "/table",
    },
    {
      key: "crash",
      img: iconCrash,
      label: t("Crash", "ক্র্যাশ"),
      link: "/crash",
    },
    {
      key: "lottery",
      img: iconLottery,
      label: t("Lottery", "লটারি"),
      link: "/lottery",
    },
    {
      key: "fishing",
      img: iconFish,
      label: t("Fishing", "ফিশিং"),
      link: "/fishing",
    },
    {
      key: "arcade",
      img: iconArcade,
      label: t("Arcade", "আর্কেড"),
      link: "/arcade",
    },
    {
      key: "promotion",
      img: iconPromotion,
      label: t("Promotion", "প্রমোশন"),
      link: "/promotion",
    },
    {
      key: "download",
      img: iconDownload,
      label: t("Download", "ডাউনলোড"),
      link: "/download",
    },
    {
      key: "affiliate",
      img: iconAffiliate,
      label: t("Affiliate", "অ্যাফিলিয়েট"),
      link: "/affiliate",
    },
    {
      key: "ambassador",
      img: iconAmbassador,
      label: t("Ambassador", "অ্যাম্বাসেডর"),
      link: "/ambassador",
    },
    {
      key: "customer",
      img: iconCustomer,
      label: t("Customer", "কাস্টমার"),
      link: "/customer",
    },
    { key: "line", img: iconLine, label: t("Line", "লাইন"), link: "/line" },
    {
      key: "telegram",
      img: iconTelegram,
      label: t("Telegram", "টেলিগ্রাম"),
      link: "/telegram",
    },
    { key: "mail", img: iconMail, label: t("Mail", "মেইল"), link: "/mail" },
  ];
  const subcategoriesMap = {
    sport: [
      {
        label: t("Cricket", "Cricket"),
        img: iconCricket,
        link: "/sport/football",
      },
      {
        label: t("SABA", "SABA"),
        img: iconSaba,
        link: "/sport/basketball",
      },
    ],
    casino: [
      {
        label: t("EVO", "EVO"),
        img: iconEvo,
        link: "/casino/live",
      },
      {
        label: t("SEXY", "SEXY"),
        img: iconSexy,
        link: "/casino/baccarat",
      },
    ],
    slot: [
      {
        label: t("JILI", "JILI"),
        img: iconJili,
        link: "/slot/classic",
      },
      {
        label: t("JDB", "JDB"),
        img: iconJDB,
        link: "/slot/video",
      },
    ],
    table: [
      {
        label: t("EVO", "EVO"),
        img: iconEvo,
        link: "/casino/live",
      },
      {
        label: t("SEXY", "SEXY"),
        img: iconSexy,
        link: "/casino/baccarat",
      },
    ],
    crash: [
      {
        label: t("EVO", "EVO"),
        img: iconEvo,
        link: "/casino/live",
      },
      {
        label: t("SEXY", "SEXY"),
        img: iconSexy,
        link: "/casino/baccarat",
      },
    ],
    lottery: [
      {
        label: t("JILI", "JILI"),
        img: iconJili,
        link: "/slot/classic",
      },
      {
        label: t("JDB", "JDB"),
        img: iconJDB,
        link: "/slot/video",
      },
    ],
    fishing: [
      {
        label: t("EVO", "EVO"),
        img: iconEvo,
        link: "/casino/live",
      },
      {
        label: t("SEXY", "SEXY"),
        img: iconSexy,
        link: "/casino/baccarat",
      },
    ],
    arcade: [
      {
        label: t("JILI", "JILI"),
        img: iconJili,
        link: "/slot/classic",
      },
      {
        label: t("JDB", "JDB"),
        img: iconJDB,
        link: "/slot/video",
      },
    ],
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSidebarItemClick = (item) => {
    setIsSidebarOpen(true);

    if (subcategoriesMap[item.key]) {
      setOpenDropdown(item.key); // Open the subcategory dropdown
    } else {
      setOpenDropdown(null); // No subcategory, just open the sidebar
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="bg-primary-primaryColor py-3">
      <Container>
        <div className="flex items-center justify-between text-[#14815f]">
          {/* Menu for mobile */}
          <div className="md:hidden z-40">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <RiMenu2Line
                  className="text-4xl cursor-pointer"
                  onClick={() => setIsSheetOpen(true)}
                />
              </SheetTrigger>
              <SheetContent side="left" className="p-4 bg-black text-white">
                <div className="">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Link to="/">
                      <img
                        className="w-28"
                        src={`${import.meta.env.VITE_BASE_API_URL}${
                          logoHomeControl?.image
                        }`}
                        alt=""
                      />
                    </Link>
                    <h2 className=""> ফ্রন্ট অফ শার্ট পার্টনার </h2>
                    <img
                      className="w-16"
                      src="https://img.b112j.com/bj/h5/assets/images/sponsor/afc-bournemouth.png?v=1727170388190&source=mcdsrc"
                      alt=""
                    />
                  </div>
                  <hr className="my-3" />
                  <Link
                    to={"/category/sport"}
                    className="flex items-center gap-2 border-b border-b-slate-700 px-4 py-3 text-sm"
                    onClick={closeSheet}
                  >
                    <img
                      className="size-9"
                      src={
                        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702"
                      }
                      alt=""
                    />
                    <span>স্পোর্ট</span>
                  </Link>
                  {navItems && navItems.length > 0 ? (
                    navItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.route}
                        className="flex items-center gap-2 border-b border-b-slate-700 px-4 py-3 text-sm"
                        onClick={closeSheet}
                      >
                        <img className="size-9" src={item.image} alt="" />
                        <span>{item.name}</span>
                      </Link>
                    ))
                  ) : (
                    <p className="text-black">No items available</p>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo and sponsors */}
          <div className="flex items-center gap-5">
            <div className="">
              {/* Sidebar */}

              <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
                icons={icons}
                subcategoriesMap={subcategoriesMap}
                setOpenDropdown={setOpenDropdown}
                openDropdown={openDropdown}
                setIsSidebarOpen={setIsSidebarOpen}
                handleOutsideClick={handleOutsideClick}
              />

              {/* sidebar buttons  */}
              <div className={`transition-all duration-300 ease-in-out  `}>
                {/* Hide the button when the sidebar is open */}
                {!isSidebarOpen && (
                  <>
                    {/* <div
                      onClick={() => setIsSidebarOpen(true)}
                      className="w-[5%] text-white bg-jili-bgBlack py-2 fixed top-0 left-5 transform -translate-x-1/2 z-[20] flex items-center justify-center"
                    >
                      <button className="bg-backgroundV2Color rounded-full text-black px-3  py-1">
                        <FaChevronRight size={15} />
                      </button>
                    </div> */}

                    {/* Image Icons with Mask */}
                    <div className="fixed top-[44px] left-0 2xl:w-[50px] xl:w-[4%] lg:w-[4%] md:w-[32px] flex flex-col  items-center gap-2 z-[40] h-screen scrollbar-thin scrollbar-thumb-[#333333] scrollbar-track-transparent overflow-y-auto bg-primary-primaryColor  ">
                      <div className=" flex justify-center p-2 border-b border-white mr-2 border-opacity-20">
                        <button
                          onClick={() => setIsDark(!isDark)}
                          className="  rounded-full bg-gray-200 dark:bg-gray-800 transition-all"
                        >
                          {/* <span
                            className={`text-sm font-semibold ${
                              !isDark ? "text-black" : "text-white"
                            }`}
                          >
                            {isDark ? "Dark" : "Light"}
                          </span> */}
                          <div className="w-10 md:ml-2 md:w-7 lg:w-8 lg:ml-2  h-5 bg-gray-400 rounded-full relative flex items-center justify-center">
                            <div
                              className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300 flex items-center justify-center text-xs ${
                                isDark ? "right-0.5" : "left-0.5"
                              }`}
                            >
                              {isDark ? "🌙" : "☀️"}
                            </div>
                          </div>
                        </button>
                      </div>
                      {icons?.map((item) => (
                        <Link
                          key={item.key}
                          onClick={() => handleSidebarItemClick(item)}
                          className="block p-2"
                        >
                          <div
                            className="w-6 md:w-5 md:h-5 h-6 flex items-center justify-center"
                            style={{
                              WebkitMaskImage: `url(${item.img})`,
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskSize: "contain",
                              backgroundColor: "#FFE400",
                            }}
                          />
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <Link to="/">
              <img
                className="w-20 md:w-28"
                src={`${import.meta.env.VITE_BASE_API_URL}${
                  logoHomeControl?.image
                }`}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation and buttons */}
          {token && user ? (
            <div className="md:flex items-center gap-3 text-white hidden">
              <p className="px-3 py-1 rounded cursor-pointer">মেইন ওয়ালেট</p>
              <p className="px-3 py-1 rounded cursor-pointer inline-flex items-center gap-3">
                ৳ {singleUser?.balance ? singleUser?.balance : 0}{" "}
                <span onClick={reloadBalance} className="cursor-pointer">
                  {loading ? (
                    <span className="animate-spin text-white">
                      <SpinLoader />
                    </span>
                  ) : (
                    <IoReload />
                  )}
                </span>
              </p>
              <div
                className="flex items-center gap-2 px-7 py-1 rounded cursor-pointer bg-jili-bgPrimary hover:border border border-transparent"
                onClick={openDWModal}
              >
                <div
                  className="w-6 h-6"
                  style={{
                    WebkitMaskImage: `url(${depositImage})`,
                    maskImage: `url(${depositImage})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    backgroundColor: "black", // Black masked icon
                  }}
                ></div>
                <span className="text-black">ডিপোজিট</span>
              </div>
              <Link to="/profile">
                <p className="px-3 py-1 hover:border-[#ffb405] hover:border border border-transparent rounded cursor-pointer">
                  সদস্য কেন্দ্র
                </p>
              </Link>
              {user?.role === "admin" && (
                <Link to="/dashboard">
                  <p className="px-3 py-1 hover:border-[#ffb405] hover:border border border-transparent rounded cursor-pointer">
                    Admin
                  </p>
                </Link>
              )}
              <p
                onClick={handleLogout}
                className="px-3 py-1 hover:border-[#ffb405] hover:border border border-transparent rounded cursor-pointer"
              >
                লগ আউট
              </p>
            </div>
          ) : (
            <div className="md:flex items-center gap-8 text-black hidden">
              <p
                className="px-7 py-1 bg-yellow-400 hover:border border border-transparent rounded cursor-pointer"
                onClick={openLoginModal}
              >
                লগ ইন
              </p>

              <p
                className="px-7 py-1 bg-white hover:border border border-transparent rounded cursor-pointer"
                onClick={openRegisterModal}
              >
                সাইন আপ
              </p>

              <div onClick={openBDTFacaiModal} className="w-[4%]">
                <img src={bgImage} alt="" className="w-full" />
              </div>
              {/* </Link> */}
            </div>
          )}

          {/* Icons for app and help in mobile */}
          <div className="flex items-center gap-4 sm:gap-8 md:hidden text-xl sm:text-3xl">
            <div className="flex items-center justify-center flex-col gap-1">
              <MdOutlineExitToApp />
              <span className="text-sm">App</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <MdOutlineHelpCenter />
              <span className="text-sm">Help</span>
            </div>
          </div>
        </div>
      </Container>

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

export default NavMiddle;
