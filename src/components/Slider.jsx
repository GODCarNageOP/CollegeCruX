import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../src/assets/logo.png";
import { Autoplay, EffectFade, EffectCards, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const SLider = () => {
  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      modules={[Autoplay, EffectFade, EffectCards, Keyboard]}
      autoplay={{ delay: 2000 }}
      fadeEffect={true}
      cardsEffect={true}
      keyboard={true}
      breakpoints={{
        375: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
        }
      }}
    >
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={logo}
            alt=""
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={logo}
            alt=""
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={logo}
            alt=""
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={logo}
            alt=""
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={logo}
            alt=""
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={logo}
            alt=""
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img
            src={logo}
            alt=""
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SLider;
