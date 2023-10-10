import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import { Link } from "react-scroll";

import { TypedText, CircleBackground } from "../components";

import styleHome from "./styles/Home.css";
import logoMV from "../assets/LogoMV.png";
import CV from "../MatiasVazquez-CV2023.pdf";
import circle from "../assets/circle.png";
import circleMobile from "../assets/circleMobile.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <section id="home" className="section-home">
      <div className="blue__gradient" />
      <img
        loading="lazy"
        src={circle}
        alt="bg-circle"
        width="300px"
        height="100%"
        className="circle"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
      <img
        loading="lazy"
        src={circleMobile}
        alt="bg-circle"
        width="100%"
        height="40%"
        className="circleMobile"
      />
      <div className="bg-text-home">
        <h1 data-aos-duration="1500" data-aos="fade-up">
          Matias Vazquez
        </h1>
        <TypedText />
        <div className="container-contact">
          <Link to="contact">
            <button>Contactar</button>
          </Link>
          <a href={CV} download="Matias Vazquez - CV.pdf">
            <button>Descargar CV</button>
          </a>
        </div>
      </div>
      <div>
        <Link to="contact">
          <img
            src={logoMV}
            alt="logoMv"
            width="350px"
            height="350px"
            className="style-img-logo"
          />
        </Link>
      </div>
      <div className="social">
        <a
          data-aos="flip-up"
          data-aos-anchor-placement="top-bottom"
          href="https://www.linkedin.com/in/matiasevazquez/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="style-social" />
        </a>
        <a
          data-aos="flip-up"
          data-aos-anchor-placement="top-bottom"
          href="https://github.com/MatVaz14"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="style-social-2" />
        </a>
      </div>
    </section>
  );
};

export default Home;
