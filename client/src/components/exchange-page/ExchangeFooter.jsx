import { FaChrome } from "react-icons/fa";
import { IoLogoFirefox } from "react-icons/io5";

const ExchangeFooter = () => {
  return (
    <div className="mt-8">
      <div className="flex gap-1 w-12 m-auto text-gray-400">
        <FaChrome size={20} />
        <IoLogoFirefox size={20} />
      </div>
      <p className="text-center w-[600px] m-auto">
        Our website works best in the newest and last prior version of these
        browsers: Google Chrome. Firefox
      </p>
    </div>
  );
};

export default ExchangeFooter;
