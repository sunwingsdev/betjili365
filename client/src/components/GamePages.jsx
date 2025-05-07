import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconAll from "../assets/v2/icon-all-provider.svg";
import { FaSearch } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";

const GamePages = ({ gameData, gameTypes, gameProviders }) => {
  const tabRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    console.log("Search Input:", e.target.value); // 🔹 Console log the input value
  };

  const toggleSelection = (item, setSelected) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleConfirm = () => {
    console.log("Selected Providers:", selectedProviders);
    console.log("Selected Game Types:", selectedTypes);
    setShowSearchModal(false);
  };
  // Tabs Creation
  const tabs = useMemo(
    () => [{ name: "all", src: iconAll }, ...(gameData?.images || [])],
    [gameData?.images]
  );

  // Filtering Images based on Active Tab
  const filteredImages =
    activeTab === "all"
      ? gameData?.images.flatMap((img) => img.gameImages || [])
      : gameData?.images.find((img) => img.name === activeTab)?.gameImages ||
        [];

  // Tab & Content Animations
  const tabVariants = {
    initial: { opacity: 0.5, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, x: 10, scale: 0.98 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -10,
      scale: 0.98,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && tabs.some((tab) => tab.name === hash)) {
      setActiveTab(hash);
    }
  }, [location.hash, tabs]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(`#${tabName.toLowerCase()}`);
  };
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      tabRefs.current[activeTab].scrollIntoView({
        behavior: "smooth", // Smooth animation er jonno
        inline: "center", // Center e niye ashar jonno
        block: "nearest",
      });
    }
  }, [activeTab]);

  return (
    <motion.div className="w-full bg-black">
      {/* Tabs Section */}
      <div className="flex flex-row gap-1 p-2 pr-12 overflow-x-auto">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            ref={(el) => (tabRefs.current[tab.name] = el)}
            className={`cursor-pointer flex flex-col items-center min-h-[40px] min-w-[40px] justify-center rounded-sm transition-all duration-300 ${
              activeTab === tab.name
                ? "border bg-green bg-opacity-30 border-green"
                : "bg-sideBarBackground"
            }`}
            onClick={() => handleTabClick(tab.name)}
            variants={tabVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={tab.src} alt={tab.name} className="w-6 h-6" />
          </motion.div>
        ))}
        <div
          className={`absolute top-12 right-0  bg-green p-3 rounded-sm cursor-pointer ${
            showSearchModal ? "hidden" : "block"
          }`}
          onClick={() => setShowSearchModal(true)}
        >
          <FaSearch className="text-white" />
        </div>
        {showSearchModal && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 transition-all duration-300">
            <div className="bg-black w-full h-full   ">
              <div className="flex flex-row items-center gap-4 border-white border-b border-opacity-50 relative">
                <button
                  className=" text-white text-lg p-3 border-white border-r border-opacity-50 "
                  onClick={() => setShowSearchModal(false)}
                >
                  <FaAngleLeft />
                </button>
                <FaSearch className="text-white absolute right-2" />

                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="গেম অনুসন্ধান করুন"
                  className="w-full text-white text-xs  bg-transparent outline-none placeholder:text-xs placeholder:text-white placeholder:text-opacity-50"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white text-xs mb-2"> গেম প্রোভাইডার </h3>
                <div className="grid grid-cols-3 gap-2 ">
                  {gameProviders.map((provider) => (
                    <button
                      key={provider}
                      className={`py-2 whitespace-nowrap w-full text-xs rounded-sm  ${
                        selectedProviders.includes(provider)
                          ? "bg-green text-white"
                          : "bg-tab-background text-white"
                      }`}
                      onClick={() =>
                        toggleSelection(provider, setSelectedProviders)
                      }
                    >
                      {provider}
                    </button>
                  ))}
                </div>
              </div>

              {/* 🎲 Game Types Section */}
              <div className="p-4">
                <h3 className="text-white text-xs mb-2"> গেম টাইপ </h3>
                <div className="grid grid-cols-3 gap-2">
                  {gameTypes.map((type) => (
                    <button
                      key={type}
                      className={` py-2 whitespace-nowrap w-full text-xs rounded-sm  ${
                        selectedTypes.includes(type)
                          ? "bg-green text-white"
                          : "bg-tab-background text-white"
                      }`}
                      onClick={() => toggleSelection(type, setSelectedTypes)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* ✅ Confirm Button */}
              <div className="p-4 absolute bottom-0 w-full ">
                <button
                  className="w-full bg-green text-white py-2 rounded-sm hover:bg-green-700"
                  onClick={handleConfirm}
                >
                  নিশ্চিত করুন
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Content Section */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        <AnimatePresence mode="wait">
          {filteredImages.length > 0 ? (
            filteredImages.map((imgSrc, index) => (
              <motion.img
                key={index}
                src={imgSrc}
                alt={`Game Image ${index}`}
                className="w-full h-auto rounded-md"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            ))
          ) : (
            <motion.p
              key={activeTab}
              className="grid grid-cols-3 gap-2 mt-2"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              No images found for {activeTab}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GamePages;
