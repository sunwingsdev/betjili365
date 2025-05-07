import Modal from "@/components/shared/Modal";
import { logout } from "@/redux/slices/authSlice";
import { useState } from "react";
import { BsClipboardHeart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaEye, FaEyeSlash, FaUsers, FaWhatsapp } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdDoubleArrow, MdLockOpen, MdOutlineEmail } from "react-icons/md";
import { PiHandWithdraw, PiWallet } from "react-icons/pi";
import { RiBitCoinLine, RiMessengerLine } from "react-icons/ri";
import { VscNotebook } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const Card = ({ contents, heading, handleModalOpen, closeModal }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#333333] rounded-md py-2 space-y-2">
      <h2 className="border-s-8 border-[#14805e] px-2 ms-2">{heading}</h2>
      <div className="w-full border-t border-gray-600"></div>
      <div
        className={`flex items-center px-2 ${
          contents.length === 4
            ? "justify-between"
            : contents.length === 3
            ? "justify-center gap-12"
            : "justify-center gap-24"
        }`}
      >
        {contents?.map(({ icon: Icon, title, route, state }) =>
          route ? (
            <Link
              // state={{ method: state }}
              to={route}
              onClick={(e) => {
                e.preventDefault();
                closeModal();
                navigate(route, { state: { method: state } });
              }}
              key={title}
              className="flex flex-col items-center justify-center gap-1.5"
            >
              <div className="rounded-full bg-[#4a4a4a] p-1.5">
                <Icon className="text-xl" />
              </div>
              <p className="font-light text-xs sm:text-sm text-center">
                {title}
              </p>
            </Link>
          ) : (
            <div
              onClick={handleModalOpen}
              key={title}
              className="flex flex-col items-center justify-center gap-1.5"
            >
              <div className="rounded-full bg-[#4a4a4a] p-1.5">
                {" "}
                <Icon className="text-xl" />
              </div>
              <p className="font-light text-xs sm:text-sm text-center">
                {title}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const AccountDetailsMobile = ({ setDrawerOpen }) => {
  const { user } = useSelector((state) => state.auth);
  const [isWalletOpen, setIsWalletOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    setDrawerOpen(false);
    addToast("Logout successful", {
      appearance: "success",
      autoDismiss: true,
    });
    navigate("/");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const tohobilContents = [
    {
      icon: PiWallet,
      title: "ডিপোজিট",
      route: "/profile/deposit",
      state: "deposit",
    },
    {
      icon: PiHandWithdraw,
      title: "উইথড্র",
      route: "/profile/deposit",
      state: "withdraw",
    },
  ];
  const historyContents = [
    { icon: VscNotebook, title: "বাজি রেকর্ডস", route: "" },
    { icon: RiBitCoinLine, title: "টার্নওভার", route: "" },
    { icon: BsClipboardHeart, title: "লেনদেনের রেকর্ড", route: "" },
  ];
  const profileContents = [
    { icon: CiUser, title: "ব্যাক্তিগত তথ্য", route: "/profile" },
    { icon: MdLockOpen, title: "পাসওয়ার্ড রিসেট", route: "" },
    { icon: IoMailOpenOutline, title: "ইনবক্স", route: "" },
    { icon: FaUsers, title: "রেফারেল", route: "" },
  ];
  const contactContents = [
    { icon: FaWhatsapp, title: "Whatsapp", route: "" },
    { icon: MdOutlineEmail, title: "Email", route: "" },
    { icon: RiMessengerLine, title: "Facebook", route: "" },
  ];

  return (
    <>
      <div className="fixed inset-0 flex items-center bg-black justify-center z-50 font-normal overflow-y-auto">
        {/* Drawer Content */}
        <div className="w-full h-full rounded-t-2xl shadow-lg flex flex-col">
          <button
            onClick={() => setDrawerOpen(false)}
            className="self-end text-white bg-black absolute ps-10 pe-2 pb-8 rounded-bl-full text-2xl z-50"
          >
            ✕
          </button>
          <div className="">
            <img
              className="-mt-8"
              src="https://img.b112j.com/bj/h5/assets/images/member-header-bg.png?v=1732693526219"
              alt=""
            />
            <div className="px-3 absolute -mt-32 space-y-4 w-full">
              <div className="flex items-center justify-between">
                <div className="w-1/6 m-auto">
                  <img
                    className="w-[70px]"
                    src="https://www.baji.live/images/v1/web/bj/vip/bdt/rank1.png"
                    alt=""
                  />
                </div>
                <div className="w-5/6 space-y-2">
                  <p className="text-xl">{user?.fullName}</p>
                  <div className="bg-[#333333] flex items-center justify-center gap-2 px-3 py-2 text-[10px] rounded-full w-fit">
                    <p>
                      {" "}
                      ভিআইপি পয়েন্টস (VP){" "}
                      <span className="text-[#39d89f] ms-2">0</span>
                    </p>
                    <p className="border-s border-white ps-3 inline-flex items-center gap-1">
                      মাই ভিআইপি <MdDoubleArrow className="text-lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#333333] px-3 py-7 rounded-md flex items-center justify-between">
                <p className="inline-flex items-center gap-3 text-[#7dbfaa] text-sm">
                  মেইন ওয়ালেট{" "}
                  {isWalletOpen ? (
                    <FaEyeSlash
                      onClick={() => setIsWalletOpen(false)}
                      className="text-xl"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setIsWalletOpen(true)}
                      className="text-xl"
                    />
                  )}
                </p>
                <p className="text-xl text-yellow-300">
                  ৳ <span className="ms-2">{isWalletOpen ? 0 : "***"}</span>
                </p>
              </div>

              <Card
                handleModalOpen={handleModalOpen}
                contents={tohobilContents}
                heading="তহবিল"
                closeModal={() => setDrawerOpen(false)}
              />
              <Card
                inMaintainance={true}
                handleModalOpen={handleModalOpen}
                contents={historyContents}
                heading="হিস্ট্রি"
                closeModal={() => setDrawerOpen(false)}
              />
              <Card
                inMaintainance={true}
                handleModalOpen={handleModalOpen}
                contents={profileContents}
                heading="প্রোফাইল"
                closeModal={() => setDrawerOpen(false)}
              />
              <Card
                contents={contactContents}
                heading="যোগাযোগ করুন"
                closeModal={() => setDrawerOpen(false)}
              />
              <div className="bg-[#333333] py-3 rounded-md flex items-center justify-center">
                <p
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center gap-3 text-sm"
                >
                  <IoIosLogOut className="text-2xl" />
                  লগ আউট
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
        title="Oops!!!"
        // onSave={handleSaveChanges}
      >
        <p className="text-center text-red-600">
          Please contact the API Connect us Oracle Technology developers team...
        </p>
      </Modal>
    </>
  );
};

export default AccountDetailsMobile;
