import { FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "@/components/shared/Modal";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { singleUser } = useSelector((state) => state.auth);

  return (
    <div className="">
      <div className="bg-primary-primaryColorTwo rounded">
        <div className="pt-6 pb-5">
          <img
            className="w-12 m-auto"
            src="https://www.baji.live/images/v1/web/bj/vip/bdt/rank1.png"
            alt=""
          />
          <h2 className="text-sm font-semibold text-white text-center">
            {singleUser?.fullName}
          </h2>
          <p className="flex justify-center items-center gap-1 text-white">
            <FaStar className="text-textSecondaryColor" size={12} />0
          </p>
        </div>
        <div className="bg-primary-primaryColorTwo w-[76%] h-1 m-auto"></div>
        <div className="flex justify-between gap-1 px-8 py-1">
          <p className="text-sm text-[#c1c1c1]">Normal</p>
          <p className="text-sm text-[#c1c1c1]">Elite I</p>
        </div>
        <div className="bg-[#464646] w-[80%] h-0.5 m-auto mt-4"></div>
        <div className="flex justify-around items-center text-sm py-4">
          <NavLink
            to="/profile/deposit"
            state={{ method: "deposit" }}
            className={({ isActive }) =>
              isActive
                ? "text-textSecondaryColor"
                : "text-white hover:text-textSecondaryColor"
            }
          >
            <div className="bg-[#5a5a5a] w-9 h-9 m-auto rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/deposit.svg"
                alt=""
              />
            </div>
            <p className="mt-1 text-textSecondaryColor">ডিপোজিট</p>
          </NavLink>
          <Link
            to="/profile/deposit"
            state={{ method: "withdraw" }}
            className="text-white hover:text-textSecondaryColor text-sm"
          >
            <div className="bg-[#5a5a5a] w-9 h-9 m-auto rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/withdrawal.svg"
                alt=""
              />
            </div>
            <p className="mt-1 text-textSecondaryColor">উইথড্র</p>
          </Link>
        </div>
        <div className="bg-[#464646] w-[90%] h-0.5 m-auto"></div>
        <div className="pb-2">
          <h2 className="text-base font-semibold text-white px-3 py-2">
            ফান্ডস
          </h2>
          <Link onClick={() => setIsModalOpen(true)}>
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/bet-record.svg"
                  alt=""
                />
              </div>
              <p className="text-sm">বেটিং রেকর্ডস</p>
            </div>
          </Link>
          <Link onClick={() => setIsModalOpen(true)}>
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 mt-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/wallet.svg"
                  alt=""
                />
              </div>
              <p className="text-sm">মাই ওয়ালেট</p>
            </div>
          </Link>
          <Link onClick={() => setIsModalOpen(true)}>
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 mt-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/turnover.svg"
                  alt=""
                />
              </div>
              <p className="text-sm">টার্নওভার</p>
            </div>
          </Link>
          <Link onClick={() => setIsModalOpen(true)}>
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 mt-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/vip.svg"
                  alt=""
                />
              </div>
              <p className="text-sm">ভিআইপি</p>
            </div>
          </Link>
          <Link to="/profile/transaction">
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 mt-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/transaction-record.svg"
                  alt=""
                />
              </div>
              <p className="text-sm">ট্রানজেকশন রেকর্ড</p>
            </div>
          </Link>
          <div className="bg-[#464646] w-[90%] h-0.5 m-auto mt-3"></div>
          <h2 className="text-base font-semibold text-white px-3 py-2">
            প্রোফাইল
          </h2>
          <Link onClick={() => setIsModalOpen(true)}>
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 mt-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/member.svg"
                  alt=""
                />
              </div>
              <p className="text-sm">ব্যাক্তিগত তথ্য</p>
            </div>
          </Link>
          <Link onClick={() => setIsModalOpen(true)}>
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 mt-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/password.svg"
                  alt=""
                />
              </div>
              <p className="text-sm">পাসওয়ার্ড রিসেট করুন</p>
            </div>
          </Link>
          <Link onClick={() => setIsModalOpen(true)}>
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 mt-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/mail.svg"
                  alt=""
                />
              </div>
              <p className="text-sm"> ইনবক্স </p>
            </div>
          </Link>
          <Link onClick={() => setIsModalOpen(true)}>
            <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor hover:bg-primary-primaryColorTwo py-1.5 mt-1 px-4 border-l-4 border-[#313131] hover:border-l-4 hover:border-textSecondaryColor duration-300">
              <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
                <img
                  src="https://www.baji.live/images/v1/web/img-template/icon-set/player/sidenav/friend.svg"
                  alt=""
                />
              </div>
              <p className="text-sm">রেফারেল প্রোগ্রাম</p>
            </div>
          </Link>
        </div>
      </div>
      <h2 className="text-sm font-semibold text-teal-600 py-2">
        কমিউনিটি ওয়েবসাইট
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/socialicons/facebook.svg"
                alt=""
              />
            </div>
            <p className="text-sm">FaceBook</p>
          </div>
        </Link>
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/socialicons/instagram.svg"
                alt=""
              />
            </div>
            <p className="text-sm">Instagram</p>
          </div>
        </Link>
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/socialicons/twitter.svg"
                alt=""
              />
            </div>
            <p className="text-sm">Twitter</p>
          </div>
        </Link>
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/socialicons/pinterest.svg"
                alt=""
              />
            </div>
            <p className="text-sm">Pinterest</p>
          </div>
        </Link>
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/socialicons/youtube.svg"
                alt=""
              />
            </div>
            <p className="text-sm">Youtube</p>
          </div>
        </Link>
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/socialicons/telegram-channel.svg"
                alt=""
              />
            </div>
            <p className="text-sm">Telegram</p>
          </div>
        </Link>
      </div>
      <h2 className="text-sm font-semibold text-teal-600 py-2">কমিউনিটি cs</h2>
      <div className="grid grid-cols-2 gap-2">
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/csicons/whatsapp.svg"
                alt=""
              />
            </div>
            <p className="text-sm">Whatsapp</p>
          </div>
        </Link>
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/csicons/email.svg"
                alt=""
              />
            </div>
            <p className="text-sm">Email</p>
          </div>
        </Link>
        <Link>
          <div className="flex items-center gap-2 text-white hover:text-textSecondaryColor bg-primary-primaryColorTwo hover:bg-[#3e3e3e] py-2 px-4 duration-300 rounded">
            <div className="bg-[#5a5a5a] w-6 h-6 rounded-full flex justify-center items-center">
              <img
                src="https://www.baji.live/images/v1/web/img-template/icon-set/socialicons/facebook.svg"
                alt=""
              />
            </div>
            <p className="text-sm">Facebook</p>
          </div>
        </Link>
      </div>
      {/* Modal */}
      <Modal
        title={"Oops!!!"}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </Modal>
    </div>
  );
};

export default Sidebar;
