import { ExperienceData } from "../constants";
import CardExperience from "./CardExperience.jsx";
import styleExperience from "./styles/Experience.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import 'swiper/css';



const Experience = () => {
	return (
		<div>
		<div className="container-xl">
      <Swiper
          slidesPerView={2.5}
          spaceBetween={50}
          pagination={{ clickable: true }}
                  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {ExperienceData?.map((data) => (
            <SwiperSlide>
              <CardExperience
                title={data.title}
                name={data.name}
                description={data.description}
                inicio={data.inicio}
                final={data.final}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    <div className="container-sm">
      <Swiper
          slidesPerView={1}
          spaceBetween={-15}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {ExperienceData?.map((data) => (
            <SwiperSlide>
              <CardExperience
                title={data.title}
                name={data.name}
                description={data.description}
                inicio={data.inicio}
                final={data.final}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
		</div>
	)
}

export default Experience;