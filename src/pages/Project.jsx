import { useState } from "react";

import styleProject from "./styles/Project.css";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { Projects } from "../constants";
import { DetailProject, ProjectView } from "../components";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import 'swiper/css';


const Project = () => {
	const [position, setPosition] = useState(0);

	const handleClick = () => {
    	if (position === Projects.length - 1) return;
    	if (Projects.length) {
      		setPosition(position + 1);
    	}
  	};
  	const handleClickPrev = () => {
   		if (position === 0) return;
    	if (Projects.length) {
      		setPosition(position - 1);
    	}
  	};

	return (
		<section id="project" className="section-project">

			<DetailProject position={position}/>

			<div className="container-btn" data-aos="zoom-in-down">
        	<BsFillArrowLeftCircleFill className={`btn-np ${position === 0 ? "disable" : "enable"}`} onClick={handleClickPrev}/>
        	<BsFillArrowRightCircleFill className={`btn-np ${position === Projects.length  - 1? "disable" : "enable"}`} onClick={handleClick} />
     	</div>

		<div className="container-img-project" data-aos="zoom-in-left">
			{
			<ProjectView image={Projects[position].img}/>
			}
			<div className="pink__gradient"/>
		</div>

		<div className="blue__gradient"/>
		<div className="celeste__gradient" />

		</section>
	)
}

export default Project;