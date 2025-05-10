import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import Container from "@/components/shared/Container";
import Marquee from "react-fast-marquee";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

export function BannerSlider() {
  const { data: homeControls } = useGetHomeControlsQuery();

  const bannerImages = homeControls?.filter(
    (control) =>
      control.page === "home" &&
      control.category === "slider" &&
      control.isSelected === true
  );

  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Listen for the selected slide change
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

  // Scroll to the next slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        const nextIndex = (selectedIndex + 1) % bannerImages?.length;
        api.scrollTo(nextIndex);
      }
    }, 3000); // 2 seconds

    return () => clearInterval(interval);
  }, [api, selectedIndex, bannerImages?.length]);

  const scrollTo = (index) => {
    api?.scrollTo(index);
  };

  return (
    <Carousel className="w-full" setApi={setApi}>
      <CarouselContent>
        {bannerImages?.map((image, index) => (
          <CarouselItem key={image._id}>
            <div className="">
              <img
                className="w-full max-h-[37rem] h-[37rem]"
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
      <div className="bg-jili-bgBlack opacity-90 text-white absolute bottom-0 w-full py-1">
        <Container>
          <div className="flex items-center gap-4">
            <HiMiniSpeakerWave className="text-xl md:text-3xl" />
            <Marquee className="text-xs md:text-sm">
              প্রিয় গ্রাহক, আপনার {import.meta.env.VITE_SITE_NAME}.live এ ভিসিট
              করতে সমস্যা হলে, অনুগ্রহ করে ---- ব্যবহার করুন, এটি আমাদের ব্যাকআপ
              ওয়েবসাইট লিংক।
            </Marquee>
          </div>
        </Container>
      </div>
    </Carousel>
  );
}
