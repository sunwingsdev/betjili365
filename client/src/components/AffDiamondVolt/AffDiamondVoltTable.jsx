import React, { useContext, useState } from "react";
import imageBg from "../../assets/affiliateImages/bg-ipl2025_body.jpg";
import { LanguageContext } from "@/Context/LanguageContext";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";

const tableData = [
  { key: "row-1", cashPrize: "$100", prizePool: "$50", total: "$150" },
  { key: "row-2", cashPrize: "$200", prizePool: "$100", total: "$300" },
  { key: "row-3", cashPrize: "$300", prizePool: "$150", total: "$450" },
  { key: "row-4", cashPrize: "$400", prizePool: "$200", total: "$600" },
  { key: "row-5", cashPrize: "$500", prizePool: "$250", total: "$750" },
  { key: "row-6", cashPrize: "$600", prizePool: "$300", total: "$900" },
  { key: "row-7", cashPrize: "$700", prizePool: "$350", total: "$1050" },
  { key: "row-8", cashPrize: "$800", prizePool: "$400", total: "$1200" },
  { key: "row-9", cashPrize: "$900", prizePool: "$450", total: "$1350" },
  { key: "row-10", cashPrize: "$1000", prizePool: "$500", total: "$1500" },
  { key: "row-11", cashPrize: "$1100", prizePool: "$550", total: "$1650" },
  { key: "row-12", cashPrize: "$1200", prizePool: "$600", total: "$1800" },
];
const gadgetData = [
  { key: "gadget-1", prize: "Smartphone", price: "$200", winners: "5" },
  { key: "gadget-2", prize: "Laptop", price: "$800", winners: "3" },
  { key: "gadget-3", prize: "Smartwatch", price: "$150", winners: "10" },
  { key: "gadget-4", prize: "Headphones", price: "$100", winners: "7" },
];
const AffDiamondVoltTable = () => {
  const { language } = useContext(LanguageContext);
  const [openSection, setOpenSection] = useState("whatAwaits");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const headers = {
    en: {
      whatAwaits: "What Awaits You?",
      whatShouldYouDo: "What Should You Do?",
      termsConditions: "Terms and Conditions",
      mainTitle:
        "The countdown has begun for the most thrilling cricket event of the year – the IPL 2025! Celebrate IPL like never before and get a chance to win incredible prizes, from the latest gadgets to Motorbike!",
      subTitle1: "Grab your Share from ৳30,000,000 Prize Pool!",
      subTitle2:
        "The new IPL campaign starts from 7th of March 2025 until 25th of May 2025.",
      cashPrize: "Cash Prize Amount",
      prizePool: "Prize Pool",
      total: "Total",
      gadgetPrize: "Gadget Prize",
      pricePerUnit: "Price Per Unit",
      noOfWinners: "No. of Winners",
      digButton: "Dig the Diamond Vault\nSoon",
    },
    bn: {
      whatAwaits: "আপনার জন্য কী অপেক্ষা করছে?",
      whatShouldYouDo: "আপনার কী করা উচিত?",
      termsConditions: "শর্তাবলী",
      mainTitle:
        "সাল ২০২৫ এর সবচেয়ে উত্তেজনাপূর্ণ ক্রিকেট ইভেন্ট – IPL 2025 শুরু হতে যাচ্ছে! এবার আগে কখনো না হওয়া মত IPL উদযাপন করুন এবং জিতে নিন অবিশ্বাস্য সব পুরস্কার – সর্বশেষ গ্যাজেট থেকে শুরু করে মোটরবাইক পর্যন্ত!",
      subTitle1: "৳৩০,০০০,০০০ পুরস্কার তহবিল থেকে আপনার অংশ সংগ্রহ করুন!",
      subTitle2:
        "নতুন IPL ক্যাম্পেইন শুরু হচ্ছে ৭ই মার্চ ২০২৫ থেকে এবং চলবে ২৫শে মে ২০২৫ পর্যন্ত।",
      cashPrize: "নগদ পুরস্কারের পরিমাণ",
      prizePool: "পুরস্কার তহবিল",
      total: "মোট",
      gadgetPrize: "গ্যাজেট পুরস্কার",
      pricePerUnit: "প্রতি ইউনিটের মূল্য",
      noOfWinners: "জিতাদের সংখ্যা",
      digButton: "ডায়মন্ড ভল্ট খনন করুন\nশীঘ্রই",
    },
  };

  return (
    <div className="" style={{ backgroundImage: `url(${imageBg})` }}>
      <div className="w-full mx-auto max-w-7xl">
        {/* heading text */}
        <div className="w-full mx-auto font-semibold max-w-5xl text-white md:text-2xl flex flex-col gap-4 py-[15%] md:py-[10%]  items-center">
          <p className="text-center  ">
            {language === "bn"
              ? "সালটির সবচেয়ে রোমাঞ্চকর ক্রিকেট ইভেন্ট আইপিএল ২০২৫-এর জন্য কাউন্টডাউন শুরু হয়ে গেছে! অভূতপূর্ব পুরস্কার জেতার সুযোগ নিয়ে আসছে আইপিএল: নতুন গ্যাজেট থেকে মোটরবাইক পর্যন্ত!"
              : "The countdown has begun for the most thrilling cricket event of the year – the IPL 2025!Celebrate IPL like never before and get a chance to win incredible prizes, from the latest gadgets to Motorbike!"}
          </p>
          <div className="flex flex-col items-center px-8 lg:px-0">
            <p className="text-textSecondaryColorTwo uppercase font-bold text-xl md:text-2xl text-center">
              {language === "bn"
                ? "৳৩০,০০০,০০০ প্রাইজ পুল থেকে আপনার অংশ জয় করুন!"
                : "Grab your Share from ৳30,000,000 Prize Pool!"}
            </p>
            <p className="text-center">
              {language === "bn"
                ? "আইপিএল ২০২৫ প্রচারণা শুরু হচ্ছে ৭ই মার্চ ২০২৫ থেকে ২৫শে মে ২০২৫ পর্যন্ত।"
                : "The new IPL campaign starts from 7th of March 2025 until 25th of May 2025."}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4 text-white">
          <div className="">
            {/* First Section */}
            <div className="mb-4 bg-redBgColor border-4 border-textRedColor rounded-md">
              <button
                className="w-full text-left p-4 flex justify-between hover:bg-[#60004e] items-center bg-transparent"
                onClick={() => toggleSection("whatAwaits")}
              >
                <span className="font-semibold w-full text-center lg:text-2xl text-textSecondaryColorThree uppercase">
                  {headers[language].whatAwaits}
                </span>
                <span className="ml-2 w-4 h-4 flex items-center justify-center rounded-full bg-backgroundV2Color text-black">
                  {openSection === "whatAwaits" ? (
                    <TiMinus size={10} />
                  ) : (
                    <FaPlus size={10} />
                  )}
                </span>
              </button>

              {openSection === "whatAwaits" && (
                <div className="px-4 bg-transparent">
                  <div>
                    <p className="leading-tight text-xl lg:text-3xl text-center font-semibold">
                      IPL Diamond Vault 2025
                      <br />
                      {language === "bn"
                        ? "আপনার টিকিট, আপনার সুযোগ"
                        : "Your Ticket, Your Chance"}
                    </p>

                    <div className="text-center text-lg py-2 leading-tight font-medium text-white">
                      {language === "bn" ? (
                        <>
                          <p>
                            টিকিট অর্জন করুন এবং IPL Diamond Vault 2025 এর
                            পুরস্কার তহবিল থেকে আপনার অংশ সংগ্রহ করুন।
                          </p>
                          <p>
                            প্রতিটি টিকিট আপনাকে নগদ অর্থ বা আকর্ষণীয় গ্যাজেট
                            জয়ের সুযোগ দিবে।
                          </p>
                          <p>
                            সব যোগ্য অ্যাফিলিয়েটদের ১,০০০,০০০ টাকা বা একটি
                            মোটরবাইক জয়ের সমান সুযোগ রয়েছে!
                          </p>
                          <p>
                            আরও টিকিট সংগ্রহ করে আরও পুরস্কার জয়ের সুযোগ
                            বাড়ান!
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            Earn Tickets and grab your share from the IPL
                            Diamond Vault 2025 Prize Pool.
                          </p>
                          <p>
                            Each ticket gives you a chance to win cash prizes or
                            exciting gadgets.
                          </p>
                          <p>
                            All qualified affiliates have an equal chance to win
                            the grand prize of 1,000,000 BDT or Motorbike!
                          </p>
                          <p>
                            Increase your chances of winning even more prizes by
                            collecting more Tickets!
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* 1st table here */}
                  <div className="overflow-x-auto w-full py-6">
                    <table className="min-w-full lg:text-base text-[10px] text-white border border-textSecondaryColorThree">
                      <thead className="bg-backgroundV2Color text-[#60004e] uppercase">
                        <tr>
                          <th className="border border-textSecondaryColorThree p-3 text-center w-1/3">
                            {headers[language].cashPrize}
                          </th>
                          <th className="border border-textSecondaryColorThree p-3 text-center w-1/3">
                            {headers[language].prizePool}
                          </th>
                          <th className="border border-textSecondaryColorThree p-3 text-center w-1/3">
                            {headers[language].total}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row) => (
                          <tr key={row.key} className="hover:bg-[#60004e]">
                            <td className="border border-textSecondaryColorThree p-2 text-center">
                              {row.cashPrize}
                            </td>
                            <td className="border border-textSecondaryColorThree p-2 text-center">
                              {row.prizePool}
                            </td>
                            <td className="border border-textSecondaryColorThree p-2 text-center">
                              {row.total}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* 2nd table here */}
                  <div className="overflow-x-auto w-full py-6">
                    <table className="min-w-full text-sm text-white border border-textSecondaryColorThree">
                      <thead className="bg-backgroundV2Color text-[#60004e] uppercase lg:text-base text-[10px]">
                        <tr>
                          <th className="border border-textSecondaryColorThree p-3 text-center w-1/3 leading-tight">
                            {headers[language].gadgetPrize}
                          </th>
                          <th className="border border-textSecondaryColorThree p-3 text-center w-1/3 leading-tight">
                            {headers[language].pricePerUnit}
                          </th>
                          <th className="border border-textSecondaryColorThree p-3 text-center w-1/3 leading-tight">
                            {headers[language].noOfWinners}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {gadgetData.map((row) => (
                          <tr key={row.key} className="hover:bg-[#60004e]">
                            <td className="border border-textSecondaryColorThree p-2 text-center">
                              {row.prize}
                            </td>
                            <td className="border border-textSecondaryColorThree p-2 text-center">
                              {row.price}
                            </td>
                            <td className="border border-textSecondaryColorThree p-2 text-center">
                              {row.winners}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Second Section */}
            <div className="mb-4 bg-redBgColor border-4 border-textRedColor rounded-md">
              <button
                className="w-full text-left p-4 flex justify-between items-center bg-transparent hover:bg-[#60004e] transition-all duration-300"
                onClick={() => toggleSection("whatShouldYouDo")}
              >
                <span className="font-semibold w-full text-center lg:text-2xl text-textSecondaryColorThree uppercase">
                  {language === "bn"
                    ? "আপনার কী করা উচিত?"
                    : "What Should You Do?"}
                </span>
                <span className="ml-4 flex items-center justify-center w-4 h-4 rounded-full bg-backgroundV2Color text-black">
                  {openSection === "whatShouldYouDo" ? (
                    <TiMinus size={10} />
                  ) : (
                    <FaPlus size={10} />
                  )}
                </span>
              </button>

              {openSection === "whatShouldYouDo" && (
                <div>
                  <div>
                    <p className="lg:text-2xl text-center font-semibold text-white mb-4">
                      {language === "bn"
                        ? "আপনি দুইটি উপায়ে লাকি ডায়মন্ড ভল্ট খননের জন্য টিকিট অর্জন করতে পারেন:"
                        : "You can earn tickets to dig the Lucky Diamond Vault in two ways:"}
                    </p>

                    <div className="px-4 py-2 lg:text-xl">
                      <p className="font-bold text-white">
                        {language === "bn"
                          ? "১. IPL ক্যাম্পেইনের সময় ৫ জন নতুন স্পোর্টস অ্যাক্টিভ প্লেয়ার আনুন এবং একটি টিকিট পান। সর্বোচ্চ ১০টি টিকিট সংগ্রহ করতে পারবেন!"
                          : "1. Bring in 5 new Sports Active Players during the IPL Campaign to earn a Ticket. You can collect up to 10 Tickets!"}
                      </p>
                      <p className="text-white mt-2">
                        {language === "bn"
                          ? "নতুন স্পোর্টস অ্যাক্টিভ প্লেয়ার হলেন এমন একজন খেলোয়াড় যিনি প্রথমবার ডিপোজিট সম্পন্ন করেন এবং IPL 2025 চলাকালীন যেকোনো স্পোর্টস পণ্যে সর্বনিম্ন ১০,০০০ টার্নওভার অর্জন করেন।"
                          : "A New Sports Active Player is a player who completes their first deposit and achieves a minimum turnover of 10,000 on any Sports Products during IPL 2025."}
                      </p>
                    </div>

                    <div className="px-4 py-2">
                      <p className="font-bold text-white lg:text-xl">
                        {language === "bn"
                          ? "২. আপনার নতুন এবং বিদ্যমান প্লেয়ারদের কাছ থেকে উৎপন্ন প্রতি ১,০০,০০০ স্পোর্টস গ্রস প্রফিটে একটি টিকিট অর্জন করুন। সর্বোচ্চ ১০টি টিকিট সংগ্রহ করতে পারবেন!"
                          : "2. Earn a Ticket for every 100,000 Sports Gross Profit generated from your existing and new players. You can collect up to 10 Tickets!"}
                      </p>
                    </div>

                    <div className="px-4 py-2 text-lg font-medium text-white leading-tight">
                      {language === "bn" ? (
                        <>
                          <p>উদাহরণস্বরূপ টিকিট:</p>
                          <p>
                            নতুন স্পোর্টস প্লেয়ার: ৩০ জন। অর্জিত টিকিট = ৩০ ÷ ৫
                            = ৬
                          </p>
                          <p>
                            মোট স্পোর্টস গ্রস প্রফিট: ১৫,০০,০০০। অর্জিত টিকিট =
                            ১৫,০০,০০০ ÷ ১,০০,০০০ = ১০ (সর্বোচ্চ ১০টি)
                          </p>
                          <p>মোট অর্জিত টিকিট: ৬ + ১০ = ১৬টি টিকিট</p>
                        </>
                      ) : (
                        <>
                          <p>Sample Tickets</p>
                          <p>
                            New Sports Players: 30 players. Tickets Earned = 30
                            ÷ 5 = 6
                          </p>
                          <p>
                            Total Sports Gross Profit: 1,500,000. Tickets Earned
                            = 1,500,000 ÷ 100,000 = 10 (maximum of 10 Tickets)
                          </p>
                          <p>Total Tickets Earned: 6 + 10 = 16 Tickets</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center py-2">
                    <button className="bg-gold-gradient p-2 lg:text-lg rounded-md font-semibold">
                      {language === "bn"
                        ? "শীঘ্রই ডায়মন্ড ভল্ট খনন করুন"
                        : "Dig the Diamond Vault"}{" "}
                      <br />
                      {language === "bn" ? "শীঘ্রই" : "Soon"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Third Section */}
            <div className="mb-4 bg-redBgColor border-4 border-textRedColor rounded-md">
              <button
                className="w-full text-left p-4 flex justify-between items-center bg-transparent hover:bg-[#60004e] transition-all duration-300"
                onClick={() => toggleSection("termsConditions")}
              >
                <span className="font-semibold w-full text-center lg:text-2xl text-textSecondaryColorThree uppercase">
                  {language === "bn"
                    ? "নিয়ম ও শর্তাবলি"
                    : "Terms and Conditions"}
                </span>
                <span className="ml-4 flex items-center justify-center w-4 h-4 rounded-full bg-backgroundV2Color text-black">
                  {openSection === "termsConditions" ? (
                    <TiMinus size={10} />
                  ) : (
                    <FaPlus size={10} />
                  )}
                </span>
              </button>

              {openSection === "termsConditions" && (
                <div className="p-4 bg-transparent">
                  <ol className="p-4 text-white text-lg font-medium leading-tight list-decimal list-inside">
                    <li>
                      {language === "bn"
                        ? "প্রমোশনটি ৭ মার্চ ২০২৫ থেকে ২৫ মে ২০২৫ পর্যন্ত উপলব্ধ।"
                        : "Promotion is available from 7th of March 2025 until 25th of May 2025."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "এটি সমস্ত MCW BDT অ্যাফিলিয়েটদের জন্য প্রযোজ্য।"
                        : "Available for all MCW BDT Affiliates."}
                    </li>
                    <li>
                      {language === "bn" ? (
                        <>
                          অ্যাফিলিয়েটদের আমাদের{" "}
                          <span className="font-bold text-textSecondaryColorThree">
                            {" "}
                            অফিসিয়াল অ্যাফিলিয়েট টেলিগ্রাম চ্যানেলে{" "}
                          </span>{" "}
                          যোগ দিতে হবে।
                        </>
                      ) : (
                        <>
                          Affiliate must join to our{" "}
                          <span className="font-bold text-textSecondaryColorThree">
                            {" "}
                            Official Affiliate Telegram channel.{" "}
                          </span>
                        </>
                      )}
                    </li>
                    <li>
                      {language === "bn"
                        ? "যোগ্য অ্যাফিলিয়েটরা ২ জুন ২০২৫ থেকে ৬ জুন ২০২৫ পর্যন্ত ডায়মন্ড ভল্টে প্রবেশ করতে পারবে। নির্ধারিত সময়ে দাবি না করলে টিকিট বাতিল হয়ে যাবে।"
                        : "Qualified affiliates can access the diamond vault from June 2, 2025, to June 6, 2025, to claim their Tickets. If not claimed during this period, the Tickets will be forfeited."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "অ্যাফিলিয়েটরা প্রাইজ পুল থেকে একাধিক পুরস্কার ও গ্যাজেট জিততে পারে। প্রতিটি টিকিট নিশ্চিত করে কমপক্ষে ১০০ টাকা।"
                        : "Affiliates can win multiple prizes and gadgets from the available prize pool. Each Ticket guarantees a minimum of 100 BDT."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "অ্যাফিলিয়েটরা সর্বোচ্চ ২০টি টিকিট অর্জন করতে পারে দুটি ক্যাটাগরি মিলিয়ে। অর্জিত টিকিট সংখ্যা এখানে চেক করা যাবে। প্রতি শুক্রবার সাপ্তাহিকভাবে টিকিট আপডেট হবে।"
                        : "Affiliates can earn a maximum of 20 tickets across the two categories. You can check the number of tickets earned Here. Tickets will be updated on a weekly basis every Friday."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "যেসব অ্যাফিলিয়েটরা গ্যাজেট পুরস্কার জিতবে, তাদেরকে ৯ জুন ২০২৫ বা তার পূর্বে কল করা হবে।"
                        : "Affiliates who won Gadget Prizes in the ranking, will be called on or before June 9, 2025."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "অ্যাফিলিয়েটরা গ্যাজেট পুরস্কার গ্রহণের মাধ্যমে সম্মত হয় যে MCW তাদের মুখ আংশিক ঢাকা ছবি প্রোমোশনাল মেটেরিয়ালে ব্যবহার করতে পারবে কোনো অতিরিক্ত পুরস্কার ছাড়াই।"
                        : "Affiliates agree that by accepting the Gadget prizes, MCW has the right to use their masked image in promotional materials without offering additional rewards."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "গ্যাজেট পুরস্কার ২০ দিনের মধ্যে অ্যাফিলিয়েটদের কাছে পাঠানো হবে।"
                        : "Gadget prizes will be sent to the affiliate within 20 days."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ক্যাশ পুরস্কারের কোনও ওয়েজারিং শর্ত নেই। এটি সরাসরি অ্যাফিলিয়েটের প্লেয়ার অ্যাকাউন্টে প্রদান করা হবে। অ্যাফিলিয়েটরা ১১ জুন তারিখে ক্যাশ প্রাইজ পাবে।"
                        : "The cash prize has no wagering requirement. Cash Prizes will be paid directly to the affiliate’s player account. Affiliates will receive the Cash Prize on the 11th of June."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "এই প্রমোশনটি ফার্স্ট-কম, ফার্স্ট-সার্ভ ভিত্তিতে পরিচালিত হবে। যেহেতু রেজাল্ট র‍্যান্ডম, তাই সব যোগ্য অ্যাফিলিয়েটদের পুরস্কার জেতার সমান সুযোগ রয়েছে। যত বেশি টিকিট, তত বেশি জেতার সম্ভাবনা।"
                        : "This promotion follows a first-come, first-served approach. Since the results are random, all qualified affiliates have an equal opportunity to win a prize from the prize pool. The more Tickets you accumulate, the higher your chances of winning."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "যদি কোনও অ্যাফিলিয়েট কোনো নির্দিষ্ট প্রাইজ টায়ার জিতে যায়, তবে সেটি আর প্রাইজ পুলে থাকবে না। উদাহরণস্বরূপ: কেউ যদি ১০,০০,০০০ টাকার গ্র্যান্ড প্রাইজ জিতে যায়, সেটি আর পাওয়া যাবে না।"
                        : "Prizes from the pool will be removed from the system if an affiliate has already won the prize tier total quantity. For example: if an affiliate already won the 1,000,000 BDT grand prize, it will not be available in the prize pool anymore."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "MCW চূড়ান্ত সিদ্ধান্ত গ্রহণের অধিকার সংরক্ষণ করে।"
                        : "MCW reserves the right to make the final decision."}
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffDiamondVoltTable;
