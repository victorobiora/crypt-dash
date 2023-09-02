import classes from "./ActivitySummary.module.css";
import { svgObject } from "../../../../svg";
import LineChart from "../../../charts/LineChart";

const ActivitySummary = (props) => {
  console.log(new Date());
  const activitiesArray = [
    {
      name: "Transfer In",
      date: "May 1, 2022  12:34",
      detail: "Salary",
      amount: 3054.55,
    },
    {
      name: "Transfer Out",
      date: "May 8, 2022  18:23",
      detail: "Dishwasher",
      amount: 359.99,
    },
    {
      name: "Transfer Out",
      date: "May 12, 2022  17:58",
      detail: "Car Fix",
      amount: 1499.99
    },
    {
      name: "Transfer In",
      date: "May 19, 2022  07:00",
      detail: "Web Dev Job",
      amount: 4559.99
    },
    {
      name: "Transfer Out",
      date: "May 21, 2022  22:12",
      detail: "Playstation Bought",
      amount: 999.99
    },
    {
      name: "Transfer Out",
      date: "May 12, 2022  12:34",
      detail: "Car Fix",
      amount: 1499.99
    }
  ];

  return (
    <section className={classes.summary_activity}>
      <div className={classes.activity_line_chart}>
        <div className={classes.activity_heading}>
          <p>Activity Graph</p>
          <h4>$125k</h4>
        </div>
        <div>
          <LineChart/>
        </div>
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
          <ul className={classes.activity_item} key={Math.random() * 10000}>
            <li className={classes.activity_item_icon}>{svgObject.shop}</li>
            <li className={classes.activity_item_description}>
              <h3>{item.name}</h3>
              <p>{item.date}</p>
            </li>
            <li className={classes.activity_item_icon}>
              {item.name === "Transfer Out"
                ? svgObject.redIcon
                : svgObject.greenIcon}
            </li>
            <li className={classes.activity_detail}>{item.detail}</li>
            <li className={classes.activity_item_icon}>{svgObject.coins}</li>
            <li className={classes.activity_item_amount}>
              <strong>$</strong>  {item.amount}
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ActivitySummary;
