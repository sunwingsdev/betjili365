import { useEffect, useState } from "react";
import DepositTab from "@/components/home/DepositTab/DepositTab";
import WithdrawTab from "@/components/home/WithdrawTab/WithdrawTab";
import WalletSection from "@/components/home/WalletSection/WalletSection";
import { useLocation } from "react-router-dom";

const Deposit = () => {
  const [activeTab, setActiveTab] = useState("deposit");
  const location = useLocation();
  const method = location.state?.method;
  useEffect(() => {
    if (method === "withdraw") {
      setActiveTab("withdraw");
    }
    if (method === "deposit") {
      setActiveTab("deposit");
    }
  }, [method]);

  return (
    <div className="space-y-3">
      {/* Wallet Section */}
      <WalletSection />
      <div className="flex justify-center gap-3 items-start">
        {/* Tabs Section */}
        <div className="bg-primary-primaryColorTwo px-3 py-4 rounded space-y-4 w-full md:w-4/5">
          <div className="flex items-center justify-between">
            <p className="px-6 border-s-8 border-[#26ffbc] text-[#26ffbc] w-1/2 hidden md:block">
              ফান্ডস
            </p>
            <div className="grid grid-cols-2 w-full md:w-1/2 text-sm text-white bg-[#464646] rounded">
              <button
                className={`py-2 text-center font-medium w-full rounded ${
                  activeTab === "deposit"
                    ? "bg-gradient-to-r from-[#f79604] to-[#fbc103] scale-110"
                    : "bg-[#464646]"
                }`}
                onClick={() => setActiveTab("deposit")}
              >
                ডিপোজিট
              </button>
              <button
                className={`py-2 text-center font-medium w-full rounded ${
                  activeTab === "withdraw"
                    ? "bg-gradient-to-r from-[#f79604] to-[#fbc103] scale-110"
                    : "bg-[#464646]"
                }`}
                onClick={() => setActiveTab("withdraw")}
              >
                উইথড্র
              </button>
            </div>
          </div>
          <div className="border-t border-dashed border-[#26ffbc]"></div>

          {/* Tab Content */}
          {activeTab === "deposit" && <DepositTab />}

          {activeTab === "withdraw" && <WithdrawTab />}
        </div>

        <div className="bg-[#313131] px-3 py-4 rounded space-y-4 w-1/5 text-xs hidden md:block">
          <p className=" text-[#7293E1]">
            {activeTab === "deposit"
              ? "আমানত রেকর্ড"
              : "রেকর্ড প্রত্যাহার করুন"}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 py-5">
            <img
              className="w-24"
              src="https://www.baji.live/images/web/player/table/no-value.svg"
              alt=""
            />
            <p className="text-white opacity-50">কোনও ডেটা নেই</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
