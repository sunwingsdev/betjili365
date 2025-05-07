import WalletSection from "@/components/home/WalletSection/WalletSection";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdCake } from "react-icons/md";
import { useSelector } from "react-redux";

const ProfileHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="space-y-3">
      <WalletSection />
      <div className="bg-[#313131] px-3 py-4 rounded items-center justify-between hidden md:flex">
        <div className="text-white text-sm space-y-1">
          <p className="opacity-50">শেষ লগইন সময়</p>
          <p className="text-base">2024/12/07 17:18:57</p>
        </div>
        <div className="text-white text-sm space-y-1 border-s border-gray-700 ps-3">
          <p className="opacity-50">শেষ আমানতের সময়</p>
          <Link to="/profile/deposit">
            <button className="text-xs px-2 py-1 bg-[#3356cd]">
              এখনি ডিপোজিট করুন
            </button>
          </Link>
        </div>
        <div className="text-white text-sm space-y-1 border-s border-gray-700 ps-3">
          <p className="opacity-50">শেষ প্রত্যাহারের সময়</p>
          <p className="text-base">কোনও ডেটা নেই</p>
        </div>
        <div className="text-white text-sm space-y-1 border-s border-gray-700 ps-3">
          <p className="opacity-50">রেজিস্ট্রেশনের তারিখ</p>
          <p className="text-base">2024/12/07 17:18:57</p>
        </div>
      </div>
      <div className="text-white flex flex-col md:flex-row items-center justify-center gap-3">
        <div className="w-full md:w-1/4 flex items-center gap-2 px-4 py-4 bg-[#414141] rounded">
          <FaUser className="text-[#a0a0a0] text-lg" />
          <p>{user?.fullName}</p>
        </div>
        <div className="w-full md:w-1/4 flex justify-between bg-[#414141] rounded">
          <div className="flex items-center gap-2 px-4 py-4">
            <FaPhoneAlt className="text-[#a0a0a0] text-lg" />
            <p>{user?.phone}</p>
          </div>
          <div className="w-[15%] text-lg bg-[#5b5b5b] inline-flex items-center justify-center rounded-r">
            +
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center gap-2 px-4 py-4 bg-[#414141] rounded">
          <IoMdMail className="text-[#a0a0a0] text-lg" />
          <p>{user?.email}</p>
        </div>
        <div className="w-full md:w-1/4 flex items-center gap-2 px-4 py-4 bg-[#414141] rounded">
          <MdCake className="text-[#a0a0a0] text-lg" />
          <p>{user?.birthday ? user?.birthday : "No data found"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
