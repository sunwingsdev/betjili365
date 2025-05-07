import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/Buttons/SecondaryButton";
import { IoTimeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  const { user } = useSelector((state) => state.auth);
  const { image, title, subtitle, createdAt } = offer;
  return (
    <div className="bg-white rounded-md">
      <img
        className="rounded-t-md h-40 w-full"
        src={`${import.meta.env.VITE_BASE_API_URL}${image}`}
        alt=""
      />
      <div className={""}>
        <div className="pb-2 relative">
          <div className="border-dashed absolute -top-4 w-full h-4 border-t-4 border-[#8E8E8E]"></div>
          <div className="text-white flex items-center justify-between border-s-4 border-[#FFE22B] px-4 my-3">
            <h2 className="text-xl text-black">{title}</h2>
            <p className="text-black bg-transparent py-2 px-3 text-xs md:text-sm border border-textSecondaryColor rounded">
              দীর্ঘ মেয়াদী
            </p>
          </div>
          <div className="px-4 text-sm text-[#1C1C1C] space-y-2">
            <p>{subtitle}</p>
            <div className="flex items-center gap-2">
              <IoTimeOutline className="text-xl" />
              <p>{createdAt}</p>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link to="/profile/deposit">
                    <PrimaryButton>ডিপোজিট</PrimaryButton>
                  </Link>
                  <Link to="/details">
                    <SecondaryButton>বিস্তারিত</SecondaryButton>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <PrimaryButton>সাইন আপ</PrimaryButton>
                  </Link>
                  <Link to="/details">
                    <SecondaryButton>বিস্তারিত</SecondaryButton>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
