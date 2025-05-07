import { IoIosLogOut, IoLogoGameControllerB, IoMdHome } from "react-icons/io";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaAffiliatetheme, FaUsers, FaWallet } from "react-icons/fa";
import { SiInstructure, SiPacker } from "react-icons/si";
import { TbHistoryToggle } from "react-icons/tb";
import { MdOutlineSupport } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LiaBuysellads } from "react-icons/lia";
import { LuGitPullRequestCreateArrow } from "react-icons/lu";
import { useSelector } from "react-redux";
import CashAgentSidebar from "@/components/cash-agent/CashAgentSidebar";
import CashAgentMobileMenu from "@/components/cash-agent/CashAgentMobileMenu";

const AffiliatesLayout = () => {
  const [open, setOpen] = useState(true);
  const { user, token } = useSelector((state) => state.auth);

  const menuItems = [
    { name: "Home", icon: <IoMdHome />, path: "/affiliate", submenu: [] },
    {
      name: "All Affiliate User",
      icon: <FaUsers />,
      path: "",
      submenu: [],
    },
    {
      name: "Affiliate Structure",
      icon: <SiInstructure />,
      path: "",
      submenu: [],
    },
    {
      name: "My Affiliae Links",
      icon: <FaAffiliatetheme />,
      path: `/affiliatesdashboard/myaffiliatelinks/${user?._id}`,
      submenu: [],
    },
    {
      name: "Promo Code",
      icon: <IoLogoGameControllerB />,
      path: "",
      submenu: [],
    },
    {
      name: "Earning History",
      icon: <TbHistoryToggle />,
      path: "",
      submenu: [],
    },
    {
      name: "AF Earning Pakege",
      icon: <SiPacker />,
      path: "",
      submenu: [],
    },
    {
      name: "Create ads",
      icon: <LuGitPullRequestCreateArrow />,
      path: "",
      submenu: [],
    },
    {
      name: "All Ads Ads",
      icon: <LiaBuysellads />,
      path: "",
      submenu: [],
    },
    {
      name: "My Walet",
      icon: <FaWallet />,
      path: "",
      submenu: [],
    },
    {
      name: "Profile",
      icon: <CgProfile />,
      path: "",
      submenu: [],
    },
    {
      name: "Support Ticket",
      icon: <MdOutlineSupport />,
      path: "",
      submenu: [],
    },
    {
      name: "Log Out",
      icon: <IoIosLogOut />,
      path: "",
      submenu: [],
    },
    // {
    //   name: "Games Control",
    //   icon: <IoGameController />,
    //   submenu: [
    //     { name: "Categories", path: "/dashboard/game-categories" },
    //     { name: "Active Games", path: "/dashboard/active-games" },
    //     { name: "Inactive Games", path: "/dashboard/inactive-games" },
    //   ],
    // },
  ];
  return (
    <div className="flex">
      {/* CashAgent Sidebar */}
      <CashAgentSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          !open ? "md:pl-16" : "md:pl-64"
        }`}
      >
        <CashAgentMobileMenu
          open={open}
          menuItems={menuItems}
          dashboardLink="/affiliatesdashboard"
          logOutPath="/affiliate"
        />
        <div className="mt-[62px] md:mt-16 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AffiliatesLayout;
