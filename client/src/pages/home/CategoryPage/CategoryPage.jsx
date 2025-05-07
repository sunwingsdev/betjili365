import SecondaryBanner from "@/components/shared/SecondaryBanner";
import { useParams } from "react-router-dom";
import bannerImage from "@/assets/secondary-banners/slot.jpg";
import GamesSection from "@/components/home/GamesSection/GamesSection";
const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div>
      <SecondaryBanner image={bannerImage} catName={category} />
      <GamesSection subCat={category} />
    </div>
  );
};

export default CategoryPage;
