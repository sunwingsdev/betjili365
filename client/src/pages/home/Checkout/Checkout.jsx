import { useState } from "react";
import bkashLogo from "@/assets/payments/bkash.png";
import rocketLogo from "@/assets/payments/rocket.png";

const Checkout = () => {
  const [selectedTab, setSelectedTab] = useState("mobile-banking");

  const payments = [
    { method: "bkash", image: bkashLogo },
    { method: "rocket", image: rocketLogo },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">HOSTBUYBD</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <button className="hover:text-blue-600">Support</button>
                <button className="hover:text-blue-600">FAQ</button>
                <button className="hover:text-blue-600">Details</button>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tabs Section */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setSelectedTab("mobile-banking")}
            className={`w-1/2 text-center py-2 ${
              selectedTab === "mobile-banking"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            } rounded-t-md transition`}
          >
            MOBILE BANKING
          </button>
          <button
            onClick={() => setSelectedTab("bank-transfer")}
            className={`w-1/2 text-center py-2 ${
              selectedTab === "bank-transfer"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            } rounded-t-md transition`}
          >
            BANK TRANSFER
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {selectedTab === "mobile-banking" && (
            <div className="grid grid-cols-3 gap-4">
              {payments?.map(({ method, image }, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md"
                >
                  <img src={image} alt={method} className="w-10 h-10 mb-2" />
                  <span className="text-sm font-medium">{method}</span>
                </button>
              ))}
            </div>
          )}
          {selectedTab === "bank-transfer" && (
            <div className="flex justify-center items-center h-20">
              <span className="text-gray-500">
                Bank Transfer Information Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Payment Button */}
        <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md font-semibold">
          Pay 1604.00 BDT
        </button>
      </div>
    </div>
  );
};

export default Checkout;
