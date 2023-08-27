import styleContact from "./styles/Contact.css";

import { Form, CardContact } from "../components";

import divSection from "../assets/divSection.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  return (
    <section id="contact" className="section-contact">
      <img src={divSection} alt='divSection' width="500px" height="20px"/>
      <div data-aos="fade-right" className="container-contact">
        <Form />
      </div>
      <div className="container-contact" data-aos="fade-left">
        <CardContact />
      </div>
      <div className="celeste__gradient"/>
    </section>
  );
};

export default Contact;
