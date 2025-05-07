import { useState } from "react";
import Container from "@/components/shared/Container";
import { IoSearch } from "react-icons/io5";
import GameCard from "./GameCard";
import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";
import { useGetAllSubCategoriesQuery } from "@/redux/features/allApis/categoryApi/subCategoryApi";

const GamesSection = ({ subCat }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedState, setCheckedState] = useState({});

  const { data: allHomeGames } = useGetAllHomeGamesQuery();
  const { data: allSubCategories } = useGetAllSubCategoriesQuery();

  // Filter subcategories based on the selected category
  const filteredSubCategory = allSubCategories?.filter(
    (subCategory) => subCategory.category === subCat
  );

  // Filter games based on the selected category
  let filteredGames = allHomeGames?.filter(
    (homeGame) => homeGame.category === subCat
  );

  // Apply search filter
  if (searchQuery) {
    filteredGames = filteredGames?.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply selected subcategory filter
  const selectedSubCategories = Object.keys(checkedState).filter(
    (key) => checkedState[key]
  );

  if (selectedSubCategories.length > 0) {
    filteredGames = filteredGames?.filter((game) =>
      selectedSubCategories.includes(game.subCategory)
    );
  }

  // Handle checkbox toggle
  const handleCheckboxChange = (subCategoryName) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [subCategoryName]: !prevState[subCategoryName],
    }));
  };

  return (
    <div className="">
      <Container>
        {/* Search & Filter Section */}
        <div className="hidden md:flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center gap-2">
            <IoSearch className="text-[#666666] text-3xl" />
            <input
              type="text"
              id="text"
              placeholder="গেমস অনুসন্ধান করুন"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded border-none focus:outline-none text-black bg-[#f2f2f2]"
            />
          </div>
          <div className="flex items-center gap-2 text-[#666666] text-sm">
            <p>শ্রেণীবিভক্ত করা：</p>
            <button className="text-sm flex items-center gap-1 justify-center py-4 hover:text-textSecondaryColor transition-colors ease-linear duration-200 hover:border-b-[4px] hover:border-b-backgroundSecondaryColor hover:pb-[12px] ">
              <p className="py-1 px-5 border-r-[1px]">সুপারিশ করা</p>
            </button>
            <button className="text-sm flex items-center gap-1 justify-center py-4 hover:text-textSecondaryColor transition-colors ease-linear duration-200 hover:border-b-[4px] hover:border-b-backgroundSecondaryColor hover:pb-[12px] ">
              <p className="py-1 px-5 border-r-[1px]">সর্বশেষ</p>
            </button>
            <button className="text-sm flex items-center gap-1 justify-center py-4 hover:text-textSecondaryColor transition-colors ease-linear duration-200 hover:border-b-[4px] hover:border-b-backgroundSecondaryColor hover:pb-[12px] ">
              <p className="py-1 px-5 border-r-[1px]">A-Z</p>
            </button>
          </div>
        </div>
      </Container>
      <div className="bg-backgroundSecondaryColor">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex md:flex-wrap md:flex-row items-center gap-2 py-2 text-white overflow-x-auto w-full">
              {filteredSubCategory?.map((subcategory) => (
                <div
                  key={subcategory._id}
                  className={`flex min-w-16 rounded bg-[#262626] md:bg-transparent items-center px-4 py-3 md:hover:bg-yellow-400 hover:opacity-70 ${
                    checkedState[subcategory.name]
                      ? "border-[#137556] border-2"
                      : ""
                  }`}
                >
                  {/* For mobile devices: Show only the image */}
                  <div className="block md:hidden">
                    <img
                      src={`${import.meta.env.VITE_BASE_API_URL}${
                        subcategory.image
                      }`}
                      alt={subcategory.name}
                      onClick={() => handleCheckboxChange(subcategory.name)}
                      className={`cursor-pointer w-8 h-8`}
                    />
                  </div>

                  {/* For larger devices: Show only checkbox and text */}
                  <div className="hidden md:flex items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={subcategory.name}
                        checked={!!checkedState[subcategory.name]}
                        onChange={() => handleCheckboxChange(subcategory.name)}
                        className="w-6 h-6 appearance-none border-2 border-white rounded bg-white focus:outline-none checked:bg-white"
                      />
                      <div
                        className={`absolute -top-1 inset-0 flex items-center justify-center pointer-events-none ${
                          checkedState[subcategory.name]
                            ? "text-yellow-400"
                            : "text-transparent"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <label
                      htmlFor={subcategory.name}
                      className={`ps-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        checkedState[subcategory.name] ? "text-yellow-400" : ""
                      }`}
                    >
                      {subcategory.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <button className="hidden md:block text-white text-sm px-6 py-4 bg-gradient-to-b hover:bg-gradient-to-t from-backgroundSecondaryColor hover: to-[#C9A34D] transition-all ease-linear duration-200 shadow-lg border border-white">
              আরও ফিল্টার
            </button>
          </div>
        </Container>
      </div>
      <div className="bg-primary-primaryColorTwo">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3  py-6 ">
            {filteredGames?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GamesSection;
