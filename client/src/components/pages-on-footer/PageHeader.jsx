import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogo from "../../assets/affiliates/BD.png";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const PageHeader = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
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
      <header className="bg-backgroundImageRed text-white shadow-md py-7 pl-4 lg:pl-0 w-full z-10">
        <div className="container mx-auto  flex justify-around lg:justify-between lg:px-28">
          {/* Menu Icon Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="w-6 h-6 bg-customYellow hover:bg-customYellow text-black rounded-sm flex items-center justify-center"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Navigation Menu */}
          {isMenuOpen && (
            <ul className="menu bg-green-800 w-56 h-full absolute top-16 left-0 z-50">
              <li>
                <Link to="/affiliate/login">
                  <button className="w-32 h-12 bg-customGreenSecondary  hover:text-black sm:text-sm lg:text-base text-customWhit rounded-lg border-none font-medium py-1 px-4 poppins sans-serif">
                    Contact Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/affiliate/terns">
                  <button className="w-32 h-16 bg-customGreenSecondary   sm:text-sm lg:text-base font-medium font-poppins  rounded-lg lg:block">
                    Terms and Condition
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/affiliate/login">
                  <button className="w-32 h-10 bg-customGreen hover:bg-customYellow hover:text-black sm:text-sm lg:text-base text-customWhit rounded-lg border-none font-medium py-1 px-4 poppins sans-serif">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/affiliate/signup">
                  <button className="w-32 h-10 bg-customYellow hover:bg-customYellow text-black sm:text-sm lg:text-base font-medium font-poppins  rounded-lg lg:block">
                    Sign Up
                  </button>
                </Link>
              </li>
            </ul>
          )}

          <Link to="/" className="w-16 lg:w-32 sans-serif">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
              alt=""
            />
          </Link>

          <div className="flex-none gap-x-4 flex text-sm items-center Poppins, sans-serif">
            <Link className="font-bold" to="">
              Home
            </Link>
            <Link className="font-bold" to="">
              Referral
            </Link>
            <Link className="font-bold" to="">
              Vip Program
            </Link>
            <Link to="">
              <button className="md:w-16 lg:w-24 sm:h-6 md:h-8 lg:h-10 bg-customGreen hover:bg-customYellow hover:text-black sm:text-sm lg:text-base text-customWhit rounded-sm border-none font-medium py-1 px-4 poppins sans-serif">
                Login
              </button>
            </Link>

            <Link to="">
              <button className="lg:w-24 sm:h-6 lg:h-10 bg-customYellow hover:bg-customYellow text-black sm:text-sm lg:text-base font-medium font-poppins hidden rounded-sm lg:block">
                Sign Up
              </button>
            </Link>

            <div
              role="button"
              className="w-20  h-8 lg:h-10 flex bg-customYellow hover:bg-customYellow font-medium text-black rounded-sm items-center"
              onClick={() => setModalOpen(true)}
            >
              <img
                src={blogo}
                alt="Bangladesh Flag"
                className="w-6 h-6 rounded-full ml-2"
              />
              <span>EN</span>
              <i className="fa fa-caret-down"></i>
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
            <div className="bg-green-600 rounded-t-lg p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg text-black font-semibold">
                  Select Currency and Language
                </h3>
                <button
                  className="text-white hover:text-gray-300 text-3xl"
                  onClick={() => setModalOpen(false)}
                >
                  &times;
                </button>
              </div>
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
                    className="bg-white py-1 px-5 text-customBlack font-semibold hover:bg-white hover:border-yellow-400 shadow-customShadow border-white"
                  >
                    Bengali
                  </button>
                </div>
                <div className="py-0 px-3">
                  <button
                    type="submit"
                    className="bg-white py-1 px-5 text-customBlack font-semibold hover:bg-white hover:border-yellow-400 shadow-customShadow border-white"
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

export default PageHeader;
