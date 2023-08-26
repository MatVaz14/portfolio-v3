import style from "./styles/ProjectView.module.css";
import play from "../assets/play.png";

const ProjectView = ({ image }) => {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <img
          src={image}
          alt="imageProject"
          width="430"
          height="300"
          className={style.one}
        />
        <img
          src={image}
          alt="imageProject"
          width="430"
          height="300"
          className={style.two}
        />
        <img
          src={image}
          alt="imageProject"
          width="430"
          height="300"
          className={style.three}
        />
      </div>
    </div>
  );
};

export default ProjectView;
