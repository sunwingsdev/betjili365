import { useState } from "react";

const PromotionsOffer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddCategory = () => {
    console.log("Category Added:", categoryName);
    setCategoryName(""); // Clear input field
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="min-h-screen bg-[#7b759e] p-2 rounded-md">
      <h1 className="text-xl lg:text-2xl font-bold mb-6 text-center text-white">
        Promotions Offers
      </h1>

      <div className="lg:flex lg:space-x-6">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 bg-[#9393c7] p-2 rounded-lg shadow-md">
          <div className="flex bg-[#d0caeb] p-2 justify-between rounded-md mb-4">
            <h2 className="text-lg lg:text-lg font-bold rounded-md px-4">
              Add Categories
            </h2>
            <button
              onClick={handleModalToggle}
              className="p-2 bg-[#6b7699f1] text-white rounded-md hover:bg-gray-600"
            >
              Add
            </button>
          </div>
          <div className="text-center px-2 lg:px-6">
            <div className="flex items-center mb-2 bg-[#d0caeb] rounded-md shadow-xl">
              <input type="checkbox" className="p-2 ml-2" />
              <h3 className="text-lg font-medium p-2 rounded-md shadow-md w-full">
                Welcome Offer
              </h3>
            </div>
            <div className="flex items-center mb-2 bg-[#d0caeb] rounded-md shadow-xl">
              <input type="checkbox" className="p-2 ml-2" />
              <h3 className="text-lg font-medium p-2 bg-[#d0caeb] rounded-md shadow-md w-full">
                Slot
              </h3>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 bg-[#9393c7] p-2 rounded-lg shadow-md mt-6 lg:mt-0">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Add Promotion Details
          </h2>
          <form>
            <label htmlFor="title" className="block mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Add title"
              className="w-full bg-[#d0caeb] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <label htmlFor="image" className="block mb-2">
              Image Upload
            </label>
            <input
              type="file"
              className="w-full bg-[#d0caeb] border border-gray-300 rounded-md focus:outline-none p-2 mb-4"
            />
            <label htmlFor="details" className="block mb-2">
              Details
            </label>
            <textarea
              placeholder="Add description"
              className="w-full bg-[#d0caeb] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
            ></textarea>
          </form>
        </div>
      </div>

      <div className="text-center m-4">
        <button className="text-current p-2 bg-white rounded-md">
          Publish Now
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-4 mt-4">
        <div>
          <img
            className="rounded-md"
            src="https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/blog/05.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md"
            src="https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/blog/06.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Add Category</h2>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Category Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleModalToggle}
                className="p-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Close
              </button>
              <button
                onClick={handleAddCategory}
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromotionsOffer;
