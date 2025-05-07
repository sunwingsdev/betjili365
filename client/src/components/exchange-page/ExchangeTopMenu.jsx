import { IoIosSettings } from "react-icons/io";
import ExchangePageMenu from "../../pages/home/ExchangePage/ExchangePageMenu";
import { useState } from "react";
import { IoSearch, IoArrowBack } from "react-icons/io5";

const ExchangeTopMenu = () => {
  const menuItems = [
    { id: "1", label: "Home", link: "" },
    { id: "2", label: "In-Play", link: "/in-play" },
    { id: "3", label: "Multi Markets", link: "/multi-markets" },
    { id: "4", label: "Cricket", badge: 2, link: "/cricket" },
    { id: "5", label: "Soccer", badge: 6, link: "/soccer" },
    { id: "6", label: "Tennis", badge: 22, link: "/tennis" },
    { id: "7", label: "E-Soccer", badge: 2, link: "/e-soccer" },
    { id: "8", label: "BBL Winner", link: "/bbl-winner" },
    { id: "9", label: "Kabaddi", badge: 1, link: "/kabaddi" },
    { id: "10", label: "Result", link: "/result" },
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleBackClick = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col bg-[#434343]">
      {/* সার্চ বার এবং ব্যাক বাটন */}
      {isSearchOpen ? (
        <div className="flex items-center gap-2 w-full bg-[#3b3b3b] px-4 py-2">
          <button onClick={handleBackClick} className="text-white text-xl">
            <IoArrowBack />
          </button>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search..."
            className="w-full bg-transparent text-white outline-none"
          />
        </div>
      ) : (
        <div className="flex justify-between items-center gap-2 lg:px-4">
          <div className="">
            <ExchangePageMenu menuItems={menuItems} />
          </div>

          {/* সার্চ বাটন */}
          <button
            className="p-3 lg:p-2 text-white bg-[#3b3b3b] hover:bg-[#303030] lg:hidden"
            onClick={handleSearchClick}
          >
            <IoSearch />
          </button>
          <div className="lg:flex items-center gap-4 hidden">
            {/* চেকবক্স */}
            <div className="flex items-center gap-2 py-1 px-4 bg-[#3b3b3b] hover:bg-[#303030] border-t-2 duration-300 border-yellow-400">
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-4 h-4 rounded-md checked:bg-yellow-500"
              />
              <label
                htmlFor="checkbox"
                className={`text-sm font-semibold text-white cursor-pointer`}
              >
                One Click Bet
              </label>
            </div>
            <p className="flex items-center gap-2 text-white font-semibold">
              Setting <IoIosSettings />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangeTopMenu;
