import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import logo from "../../../assets/betJilliImages/logos/logo.png"; // update path as needed
import fb from "../../../assets/betJilliImages/logos/facebook.svg";
import insta from "../../../assets/betJilliImages/logos/instagram.svg";
import youtube from "../../../assets/betJilliImages/logos/twitter.svg";
import tiktok from "../../../assets/betJilliImages/logos/telegram-channel.svg";

const middleLinks = [
  {
    key: "Brand Ambassador",
    label: "Brand Ambassador",
    to: "/ambassador",
    type: "route",
  },
  {
    key: "Revenue Share",
    label: "Revenue Share",
    to: "/#revenue-share",
    type: "route",
  },
  { key: "Contact Us", label: "Contact Us", to: "contact", type: "scroll" },
];

const bottomLinks = [
  { key: "Privacy Policy", label: "Privacy Policy", to: "/privacy" },
  { key: "FAQ", label: "FAQ", to: "/faq" },
  { key: "Terms & Conditions", label: "Terms Conditions", to: "/terms" },
];

const socialIcons = [fb, insta, youtube, tiktok];

const BetFooter = () => {
  return (
    <div className="bg-[#140C0AB3]/100 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left: Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-[130px]" />
        </div>
        {/* small device */}
        <div className="flex md:hidden  gap-4">
          {/* Middle: Links + Socials */}
          <div className="flex flex-col items-center gap-4">
            {/* Middle Top Links */}
            <div className="flex flex-col  gap-2">
              {middleLinks.map((item) =>
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

            {/* Social Icons */}
            <div className="flex  gap-4 mt-2">
              {socialIcons.map((icon) => (
                <img
                  key={icon.key}
                  src={icon}
                  alt={`Social ${icon.key}`}
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition"
                />
              ))}
            </div>
          </div>

          {/* Right: Bottom Links */}
          <div className="flex flex-col lg:w-[30%] whitespace-nowrap  gap-2">
            {bottomLinks.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="hover:text-yellow-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>


        {/* large and medium device */}
        {/* Middle: Links + Socials */}
        <div className="md:flex hidden flex-col items-center gap-4">
          {/* Middle Top Links */}
          <div className="flex flex-col  gap-2">
            {middleLinks.map((item) =>
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

          {/* Social Icons */}
          <div className="flex  gap-4 mt-2">
            {socialIcons.map((icon) => (
              <img
                key={icon.key}
                src={icon}
                alt={`Social ${icon.key}`}
                className="w-6 h-6 cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>
        </div>

        {/* Right: Bottom Links */}
        <div className="md:flex hidden flex-col lg:w-[30%] whitespace-nowrap  gap-2">
          {bottomLinks.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="hover:text-yellow-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
      <div className="flex text-xs items-center justify-center pt-4">
        © all rights reserved by Betjili
      </div>
    </div>
  );
};

export default BetFooter;
