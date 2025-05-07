const Notice = () => {
  return (
    <div className="min-h-screen p-2 bg-[#848a8a] text-nowrap">
      {/* Notice Header */}
      <div className="lg:flex items-center text-center space-y-2 justify-between bg-gray-400 p-2 rounded-md shadow-md">
        <h1 className="text-lg font-semibold text-white">Notice</h1>
        <input
          type="text"
          placeholder="Type your notice..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-2 py-2 text-white bg-gray-700 rounded-md hover:bg-blue-600 ml-1">
          Add
        </button>
      </div>

      {/* Slider Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Slider 1 */}
        <div className="flex flex-col items-center p-4 bg-gray-600 rounded-md shadow-md">
          <h1 className="mb-2 text-lg font-semibold  text-white">
            Priyo Slider 1
          </h1>
          <button className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-green-600">
            Add
          </button>
        </div>

        {/* Slider 2 */}
        <div className="flex flex-col items-center p-4 bg-gray-600 rounded-md shadow-md">
          <h1 className="mb-2 text-lg font-semibold text-white">
            Priyo Slider 2
          </h1>
          <button className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-green-600">
            Add
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap items-center justify-center w-full gap-4 mt-6">
        <img
          src="https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/02.jpg"
          alt="Image 1"
          className="w-full max-w-xs sm:w-48 sm:h-48 rounded-lg shadow-md"
        />
        <img
          src="https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/jaqport/01.jpg"
          alt="Image 2"
          className="w-full max-w-xs sm:w-48 sm:h-48 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Notice;
