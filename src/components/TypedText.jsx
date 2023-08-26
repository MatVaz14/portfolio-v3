import React from "react";
import Typed from "typed.js";

import styles from "./styles/Typed.module.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const TypedText = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<h3>Desarrollador Fullstack <h3>",
        "<h3>Fullstack Developer <h3>",
      ],
      typeSpeed: 85,
      startDelay: 500,
      backSpeed: 55,
      backDelay: 2500,
      loop: true,
      showCursor: true,
      cursorChar: "<h3>|</h3>",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

	return (
			<div className={styles.typed} data-aos-duration="1500" data-aos="fade-down">
				<h3 ref={el}/>
			</div>
	)
}

export default TypedText;