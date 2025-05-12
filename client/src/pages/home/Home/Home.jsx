import { BannerSlider } from "@/components/home/BannerSlider/BannerSlider";
import { CardSlider } from "@/components/home/CardSlider/CardSlider";
import Container from "@/components/shared/Container";
import cardImage1 from "@/assets/card-slider/1.jpg";
import cardImage2 from "@/assets/card-slider/2.jpg";
import CategoryMobileMenu from "@/components/home/CategoryMobileMenu/CategoryMobileMenu";
import HomeGames from "@/components/home/HomeGames/HomeGames";
import MobileHome from "./MobileHome";
import SlotGamesSection from "@/components/home/SlotGamesSection/SlotGamesSection";
import HomeTabs from "./HomeTabs";
import { useOutletContext } from "react-router-dom";
import HomeFavorite from "./HomeFavorite";
import HomeFeatures from "./HomeFeatures";
import BetJiliImageSlider from "./BetJiliImageSlider";
import ImageSlider from "./ImageSlider";
import DesktopSlider from "./DesktopSlider";

const Home = () => {
  const cardSliders = [
    { id: 1, image: cardImage1 },
    { id: 2, image: cardImage2 },
  ];
  const { menuItems } = useOutletContext();
  return (
    <div>
      <div className="bg-jili-bgBlack hidden md:block">
        {/* <BannerSlider /> */}
        <DesktopSlider />

        <Container>
          <CategoryMobileMenu />
          <div className="mt-4">
            <HomeTabs menuItems={menuItems} />
          </div>
          <HomeFavorite />
          {/* <HomeFeatures /> */}

          <HomeGames />
        </Container>
      </div>
      <div className="block md:hidden relative">
        <MobileHome />
      </div>
    </div>
  );
};

export default Home;
