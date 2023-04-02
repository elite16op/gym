import React, { useEffect } from "react";
import { motion } from "framer-motion";
import i1 from "../assets/img1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css"

type Props = {};

const OurClasses = (props: Props) => {


  return (
    <div className="mx-auto my-24 w-[85%] px-4">
      <div className="">
        <i className="color block text-3xl font-medium">Our Classes</i>
        <i className="mt-2 block text-[0.92rem]">
          Experience the Perfect Balance of Strength and Flexibility with Our
          Gym and Yoga Sessions
        </i>
      </div>
      <div className="mt-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={(window.innerWidth>1024)? 3 : 1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="">
                <img src={i1} alt="" className="w-[400px] mx-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
                <img src={i2} alt="" className="w-[400px] mx-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
                <img src={i3} alt="" className="w-[400px] mx-auto" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurClasses;
