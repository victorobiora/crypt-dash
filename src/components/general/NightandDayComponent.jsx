import classes from "./NightandDayComponent.module.css";
import { svgObject } from "../../svg";
import { useState } from "react";

const NightandDayComponent = (props) => {
  const [modeIsDay, setMode] = useState(true);

  const updateMode = () => {
    setMode((prevState) => !prevState);
  };

  const modeBallClass = modeIsDay
    ? `${classes.mode_switch_ball} ${classes.mode_switch_ball_day}`
    : `${classes.mode_switch_ball} ${classes.mode_switch_ball_night}`;

  return (
    <section className={classes.containerI}>
      <section className={classes.containerII}>
        <div className={classes.day}>{svgObject.sunlight}</div>
        <div className={classes.mode_switch} onClick={updateMode}>
          <div className={modeBallClass}></div>
        </div>
        <div className={classes.night}>{svgObject.moon}</div>
      </section>
    </section>
  );
};

export default NightandDayComponent;
