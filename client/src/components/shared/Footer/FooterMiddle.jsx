import { Link } from "react-router-dom";
import HeadingContent from "../HeadingContent";
import HeadingImageContent from "../HeadingImageContent";
import { useGetPagesDetailQuery } from "@/redux/features/allApis/pagesApi/pagesApi";

const FooterMiddle = () => {
  const { data: allPages } = useGetPagesDetailQuery();

  const services = [
    {
      id: 1,
      image:
        "https://www.baji.live/images/v1/web/bj/icon-set/footer/icon-24hr.png",
      title: "কাস্টমার সাপোর্ট",
      subtitle: "২৪/৭ আপনাদের সেবায় নিয়োজিত",
    },
    {
      id: 2,
      image:
        "https://www.baji.live/images/v1/web/bj/icon-set/footer/icon-book.png",
      title: "নতুন সদস্যদের জন্যে গাইড",
      subtitle: "বহুল আলোচিত প্রশ্ন সমুহ এবং সাহায্যকারী গাইড",
      button: "এখনই এক্সপ্লোর করুণ",
      route: "/explore",
    },
    {
      id: 3,
      image:
        "https://www.baji.live/images/v1/web/bj/icon-set/footer/icon-ambassador.png",
      title: "ব্র্যান্ড অ্যাম্বাসেডর",
      subtitle: "সেলিব্রিটির সাথে খেলুন",
      button: "এখনই মজা করুন",
      route: "/explore",
    },
    {
      id: 4,
      image: "https://www.baji.live/images/web/footer/android-bn.png",

      imageRoute: "/download-app",
    },
  ];

  const gamingContents = [
    {
      id: 1,
      image: "https://www.baji.live/images/web/footer/color-white/safe1.png",
    },
    {
      id: 2,
      image: "https://www.baji.live/images/web/footer/color-white/safe2.png",
    },
    {
      id: 3,
      image: "https://www.baji.live/images/web/footer/color-white/safe3.png",
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      image: "https://www.baji.live/images/web/footer/color-white/pay16.png",
      route: "/",
    },
    {
      id: 2,
      image: "https://www.baji.live/images/web/footer/color-white/pay22.png",
      route: "/",
    },
    {
      id: 3,
      image: "https://www.baji.live/images/web/footer/color-white/pay33.png",
      route: "/",
    },
    {
      id: 4,
      image: "https://www.baji.live/images/web/footer/color-white/pay34.png",
      route: "/",
    },
    {
      id: 5,
      image: "https://www.baji.live/images/web/footer/color-white/pay45.png",
      route: "/",
    },
    {
      id: 6,
      image: "https://www.baji.live/images/web/footer/color-white/pay59.png",
      route: "/",
    },
    {
      id: 7,
      image: "https://www.baji.live/images/web/footer/color-white/pay60.png",
      route: "/",
    },
    {
      id: 8,
      image: "https://www.baji.live/images/web/footer/color-white/pay61.png",
      route: "/",
    },
    {
      id: 9,
      image: "https://www.baji.live/images/web/footer/color-white/pay47.png",
      route: "/",
    },
    {
      id: 10,
      image: "https://www.baji.live/images/web/footer/color-white/pay91.png",
      route: "/",
    },
  ];

  const communities = [
    {
      id: 1,
      image: "https://www.baji.live/images/web/footer/color-white/FaceBook.png",
      route: "/",
    },
    {
      id: 2,
      image:
        "https://www.baji.live/images/web/footer/color-white/Instagram.png",
      route: "/",
    },
    {
      id: 3,
      image: "https://www.baji.live/images/web/footer/color-white/Twitter.png",
      route: "/",
    },
    {
      id: 4,
      image:
        "https://www.baji.live/images/web/footer/color-white/Pinterest.png",
      route: "/",
    },
    {
      id: 5,
      image: "https://www.baji.live/images/web/footer/color-white/Youtube.png",
      route: "/",
    },
    {
      id: 6,
      image: "https://www.baji.live/images/web/footer/color-white/Telegram.png",
      route: "/",
    },
  ];

  const sponsors = [
    {
      id: 1,
      image: "https://www.baji.live/images/web/sponsor/deccan-gladiators.png",
      title: "Bologna FC 1909",
      subtitle: "বেটিং পার্টনার",
    },
    {
      id: 2,
      image:
        "https://www.baji.live/images/web/sponsor/sunrisers-eastern-cape.png",
      title: "Quetta Gladiators",
      subtitle: "টাইটানিয়াম স্পন্সর",
    },
    {
      id: 3,
      image: "https://www.baji.live/images/web/sponsor/quetta-gladiators.png",
      title: "Sunrisers Eastern Cape",
      subtitle: "টাইটেল স্পন্সর",
    },
    {
      id: 4,
      image: "https://www.baji.live/images/web/sponsor/bologna-fc-1909.png",
      title: "Deccan Gladiators",
      subtitle: "টাইটেল স্পন্সর",
    },
  ];

  const brandAmbassadors = [
    {
      id: 1,
      image:
        "https://www.baji.live/images/v1/web/bj/ambassador-v2/mia/mia-k.png",
      title: "Mia Khalifa",
      route: "/mia-khalifa",
    },
    {
      id: 2,
      image:
        "https://www.baji.live/images/v1/web/bj/ambassador-v2/kevin/kevin-pietersen-signature.png",
      title: "Kevin Pietersen",
      route: "/mia-khalifa",
    },
    {
      id: 3,
      image:
        "https://www.baji.live/images/v1/web/bj/ambassador-v2/amy/amy-jacson.png",
      title: "Amy Jackson",
      route: "/mia-khalifa",
    },
    {
      id: 4,
      image:
        "https://www.baji.live/images/v1/web/bj/ambassador-v2/hansika/hansika-signature.png",
      title: "Hansika Motwani",
      route: "/mia-khalifa",
    },
  ];
  return (
    <div className="relative flex flex-col">
      <div className="md:flex items-center justify-between gap-3 hidden">
        {services.map((service) => (
          <div className="flex items-center gap-4" key={service.id}>
            {service.imageRoute ? (
              <Link to={service.imageRoute}>
                <img src={service.image} alt="" />
              </Link>
            ) : (
              <img className="w-16" src={service.image} alt="" />
            )}
            <div className="flex flex-col items-start text-[#dedede] gap-3">
              <h2>{service.title}</h2>
              <p className="text-[#999] text-[12px]">{service.subtitle}</p>
              <Link to={service.route}>
                <p className="hover:text-textSecondaryColor hover:underline">
                  {service.button}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="order-3 flex flex-col-reverse md:flex-row items-start md:gap-16">
        <HeadingContent heading="দায়িত্বশীল গেমিং" contents={gamingContents} />
        <HeadingContent
          heading="পেমেন্ট পদ্ধতি"
          contents={paymentMethods}
          contentWidth={80}
          wrap={true}
        />
      </div>
      <div className="order-4">
        <HeadingContent heading="কমিউনিটি ওয়েবসাইট" contents={communities} />
      </div>
      <div className="order-1">
        <HeadingImageContent
          heading="স্পন্সরশিপ"
          contents={sponsors}
          contentWidth={60}
        />
      </div>
      {/* <div className="order-2">
        <HeadingImageContent
          heading="ব্র্যান্ড অ্যাম্বাসেডর'স"
          contents={brandAmbassadors}
          contentWidth={30}
        />
      </div> */}

      {/* <div className="pt-4 flex flex-wrap gap-2">
        {allPages?.map((page) => (
          <Link key={page?._id} to={`/pages/${page?.route}`}>
            <p className="text-xs md:text-base text-white border-r border-r-white pr-2 hover:underline hover:underline-offset-4 uppercase">
              {page?.route}
            </p>
          </Link>
        ))}
      </div> */}

      <div className="absolute right-5 bottom-5 space-y-3 text-sm hidden md:block">
        <h2 className="text-[#dedede] font-semibold">গেইমিংয়ের লাইসেন্স</h2>
        <img
          className="w-32"
          src="https://www.baji.live/images/web/footer/gaming_license.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FooterMiddle;
