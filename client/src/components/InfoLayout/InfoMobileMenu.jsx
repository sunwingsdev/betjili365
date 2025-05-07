import { IoMdMenu, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon

import { Link, Navigate } from "react-router-dom";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useToasts } from "react-toast-notifications";
import { FaRegUserCircle, FaRegCircle } from "react-icons/fa";

const InfoMobileMenu = ({
  open,
  setOpen,
  menuItems,
  logOutPath,
  dashboardLink,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Store the currently open submenu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: homeControls } = useGetHomeControlsQuery();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { user } = useSelector((state) => state.auth);

  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleSidebar2 = () => setOpen(!open);

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Toggle the submenu and close sidebar when a submenu item is clicked
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // If the clicked submenu is already open, close it; otherwise, open it
  };

  // Handle click on a submenu item (close the sidebar after selecting)
  const handleSubmenuClick = () => {
    closeSidebar();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    addToast("Logout successful", {
      appearance: "success",
      autoDismiss: true,
    });

    Navigate(logOutPath);
  };

  return (
    <div>
      {/* Top Bar */}
      <div
        className={`bg-primary-primaryColor px-4 py-8 fixed left-0 right-0 z-20 duration-300 border-b-4 border-textSecondaryColor ${
          !open ? "md:ml-0" : "md:ml-96"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Menu Icon */}
          <div
            className="text-yellow-300 cursor-pointer"
            onClick={toggleSidebar2}
          >
            <IoMdMenu className="text-3xl" />
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            {logoHomeControl?.image ? (
              <img
                className="h-12 object-contain"
                src={`${import.meta.env.VITE_BASE_API_URL}${
                  logoHomeControl?.image
                }`}
                alt="Logo"
              />
            ) : (
              <div className="h-8"></div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative text-white">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <span className="text-sm">EN</span>
              <IoIosArrowDown />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-blue-500 rounded-md shadow-lg z-10">
                <ul className="py-1 text-sm">
                  <li
                    className="px-4 py-2 hover:bg-blue-200 hover:text-black cursor-pointer"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      // handle language switch to English
                    }}
                  >
                    English
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-blue-200 hover:text-black cursor-pointer"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      // handle language switch to Bangla
                    }}
                  >
                    বাংলা
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 w-full h-screen overflow-y-auto bg-[#1e2a38] z-30 md:hidden transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between px-4 py-4 bg-[#1e2a38]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {logoHomeControl?.image ? (
              <img
                className="w-20"
                src={`${import.meta.env.VITE_BASE_API_URL}${
                  logoHomeControl?.image
                }`}
                alt="Logo"
              />
            ) : (
              <div className="w-20 h-10 bg-gray-600" />
            )}
          </Link>

          {/* Close Icon */}
          <div className="text-white cursor-pointer" onClick={closeSidebar}>
            <IoClose size={30} />
          </div>
        </div>

        {/* Menu Items */}
        <div className="text-white divide-y divide-gray-700">
          {menuItems.map((item) => (
            <div key={item.label}>
              <div
                className={`flex items-center justify-between px-5 py-3 cursor-pointer hover:bg-[#2a3b4c] ${
                  item.submenu?.length ? "font-semibold" : ""
                }`}
                onClick={() =>
                  item.submenu?.length > 0
                    ? toggleSubmenu(item.label)
                    : handleSubmenuClick()
                }
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <Link to={item.to} onClick={handleSubmenuClick}>
                    {item.label}
                  </Link>
                </div>

                {item.submenu?.length > 0 && (
                  <div>
                    {openSubmenu === item.label ? (
                      <IoIosArrowDown size={20} />
                    ) : (
                      <IoIosArrowForward size={20} />
                    )}
                  </div>
                )}
              </div>

              {/* Submenu */}
              {openSubmenu === item.label && (
                <div className="pl-10 bg-[#2a3b4c] text-sm">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.to}
                      className="flex items-center gap-2 px-4 py-2 hover:text-yellow-400"
                      onClick={handleSubmenuClick}
                    >
                      <FaRegCircle className="text-yellow-300" />
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoMobileMenu;
