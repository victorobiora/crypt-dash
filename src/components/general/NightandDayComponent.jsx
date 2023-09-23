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
          {svgObject.sunlight(
            modeIsDay ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.9)"
          )}
        </div>
        <div className={modeSwitchClass} onClick={updateMode}>
          <div className={modeBallClass}></div>
        </div>
        <div className={classes.night}>
          {svgObject.moon(
            modeIsDay ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.9)"
          )}
        </div>
      </section>
    </section>
  );
};

export default NightandDayComponent;
