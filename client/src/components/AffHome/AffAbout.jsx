import React, { useContext } from "react";
import imgAbout from "../../assets/affiliateImages/img_about-us_bn.png";
import { LanguageContext } from "@/Context/LanguageContext";

const AffAbout = () => {
  const { language } = useContext(LanguageContext);
  const isBn = language === "bn";

  return (
    <div className="bg-AffiliatePrimaryBg pb-20 lg:pb-0">
      <div className="w-full mx-auto py-[5%] max-w-4xl text-white">
        <div className="py-[4%] flex justify-center">
          <h3 className="text-4xl font-semibold">
            {isBn ? "আমাদের সম্পর্কে" : "ABOUT US"}
          </h3>
        </div>

        <div>
          <img src={imgAbout} alt="about" />
        </div>

        <div className="text-xl px-[5%] lg:px-0 mt-4">
          {isBn ? (
            <p>
              <strong className="text-textSecondaryColor">মেগা ক্যাসিনো ওয়ার্ল্ড (MCW)</strong> হল অনলাইন বেটিং ব্র্যান্ডগুলোর একটি প্ল্যাটফর্ম, যেখানে খেলোয়াড়দের জন্য বিশ্বমানের গেমিং অভিজ্ঞতা প্রদান করা হয়। আমরা পেশাদার অনলাইন গেমিং পরিষেবা প্রদানের লক্ষ্যে কাজ করি, যেখানে খেলোয়াড়দের চাহিদা অনুযায়ী গেম থেকে শুরু করে স্পোর্টস বেটিং পর্যন্ত বিভিন্ন অপশন থাকে। আমাদের ব্র্যান্ডগুলো নিরাপদ গেমিং প্ল্যাটফর্ম ও উদার বোনাস/প্রমোশনের জন্য একটি বিশ্বস্ত নাম অর্জন করেছে।
            </p>
          ) : (
            <p>
              <strong className="text-textSecondaryColor">Mega Casino World (MCW)</strong> is home to a wide variety of online betting brands that offer world class online gaming experience to valued bettors. Our objective is to deliver a professional online gaming product, exactly the way the players require with various preferences from online games to online sports betting. Our brands have built a trustworthy reputation for providing the most secured online gaming platforms with generous bonuses and promotions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AffAbout;
