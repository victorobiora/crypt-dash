import classes from "./ActivitySummary.module.css";

const ActivitySummary = (props) => {
  return (
    <section className={classes.summary_activity}>
      <div className={classes.activity_line_chart}>
        <div className={classes.activity_heading}>
            <p>Activity Graph</p>
            <h4>$125k</h4>
        </div>
        <div>

        </div>
      </div>
      <div className={classes.activity_history}></div>
      <div className={classes.activity_search_Date}></div>
    </section>
  );
};

export default ActivitySummary;
