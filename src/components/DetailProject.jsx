import styleDetailProject from "./styles/DetailProject.css";

import { Projects } from "../constants";

import swal from "sweetalert";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsGithub,
} from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
	return (
		<div className="container-detail-project"  data-aos="fade-right">
			<h1 onClick={handleDetail}>{Projects[position].name}</h1>
			<div className="line-bg"/>
			<h2>{Projects[position].title}</h2>
			<p>{Projects[position].description}</p>
			<div className="container-links">
				<div>
					{
					Projects[position].deploy.length ? (<a href={`${Projects[position].deploy}`} target="_blank"><BiLinkExternal className="style-link"/></a>) : (null)
					}
				</div>
			</div>
		</div>
	)
}

export default DetailProject;