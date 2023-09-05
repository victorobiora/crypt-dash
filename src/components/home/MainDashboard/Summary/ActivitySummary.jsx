import classes from "./ActivitySummary.module.css";
import ActivityItem from "./ActivityItem";
import { useSelector } from "react-redux";
import AddSummary from "./AddSummary";
import { useState } from "react";

const ActivitySummary = (props) => {
  const [showForm, setShowForm] = useState(false);
  const transfersList = useSelector((state) => state.transfers);

  const showFormDisplay = () => {
    setShowForm(true);
  };
  const toggleFormDisplay = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <section className={classes.summary_activity}>
      <div className={classes.activity_line_chart}>
        <div className={classes.activity_heading}>
          <p>Activity Graph</p>
          <h4>$125k</h4>
        </div>
        <div></div>
      </div>
      <div className={classes.activity_history}>
        <div className={classes.activity_history_head}>
          <div className={classes.history_heading1}>
            <h3>History</h3>
          </div>
          <div className={classes.history_heading2}>
            <form>
              <input type="date" />
            </form>
            <div className={classes.addToActivity} onClick={showFormDisplay}>
              +
            </div>
          </div>
          {showForm && <AddSummary setForm={toggleFormDisplay} />}
        </div>
        {transfersList.map((item) => (
          <ActivityItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ActivitySummary;
