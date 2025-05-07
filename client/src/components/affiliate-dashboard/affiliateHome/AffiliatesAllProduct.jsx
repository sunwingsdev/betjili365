import affiliatImg from "../../../assets/affiliates/affiliatesDa.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const AffiliatesAllProduct = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <img className="w-full" src={affiliatImg} alt="" />
            <div className="flex gap-2 justify-between bg-red-600 px-2 lg:px-4 py-2 my-2">
              <p className="bg-white w-full rounded-lg px-3 py-0.5 text-sm">
                343434
              </p>
              <button className="bg-black text-white rounded-2xl px-5 py-0.5 text-sm font-semibold">
                Copy
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AffiliatesAllProduct;
