const Affiliate = () => {
  const featuresData = [
    {
      title: "Free Account",
      description:
        "Easily create your free {SITE_NAME} agent account independently and effortlessly.",
      image:
        "https://darazplaypartner.com/wp-content/uploads/2024/07/free-Accounts.png",
      tag: "Free Account",
    },
    {
      title: "Fast Payments",
      description:
        "We guarantee timely payments and smooth, delay-free money transfers.",
      image:
        "https://darazplaypartner.com/wp-content/uploads/2024/07/Fast-Payments.png",
      tag: "Fast Payments",
    },
    {
      title: "Live Matrics",
      description:
        "Real-time campaign results with statistics updating every minute.",
      image:
        "https://darazplaypartner.com/wp-content/uploads/2024/07/Live-Matrics.png",
      tag: "Live Matrics",
    },
    {
      title: "Promo Materials",
      description:
        "Access unique promo materials and successful case studies from us.",
      image:
        "https://darazplaypartner.com/wp-content/uploads/2024/07/Promo-Materials.png",
      tag: "Promo Materials",
    },
    {
      title: "Extra Bonuses",
      description:
        "Easily create your free {SITE_NAME} agent account independently and effortlessly.",
      image:
        "https://darazplaypartner.com/wp-content/uploads/2024/07/Extra-Bonuses.png",
      tag: "Extra Bonuses",
    },
    {
      title: "Personal Manager",
      description: "Our support team is here 24/7—feel free to ask anything.",
      image:
        "https://darazplaypartner.com/wp-content/uploads/2024/07/Personal-Manager.png",
      tag: "Personal Manager",
    },
    {
      title: "Fast Approvals",
      description: "Our team will contact you within 24 hours of submission.",
      image:
        "https://darazplaypartner.com/wp-content/uploads/2024/07/Fast-Approvals.png",
      tag: "Fast Approvals",
    },
    {
      title: "Fair & Open",
      description:
        "User-friendly software with clear tracking of daily downtime.",
      image:
        "https://darazplaypartner.com/wp-content/uploads/2024/07/Fair-Open.png",
      tag: "Fair & Open",
    },
  ];

  return (
    <div className="w-full mb-12">
      <div className="text-center">
        <div className="max-w-full">
          <h2 className="text-4xl text-yellow-400 mb-10 uppercase">
            WHY {import.meta.env.VITE_SITE_NAME} AFFILIATE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mr-10 gap-8 md:gap-12 lg:gap-10 justify-items-center">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                className="w-full max-w-[280px] md:max-w-[300px] lg:max-w-[330px] bg-black rounded-[20px] shadow-xl px-8 py-12 text-white relative overflow-hidden"
              >
                {/* Top Banner Title */}
                <div className="absolute top-8 left-0 bg-yellow-400 text-black px-4 py-1 rounded-br-full rounded-tr-full font-bold text-[16px] shadow-md">
                  {feature.tag}
                </div>

                {/* Icon */}
                <div className="flex justify-center items-center mt-8">
                  <img
                    className="w-14 h-14"
                    src={feature.image}
                    alt={feature.title + " Icon"}
                  />
                </div>

                {/* Description */}
                <div className="text-center mt-4 px-2 text-[14px] font-medium leading-relaxed">
                  {feature.description.replace(
                    "{SITE_NAME}",
                    import.meta.env.VITE_SITE_NAME
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
