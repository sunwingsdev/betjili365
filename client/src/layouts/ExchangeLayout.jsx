import ExchangeLeftSideMenu from "@/components/exchange-page/ExchangeLeftSideMenu";
import ExchangeRightSideContent from "@/components/exchange-page/ExchangeRightSideContent";
import ExchangeTopMenu from "@/components/exchange-page/ExchangeTopMenu";
import Marquee from "react-fast-marquee";
import { AiOutlineAudio } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const ExchangeLayout = () => {
  return (
    <div>
      <ExchangeTopMenu />

      <div className="flex gap-4 px-4 mt-0.5 h-screen bg-[#eee]">
        <ExchangeLeftSideMenu />
        <div className="w-[60%]">
          <div className="bg-[#2a3a43] opacity-90 text-white w-full py-0.5 border-b border-white">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 pl-1">
                <AiOutlineAudio className="text-xl" />
                <p>News</p>
              </div>
              <Marquee className="text-xs">
                (Date :- 26/12/2024) .. Event : South Africa v Pakistan :
                Market: 50 Over PAK Adv {"'"}whole market voided because wrong
                Market offered by mistake Sorry for the Inconvenience Caused
              </Marquee>
            </div>
          </div>
          <Outlet />
        </div>

        <ExchangeRightSideContent />
      </div>
    </div>
  );
};

export default ExchangeLayout;
