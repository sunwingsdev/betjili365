import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAngleDown, FaRegCircle } from "react-icons/fa";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import OppsModal from "../shared/Modals/OppsModal";

const CashAgentSidebar = ({ open, setOpen, menuItems }) => {
  const { data: homeControls, isLoading } = useGetHomeControlsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    GamesControl: false,
    GamesApikey: false,
    OracleTechnology: false, // Track submenu state for Games Control
    Bonuses: false, // Track submenu state for Games Control
    gameHistory: false, // Track submenu state for Games Control
    Fontend: false, // Track submenu state for Games Control
    BankingDeposit: false, // Track submenu state for Games Control
    BankingWithdrow: false, // Track submenu state for Games Control
    Settings: false, // Track submenu state for Games Control
  });

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prevState) => {
      const updatedState = {};
      for (let key in prevState) {
        updatedState[key] = false;
      }
      updatedState[menu] = !prevState[menu];
      return updatedState;
    });
  };

  // Handle toggle sidebar visibility
  const handleToggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  // Open modal
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className={`${
          open ? "w-64" : "w-16"
        } hidden md:block duration-300 h-screen fixed`}
      >
        {/* Start Top collapse */}
        <div className={`bg-zinc-800 py-3 ${!open && "py-5"}`}>
          <div className="flex gap-x-3 items-center justify-center">
            <div className={`flex gap-1 ${!open && "hidden"}`}>
              <Link
                to={"/"}
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg"
              >
                {isLoading ? (
                  <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
                ) : (
                  <div className="flex flex-col">
                    <img
                      className="w-12"
                      src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
                      alt="Logo"
                    />
                    <p className="text-white text-xs">Cash Agent Dashboard</p>
                  </div>
                )}
              </Link>
            </div>
            <div>
              <IoIosArrowBack
                className={`m-auto text-center w-10 h-7 p-1 bg-yellow-400 hover:bg-yellow-500 rounded-full cursor-pointer ${
                  !open && "rotate-180"
                } `}
                onClick={handleToggleSidebar}
              />
            </div>
          </div>
        </div>
        {/* End Top collapse */}
      </div>

      {/* Start Menu bar */}
      <div
        className={`bg-[#222222] overflow-y-auto fixed mt-[62px] hidden md:block pb-16 ${
          open ? "w-64" : "w-16"
        } text-sm text-white duration-300 font-semibold h-full scrollbar-hide`}
      >
        {/* Dynamic Menu Rendering */}
        {menuItems?.map((item, index) => (
          <div key={index}>
            <Link
              onClick={!item?.path && !item?.submenu && handleModalOpen}
              to={item?.path || "#"}
            >
              <div
                className={`px-4 py-3 flex flex-row items-center justify-between gap-2 border-b border-gray-700 duration-300 hover:bg-red-600 hover:border-l-4 hover:border-l-slate-400 ${
                  !open && "justify-center"
                }`}
                onClick={() => item?.submenu && toggleSubmenu(item?.name)}
              >
                {/* Only show icon for menu items with submenus */}
                <div className="flex flex-row items-center gap-2">
                  {item?.icon}
                  <p className={`${!open && "hidden"}`}>{item?.name}</p>
                </div>
                {/* Show arrow for submenu toggle */}
                {item?.submenu && item?.submenu?.length !== 0 && open && (
                  <FaAngleDown className={`text-white ${!open && "hidden"}`} />
                )}
              </div>
            </Link>

            {/* Only show submenu when "Games Control" is clicked */}
            {item?.submenu && submenuOpen[item?.name] && open && (
              <div className="pl-8 text-white text-sm font-semibold bg-[#114d3a] duration-300">
                {item?.submenu?.map((subItem, subIndex) => (
                  <Link
                    onClick={
                      !subItem.path && !subItem.submenu && handleModalOpen
                    }
                    key={subIndex}
                    to={subItem?.path}
                    className="py-2.5 flex gap-2"
                  >
                    <FaRegCircle size={22} className="text-yellow-300" />
                    {subItem?.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <OppsModal
        title="Opps!!"
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </OppsModal>
    </div>
  );
};

export default CashAgentSidebar;
