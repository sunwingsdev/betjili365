const MegaMenu = () => {
  const options = [
    {
      title: "Exchange",
      image1:
        "https://www.baji.live/images/web/nav/subnav-slide/exchange_bdt_03.png",
      image2:
        "https://www.baji.live/images/web/nav/subnav-slide/exchange_bdt_02.png",
    },
    {
      title: "SBO Sports",
      image1:
        "https://www.baji.live/images/web/nav/subnav-slide/i-sports_bdt_02.png",
      image2:
        "https://www.baji.live/images/web/nav/subnav-slide/i-sports_bdt_03.png",
    },
    {
      title: "I Sports",
      image1:
        "https://www.baji.live/images/web/nav/subnav-slide/sbobet_bdt_03.png",
      image2:
        "https://www.baji.live/images/web/nav/subnav-slide/sbobet_bdt_02.png",
    },
  ];

  return (
    <div className="flex justify-between gap-4">
      {options.map((option) => (
        <div className="relative h-56 w-full" key={option.title}>
          <h2 className="text-white px-6 font-medium text-lg border-s-4 border-yellow-500">
            {option.title}
          </h2>
          {/* Centered Background Image */}
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain"
            src="https://www.baji.live/images/web/nav/subnav-slide/exchange_bdt_01.png"
            alt="Background"
          />

          {/* Foreground Images */}
          <img
            className="w-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto object-contain"
            src={option.image1}
            alt={`${option.title} image1`}
          />
          <img
            className="w-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 h-auto object-contain"
            src={option.image2}
            alt={`${option.title} image2`}
          />
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
