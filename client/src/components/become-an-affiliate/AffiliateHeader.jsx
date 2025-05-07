import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogo from "../../assets/affiliates/BD.png";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { MdOutlineMenu } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

const AffiliateHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { data: homeControls } = useGetHomeControlsQuery();
  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  //   const scrollToSection = (ref) => {
  //     if (ref.current) {
  //       ref.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  return (
    <>
      <header className="bg-primary-primaryColorTwo text-white shadow-md py-4 pl-4 lg:pl-0 w-full z-10">
        <div className="container mx-auto  flex justify-around lg:justify-between lg:px-28">
          {/* Menu Icon Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="w-6 h-6 bg-yellow-500 hover:bg-yellow-400 text-black rounded-sm flex items-center justify-center"
              onClick={toggleMenu}
            >
              <MdOutlineMenu />
            </button>
          </div>

          {/* Navigation Menu */}
          {isMenuOpen && (
            <ul className="bg-green-800 w-56 h-full absolute top-16 left-0 z-50 mt-6 pt-12 flex flex-col items-center gap-4">
              <li>
                <Link to="/affiliate/login">
                  <button className="w-52 h-12 bg-green-900 sm:text-sm lg:text-base font-medium font-poppins  rounded-lg lg:block whitespace-nowrap px-4">
                    Contact Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/affiliate/termsandconditions">
                  <button className="w-52 h-12 bg-green-900 sm:text-sm lg:text-base font-medium font-poppins  rounded-lg lg:block whitespace-nowrap px-4">
                    Terms & Condition
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/affiliate/login">
                  <button className="w-52 h-12 bg-green-500 sm:text-sm lg:text-base font-medium font-poppins  rounded-lg lg:block whitespace-nowrap px-4 text-green-900">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/affiliate/signup">
                  <button className="w-52 h-12 bg-yellow-400 sm:text-sm lg:text-base font-medium font-poppins  rounded-lg lg:block whitespace-nowrap px-4 text-green-900">
                    Sign Up
                  </button>
                </Link>
              </li>
            </ul>
          )}

          <div className="w-24 lg:w-20 sans-serif">
            <Link to="/affiliate">
              {logo?.image ? (
                <img
                  className="w-16"
                  src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
                  alt="Logo"
                />
              ) : (
                <div className="h-10"></div>
              )}
              <p className="text-white italic text-left">Affiliate</p>
            </Link>
          </div>

          <div className="flex-none gap-x-4 flex items-center font-sans sans-serif">
            <Link to="/affiliate/login">
              <button className="md:w-16 lg:w-24 sm:h-6 md:h-8 lg:h-10 bg-white hover:bg-yellow-400 hover:text-black sm:text-sm lg:text-base text-black rounded-sm border-none font-medium py-1 px-4 poppins sans-serif">
                Login
              </button>
            </Link>

            <Link to="/affiliate/signup">
              <button className="lg:w-24 sm:h-6 lg:h-10 bg-yellow-500 hover:bg-yellow-400 text-black sm:text-sm lg:text-base font-medium font-poppins hidden rounded-sm lg:block">
                Sign Up
              </button>
            </Link>

            <div
              role="button"
              className="w-20 h-8 lg:h-10 flex items-center bg-yellow-400 hover:bg-yellow-500 font-medium text-black rounded-sm"
              onClick={() => setModalOpen(true)}
            >
              <img
                src={blogo}
                alt="Bangladesh Flag"
                className="w-6 h-6 rounded-full mx-2"
              />
              <div className="flex items-center justify-between w-full">
                <p>EN</p>
                <FaCaretDown />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="rounded-lg w-96"
          >
            <div className="bg-green-600 rounded-t-lg p-4 relative">
              <h3 className="text-lg text-black font-semibold text-center">
                Select Currency and Language
              </h3>
              <button
                className="text-white hover:text-gray-300 absolute top-0 right-2 text-2xl"
                onClick={() => setModalOpen(false)}
              >
                &times;
              </button>
            </div>

            <div className="bg-white rounded-b-lg p-4">
              <div className="grid grid-cols-3 items-center gap-x-6 mb-5 py-2 px-0">
                <div className="py-0 px-3">
                  <img
                    src="https://darazplaypartner.com/wp-content/uploads/2024/07/BD.png"
                    alt="Bangladesh Flag"
                    className="w-7 rounded-full"
                  />
                </div>

                <div className="py-0 px-3">
                  <button
                    type="submit"
                    className="bg-white py-1 px-5 text-black font-semibold hover:bg-white border hover:border-yellow-400 border-gray-300 shadow-lg"
                  >
                    Bengali
                  </button>
                </div>
                <div className="py-0 px-3">
                  <button
                    type="submit"
                    className="bg-white py-1 px-5 text-black font-semibold hover:bg-white border border-gray-300 hover:border-yellow-400 shadow-lg "
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AffiliateHeader;
