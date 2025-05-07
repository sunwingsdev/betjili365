import InfoMobileMenu from "@/components/InfoLayout/InfoMobileMenu";
import InfoSidebar from "@/components/InfoLayout/InfoSidebar";
import { useState } from "react";

import { Outlet } from "react-router-dom";

const InfoLayout = () => {
  const [open, setOpen] = useState(true);
  // Menu items with dynamic submenu
  const menuItems = [
    { label: "আমাদের সম্পর্কে", to: "/info/about-us" },
    { label: "গোপনীয়তা নীতি", to: "/info/privacy-policy" },
    { label: "শর্তাবলী", to: "/info/terms-and-conditions" },
    { label: "নিরাপত্তা", to: "/info/security" },
    { label: "দায়িত্বশীল গেমিং", to: "/info/responsible-gaming" },
    {
      label: "শুধুমাত্র 18 বছর এবং তার বেশি বয়সের জন্য?",
      to: "/info/18-plus",
    },
    { label: "KYC নীতি", to: "/info/kyc-policy" },
    {
      label: "এন্টি-মানি লন্ডারিং নীতি",
      to: "/info/anti-money-laundering-policy",
    },
    { label: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী", to: "/info/faq" },
  ];
  return (
    <div className="flex">
      {/* DashboardSidebar */}
      <InfoSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
      <div
        className={`flex-1 h-screen overflow-y-auto flex flex-col duration-300 ${
          !open ? "md:pl-0" : "md:pl-96"
        }`}
      >
        <InfoMobileMenu
          open={open}
          setOpen={setOpen}
          menuItems={menuItems}
          // dashboardLink="/dashboard"
          // logOutPath="/admin"
        />
        <div className="mt-[62px] md:mt-28 bg-primary-primaryColor h-auto">
          <div className="bg-primary-primaryColorTwo py-4 text-center">
            <h1 className="text-white text-xl">
              আমাদের{" "}
              <span className="text-textSecondaryColor">তথ্য কেন্দ্রে</span>{" "}
              স্বাগতম
            </h1>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
