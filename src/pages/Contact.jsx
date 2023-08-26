import styleContact from "./styles/Contact.css";

import { Form, CardContact } from "../components";

const Contact = () => {
  return (
    <section id="contact" className="section-contact">
      <div>
        <Form />
      </div>
      <div>
        <CardContact />
      </div>
    </section>
  );
};

export default Contact;
