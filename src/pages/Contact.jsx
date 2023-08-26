import styleContact from "./styles/Contact.css";

import { Form, CardContact } from "../components";

const Contact = () => {
  return (
    <section id="contact" className="section-contact">
      <div className="container-contact">
        <Form />
      </div>
      <div className="container-contact">
        <CardContact />
      </div>
    </section>
  );
};

export default Contact;
