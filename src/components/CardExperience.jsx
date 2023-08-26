import style from "./styles/CardExperience.module.css";

const CardExperience = ({ title, name, description, inicio, final }) => {
  return (
    <article className={style.styleArticle}>
      <div className={style.header}>
        <h2>{title}</h2>
        <div className={style.line} />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <p className={style.time}>
        {inicio} - {final}
      </p>
    </article>
  );
};

export default CardExperience;
