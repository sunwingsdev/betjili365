import React, { useContext, useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import banner1Image from "../../assets/affiliateImages/MCW_BDT_EN_Affiliates_Mystery-Cricket-Box_AFF_1174x436.jpg";
import banner2Image from "../../assets/affiliateImages/AFF-Live-Casino-up-to-৳6000_1174x436.jpg";
import FbIcon from "../../assets/affiliateImages/icon_fb.png";
import instaIcon from "../../assets/affiliateImages/icon_insta.png";
import ttIcon from "../../assets/affiliateImages/icon_tt.png";
import ytIcon from "../../assets/affiliateImages/icon_yt.png";
import webIcon from "../../assets/affiliateImages/icon_web.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/Context/LanguageContext";

const AffGuideTabs = () => {
  const { language } = useContext(LanguageContext);
  const isBN = language === "bn";

  const tabs = [
    {
      key: "faq",
      title: isBN
        ? "প্রায় জিজ্ঞাসিত প্রশ্নাবলী"
        : "FREQUENTLY ASKED QUESTIONS",
    },
    { key: "videos", title: isBN ? "ভিডিও টিউটোরিয়াল" : "VIDEO TUTORIALS" },
    { key: "banners", title: isBN ? "ব্যানার" : "BANNERS" },
  ];

  const faqData = [
    {
      key: "faq1",
      question: isBN
        ? "MCW অ্যাফিলিয়েট প্রোগ্রাম কী?"
        : "WHAT IS THE MCW AFFILIATE PROGRAM?",
      answer: isBN
        ? "MCW অ্যাফিলিয়েট প্রোগ্রাম হল একটি পার্টনারশিপ প্রোগ্রাম, যার মাধ্যমে আপনি আপনার রেফার করা খেলোয়াড়দের বাজির পরিমাণ অনুযায়ী কমিশন পেতে পারেন।"
        : "The MCW Affiliate Program is a Partnership Program which allows you to receive commission on every player you referred to MCW based on the player’s wagering activity over the course of the player’s account life.",
    },
    {
      key: "faq2",
      question: isBN ? "কোনো সেটআপ ফি আছে কি?" : "IS THERE A SETUP FEE?",
      answer: isBN
        ? "MCW অ্যাফিলিয়েট প্রোগ্রামে সাইন আপ করা একদম ফ্রি!"
        : "To sign up in MCW Affiliate Program is absolutely free!",
    },
    {
      key: "faq3",
      question: isBN
        ? "আমি কীভাবে অ্যাফিলিয়েট প্রোগ্রামে রেজিস্টার করবো?"
        : "HOW CAN I REGISTER WITH THE AFFILIATE PROGRAM?",
      answer: isBN
        ? "অ্যাফিলিয়েট অ্যাকাউন্ট তৈরি করার নির্দেশনার জন্য এই লিংকে ক্লিক করুন অথবা সহায়তার জন্য আমাদের অ্যাফিলিয়েট ম্যানেজারের সাথে যোগাযোগ করুন।"
        : "Kindly click this link for the instructions on how to create an Affiliate account, you may also contact our affiliate managers for assistance. Learn more",
    },
    {
      key: "faq4",
      question: isBN
        ? "কিভাবে আমার অ্যাফিলিয়েট অ্যাকাউন্টের পাসওয়ার্ড রিসেট করবো?"
        : "HOW TO RESET MY AFFILIATE ACCOUNT PASSWORD?",
      answer: isBN
        ? `উপরের “LOG IN” বাটনে ক্লিক করুন। তারপর “Forgot Password?” অপশনে ক্লিক করে পাসওয়ার্ড রিসেট করুন। আপনার অ্যাফিলিয়েট ID ও রেজিস্টারকৃত ইমেইল দিন এবং সাবমিট করুন। আপনি একটি টেম্পোরারি পাসওয়ার্ড ইমেইলে পাবেন। এটি কপি করে লগইন পেইজে গিয়ে ব্যবহার করুন।`
        : `Click on the “LOG IN” button in the top right corner. Please click the “Forgot Password?” button to reset your password. Enter your Affiliate ID and your registered email address and click Submit. You will receive your Temporary password via email. Copy your Temporary password and go back to the login page and enter your username and temporary password.`,
    },
  ];

  const videoData = [
    {
      key: "video1",
      question: isBN
        ? "কিভাবে অ্যাফিলিয়েট অ্যাকাউন্ট তৈরি করবেন?"
        : "HOW TO CREATE AN AFFILIATE ACCOUNT?",
      videoUrl: "https://www.youtube.com/embed/9lpMJ2qYmqU",
    },
    {
      key: "video2",
      question: isBN
        ? "কিভাবে আপনার অ্যাফিলিয়েট অ্যাকাউন্টের পাসওয়ার্ড রিসেট করবেন?"
        : "HOW TO RESET YOUR AFFILIATE ACCOUNT PASSWORD?",
      videoUrl: "https://www.youtube.com/embed/16Y2-TaxBEw",
    },
  ];

  const bannerData = [
    {
      key: "banner1",
      question: isBN
        ? "BPL 2025 মিস্ট্রি ক্রিকেট বক্স চ্যালেঞ্জ"
        : "BPL 2025 Mystery Cricket Box Challenge",
      image: banner1Image,
      tableData: [
        {
          key: "row1",
          size: "300×300",
          designedFor: [FbIcon, instaIcon, ttIcon, ytIcon],
          category: isBN ? "প্রোফাইল ছবি" : "Profile Picture",
          downloadUrl: "/banners/sports1.jpg",
        },
        {
          key: "row2",
          size: "728×90",
          designedFor: [FbIcon, instaIcon],
          category: isBN ? "প্রোফাইল ব্যাকগ্রাউন্ড" : "PROFILE BACKGROUND",
          downloadUrl: "/banners/sports2.jpg",
        },
        {
          key: "row3",
          size: "160×600",
          designedFor: [ytIcon],
          category: isBN ? "আইকন" : "ICONS",
          downloadUrl: "/banners/sports3.jpg",
        },
        {
          key: "row4",
          size: "300×250",
          designedFor: [FbIcon, instaIcon, ttIcon, ytIcon],
          category: isBN ? "বিজ্ঞাপন" : "ADS",
          downloadUrl: "/banners/sports4.jpg",
        },
        {
          key: "row5",
          size: "970×250",
          designedFor: [webIcon],
          category: isBN ? "ওয়েব ব্যানার" : "WEB BANNER",
          downloadUrl: "/banners/sports5.jpg",
        },
      ],
    },
    {
      key: "banner2",
      question: isBN
        ? "লাইভ ক্যাসিনো ৳৬,০০০ পর্যন্ত Tue, Thu & Sat ক্যাশব্যাক"
        : "Live Casino up to ৳6,000 Tue, Thu & Sat Cashback",
      image: banner2Image,
      tableData: [
        {
          key: "row1",
          size: "300×300",
          designedFor: [FbIcon, instaIcon, ttIcon, ytIcon],
          category: isBN ? "প্রোফাইল ছবি" : "Profile Picture",
          downloadUrl: "/banners/sports1.jpg",
        },
        {
          key: "row2",
          size: "728×90",
          designedFor: [FbIcon, instaIcon],
          category: isBN ? "প্রোফাইল ব্যাকগ্রাউন্ড" : "PROFILE BACKGROUND",
          downloadUrl: "/banners/sports2.jpg",
        },
        {
          key: "row3",
          size: "160×600",
          designedFor: [ytIcon],
          category: isBN ? "আইকন" : "ICONS",
          downloadUrl: "/banners/sports3.jpg",
        },
        {
          key: "row4",
          size: "300×250",
          designedFor: [FbIcon, instaIcon, ttIcon, ytIcon],
          category: isBN ? "বিজ্ঞাপন" : "ADS",
          downloadUrl: "/banners/sports4.jpg",
        },
        {
          key: "row5",
          size: "970×250",
          designedFor: [webIcon],
          category: isBN ? "ওয়েব ব্যানার" : "WEB BANNER",
          downloadUrl: "/banners/sports5.jpg",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("faq");
  const [openKey, setOpenKey] = useState(null);

  const toggleItem = (key) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <div className="bg-AffiliatePrimaryBg">
      <div className="max-w-7xl text-white mx-auto p-4">
        <h3 className="text-center text-5xl py-[4%]"> <span className="text-textSecondaryColorTwo">
        AFFILIATE
          </span> GUIDE</h3>
        {/* Tabs */}
        <div className="flex flex-col gap-2 lg:gap-0 text-sm lg:text-lg lg:flex-row mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);

                if (tab.key === "faq") {
                  setOpenKey(faqData[0]?.key);
                } else if (tab.key === "videos") {
                  setOpenKey(videoData[0]?.key);
                } else if (tab.key === "banners") {
                  setOpenKey(bannerData[0]?.key);
                } else {
                  setOpenKey(null);
                }
              }}
              className={`lg:mr-2  py-2  rounded w-full font-bold ${
                activeTab === tab.key
                  ? "bg-backgroundSecondaryColor"
                  : "bg-primary-primaryColor"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {/* faq */}
          {activeTab === "faq" &&
            faqData.map((item) => (
              <div
                key={item.key}
                className="border-b border-dashed border-opacity-20 border-textSecondaryColor "
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center"
                  onClick={() => toggleItem(item.key)}
                >
                  <span className="font-semibold text-textSecondaryColor">
                    {item.question}
                  </span>
                  <span>
                    {openKey === item.key ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                </button>
                {openKey === item.key && (
                  <div className="p-4  bg-transparent ">{item.answer}</div>
                )}
              </div>
            ))}

          {/* videos */}
          {activeTab === "videos" &&
            videoData.map((item) => (
              <div
                key={item.key}
                className="border-b border-dashed border-opacity-20 border-textSecondaryColor "
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center"
                  onClick={() => toggleItem(item.key)}
                >
                  <span className="font-semibold text-textSecondaryColor">
                    {item.question}
                  </span>
                  <span>
                    {openKey === item.key ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                </button>
                {openKey === item.key && (
                  <div className="p-4  bg-transparent">
                    <iframe
                      src={item.videoUrl}
                      title={item.key}
                      className="w-full h-64"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}

          {/* banners */}
          {activeTab === "banners" && (
            <div className="space-y-6">
              {/* Banner Sections */}
              {bannerData.map((item) => (
                <div
                  key={item.key}
                  className="border-b border-dashed border-opacity-20 border-textSecondaryColor "
                >
                  <button
                    className="w-full text-left p-4 flex justify-between items-center"
                    onClick={() => toggleItem(item.key)}
                  >
                    <span className="font-semibold text-textSecondaryColor">
                      {item.question}
                    </span>
                    <span>
                      {openKey === item.key ? <FaCaretUp /> : <FaCaretDown />}
                    </span>
                  </button>
                  {openKey === item.key && (
                    <div className="p-4 bg-transparent">
                      <img
                        src={item.image}
                        alt={item.question}
                        className="w-full rounded shadow"
                      />
                      <div className="w-full text-xs lg:text-base overflow-x-auto">

                      
                      <table className="w-full table-auto  text-left text-white mb-4 overflow-x-auto">
                        <thead className="bg-backgroundSecondaryColor uppercase text-center whitespace-nowrap">
                          <tr>
                            <th className="p-4 ">Size</th>
                            <th className="p-4 ">Designed for</th>
                            <th className="p-4 ">Category</th>
                            <th className="p-4 ">Download Banner</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          {item.tableData.map((row, index) => (
                            <tr
                              key={row.key}
                              className={
                                index % 2 === 0
                                  ? "bg-primary-primaryColor"
                                  : "bg-componentBgPrimary"
                              }
                            >
                              <td className="p-6">{row.size}</td>
                              <td className="p-6">
                                <div className="flex items-center justify-center gap-1 lg:gap-2">
                                  {row.designedFor.map((icon, idx) => (
                                    <img
                                      key={`${row.key}-icon-${idx}`}
                                      src={icon}
                                      alt="icon"
                                      className="w-6 h-6 lg:w-8 lg:h-8"
                                    />
                                  ))}
                                </div>
                              </td>
                              <td className="p-6">{row.category}</td>
                              <td className="p-6">
                                <Link
                                  to={row.downloadUrl}
                                  download
                                  className="px-3 py-1 bg-gold-gradient text-white text-sm rounded"
                                >
                                  Download
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AffGuideTabs;
