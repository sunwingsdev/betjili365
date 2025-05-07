import { useOutletContext } from "react-router-dom";
import HomeFavorite from "./HomeFavorite";
import HomeFeatures from "./HomeFeatures";
import HomeTabs from "./HomeTabs";
import ImageSlider from "./ImageSlider";
import Marquee from "./Marquee";

import { CardSlider } from "@/components/home/CardSlider/CardSlider";
import BetJiliImageSlider from "./BetJiliImageSlider";

const MobileHome = () => {
  const { menuItems } = useOutletContext();
  
  return (
    <div className="bg-jili-bgBlack">
      {/* <ImageSlider /> */}
      <BetJiliImageSlider/>
      <Marquee />
      <HomeTabs menuItems={menuItems} />
      <HomeFavorite />
      
      <HomeFeatures />
    </div>
  );
};

export default MobileHome;
