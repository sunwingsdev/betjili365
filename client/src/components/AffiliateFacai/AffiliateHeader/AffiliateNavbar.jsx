import React, { useContext } from "react";
import AffiliateTopNavbar from "./AffiliateTopNavbar";
import AffiliateBottomNavbar from "./AffiliateBottomNavbar";
import AffiliateBottomNavbarTwo from "./AffiliateBottomNavbarTwo";
import AffiliatePhoneNavbar from "./AffiliatePhoneNavbar";
import { AiFillHome } from "react-icons/ai";
import { LanguageContext } from "@/Context/LanguageContext";

const AffiliateNavbar = ({ toggleOpenLanguage,showModal,openModal }) => {
  const { language } = useContext(LanguageContext);

  // EN এবং BN অনুযায়ী navItems এর title সেট করা হয়েছে
  const navItems = [
    {
      key: "home",
      title: { en: "Home", bn: "হোম" },
      icon: <AiFillHome className="text-xl" />,
      link: "",
    },
    {
      key: "commissions",
      title: { en: "Commissions", bn: "কমিশনস" },
      link: "/affiliate/commission",
    },
    {
      key: "promotions",
      title: { en: "Promotions", bn: "প্রমোশনস" },
      link: "/affiliate/promotions",
    },
    {
      key: "product",
      title: { en: "Product", bn: "প্রোডাক্ট" },
      link: "/affiliate/product",
    },
    {
      key: "guides",
      title: { en: "Affiliate Guides", bn: "অ্যাফিলিয়েট গাইডস" },
      link: "/affiliate/guide",
    },
    {
      key: "contact",
      title: { en: "Contact Us", bn: "যোগাযোগ করুন" },
      link: "/affiliate/contact",
      showModal: true,
    },
  ];
  

  return (
    <div className="sticky top-0 bg-white shadow-md font-sans z-40 ">
      <div className="hidden lg:block">
        <AffiliateTopNavbar toggleOpenLanguage={toggleOpenLanguage} />
        <AffiliateBottomNavbar />
        <AffiliateBottomNavbarTwo 
        navItems={navItems} 
        showModal={showModal}
        openModal={openModal}
        />
      </div>
      <div className="lg:hidden">
        <AffiliatePhoneNavbar
         navItems={navItems} 
         showModal={showModal}
         openModal={openModal}
         />
      </div>
    </div>
  );
};

export default AffiliateNavbar;
