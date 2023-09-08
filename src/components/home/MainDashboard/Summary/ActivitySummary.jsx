import classes from "./ActivitySummary.module.css";
import ActivityItem from "./ActivityItem";
import { useSelector } from "react-redux";
import AddSummary from "./AddSummary";
import { useState } from "react";
import BarChart from "../../../charts/BarChart";

const ActivitySummary = (props) => {
  const [showForm, setShowForm] = useState(false);
  const transfersList = useSelector((state) => state.transfers);
  const portfolioAmount = useSelector((state) => state.portfolioBalance);

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
          <h4>$ {portfolioAmount.toFixed(2)}</h4>
        </div>
        <div className={classes.barChart}>
          <BarChart />
        </div>
      </div>
      <div className={classes.activity_history}>
        <div className={classes.activity_history_head}>
          <div className={classes.history_heading1}>
            <h4>History</h4>
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
        <div className={classes.activity_history_body}>
          {transfersList.map((item) => (
            <ActivityItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySummary;
