import Container from "@/components/shared/Container";
import CategoryMobileMenu from "@/components/home/CategoryMobileMenu/CategoryMobileMenu";
import HomeGames from "@/components/home/HomeGames/HomeGames";
import MobileHome from "./MobileHome";
import HomeTabs from "./HomeTabs";
import { useOutletContext } from "react-router-dom";
import HomeFavorite from "./HomeFavorite";
import DesktopSlider from "./DesktopSlider";
import { BannerSlider } from "@/components/home/BannerSlider/BannerSlider";

const Home = () => {
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
