import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import bkashImage from "../../../assets/betJilliImages/logos/bkash.png";
import nagadImage from "../../../assets/betJilliImages/logos/nagad.png";
import rocketImage from "../../../assets/betJilliImages/logos/rocket.png";
import upaiImage from "../../../assets/betJilliImages/logos/upay.png";
import bankImage from "../../../assets/betJilliImages/logos/bank-card.png";
import trcImage from "../../../assets/betJilliImages/logos/trc20.svg";
import ercImage from "../../../assets/betJilliImages/logos/erc20.svg";
import { LanguageContext } from "@/Context/LanguageContext";

const Deposit = () => {
  const { language } = useContext(LanguageContext);

  const promotions = language === "bn"
    ? [
        "৫% এক্সট্রা বোনাস আপনার ডিপোজিটে",
        "২০০% আইপিএল পাওয়ারপ্লে ওয়েলকাম ডিপোজিট বোনাস",
        "৭৭৭% আইপিএল স্পেশাল পাওয়ার প্লে বোনাস",
        "১৪০০% সাপ্তাহিক প্রগ্রেসিভ মেগা স্লট রিলোড বোনাস",
      ]
    : [
        "5% Extra Bonus on Your Deposit",
        "200% IPL Powerplay Welcome Deposit Bonus",
        "777% IPL Special Powerplay Bonus",
        "1400% Weekly Progressive Mega Slot Reload Bonus",
      ];

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


  const depositChannels = language === "bn"
    ? ["JP-ক্যাশ আউট", "AP-ক্যাশ আউট", "CT-ক্যাশ আউট", "সেন্ড মানি"]
    : ["JP-Cash Out", "AP-Cash Out", "CT-Cash Out", "Send Money"];

  const depositAmounts = [100, 200, 300, 500, 1000, 2000, 3000, 5000];

  const [selectedPromo, setSelectedPromo] = useState(promotions[0]);
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0]);
  const [selectedChannel, setSelectedChannel] = useState(depositChannels[0]);
  const [selectedAmount, setSelectedAmount] = useState(depositAmounts[0]);
  const [reminderOn, setReminderOn] = useState(false);

  return (
    <div className="text-white p-4 space-y-4 overflow-y-auto scrollbar-hide h-[500px] pb-32 lg:pb-8">
      {/* Promotion Select */}
      <div className="flex items-center gap-6 whitespace-nowrap bg-jili-bgdWTabsColor p-2 rounded-md">
        <div className="flex items-center gap-2">
          <span className="h-4 border-l-4 border-textSecondaryColorThree"></span>
          <label className="text-sm font-semibold">
            {language === "bn" ? "প্রোমোশন নির্বাচন করুন" : "Select Promotion"}
          </label>
        </div>
        <div className="relative w-full max-w-xs">
          <select
            className="w-full bg-transparent text-right text-xs outline-none text-white p-2 rounded appearance-none pr-8"
            value={selectedPromo}
            onChange={(e) => setSelectedPromo(e.target.value)}
          >
            {promotions.map((promo) => (
              <option key={promo} value={promo} className="bg-[#4d4d4d] text-left">
                {promo}
              </option>
            ))}
          </select>
          <IoMdArrowDropdown className="absolute right-2 top-2 pointer-events-none text-base" />
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-jili-bgdWTabsColor p-2 rounded-md">
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
              <div className="absolute top-2 -right-1">
                <div
                  className="text-[10px] px-2 py-[3px] text-white bg-red-600 font-bold"
                  style={{
                    clipPath:
                      "polygon(100% 1%, 100% 50%, 99% 100%, 0% 100%, 25% 50%, 0% 0%)",
                  }}
                >
                  +5%
                </div>
              </div>
              <img src={method.image} alt={method.name} className="h-6 mx-auto" />
              <p className="mt-1 text-sm">{language === "bn" ? method.title.bn : method.title.en}</p>
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

      {/* Deposit Channels */}
      <div className="p-2 bg-jili-bgdWTabsColor rounded-md">
        <h3 className="mb-2 font-semibold">
          {language === "bn" ? "ডিপোজিট চ্যানেল" : "Deposit Channel"}
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {depositChannels.map((channel) => (
            <div
              key={channel}
              onClick={() => setSelectedChannel(channel)}
              className={`p-2 rounded border ${
                selectedChannel === channel
                  ? "bg-[#4A4202] border border-textSecondaryColorThree font-bold"
                  : "border-gray-700"
              } cursor-pointer bg-jili-bgForm text-center text-sm`}
            >
              {channel}
            </div>
          ))}
        </div>
      </div>

      {/* Deposit Amounts */}
      <div className="bg-jili-bgdWTabsColor p-2 rounded-md">
        <h3 className="mb-2 font-semibold">
          {language === "bn" ? "ডিপোজিট এমাউন্ট" : "Deposit Amount"}
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {depositAmounts.map((amt) => (
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

      {/* Gentle Reminder Toggle */}
      <div className="bg-jili-bgdWTabsColor">
        <div
          className="flex items-center justify-between mt-4 cursor-pointer p-2"
          onClick={() => setReminderOn(!reminderOn)}
        >
          <div className="flex items-center gap-2">
            <IoMdInformationCircleOutline />
            <label className="text-sm">
              {language === "bn" ? "জেন্টল রিমাইন্ডার" : "Gentle Reminder"}
            </label>
          </div>
          <div
            className={`transition-transform text-white duration-300 text-lg ${
              reminderOn ? "rotate-180" : "rotate-0"
            }`}
          >
            <IoIosArrowDown />
          </div>
        </div>

        {reminderOn && (
          <div>
            <div className="border-t border-dashed mx-2 my-2"></div>
            <div className="p-3 text-sm text-gray-300 rounded-md shadow transition-all duration-300 space-y-2">
              {language === "bn" ? (
                <>
                  <p>১/ &quot;ব্যক্তিগত তথ্য&quot; এর অধীনে সর্বোচ্চ ৩টি মোবাইল নম্বর যোগ করুন এবং ভেরিফাই করুন।</p>
                  <p>২/ সঠিক ক্যাশ আউট নাম্বার, এমাউন্ট এবং ট্রানজেকশন আইডি সহ সাবমিট দিন।</p>
                  <p>৩/ ডিপোজিট করার আগে সবসময় ডিপোজিট পেইজে নাম্বার চেক করুন।</p>
                  <p>৪/ পেন্ডিং অবস্থায় আপনি ২টি ডিপোজিট ট্রাই করতে পারবেন। সমস্যা হলে লাইভচ্যাট নিন।</p>
                </>
              ) : (
                <>
                  <p>1/ Under &quot;Personal Info&quot;, add and verify up to 3 mobile numbers before cashing out.</p>
                  <p>2/ For faster processing, submit with correct cashout number, amount and transaction ID.</p>
                  <p>3/ Always check the number on our deposit page before making a deposit.</p>
                  <p>4/ During pending status, you can try 2 deposits. Contact live chat for help.</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button className="w-full mt-4 py-2 bg-yellow-400 text-black font-semibold rounded text-lg">
        {language === "bn" ? "সাবমিট করুন" : "Submit"}
      </button>
    </div>
  );
};

export default Deposit;
