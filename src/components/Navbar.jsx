import { useState } from "react";

import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../assets/LogoMV.png";
import styleNav from "./styles/Navbar.css";

const Navbar = () => {
	const [active, setActive] = useState(false);

	return (
		<nav className="bg-nav">
			<div>
				<Link to="contact" spy={true} smoot={true} className="style-linkImg-nav"><img src={logo} alt="logoMv" width="70px" height="70px"/></Link>
			</div>
			<div className="container-links">
				<Link to="home" spy={true} smoot={true} className="style-link-nav"><span>Inicio</span></Link>
				<Link to="about" spy={true} smoot={true} className="style-link-nav"><span>Sobre Mi</span></Link>
				<Link to="skill" spy={true} smoot={true} className="style-link-nav"><span>Habilidades</span></Link>
				<Link to="project" spy={true} smoot={true} className="style-link-nav"><span>Proyectos</span></Link>
				<Link to="contact" spy={true} smoot={true} className="style-link-nav"><span>Contacto</span></Link>
			</div>
			<div className="container-links-menu">
				{
					!active ? <GiHamburgerMenu className="style-button-menu" onClick={() => setActive(true)}/> : <AiOutlineClose className="style-button-menu" onClick={() => setActive(false)}/>
				}
				<div className={`${active ? 'menu' : 'no-menu'}`}>
				<Link  onClick={() => setActive(false)} to="home" spy={true} smoot={true} className="style-link-nav-menu"><span>Inicio</span></Link>
				<Link  onClick={() => setActive(false)} to="about" spy={true} smoot={true} className="style-link-nav-menu"><span>Sobre Mi</span></Link>
				<Link  onClick={() => setActive(false)} to="skill" spy={true} smoot={true} className="style-link-nav-menu"><span>Habilidades</span></Link>
				<Link  onClick={() => setActive(false)} to="project" spy={true} smoot={true} className="style-link-nav-menu"><span>Proyectos</span></Link>
				<Link  onClick={() => setActive(false)} to="contact" spy={true} smoot={true} className="style-link-nav-menu"><span>Contacto</span></Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;