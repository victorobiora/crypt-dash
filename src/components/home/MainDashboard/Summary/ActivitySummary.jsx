import classes from "./ActivitySummary.module.css";
import { svgObject } from "../../../../svg";

const ActivitySummary = (props) => {
  console.log(new Date());
  const activitiesArray = [
    {
      name: "Transfer In",
      date: "May 12, 2022  12:34",
      item: "Salary",
      amount: 3054,
    },
    {
      name: "Transfer Out",
      date: "May 12, 2022  12:34",
      item: "dishwasher",
      amount: 360,
    },
    {
      name: " Transfer Out",
      date: "May 12, 2022  12:34",
      item: "Car Fix",
      amount: 1500,
    },
  ];

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
            <div className={classes.addToActivity}>+</div>
          </div>
        </div>
        {activitiesArray.map((item) => (
          <ul className={classes.activity_item}>
            <li className={classes.activity_item_icon}>{svgObject.shop}</li>
            <li className={classes.activity_item_description}>
              <h3>{item.name}</h3>
              <p>{item.date}</p>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ActivitySummary;
