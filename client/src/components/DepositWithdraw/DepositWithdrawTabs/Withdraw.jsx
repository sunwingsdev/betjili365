import React, { useContext, useState } from "react";
import bkashImage from "../../../assets/betJilliImages/logos/bkash.png";
import nagadImage from "../../../assets/betJilliImages/logos/nagad.png";
import rocketImage from "../../../assets/betJilliImages/logos/rocket.png";
import upaiImage from "../../../assets/betJilliImages/logos/upay.png";
import bankImage from "../../../assets/betJilliImages/logos/bank-card.png";
import trcImage from "../../../assets/betJilliImages/logos/trc20.svg";
import ercImage from "../../../assets/betJilliImages/logos/erc20.svg";
import { RiLoader3Line } from "react-icons/ri";
import checkImage from "../../../assets/betJilliImages/logos/check.svg";
import { LanguageContext } from "@/Context/LanguageContext";

const Withdraw = () => {
  const { language } = useContext(LanguageContext);

  const paymentMethods = [
    {
      name: "Bkash",
      image: bkashImage,
      title: {
        en: "Bkash",
        bn: "বিকাশ",
      },
    },
    {
      name: "Nogod",
      image: nagadImage,
      title: {
        en: "Nogod",
        bn: "নগদ",
      },
    },
    {
      name: "Rocket",
      image: rocketImage,
      title: {
        en: "Rocket",
        bn: "রকেট",
      },
    },
    {
      name: "Upai",
      image: upaiImage,
      title: {
        en: "Upai",
        bn: "উপায়",
      },
    },
    {
      name: "Local Bank",
      image: bankImage,
      title: {
        en: "Local Bank",
        bn: "লোকাল ব্যাংক",
      },
    },
    {
      name: "USDT TRC20",
      image: trcImage,
      title: {
        en: "USDT TRC20",
        bn: "USDT TRC20",
      },
    },
    {
      name: "USDT ERC20",
      image: ercImage,
      title: {
        en: "USDT ERC20",
        bn: "USDT ERC20",
      },
    },
  ];
  const Amounts = [100, 200, 300, 500, 1000, 2000, 3000, 5000];
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0]);
  const [selectedAmount, setSelectedAmount] = useState(Amounts[0]);
  const [isRotating, setIsRotating] = useState(false);
  const handleReload = () => {
    setIsRotating(true);
    // Simulate reload action
    setTimeout(() => setIsRotating(false), 1000);
  };
  return (
    <div className="p-4 overflow-y-auto scrollbar-hide h-[500px] lg:pb-8 pb-32">
      <div className="flex items-center gap-2 text-white ">
        <h3 className="text-xs font-semibold">
          {language === "bn" ? "উইথড্রয়াবল এমাউন্ট" : "Withdraw Amount"}
        </h3>
        <RiLoader3Line
          onClick={handleReload}
          className={`cursor-pointer transition-transform duration-500 ${
            isRotating ? "rotate-180" : ""
          }`}
          size={20}
        />
      </div>
      <div className="my-2 w-full flex justify-between items-center p-2    text-4xl text-white">
        <strong className="">৳</strong>
        <span>0</span>
      </div>
      {/* payment method */}
      <div className="bg-jili-bgdWTabsColor p-2 rounded-md text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-4 border-l-4 border-textSecondaryColorThree"></span>
          <label className="text-sm font-semibold">
            {language === "bn" ? "পেমেন্ট মেথড" : "Payment Method"}
          </label>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              onClick={() => setSelectedMethod(method)}
              className={`relative p-2 rounded-xl border ${
                selectedMethod === method
                  ? "bg-[#4A4202] border border-textSecondaryColorThree font-bold"
                  : "border-gray-700"
              } cursor-pointer bg-jili-bgForm text-center`}
            >
              {/* <div className="absolute top-2 -right-1">
                <div
                  className="text-[10px] px-2 py-[3px] text-white bg-red-600 font-bold"
                  style={{
                    clipPath:
                      "polygon(100% 1%, 100% 50%, 99% 100%, 0% 100%, 25% 50%, 0% 0%)",
                  }}
                >
                  +5%
                </div>
              </div> */}
              <img
                src={method.image}
                alt={method.name}
                className="h-6 mx-auto"
              />
              <p className="mt-1 text-sm">
                {language === "bn" ? method.title.bn : method.title.en}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-dashed my-2"></div>

        {selectedMethod && (
          <p className="mt-2 p-1 w-[50%] text-center rounded-md bg-[#4A4202] border text-sm border-textSecondaryColorThree">
            {language === "bn"
              ? `${selectedMethod.title.bn} পেমেন্ট`
              : `${selectedMethod.title.en} Payment`}
          </p>
        )}
      </div>

      {/*  Amounts */}
      <div className="bg-jili-bgdWTabsColor mt-2 text-white p-2 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">
            {language === "bn" ? "এমাউন্ট" : "Amount"}
          </h3>
          <span className="text-sm text-gray-400">
            {language === "bn" ? "৳ ৫০০ - ৳ ২৫,০০০" : "৳ 500 - ৳ 25,000"}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {Amounts.map((amt) => (
            <div
              key={amt}
              onClick={() => setSelectedAmount(amt)}
              className={`p-2 rounded border ${
                selectedAmount === amt
                  ? "bg-[#4A4202] border border-textSecondaryColorThree font-bold"
                  : "border-gray-700"
              } cursor-pointer bg-jili-bgForm text-center text-sm`}
            >
              ৳ {amt}
            </div>
          ))}
        </div>
        {selectedAmount && (
          <div className="mt-2 w-full flex justify-between items-center p-2 border rounded-md border-gray-700 bg-jili-bgForm text-sm">
            <strong className="text-xl">৳</strong>
            <span>{selectedAmount}</span>
          </div>
        )}
      </div>
      {/* phone number */}
      <div className="bg-jili-bgdWTabsColor mt-2 p-2 rounded-md text-white">
        <div className="flex items-center  gap-2 mb-2 text-white">
          <span className="h-4 border-l-4 border-textSecondaryColorThree"></span>
          <label className="text-sm font-semibold">
            {language === "bn"
              ? "ফোন নম্বর নির্বাচন করুন"
              : "Select Phone Number"}
          </label>
        </div>
        <div className="relative bg-primary-primaryColor border border-textSecondaryColorThree p-3 rounded-md w-full max-w-sm text-white">
          <span className="text-base">
            {language === "bn" ? " ০১৩০০০০০০০০" : "01300000000"}
          </span>
          <img
            src={checkImage}
            alt="icon"
            className="absolute bottom-0 right-0 w-6 h-6"
          />
        </div>
      </div>

      {/* submit */}
      {/* Submit Button */}
      <button className="w-full mt-4 py-2 bg-yellow-400 text-black font-semibold rounded text-lg">
        {language === "bn" ? "সাবমিট করুন" : "Submit"}
      </button>
    </div>
  );
};

export default Withdraw;
