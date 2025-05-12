import { LanguageContext } from "@/Context/LanguageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: { bn: "আমাদের সম্পর্কে", en: "About Us" }, to: "/info/about-us" },
  {
    label: { bn: "গোপনীয়তা নীতি", en: "Privacy Policy" },
    to: "/info/privacy-policy",
  },

  // { label: { bn: "নিরাপত্তা", en: "Security" }, to: "/info/security" },
  {
    label: { bn: " শর্তাবলী ", en: "Terms & Conditions" },
    to: "/info/security",
  },
  {
    label: { bn: " নিয়ম এবং প্রবিধান ", en: "Rules & Regulation" },
    to: "/info/security",
  },
  {
    label: { bn: "দায়িত্বশীল গেমিং", en: "Responsible Gaming" },
    to: "/info/responsible-gaming",
  },

  {
    label: { bn: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী", en: "FAQ" },
    to: "/info/faq",
  },

  {
    label: { bn: "অ্যাফিলিয়েট", en: "Affiliate" },
    to: "/affiliate",
  },
];

const FooterFaq = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="border-t mt-5 py-4 px-2 border-white border-opacity-50">
      <div className="grid md:flex grid-cols-3 gap-5 items-center">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="text-jili-textSecondary border-dashed border-r-2 border-white text-xs px-2 underline"
          >
            {item.label[language] || item.label.en}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterFaq;
