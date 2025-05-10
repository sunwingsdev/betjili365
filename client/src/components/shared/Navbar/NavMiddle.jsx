import { useEffect, useState } from "react";
import Modal from "../Modal";
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
import SpinLoader from "../loaders/Spinloader";

const sponsors = [
  {
    id: 1,
    image: "https://www.baji.live/images/web/sponsor/deccan-gladiators.png",
  },
  {
    id: 2,
    image:
      "https://www.baji.live/images/web/sponsor/sunrisers-eastern-cape.png",
  },
  {
    id: 3,
    image: "https://www.baji.live/images/web/sponsor/quetta-gladiators.png",
  },
  {
    id: 4,
    image: "https://www.baji.live/images/web/sponsor/bologna-fc-1909.png",
  },
];

const NavMiddle = ({
  navItems,
  openLoginModal,
  openRegisterModal,
  openBDTFacaiModal,
  openDWModal
}) => {
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
            <Link to="/">
              <img
                className="w-20 md:w-28"
                src={`${import.meta.env.VITE_BASE_API_URL}${
                  logoHomeControl?.image
                }`}
                alt="Logo"
              />
            </Link>
            {/* <div className="flex gap-1 md:gap-2">
              {sponsors.map((sponsor) => (
                <img
                  key={sponsor.id}
                  className="w-6 md:w-8"
                  src={sponsor.image}
                  alt="Sponsor"
                />
              ))}
            </div> */}
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
              <Link to="/profile/deposit">
                <PrimaryButton>ডিপোজিট</PrimaryButton>
              </Link>
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
            <div className="md:flex items-center gap-8 text-white hidden">
              {/* <Link to="/login"> */}
              {/* <p
                className="px-7 py-1  hover:border-[#ffb405] hover:border border border-transparent rounded cursor-pointer"
                // onClick={handleModalOpen}
              >
                লগ ইন
              </p> */}
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
              <p
                className="px-7 py-1 bg-white-to-darkblue   hover:border border border-transparent rounded cursor-pointer"
                onClick={openLoginModal}
              >
                লগ ইন
              </p>
              {/* </Link> */}
              {/* <Link to="/register">
                <PrimaryButton>সাইন আপ</PrimaryButton>
              </Link> */}
              {/* <Link to="/register"> */}
              <p
                className="px-7 py-1 bg-gold-gradient   hover:border border border-transparent rounded cursor-pointer"
                onClick={openRegisterModal}
              >
                সাইন আপ
              </p>
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
