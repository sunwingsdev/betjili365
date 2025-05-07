import { useState } from "react";
import { FaAngleDown, FaRegCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Modal from "@/components/shared/Modal";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const InfoSidebar = ({ open, setOpen, menuItems }) => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => (prev === menu ? null : menu));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSidebarClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Overlay for all devices */}
      {open && (
        <div
          onClick={handleSidebarClose}
          className="fixed inset-0 z-30 md:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 z-40 bg-primary-primaryColorTwo p-6 transition-transform duration-300 ease-in-out transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:w-96`}
      >
        {/* Close Button (for all screens) */}
        {/* <div className="flex justify-end mb-4">
          <button onClick={handleSidebarClose}>
            <IoIosArrowBack className="text-white text-2xl" />
          </button>
        </div> */}

        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Logo (optional) */}
            {/* {logoHomeControl?.image && (
              <Link to="/" className="block mb-8">
                <img
                  className="w-20"
                  src={`${import.meta.env.VITE_BASE_API_URL}${logoHomeControl?.image}`}
                  alt="Logo"
                />
              </Link>
            )} */}

            <h1 className="text-lg mb-6 leading-6 text-white">
              হ্যালো সেখানে! <br /> কিভাবে আমরা আপনাকে{" "}
              <span className="text-textSecondaryColor">সাহায্য</span> করতে
              পারে?
            </h1>

            <nav className="space-y-3 text-sm font-medium">
              {menuItems?.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item?.to}
                    className="cursor-pointer flex justify-between items-center py-2 text-white hover:text-textSecondaryColor"
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault(); // prevent navigation for submenu toggling
                        toggleSubmenu(item.label);
                      } else if (!item.to) {
                        e.preventDefault(); // prevent default link behavior
                        handleModalOpen();
                      } else {
                        handleSidebarClose(); // optional: close sidebar on link click
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.submenu && <FaAngleDown />}
                  </Link>

                  {item.submenu && submenuOpen === item.label && (
                    <div className="pl-4 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.to || "#"}
                          onClick={!subItem.to ? handleModalOpen : undefined}
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400"
                        >
                          <FaRegCircle size={12} className="text-yellow-300" />
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-4">
            <button className="w-full py-2 bg-primary-primaryColor border border-white rounded text-white transition">
              লগইন
            </button>
            <button className="w-full py-2 text-white bg-backgroundSecondaryColor rounded transition">
              নিবন্ধন করুন
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={"Oops!!!"}
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </Modal>
    </>
  );
};

export default InfoSidebar;
