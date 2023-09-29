import styleAbout from "./styles/About.css";
import { Link } from "react-scroll";

import { AboutMe } from "../constants";
import divSection from "../assets/divSection3.png";
import CV from "../MatiasVazquez-CV2023.pdf";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <section id="about" className="section-about bg-primary">
      <img
        src={divSection}
        alt="div"
        width="50%"
        height="30px"
        className="style-div-img"
      />
      <img
        src={AboutMe.image}
        alt="AboutMe"
        width="400px"
        height="400px"
        className="style-img-about"
      />
      <div className="container-text-about" data-aos="fade-left">
        <h1>
          {AboutMe.textTitle} <span>{AboutMe.emoji}</span>
        </h1>
        <p>{AboutMe.text}</p>
        <div className="container-btn-about">
          <Link to="contact">
            <button>Contactar</button>
          </Link>
          <a href={CV} download="Matias Vazquez - CV.pdf">
            <button>Descargar CV</button>
          </a>
        </div>
        <div className="blue__gradient_about" />
      </div>
    </section>
  );
};

export default About;
