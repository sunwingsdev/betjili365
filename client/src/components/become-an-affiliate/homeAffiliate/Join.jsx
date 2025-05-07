import { Link } from "react-router-dom";
import mobileImage from "../../../assets/affiliates/mobile.png";

const Join = () => {
  return (
    <div className="w-full my-12">
      <div className="text-center">
        <div className="max-w-full">
          <h2 className="text-4xl text-yellow-400 mb-12 uppercase font-bold">
            Join Our Affiliate Program at {import.meta.env.VITE_SITE_NAME} Now!
          </h2>

          <div className="box-border lg:gap-12 p-4 border-none h-96 flex items-center justify-center">
            <div>
              <img
                src={mobileImage}
                alt=""
                className="w-full h-96 sm:w-64 md:w-64 lg:w-56"
              />
            </div>
            <div className="flex flex-col pl-4 lg:pl-0 items-center gap-8 Poppins, sans-serif">
              {/* Login Button */}
              <Link to="/affiliate/signup">
                <button className="w-32 h-14 bg-yellow-400 hover:bg-yellow-500 text-black sm:text-sm lg:text-base font-medium font-poppins rounded-sm lg:block">
                  Sign Up
                </button>
              </Link>
              <Link to="/affiliate/login">
                <button className="w-32 h-14 bg-green-400 hover:bg-yellow-500 hover:text-black sm:text-sm lg:text-base text-white rounded-sm border-none font-medium py-1 px-4 poppins sans-serif">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
