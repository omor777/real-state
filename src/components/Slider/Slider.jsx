import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../../assets/slider1.jpg";
import slide2 from "../../assets/slider2.jpg";
import slide3 from "../../assets/slider3.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mt-40 container">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          depth: 100,
          modifier: 1,
          rotate: 50,
          scale: 1,
          slideShadows: true,
          stretch: 0,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure className="w-full relative overflow-hidden">
            <img
              className="h-[400px] rounded-md md:h-[550px] w-full object-cover "
              src={slide1}
            />
            <span className="absolute  top-0 w-full h-full bg-black/40 rounded-md"></span>
          </figure>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
            <h1 className="text-[clamp(32px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white/90">
              Modern House Make <br /> Better Life
            </h1>
            <p className="text-white/90 w-2/3 mx-auto text-center mt-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full relative overflow-hidden">
            <img
              className="h-[400px] rounded-md md:h-[550px] w-full object-cover "
              src={slide2}
            />
            <span className="absolute  top-0 w-full h-full bg-black/40 rounded-md"></span>
          </figure>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
            <h1 className="text-[clamp(32px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white/90">
              Let Your Home Be Unique <br /> & Stylist
            </h1>
            <p className="text-white/90 w-2/3 mx-auto text-center mt-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-full relative overflow-hidden">
            <img
              className="h-[400px] rounded-md md:h-[550px] w-full object-cover "
              src={slide3}
            />
            <span className="absolute  top-0 w-full h-full bg-black/40 rounded-md"></span>
          </figure>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
            <h1 className="text-[clamp(32px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white/90">
              A small river named Duden <br /> flows by their
            </h1>
            <p className="text-white/90 w-2/3 mx-auto text-center mt-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </SwiperSlide>
        {/* {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <figure className="w-full relative overflow-hidden">
              <img
                className="h-[400px] rounded-md md:h-[550px] w-full object-cover "
                src={slide3}
              />
              <span className="absolute  top-0 w-full h-full bg-black/40 rounded-md"></span>
            </figure>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(32px,5vw,64px)] font-bold text-center lg:leading-[72px] text-white/90 max-w-4xl">
                {slider.title}
              </h1>
              <p className="text-white/90 w-2/3 mx-auto text-center mt-4">
                {slider.description}
              </p>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};

export default Slider;
