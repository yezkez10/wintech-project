// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "./Carousel.css";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = ({ data }) => {
  console.log("this is data" + data[0]);
  return (
    // <div className="swiper">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      centeredSlides={true}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide className="swiper" key={index}>
          <img className="image" src={item.src} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
    // </div>
  );
};

export default Carousel;
