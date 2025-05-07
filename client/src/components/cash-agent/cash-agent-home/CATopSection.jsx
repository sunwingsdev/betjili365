import CAStatesCard from "./CAStatesCard";
import {
  FaHandshake,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaPercentage,
} from "react-icons/fa";
import { PiHandDepositBold, PiHandWithdrawBold } from "react-icons/pi";
import { BiTransferAlt } from "react-icons/bi";
import { AiFillPieChart } from "react-icons/ai";
import bkash from "../../../assets/agent/bkash.png";
import nagad from "../../../assets/agent/nagad.png";
import rocket from "../../../assets/agent/rocket.png";
import upay from "../../../assets/agent/upay.png";
import tap from "../../../assets/agent/tap.png";
import mcash from "../../../assets/agent/mcash.png";
import cellfin from "../../../assets/agent/cellfin.png";
import okwal from "../../../assets/agent/okwallet.png";
import CAdepositStatesCard from "./CAdepositStatesCard";

const CATopSection = () => {
  const stats = [
    {
      title: "মোট ডিপোজিট হয়েছে",
      amount: 0,
      Icon: PiHandDepositBold,
      bgColor: "bg-gradient-to-t from-red-600 to-black",
      // " bg-[#3c8dbc]",
    },
    {
      title: "মোট উত্তোলন পরিশোধ করেছেন",
      amount: 0,
      Icon: PiHandWithdrawBold,
      bgColor: "bg-gradient-to-t from-red-600 to-black",
      // "bg-[#00a65a]",
    },
    {
      title: "কোম্পানির থেকে আপনি পাবেন",
      amount: 0,
      Icon: FaHandshake,
      bgColor: "bg-gradient-to-t from-red-600 to-black",
      // "bg-[#f39c12]",
    },
    {
      title: "কোম্পানি আপনার থেকে পাবেন",
      amount: 0,
      Icon: BiTransferAlt,
      bgColor: "bg-gradient-to-t from-red-600 to-black",
      // "bg-[#dd4b39]",
    },
    {
      title: "আজকের ডিপোজিট হয়েছে",
      amount: 0,
      Icon: FaMoneyCheckAlt,
      bgColor: "bg-gradient-to-t from-red-600 to-black",
      // "bg-[#3c8dbc]",
    },
    {
      title: "আজকের উত্তোলন পরিশোধ করেছেন",
      amount: 0,
      Icon: FaHandHoldingUsd,
      bgColor: "bg-gradient-to-t from-red-600 to-black",
      // "bg-[#00a65a]",
    },
    {
      title: "আপনার আজকের কমিশন",
      amount: 0,
      Icon: FaPercentage,
      bgColor: "bg-gradient-to-t from-red-600 to-black",
      // "bg-[#f39c12]",
    },
    {
      title: "আপনার মোট কমিশন",
      amount: 0,
      Icon: AiFillPieChart,
      bgColor: "bg-gradient-to-t from-red-600 to-black",
      // "bg-[#dd4b39]",
    },
  ];

  const deposits = [
    {
      amount: "50000 BDT",
      description: "আজকের ডিপোজিট হয়েছে",
      bgColor: "bg-[#3c8dbc]",
      borderColor: "border-t-[#d12053]",
      image: bkash,
      alt: "Bkash",
    },
    {
      amount: "50000 BDT",
      description: "আজকের ডিপোজিট হয়েছে",
      bgColor: "bg-green-600",
      borderColor: "border-t-[#ea1d25]",
      image: nagad,
      alt: "Nagad",
    },
    {
      amount: "50000 BDT",
      description: "আজকের ডিপোজিট হয়েছে",
      bgColor: "bg-[#f39c12]",
      borderColor: "border-t-[#8c3494]",
      image: rocket,
      alt: "Rocket",
    },
    {
      amount: "50000 BDT",
      description: "আজকের ডিপোজিট হয়েছে",
      bgColor: "bg-[#dd4b39]",
      borderColor: "border-t-[#014898]",
      image: upay,
      alt: "Upay",
    },
    {
      amount: "50000 BDT",
      description: "আজকের ডিপোজিট হয়েছে",
      bgColor: "bg-[#3c8dbc]",
      borderColor: "border-t-[#00dc44]",
      image: tap,
      alt: "Tap",
    },
    {
      amount: "50000 BDT",
      description: "আজকের ডিপোজিট হয়েছে",
      bgColor: "bg-[#00a65a]",
      borderColor: "border-t-[#1eb672]",
      image: mcash,
      alt: "Mcash",
    },
    {
      amount: "50000 BDT",
      description: "আজকের ডিপোজিট হয়েছে",
      bgColor: "bg-[#f39c12]",
      borderColor: "border-t-[#9bd7cd]",
      image: cellfin,
      alt: "Cellfin",
    },
    {
      amount: "50000 BDT",
      description: "আজকের ডিপোজিট হয়েছে",
      bgColor: "bg-[#dd4b39]",
      borderColor: "border-t-[#ebebeb]",
      image: okwal,
      alt: "Okwallet",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <CAStatesCard key={index} {...stat} />
        ))}
      </div>

      {/* deposits section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
        {deposits.map((deposit, index) => (
          <CAdepositStatesCard key={index} deposit={deposit} />
        ))}
      </div>
    </div>
  );
};

export default CATopSection;
