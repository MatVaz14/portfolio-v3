import { useState } from "react";

import styleProject from "./styles/Project.css";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { Projects } from "../constants";
import { DetailProject, ProjectView } from "../components";

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

			<div className="container-btn">
        	<BsFillArrowLeftCircleFill className={`btn-np ${position === 0 ? "disable" : "enable"}`} onClick={handleClickPrev}/>
        	<BsFillArrowRightCircleFill className={`btn-np ${position === Projects.length  - 1? "disable" : "enable"}`} onClick={handleClick} />
     	</div>

		<div className="container-img-project">
			{
			<ProjectView image={Projects[position].img}/>
			}
		</div>

		</section>
	)
}

export default Project;