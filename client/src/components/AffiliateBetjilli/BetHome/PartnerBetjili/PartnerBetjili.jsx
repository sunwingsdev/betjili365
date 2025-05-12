import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../../../assets/betJilliImages/images/bg-1-1.jpg";
import logo from "../../../../assets/betJilliImages/logos/logo.png"; // update path as needed

import rightImage from "../../../../assets/betJilliImages/images/betjiliaffiliates-Phone-EN.png";

const PartnerBetjili = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat flex md:flex-row flex-col items-center justify-center px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-6xl w-full flex flex-col  md:flex-row  justify-between xl:items-start md:items-center   rounded-xl p-6 px-8">
        {/* Left Side */}
        <div className="text-white mb-6 lg:mb-0 ">
          <h2 className="md:text-5xl text-textSecondaryColorThree xl:text-7xl  font-bold mb-4">
            BE A PARTNER
          </h2>
          <div className="flex items-center gap-4  flex-wrap">
            <p className="lg:text-5xl  xl:text-6xl md:text-4xl  font-bold">WITH</p>
            <img
              src={logo}
              alt="Logo"
              className="h-14 mt-2 xl:h-12 lg:h-10 md:h-8 w-auto object-contain"
            />
          </div>

          <div className="flex py-4 flex-col lg:gap-3 md:whitespace-nowrap uppercase xl:text-4xl md:text-2xl text-4xl">
            <p className="">Zero Investment</p>
            <p className="">Lifetime EARNING</p>
            <p className="">
              {" "}
              <span className="text-textSecondaryColorThree">45%</span> Weekly
              or Fixed <span className="text-textSecondaryColorThree">50%</span>{" "}
              Monthly
            </p>
            <p className="">Commission</p>
          </div>
          {/* large devices */}
          <div className="md:flex hidden gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-yellow-400 blur-xl opacity-60 group-hover:opacity-80 rounded-md transition duration-300 "></div>
              <Link
                to="/affiliate/signup"
                className="relative px-6 py-2 border border-gray-500 rounded-md bg-backgroundV2Color hover:bg-opacity-50 font-bold text-black transition z-10"
              >
                REGISTER
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-yellow-400 blur-xl opacity-60 group-hover:opacity-80 rounded-md transition duration-300 "></div>
              <Link
                to="/affiliate/login"
                className="relative px-6 py-2 hover:border hover:border-gray-500 rounded-md bg-backgroundV2Color hover:bg-opacity-50 font-bold text-black transition z-10"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" w-full flex justify-center">
          <img
            src={rightImage}
            alt="Partner Visual"
            className="xl:w-[80%] md:w-full "
          />
        </div>
      </div>
      <div className="flex md:hidden gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-yellow-400 blur-xl opacity-60 group-hover:opacity-80 rounded-md transition duration-300 "></div>
              <Link
                to="/affiliate/signup"
                className="relative px-6 py-2 border border-gray-500 rounded-md bg-backgroundV2Color hover:bg-opacity-50 font-bold text-black transition z-10"
              >
                REGISTER
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-yellow-400 blur-xl opacity-60 group-hover:opacity-80 rounded-md transition duration-300 "></div>
              <Link
                to="/affiliate/login"
                className="relative px-6 py-2 hover:border hover:border-gray-500 rounded-md bg-backgroundV2Color hover:bg-opacity-50 font-bold text-black transition z-10"
              >
                LOGIN
              </Link>
            </div>
          </div>
    </div>
  );
};

export default PartnerBetjili;
