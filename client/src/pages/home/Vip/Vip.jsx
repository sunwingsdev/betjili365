import Container from "@/components/shared/Container";
import SecondaryBanner from "@/components/shared/SecondaryBanner";

const Vip = () => {
  const items = [
    {
      id: 1,
      image:
        "https://www.vipdetailspage.com/wp-content/themes/vip/bjvip/images/b1-bn.png",
    },
    {
      id: 2,
      image:
        "https://www.vipdetailspage.com/wp-content/themes/vip/bjvip/images/b2-bn.png",
    },
    {
      id: 1,
      image:
        "https://www.vipdetailspage.com/wp-content/themes/vip/bjvip/images/b3-bn.png",
    },
    {
      id: 1,
      image:
        "https://www.vipdetailspage.com/wp-content/themes/vip/bjvip/images/b4-bn.png",
    },
  ];
  return (
    <div>
      <SecondaryBanner
        image={
          "https://www.vipdetailspage.com/wp-content/themes/vip/bjvip/images/bg-bn.jpg"
        }
        buttonImage={
          "https://www.vipdetailspage.com/wp-content/themes/vip/bjvip/images/joinbtn-bn.png"
        }
      />
      <div className="bg-black text-white">
        <Container>
          <div>
            <h2 className="text-center text-3xl font-black custom-gradient-text">
              ভিআইপি এর বিশেষ সুবিধা
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
              {items.map((item) => (
                <img key={item.id} src={item.image} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Vip;
