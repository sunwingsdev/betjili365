import OfferCard from "@/components/home/OfferCard/OfferCard";
import Container from "@/components/shared/Container";
import SecondaryBanner from "@/components/shared/SecondaryBanner";
import { useGetPromotionsQuery } from "@/redux/features/allApis/promotionApi/promotionApi";
import promotionImg from "@/assets/promotion/image_156888.jpg";

const PromotionalOffer = () => {
  // const offers = [
  //   {
  //     id: 1,
  //     image: "https://img.b112j.com/upload/announcement/image_156423.jpg",
  //     title: "A.F.C. বোর্নমাউথ-এ ১০০% রিফান্ড!",
  //     subtitle: "AFC বোর্নমাউথ ওয়েলকাম অফার",
  //     time: "2024/08/16 0:00:00 ~ 2025/05/25 23:59:59s",
  //   },
  //   {
  //     id: 2,
  //     image: "https://img.b112j.com/upload/announcement/image_131940.jpg",
  //     title: "৳১৫ কোটিরও বেশি বোনাস",
  //     subtitle: "ক্রিকেট ম্যারাথন লিডারবোর্ড",
  //     time: "2024/09/16 0:00:00 ~ 2025/05/25 23:59:59s",
  //   },
  //   {
  //     id: 3,
  //     image: "https://img.b112j.com/upload/announcement/image_156423.jpg",
  //     title: "ফ্রি SKN Patriots জার্সি",
  //     subtitle: "SKN Patriots ওয়েলকাম অফার",
  //     time: "2024/09/16 0:00:00 ~ 2025/05/25 23:59:59s",
  //   },
  //   {
  //     id: 4,
  //     image: "https://img.b112j.com/upload/announcement/image_130083.jpg",
  //     title: "৳৭৭৭ Cocktail Night স্লট গেম বোনাস",
  //     subtitle: "ওয়েলকাম অফার",
  //     time: "2024/09/16 0:00:00 ~ 2025/05/25 23:59:59s",
  //   },
  // ];

  const { data: promotions } = useGetPromotionsQuery();
  console.log(promotions);
  // https://img.b112j.com/upload/announcement/image_42190.jpg
  return (
    <div>
      <SecondaryBanner image={promotionImg} />
      <div className="bg-primary-primaryColorTwo">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6">
            {promotions?.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PromotionalOffer;
