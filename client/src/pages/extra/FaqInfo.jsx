import { useState } from "react";

const faqData = {
  উত্তোলন: [
    "কিভাবে উত্তোলন করবেন?",
    "উত্তোলনের সময় কত লাগে?",
    "উত্তোলন ব্যর্থ হলে কী করবেন?",
  ],
  আমানত: [
    "কিভাবে আমানত করবেন?",
    "USDT এর মাধ্যমে কিভাবে আমানত করবেন?",
    "বিকাশে কিভাবে আমানত করবেন?",
  ],
  টেকনিক্যাল: [
    "অ্যাকাউন্ট লগইন সমস্যা কিভাবে সমাধান করবেন?",
    "ওয়েবসাইট স্লো হলে কী করবেন?",
  ],
  "গ্রাহক সেবা": [
    "লাইভ চ্যাট কিভাবে ব্যবহার করবেন?",
    "গ্রাহক সেবা কিভাবে যোগাযোগ করবেন?",
  ],
  "আমার অ্যাকাউন্ট": [
    "পাসওয়ার্ড রিসেট কিভাবে করবেন?",
    "নাম্বার পরিবর্তন করবেন কিভাবে?",
    "অ্যাকাউন্ট ডিলিট করবেন কিভাবে?",
  ],
  স্পোর্টসবুক: [
    "স্পোর্টসবুকে বাজি ধরার নিয়ম কী?",
    "লাইভ ম্যাচে কিভাবে খেলবেন?",
  ],
  ক্যাসিনো: ["লাইভ ক্যাসিনো কীভাবে কাজ করে?", "ক্যাসিনো তে কীভাবে জয় পাবেন?"],
  স্লট: ["স্লট গেমে জয় পাওয়ার টিপস কী?", "বোনাস কিভাবে রিডিম করবেন?"],
  অন্যান্য: [
    `${import.meta.env.VITE_SITE_NAME} সম্পর্কে সাধারণ প্রশ্ন।", ${
      import.meta.env.VITE_SITE_NAME
    } কি একটি বৈধ প্ল্যাটফর্ম?`,
  ],
  টেবিল: ["টেবিল গেম কীভাবে খেলা হয়?", "টেবিল গেমে কৌশল কী?"],
  লটারি: ["লটারি টিকিট কিনবেন কিভাবে?", "লটারি ফলাফল কোথায় পাবেন?"],
  [`${import.meta.env.VITE_SITE_NAME} অ্যাপ`]: [
    `${import.meta.env.VITE_SITE_NAME} অ্যাপ কোথা থেকে ডাউনলোড করবেন?`,
    "অ্যাপে লগইন করতে সমস্যা হলে করণীয়?",
  ],
};

const tabKeys = ["সকল", ...Object.keys(faqData)];

const FaqInfo = () => {
  const [selectedTab, setSelectedTab] = useState("সকল");

  const renderQuestions = () => {
    if (selectedTab === "সকল") {
      return Object.entries(faqData).map(([category, questions], i) => (
        <div key={i} className="mb-6">
          <h3 className="text-yellow-400 text-xl mb-2">{category}</h3>
          <ul className="list-disc list-inside space-y-1 text-white">
            {questions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      ));
    } else {
      return (
        <div className="mb-6">
          <h3 className="text-yellow-400 text-xl mb-2">{selectedTab}</h3>
          <ul className="list-disc list-inside space-y-1 text-white">
            {faqData[selectedTab]?.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="h-auto bg-[#111827] min-h-screen">
      <div className="md:max-w-6xl mx-auto px-6 md:px-0 py-6 text-white flex flex-col gap-6">
        <div>
          <h1 className="text-yellow-400 text-2xl mb-7 uppercase">
            প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
          </h1>
          <p className="text-gray-300 mb-6">
            এইগুলি {import.meta.env.VITE_SITE_NAME} সম্পর্কে কিছু সাধারণ প্রশ্ন
            এবং উত্তর। আপনি যদি নীচের তালিকায় আপনার প্রশ্নটি খুঁজে না পান, দয়া
            করে আমাদের গ্রাহক সহায়তার সাথে যোগাযোগ করুন।
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setSelectedTab(key)}
              className={`px-4 py-2 rounded ${
                selectedTab === key
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-700 text-white"
              } hover:bg-yellow-600 focus:outline-none`}
            >
              {key}
            </button>
          ))}
        </div>

        {renderQuestions()}
      </div>
    </div>
  );
};

export default FaqInfo;
