import styleDetailProject from "./styles/DetailProject.css";

import { Projects } from "../constants";

import swal from "sweetalert";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsGithub,
} from "react-icons/bs";
import { AiOutlinePlayCircle,AiOutlineClose } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { CiMinimize1 } from "react-icons/ci";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import ViewVideo from "./ViewVideo.jsx";

import { useState } from "react";

const DetailProject = ({position}) => {

	const handleDetail = () => {
                swal({
                  title: Projects[position].name,
                  icon: "info",
                  text: Projects[position].more,
                  button: "Cerrar",
                  className: "swal-modal",
                })
	}


	const [active, setActive] = useState(false);

	return (
		<div className="container-detail-project"  data-aos="fade-right">

			<div className="header-detail">
				<h1 onClick={handleDetail}>{Projects[position].name}</h1>
				{
					Projects[position].url.length > 0 ? <AiOutlinePlayCircle onClick={() => setActive(true)} className="play-video"/> : null
				}
				
			</div>

			<div className={active ===true && Projects[position].url.length > 0 ? "verVideo" : 'noVideo'}>
					<div className="container-relative">
						<CiMinimize1 className="exit" onClick={() => setActive(false)}/>
						<ViewVideo url={Projects[position].url}/>
					</div>
			</div>

			<div className="line-bg"/>
			<h2>{Projects[position].title}</h2>
			<p>{Projects[position].description}</p>
			<div className="container-links">
					<div className="container-link">
					{
						(Projects[position].githubFull.length === 0 && Projects[position].githubFront.length > 0 ? (
						<div>
							<span>GitHub (Front)</span>
							<a href={`${Projects[position].githubFront}`} target="_blank" className="active-click"><BsGithub className="style-link"/></a>
						</div>) : (null)
					)
					}
					{
						(Projects[position].githubFull.length === 0 && Projects[position].githubBack.length > 0 ? (
						<div>
							<span>GitHub (Back)</span>
							<a href={`${Projects[position].githubBack}`} target="_blank" className="active-click"><BsGithub className="style-link"/></a>
						</div>) : (null)
					)
					}
					{
					(Projects[position].deploy.length ? (
						<div>
						<span>Deploy </span>
						<a href={`${Projects[position].deploy}`} target="_blank" className="active-click"><BiLinkExternal className="style-link"/></a>
						</div>) : (null))
					}
					{
					(Projects[position].githubFull.length > 0 && Projects[position].githubFront.length === 0 && Projects[position].githubBack.length === 0 ? (
						<div>
							<span>GitHub</span>
							<a href={`${Projects[position].githubFull}`} target="_blank" className="active-click"><BsGithub className="style-link"/></a>
						</div>) : (null)
					)
					}
					<div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailProject;