import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // React icon
import bdFlag from "../../../assets/betJilliImages/images/BD.png";
import logo from "../../../assets/betJilliImages/logos/logo.png";

const navItems = [
  {
    key: "REVENUE SHARE",
    label: "REVENUE SHARE",
    to: "/#revenue-share",
    type: "scroll",
  },
  { key: "FAQ", label: "FAQ", to: "faq-section", type: "route" },
  { key: "ABOUT US", label: "ABOUT US", to: "/about", type: "scroll" },
  { key: "CONTACT US", label: "CONTACT US", to: "/about", type: "scroll" },
];

const BetHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#140C0AB3]/100 backdrop-blur-md text-white">
      {/* Large device */}
      <div className="max-w-7xl whitespace-nowrap mx-auto px-4 py-4 hidden lg:flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[50%]" />
        </Link>
        <div className="flex items-center text-sm gap-4">
          <div className="flex items-center gap-6">
            {navItems.map((item) =>
              item.type === "scroll" ? (
                <ScrollLink
                  key={item.key}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-yellow-400 transition"
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <Link
                  key={item.key}
                  to={item.to}
                  className="hover:text-yellow-400 transition"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/affiliate/login"
              className="border border-textSecondaryColorThree px-4 py-2 rounded-md hover:bg-backgroundV2Color hover:text-black transition"
            >
              REGISTER
            </Link>
            <Link
              to="/affiliate/signup"
              className="bg-backgroundV2Color text-black px-4 py-2 rounded-md hover:bg-opacity-50 hover:border hover:border-gray-500 transition"
            >
              LOGIN
            </Link>
            <button className="ml-2">
              <img
                src={bdFlag}
                alt="Bangladesh"
                className="w-12 h-12 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Medium and Small Device */}
      <div className="lg:hidden px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-4xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <Link to="/" className="flex justify-center">
          <img src={logo} alt="Logo" className="h-6" />
        </Link>

        <button>
          <img src={bdFlag} alt="BD Flag" className="w-10 h-10 rounded-full" />
        </button>
      </div>

      {/* Dropdown nav for small devices */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-white px-4 py-4 space-y-4 text-center font-semibold text-black text-xs">
          {navItems.map((item) =>
            item.type === "scroll" ? (
              <ScrollLink
                key={item.key}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer hover:text-yellow-400 transition"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <Link
                key={item.key}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-400 transition"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default BetHeader;
