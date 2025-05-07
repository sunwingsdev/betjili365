import { useState } from "react";

const UserProfile = () => {
  const [selectedSection, setSelectedSection] = useState("userInfo"); // Track selected section

  return (
    <div className=" min-h-screen  text-sm text-nowrap">
      <h1 className="text-center bg-[#59be7b] text-lg lg:text-xl font-bold  p-2 rounded-md mb-6">
        User Profile
      </h1>
      <div className="w-full  mx-auto flex flex-col lg:flex-row gap-4 bg-slate-200 p-2">
        <div className="bg-white  rounded-md shadow-md p-2">
          <div className="text-center mb-6">
            <h1 className="text-gray-800 font-bold text-xl mb-2">
              User Name: Ariz
            </h1>
            <p className="text-gray-500">User ID: 123456</p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <img
              className="rounded-full w-24 h-24 object-cover mb-4 border-4 border-[#51e2f5]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllDBTiHV4Veq0xQSP0P-d1Yui4Ch_Yx3apQ&s"
              alt="User Avatar"
            />
            <button className="bg-[#59be7b] text-white rounded-md px-4 py-2 hover:bg-blue-700">
              Upload New Photo
            </button>
          </div>

          {["Main Balance", "Deposit Balance", "Withdraw Balance"].map(
            (label, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4 bg-gray-100 p-1 rounded-md shadow-sm"
              >
                <p className="text-gray-700 font-semibold mr-2">{label}</p>
                <div className="flex items-center">
                  <p className="text-gray-800 font-bold mr-2">500 BDT</p>
                  <div className="flex sm:flex-row flex-col gap-2">
                    <button className="bg-[#59be7b] text-white px-2  rounded-md hover:bg-green-700">
                      +Add
                    </button>
                    <button className="bg-red-500 text-white px-2  rounded-md hover:bg-red-700">
                      -Cut
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

          <div className="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow-sm">
            <p className="text-gray-700 font-semibold">Support Pin</p>
            <p className="text-gray-800 font-bold">123456</p>
          </div>
        </div>

        <div className="bg-white w-full rounded-md shadow-md p-2">
          <h2 className="text-center text-xl text-gray-800 font-semibold mb-6">
            Edit User Profile
          </h2>
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-6">
            {["userInfo", "transactionHistory", "kycUpdate"].map((section) => (
              <button
                key={section}
                onClick={() => setSelectedSection(section)}
                className={`p-2 rounded-md transition-all duration-300 ${
                  selectedSection === section
                    ? "bg-[#59be7b] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {section === "userInfo"
                  ? "User Info"
                  : section === "transactionHistory"
                  ? "Transaction History"
                  : "KYC Update"}
              </button>
            ))}
          </div>
          {/* Conditional Rendering Based on Selected Section */}
          {selectedSection === "userInfo" && (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Full Name",
                "Password",
                "Confirm Password",
                "Email Address",
                "Phone Number",
                "Address",
              ].map((field, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <label
                    className="text-gray-700 font-semibold p-2"
                    htmlFor={field.replace(/\s+/g, "").toLowerCase()}
                  >
                    {field}
                  </label>
                  <input
                    type={
                      field === "Password" || field === "Confirm Password"
                        ? "password"
                        : "text"
                    }
                    id={field.replace(/\s+/g, "").toLowerCase()}
                    placeholder={field}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="col-span-1 md:col-span-2 bg-[#59be7b] text-white py-2 rounded-md hover:bg-green-700"
              >
                Update Info
              </button>
            </form>
          )}
          {selectedSection === "transactionHistory" && (
            <div className="text-gray-700 text-center">
              No transactions available.
            </div>
          )}
          {selectedSection === "kycUpdate" && (
            <div className="text-gray-700 text-center">
              Submit your documents for KYC verification.
              <div className="mt-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Upload Document
                </label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
