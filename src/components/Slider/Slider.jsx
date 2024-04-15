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
              <h1 className="text-[clamp(26px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white">
                Modern House Make <br /> Better Life
              </h1>
              <p className=" w-2/3 mx-auto text-center mt-4 text-white">
                Experience the epitome of contemporary living with our modern
                house designs. Elevate your lifestyle and embrace a better way
                of living.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slider2  bg-cover bg-center bg-no-repeat h-[450px] ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(26px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white">
                Let Your Home Be Unique <br /> & Stylist
              </h1>
              <p className="text-white w-2/3 mx-auto text-center mt-4">
                Discover the essence of uniqueness and style for your home. Let
                our curated designs breathe life into your living spaces Elevate
                your surroundings with bespoke touches, creating a sanctuary
                that is truly yours.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slider3  bg-cover bg-center bg-no-repeat h-[450px] ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(26px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white">
                Your Property Is Our <br /> Priority
              </h1>
              <p className="text-white w-2/3 mx-auto text-center mt-4">
                Trust us to make your property our top concern, ensuring every
                detail is meticulously handled. Your property always comes
                first, no matter the task.
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
