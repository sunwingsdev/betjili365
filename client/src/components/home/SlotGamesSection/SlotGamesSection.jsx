import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "@/assets/v2/DREAMGAMING-LIVE-001.png";
import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";
import { Link } from "react-router-dom";
import { useGetAllSubCategoriesQuery } from "@/redux/features/allApis/categoryApi/subCategoryApi";

const SlotGamesSection = () => {
  const { data: allGames } = useGetAllHomeGamesQuery();
  const { data: allSubCategories } = useGetAllSubCategoriesQuery();

  const slotGames = allGames
    ?.filter((game) => game.category === "স্লট")
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 8);

  const slotSubCategories = allSubCategories?.filter(
    (category) => category.category === "স্লট"
  );

  return (
    <Tabs className="mt-5">
      <div className="bg-bottomNavBgColor flex items-center justify-between px-4 mb-4">
        <h1 className="text-textSecondaryColor">Slot</h1>
        <div>
          <div>
            <TabList className="flex items-center">
              {slotSubCategories?.map((subCat) => (
                <Tab
                  key={subCat?._id}
                  className="text-white hover:text-textSecondaryColor cursor-pointer border-b-4 border-transparent hover:border-textSecondaryColor py-4 px-4"
                  selectedClassName="text-[#c9a33d] border-[#c9a33d] outline-none"
                >
                  {subCat?.name}
                </Tab>
              ))}
            </TabList>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start gap-7 h-80">
        <Link to="/category/স্লট" className="w-1/5">
          <img src={img1} alt="slot image" className="h-80" />
        </Link>
        <div className="w-3/5">
          {slotSubCategories?.map((subCat) => {
            const gamesBySubCat = slotGames?.filter(
              (game) => game.subCategory === subCat.name
            );
            return (
              <TabPanel key={subCat._id}>
                <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                  {gamesBySubCat?.map((game) => (
                    <div key={game._id} className="relative group w-36 h-36">
                      <img
                        src={`${import.meta.env.VITE_BASE_API_URL}${
                          game.image
                        }`}
                        alt={game.name}
                        className="w-36 h-36 object-cover"
                      />
                      <div className="absolute flex flex-col items-center justify-center gap-2 whitespace-nowrap text-xs top-1/4 left-1/2 transform -translate-x-1/2 translate-y-10 opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
                        {/* Play Button */}
                        <div className="hidden sm:block">
                          <a
                            href={game.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <PrimaryButton>প্লে গেম</PrimaryButton>
                          </a>
                        </div>

                        {/* Demo Button */}
                        <Link to={`/category/demo/${game._id}`}>
                          <p className="px-2 py-1 rounded border border-slate-600 hover:bg-slate-200 hover:text-black text-white text-center">
                            Demo
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            );
          })}
        </div>

        <div className="w-1/5 h-80 overflow-hidden relative">
          <div className="marquee-vertical space-y-3 absolute top-0 left-0 w-full">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-bottomNavBgColor p-2 w-full rounded-md"
                  >
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-base text-white">Player: player 01</p>
                      <p className="text-sm text-white">
                        Win:{" "}
                        <span className="text-textSecondaryColor">1000 $</span>
                      </p>
                      <p className="text-xs text-white">Agent Ace</p>
                      <button className="bg-backgroundSecondaryColor px-3 py-1 text-sm rounded-md text-white">
                        Play it
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Tabs>
  );
};

export default SlotGamesSection;
