import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { useEffect, useState } from "react";

const SecondaryBanner = ({ image, buttonImage, bottom, catName }) => {
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data: homeControls } = useGetHomeControlsQuery();

  const bannerImages = homeControls?.filter(
    (control) =>
      control.category === "slider" &&
      control.isSelected === true &&
      control.page === catName
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <>
      {bannerImages?.length === 0 ? (
        <div className={`${buttonImage && "relative"}`}>
          <img src={image} alt="" />
          {buttonImage && (
            <Link to="/register">
              <img
                className={`absolute ${
                  bottom ? "-bottom-20" : "bottom-20"
                } left-1/2 transform -translate-x-1/2`}
                src={buttonImage}
                alt=""
              />
            </Link>
          )}
        </div>
      ) : (
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {bannerImages?.map((image, index) => (
              <CarouselItem key={image._id}>
                <div className="">
                  <img
                    className="w-full max-h-[600px]"
                    src={`${import.meta.env.VITE_BASE_API_URL}${image?.image}`}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Slide Select Buttons */}
          <div className="absolute bottom-8 md:bottom-16 right-4 md:right-[5.5rem] flex space-x-2">
            {bannerImages?.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`size-[10px] md:size-4 rounded-full hover:bg-white transition-colors ease-in-out duration-300 ${
                  selectedIndex === index ? "bg-white" : "bg-[#12664b]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      )}
    </>
  );
};

export default SecondaryBanner;
