import { Experience } from "../components";
import styleExperience from "./styles/Skill.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skill = () => {
	return (
		<section id="skill" className="section-skill">
			<div data-aos="zoom-in">
				<Experience />
			</div>
		</section>
	)
}

export default Skill;