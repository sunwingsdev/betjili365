import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";
import { Link } from "react-router-dom";
import { useGetAllSubCategoriesQuery } from "@/redux/features/allApis/categoryApi/subCategoryApi";

const HomeTabs = () => {
  const { data: allCategories } = useGetAllCategoriesQuery();
  const { data: allSubCategories } = useGetAllSubCategoriesQuery();
  const [activeTab, setActiveTab] = useState(null);
  const filteredCategories = allCategories?.filter(
    (category) => category.name !== "এক্সক্লুসিভ"
  );

  // Set the first category as default if categories are available
  if (!activeTab && filteredCategories?.length > 0) {
    setActiveTab(filteredCategories[0].name);
  }

  const filteredSubCategories = allSubCategories?.filter(
    (subCategory) => subCategory.category === activeTab
  );

  return (
    <div className=" ">
      {/* Category Tabs */}
      <div className="flex sticky top-0 bg-jili-bgPrimary z-10 flex-row items-center px-2 gap-x-4 overflow-x-auto">
        {filteredCategories?.map((category) => (
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
              className={`w-7 mb-1 transition-all duration-300 ${
                category.name === activeTab
                  ? "filter invert sepia brightness-[1.2] saturate-[5] hue-rotate-[20deg]"
                  : ""
              }`}
            />

            <p
              className={`  ${category.name === activeTab ? "font-bold" : ""}`}
            >
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
