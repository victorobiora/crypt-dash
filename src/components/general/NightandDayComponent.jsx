import classes from "./NightandDayComponent.module.css";
import { svgObject } from "../../svg";
import { useSelector, useDispatch } from "react-redux";
import { modeAction } from "../../store/cryptStore";

const NightandDayComponent = () => {
  const modeIsDay = useSelector((state) => state.mode.modeIsDay);
  const dispatch = useDispatch();

  const updateMode = () => {
    dispatch(modeAction.updateMode());
  };

  const modeBallClass = modeIsDay
    ? `${classes.mode_switch_ball} ${classes.mode_switch_ball_day}`
    : `${classes.mode_switch_ball} ${classes.mode_switch_ball_night}`;

  const modeSwitchClass = modeIsDay
    ? `${classes.mode_switch} ${classes.mode_switch_border_day}`
    : `${classes.mode_switch} ${classes.mode_switch_border_night}`;

  return (
    <section className={classes.containerI}>
      <section className={classes.containerII}>
        <div className={classes.day}>
          {svgObject.sunlight(modeIsDay ? "#000000" : "#FFFFFF")}
        </div>
        <div className={modeSwitchClass} onClick={updateMode}>
          <div className={modeBallClass}></div>
        </div>
        <div className={classes.night}>
          {svgObject.moon(modeIsDay ? "#000000" : "#FFFFFF")}
        </div>
      </section>
    </section>
  );
};

export default NightandDayComponent;
