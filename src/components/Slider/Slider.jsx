import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-40"
      >
        <SwiperSlide>
          <div className="bg-slider1  bg-cover bg-center bg-no-repeat h-[450px] ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(26px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white/90">
                Modern House Make <br /> Better Life
              </h1>
              <p className="text-white/90 w-2/3 mx-auto text-center mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slider1  bg-cover bg-center bg-no-repeat h-[450px] ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(26px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white/90">
                Let Your Home Be Unique <br /> & Stylist
              </h1>
              <p className="text-white/90 w-2/3 mx-auto text-center mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slider1  bg-cover bg-center bg-no-repeat h-[450px] ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(26px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white/90">
                A small river named Duden <br /> flows by their
              </h1>
              <p className="text-white/90 w-2/3 mx-auto text-center mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute sm:top-1/2 sm:-translate-y-1/2 z-40 sm:flex justify-between w-full bottom-6 left-4 sm:left-auto space-x-3 sm:bottom-auto">
        <button
          type="button"
          className="prev-button bg-primary text-white p-4 rounded-full"
        >
          <FaArrowLeftLong />
        </button>
        <button
          type="button"
          className="next-button bg-primary text-white p-4 rounded-full"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Slider;
