import styleContact from "./styles/CardContact.css";

import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

const CardContact = () => {
	return (
    <div className="container-card-contact">
      <div className="card-contact">
        <BsLinkedin className="icon" />
        <span>Matias Exequiel Vazquez Jaque</span>
        <a
          href="https://www.linkedin.com/in/matiasevazquez/"
          target="_blank"
          rel="noreferrer"
        >
          <div>Ir a LinkedIn</div>
        </a>
      </div>
      <div className="card-contact">
        <AiOutlineMail className="icon" />
        <span>mativazquez-29@outlook.com</span>
        <a
          href="mailto:mativazquez-29@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <div>Enviar Correo</div>
        </a>
      </div>
      <div className="card-contact">
        <BsWhatsapp className="icon" />
        <span>+54 2604-812349</span>
        <a
          href="https://api.whatsapp.com/send?phone=+542604812349"
          target="_blank"
          rel="noreferrer"
        >
          <div>Enviar Mensaje</div>
        </a>
      </div>
    </div>
	)
}

export default CardContact;