import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageCricket from "../../../assets/betJilliImages/images/icon-cricket.svg";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  icons,
  subcategoriesMap,
  setOpenDropdown,
  openDropdown,
  handleOutsideClick,
}) => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div>
      {/* ✅ Fixed Overlay (always in DOM, only hidden via opacity) */}
      <div
        className={`fixed inset-0 z-[30] transition-opacity duration-10 bg-black ${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* ✅ Sidebar */}
      <div
        className={`fixed top-0  left-0 w-60 bg-primary-primaryColor text-white transition-all 
            duration-5 ease-in-out ${
              isSidebarOpen
                ? "translate-x-0 z-[9999]"
                : "-translate-x-full z-[30]"
            }`}
      >
        <div className="flex flex-col h-screen">
          {/* Header */}
          <div className="flex justify-between items-center bg-jili-bgBlack px-4 py-1 relative">
            <div className="flex items-center justify-center font-bold bg-white py-2 rounded-md w-full">
              <img src={imageCricket} alt="" className="w-[10%]" />
              <p className="text-black">Cricket</p>
            </div>

            {/* Arrow Button */}
            <div
              className={`fixed left-0 transform transition-transform duration-300 bg-black xl:w-[54px] lg:w-10 md:w-8 w-20 h-14 flex items-center justify-center ${
                isSidebarOpen ? "translate-x-60" : "translate-x-60"
              }`}
            >
              <button
                className="bg-backgroundV2Color rounded-full text-black py-1 xl:px-3 lg:px-2  md:px-1 px-3 shadow-lg"
                onClick={toggleSidebar}
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="py-1 flex justify-start ml-2 px-2 border-b pb-2 border-white border-opacity-20">
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 transition-all"
            >
              <span
                className={`text-sm font-semibold ${
                  !isDark ? "text-black" : "text-white"
                }`}
              >
                {isDark ? "Dark" : "Light"}
              </span>
              <div className="w-10 h-5 bg-[#333333] rounded-full relative">
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300 flex items-center justify-center text-xs ${
                    isDark ? "right-0.5" : "left-0.5"
                  }`}
                >
                  {isDark ? "🌙" : "☀️"}
                </div>
              </div>
            </button>
          </div>

          {/* ✅ Scrollable area fixed with flex-1 */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#333333] scrollbar-track-transparent">
            <ul className="space-y-4 px-2 py-2">
              {icons?.map((item) => (
                <li key={item.key}>
                  <div
                    className="flex items-center justify-between cursor-pointer px-4 py-1"
                    onClick={() =>
                      subcategoriesMap[item.key]
                        ? setOpenDropdown((prev) =>
                            prev === item.key ? null : item.key
                          )
                        : navigate(item.link)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-6 h-6"
                        style={{
                          WebkitMaskImage: `url(${item.img})`,
                          WebkitMaskRepeat: "no-repeat",
                          WebkitMaskSize: "contain",
                          backgroundColor: "#FFE400",
                        }}
                      />
                      <span>{item.label}</span>
                    </div>
                    {subcategoriesMap?.[item.key] && (
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          openDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {openDropdown === item.key && (
                    <div className="bg-[#333333] py-2 bg-opacity-80">
                      <ul className="ml-8 mt-2 space-y-2">
                        {subcategoriesMap[item.key].map((sub, idx) => (
                          <li key={idx}>
                            <Link className="flex items-center space-x-2">
                              <img
                                src={sub.img}
                                alt={sub.label}
                                className="w-4 h-4"
                              />
                              <span className="text-sm">{sub.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
