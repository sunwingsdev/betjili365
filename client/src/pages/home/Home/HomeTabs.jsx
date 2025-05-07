import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";
// import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";
import iconCasino from "../../../assets/betJilliImages/logos/icon-casino.svg";
import iconSport from "../../../assets/betJilliImages/logos/icon-sport.svg";
import iconSlot from "../../../assets/betJilliImages/logos/icon-slot.svg";
import iconTable from "../../../assets/betJilliImages/logos/icon-table.svg";
import iconCrash from "../../../assets/betJilliImages/logos/icon-crash.svg";
import iconLottery from "../../../assets/betJilliImages/logos/icon-lottery.svg";
import iconFish from "../../../assets/betJilliImages/logos/icon-fish.svg";
import iconArcade from "../../../assets/betJilliImages/logos/icon-arcade.svg";
import iconCock from "../../../assets/betJilliImages/logos/icon-cockfighting.svg";
import { Link } from "react-router-dom";
import { useGetAllSubCategoriesQuery } from "@/redux/features/allApis/categoryApi/subCategoryApi";

const HomeTabs = () => {
  // const iconMap = {
  //   sport:iconSport,
  //   Casino: iconCasino,
  //   Table:iconTable,
  //   Crash:iconCrash,
  //   Fishing: iconFish,
  //    Arcade:iconArcade,
  //   Lottery: iconLottery,
  // };

  const iconArray = [
    iconSport,
    iconCasino,
    iconTable,
    iconCrash,
    iconFish,
    iconArcade,
    iconLottery,
  ];

  const { data: allCategories } = useGetAllCategoriesQuery();
  // const { data: allHomeGames } = useGetAllHomeGamesQuery();
  const { data: allSubCategories } = useGetAllSubCategoriesQuery();
  const [activeTab, setActiveTab] = useState(null);
  const filteredCategories = allCategories?.filter(
    (category) => category.name !== "এক্সক্লুসিভ"
  );

  // Set the first category as default if categories are available
  if (!activeTab && filteredCategories?.length > 0) {
    setActiveTab(filteredCategories[0].name);
  }

  // Filter games based on the active category
  // const filteredGames = allHomeGames?.filter(
  //   (game) => game.category === activeTab
  // );

  const filteredSubCategories = allSubCategories?.filter(
    (subCategory) => subCategory.category === activeTab
  );

  return (
    <div className=" ">
      {/* Category Tabs */}
      <div className="flex sticky top-0 bg-jili-bgPrimary z-10 flex-row items-center px-2 gap-x-4 overflow-x-auto">
        {/* {filteredCategories?.map((category) => (
          <motion.div
            key={category._id}
            className={`flex flex-col text-[10px] items-center cursor-pointer relative 
          ${
            category.name === activeTab
              ? "bg-jili-bgSecondary text-jili-textPrimary px-5 py-1 rounded"
              : "hover:bg-tab-background p-2 "
          }`}
            onClick={() => setActiveTab(category.name)}
            whileTap={{ scale: 0.95 }}
          >
            {category.name === activeTab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-green rounded-full"
              />
            )}
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${category.image}`}
              alt={category.name}
              className="w-5"
            />
             
            <p
              className={`  ${
                category.name === activeTab ? "font-bold" : ""
              }`}
            >
              {category.name}
            </p>
          </motion.div>
        ))} */}
        {filteredCategories?.map((category, index) => (
          <motion.div
            key={category._id}
            className={`flex flex-col text-[10px] items-center cursor-pointer relative 
      ${
        category.name === activeTab
          ? "bg-jili-bgSecondary text-jili-textPrimary px-5 py-1 rounded"
          : "hover:bg-tab-background p-2 text-black"
      }`}
            onClick={() => setActiveTab(category.name)}
            whileTap={{ scale: 0.95 }}
          >
            {category.name === activeTab ? (
              <div
                className="w-5 h-5"
                style={{
                  WebkitMaskImage: `url(${iconArray[index]})`,
                  maskImage: `url(${iconArray[index]})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  backgroundColor: "#FFE400",
                }}
              />
            ) : (
              <img
                src={iconArray[index]}
                alt={category.name}
                className={`w-5 ${
                  index !== 0 ? "filter grayscale" : "filter brightness-0"
                }`}
              />
            )}
            <p className={category.name === activeTab ? "font-bold" : ""}>
              {category.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Selected Category Title */}
      <h2 className="text-white border-l-4 px-2 border-textSecondaryColor text-base font-bold mt-4">
        {activeTab}
      </h2>

      {/* Game List */}
      <div className="mt-4">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {
              // activeTab === "এক্সক্লুসিভ" ? (
              //   // এক্সক্লুসিভ হলে গেম দেখাবে
              //   filteredGames?.length > 0 ? (
              //     <div className="grid bg-componentBgSecondary grid-cols-3 justify-items-center">
              //       {filteredGames.map((game) => (
              //         <Link
              //           to={`/category/demo/${game._id}`}
              //           key={game._id}
              //           className="flex flex-col p-2 w-full justify-center items-center"
              //         >
              //           <img
              //             src={`${import.meta.env.VITE_BASE_API_URL}${
              //               game.image
              //             }`}
              //             alt={game.category}
              //             className="w-28 h-38 m-2 rounded-md object-cover"
              //           />
              //           {game?.name && (
              //             <p className="text-white text-[10px] whitespace-nowrap">
              //               {game.name}
              //             </p>
              //           )}
              //         </Link>
              //       ))}
              //     </div>
              //   ) : (
              //     <p className="text-white">No exclusive games available.</p>
              //   )
              // ) :
              // অন্যান্য ক্যাটেগরির জন্য সাব-ক্যাটেগরি দেখাবে
              filteredSubCategories?.length > 0 ? (
                <div className="grid grid-cols-4 gap-1 justify-items-center px-2">
                  {filteredSubCategories.map((subCategory) => (
                    <Link
                      to={`/category/${subCategory.category}`}
                      key={subCategory._id}
                      className="flex flex-col p-2 w-full justify-center items-center bg-jili-bgSecondary"
                    >
                      <img
                        src={`${import.meta.env.VITE_BASE_API_URL}${
                          subCategory.image
                        }`}
                        alt={subCategory.name}
                        className="w-9 h-9 rounded-full m-0"
                      />
                      <p className="text-white text-[10px] whitespace-nowrap">
                        {subCategory.name}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-white">No subcategories available.</p>
              )
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomeTabs;
