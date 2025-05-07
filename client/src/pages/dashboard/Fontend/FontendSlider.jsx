import { FaTrashAlt } from "react-icons/fa"; // Import delete icon

const FontendSlider = () => {
  const sliderGame = [
    {
      gameName: "Valorant",
      imgLink:
        "https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/01.jpg",
    },
    {
      gameName: "Minecraft",
      imgLink:
        "https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/02.jpg",
    },
    {
      gameName: "Fortnite",
      imgLink:
        "https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/03.jpg",
    },
    {
      gameName: "Call of Duty",
      imgLink:
        "https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/04.jpg",
    },
    {
      gameName: "Among Us",
      imgLink:
        "https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/05.jpg",
    },
    {
      gameName: "Apex Legends",
      imgLink:
        "https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/06.jpg",
    },
    {
      gameName: "League of Legends",
      imgLink:
        "https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/07.jpg",
    },
    {
      gameName: "PUBG",
      imgLink:
        "https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/08.jpg",
    },
  ];

  return (
    <div>
      <div className="flex   lg:font-bold mb-2 text-center p-2 bg-[#baafee] rounded-md text-nowrap">
        <h1 className="text-xl lg:text-2xl p-2  lg:mb-0 font-bold">
          Fontend slider
        </h1>
        <button className="ml-auto bg-[#ccc7e6]  px-2 py-2 rounded-md">
          Add More Slider
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#ccc7e6] p-4 rounded-md">
        {sliderGame.map((game, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
          >
            {/* Delete Icon */}
            <button className="absolute top-2 right-2 bg-[#a293f8] text-white p-1 rounded-full shadow-md hover:bg-red-600">
              <FaTrashAlt size={16} />
            </button>

            {/* Image with 2-Layer Shadow */}
            <img
              src={game.imgLink}
              alt={game.gameName}
              className="w-full h-48 object-cover rounded-md shadow-xl shadow-blue-500/100"
            />
            <h2 className="mt-2 text-center text-white font-semibold">
              {game.gameName}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontendSlider;
