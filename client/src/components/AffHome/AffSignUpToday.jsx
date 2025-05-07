import React, { useContext } from "react";
import bgImage from "../../assets/affiliateImages/bg_contactUs-scaled.jpg";
import bgMobileImage from "../../assets/affiliateImages/bg_mob_contactUs-2.jpg";
import { LanguageContext } from "@/Context/LanguageContext";
import { Link } from "react-router-dom";

const tabButtons = [
  { nameEN: "Telegram", nameBN: "টেলিগ্রাম", link: "", bg: "#C9A33D" },
  { nameEN: "Email", nameBN: "ইমেইল", link: "", bg: "#1f2442" },
  {
    nameEN: "Sign Up",
    nameBN: "সাইন আপ",
    link: "/affiliate/signup",
    bg: "#C9A33D",
  },
];

const AffSignUpToday = () => {
  const { language } = useContext(LanguageContext);
  const isBn = language === "bn";

  return (
    <div>
      <div
        className="relative w-full h-[500px] hidden lg:flex bg-cover bg-center  flex-col justify-center items-center text-white py- px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Text overlay */}
        <div className="mb-6">
          <div className="text-center font-semibold leading-tight max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold">
              {isBn
                ? "এমসিডাব্লিউ অ্যাফিলিয়েট-এ আজই সাইন আপ করুন এবং"
                : "SIGN UP TODAY AT MCW AFFILIATES AND START"}
            </h1>
            <p className="text-3xl text-textSecondaryColor md:text-4xl">
              {isBn
                ? "আনলিমিটেড কমিশন আয় করুন!"
                : "EARNING UNLIMITED COMMISSION!"}
            </p>
          </div>
          <div className="flex flex-col items-center mt-2 text-lg">
            <p>
              {isBn
                ? "একটি অ্যাকাউন্ট কিভাবে খুলবেন সে সম্পর্কে সহায়তা লাগবে?"
                : "Need assistance on how to create an account?"}
            </p>
            <p>
              {isBn
                ? "ইতিমধ্যে একজন অ্যাফিলিয়েট এবং আমাদের সাথে যোগাযোগ করতে চান?"
                : "Are you already an affiliate and want to get in touch with us?"}
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-row gap-4">
          {tabButtons.map((tab, index) => (
            <Link
              key={index}
              to={tab.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: tab.bg }}
              className="hover:opacity-90 transition rounded-lg px-6 py-1 text-sm md:text-base font-medium"
            >
              {isBn ? tab.nameBN : tab.nameEN}
            </Link>
          ))}
        </div>
      </div>
      <div
        className="relative w-full py-32 bg-cover bg-center flex lg:hidden flex-col justify-center items-center text-white  px-4"
        style={{ backgroundImage: `url(${bgMobileImage})` }}
      >
        {/* Text overlay */}
        <div className="mb-6">
          <div className="text-center font-semibold leading-tight max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold">
              {isBn
                ? "এমসিডাব্লিউ অ্যাফিলিয়েট-এ আজই সাইন আপ করুন এবং"
                : "SIGN UP TODAY AT MCW AFFILIATES AND START"}
            </h1>
            <p className="text-3xl text-textSecondaryColor md:text-4xl">
              {isBn
                ? "আনলিমিটেড কমিশন আয় করুন!"
                : "EARNING UNLIMITED COMMISSION!"}
            </p>
          </div>
          <div className="flex flex-col  items-center mt-2 text-lg">
            <p className="text-center">
              {isBn
                ? "একটি অ্যাকাউন্ট কিভাবে খুলবেন সে সম্পর্কে সহায়তা লাগবে?"
                : "Need assistance on how to create an account?"}
            </p>
            <p className="text-center">
              {isBn
                ? "ইতিমধ্যে একজন অ্যাফিলিয়েট এবং আমাদের সাথে যোগাযোগ করতে চান?"
                : "Are you already an affiliate and want to get in touch with us?"}
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center  gap-4">
          {tabButtons.map((tab, index) => (
            <a
              key={index}
              href={tab.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: tab.bg }}
              className="hover:opacity-90 transition rounded-lg px-6 py-1 text-sm md:text-base font-medium"
            >
              {isBn ? tab.nameBN : tab.nameEN}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffSignUpToday;
