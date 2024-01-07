import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../Card/index.js";
import "./carousel.css";

export default ({ navId, data }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={170}
        navigation={{
          nextEl: `.arrow-right-${navId}`,
          prevEl: `.arrow-left-${navId}`,
        }}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide className="swiperSlide" key={cardData.id}>
            <Card
              imgSrc={cardData.image}
              label={cardData.title}
              followerCount={cardData.follows}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`arrow-left-${navId} arrow-left arrow`}>
        <img src="Group 3741.png" />
      </div>
      <div className={`arrow-right-${navId} arrow-right arrow`}>
        <img src="Group 3740.png" />
      </div>
    </div>
  );
};
