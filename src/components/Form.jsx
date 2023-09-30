import "./styles/Form.css";

import { useRef } from "react";

import emailjs from "@emailjs/browser";

import swal from "sweetalert";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_42chbq4",
        "template_ql4imzp",
        form.current,
        "oib5eC18eKylHegxg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    swal({
      title: "Enviado",
      icon: "success",
      button: "Aceptar",
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <input type="text" name="name" placeholder="Nombre Completo" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="subject" placeholder="Asunto" required />
      <textarea
        name="message"
        rows="7"
        placeholder="Mensaje"
        required
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
