import ActivitySummary from "./ActivitySummary";
import classes from "./SummaryComponent.module.css";
import { useSelector } from "react-redux";

const SummaryComponent = () => {
  const modeIsDay = useSelector((state) => state.mode.modeIsDay);
  const modeClass = modeIsDay ? `dayBackground` : `nightBackground`


  return (
    <section className={classes.summaryContainer}>
      <div className={classes.summaryHeadings}>
        <div id={modeClass}>
          <h5>ACTIVITY SUMMARY</h5>
        </div>
        <div>
          <h5>SPENDING SUMMARY</h5>
        </div>
        <div>
          <h5>INCOME SUMMARY</h5>
        </div>
      </div>
      <ActivitySummary />
    </section>
  );
};

export default SummaryComponent;
