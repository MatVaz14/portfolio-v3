import style from "./styles/CircleBackground.module.css";

const CircleBackground = () => {
	return (
    <div>
      <div
        className={style.circleBg}
      />
      <div
        className={style.circleBgWhite}
      />
    </div>
	)
}

export default CircleBackground;