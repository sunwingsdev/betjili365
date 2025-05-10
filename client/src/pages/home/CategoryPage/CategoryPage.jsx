import SecondaryBanner from "@/components/shared/SecondaryBanner";
import { Link, useParams } from "react-router-dom";
import bannerImage from "@/assets/secondary-banners/slot.jpg";
import GamesSection from "@/components/home/GamesSection/GamesSection";
import Container from "@/components/shared/Container";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { useState } from "react";
import gameSampleImg from "../../../assets/betJilliImages/images/JILI-TABLE-075.png";
import { MdFavorite } from "react-icons/md";
import { BiStar } from "react-icons/bi";
const CategoryPage = () => {
  const { category } = useParams();

  const items = [
    { label: "অন", active: true },
    { label: "JILI" },
    { label: "PT" },
    { label: "CQ9" },
    { label: "SPRIBE" },
    { label: "MG" },
    { label: "MONOPOLY" },
    { label: "NETENT" },
    { label: "SBO" },
    { label: "WorldMatch" },
    { label: "KM" },
    { label: "PN" },
    { label: "MG" },
    { label: "MONOPOLY" },
    { label: "NETENT" },
    { label: "SBO" },
    { label: "WorldMatch" },
    { label: "KM" },
    { label: "PN" },
    { label: "MG" },
    { label: "MONOPOLY" },
    { label: "NETENT" },
    { label: "SBO" },
    { label: "WorldMatch" },
    { label: "KM" },
    { label: "PN" },
  ];

  const games = [
    {
      _id: 1,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 2,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 3,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 4,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 5,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 6,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 7,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 8,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 9,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 10,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 11,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 12,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 13,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
    {
      _id: 14,
      name: "Jili crash Aviator",
      link: "/",
      image: gameSampleImg,
    },
  ];

  const [filterOpen, setFilterOpen] = useState(false);
  const [filterSelected, setFilterSelected] = useState("Filter");

  const options = ["Data 1", "Data 2", "Data 3", "Data 4"];

  const handleFilterSelect = (value) => {
    setFilterSelected(value);
    setFilterOpen(false);
  };

  return (
    <div className="bg-jili-bgBlack">
      {/* <SecondaryBanner image={bannerImage} catName={category} /> */}
      {/* <GamesSection subCat={category} /> */}
      <Container>
        <div className="bg-[#1e1e1e] pt-2 px-2 relative cursor-pointer mt-4">
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar text-sm">
            <ul className="flex items-center gap-2 text-white uppercase">
              {items.map((item, i) => (
                <li
                  key={i}
                  className={`py-1 px-4 rounded-md whitespace-nowrap 
              ${
                item.active
                  ? "bg-yellow-400 text-black"
                  : "bg-[#3b3b3b] text-white"
              }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <button className="min-w-12 h-full flex items-center justify-center bg-yellow-400 rounded-r-md text-black absolute top-0 right-0">
              <FaSearch size={14} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <h1 className="text-lg border-l-2 border-l-yellow-400 pl-4 text-white">
            All
          </h1>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-6 bg-[#3b3b3b] text-white pl-2 pr-4 py-0.5 rounded-md transition-all duration-300 ease-in-out transform hover:scale-[1.03]"
            >
              {filterSelected}
              <span className="transition-transform duration-300">
                {filterOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {/* Dropdown Options */}
            {filterOpen && (
              <ul className="absolute left-0 mt-2 w-[6.4rem] bg-[#3b3b3b] text-white rounded-md shadow-lg z-10 transition-transform duration-200 scale-95 origin-top">
                {options.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleFilterSelect(item)}
                    className="px-4 py-0.5 hover:bg-gray-200 hover:text-black cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {games.map((game) => (
            <div key={game._id} className="">
              <Link to={game.link} className="block">
                {/* Image wrapper with overflow hidden */}
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Game name and icon */}
                <div className="bg-gray-600 flex items-center justify-between p-1.5">
                  <p className="text-white">{game.name}</p>
                  <BiStar className="text-lg" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
