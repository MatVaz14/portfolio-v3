import styleContact from "./styles/Contact.css";

import { Form, CardContact } from "../components";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  return (
    <section id="contact" className="section-contact">
      <div data-aos="fade-right" className="container-contact">
        <Form />
      </div>
      <div className="container-contact" data-aos="fade-left">
        <CardContact />
      </div>
    </section>
  );
};

export default Contact;
