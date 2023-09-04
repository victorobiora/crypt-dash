import classes from "./ActivitySummary.module.css";
import { svgObject } from "../../../../svg";
import { useSelector } from "react-redux";

const ActivitySummary = (props) => {

  const transfersList = useSelector(state => state.transfers);

  const removeItemHandler = event => {
    event.preventDefault()
  }

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
        {transfersList.map((item) => (
          <ul className={classes.activity_item} key={Math.random() * 10000}>
            <li className={classes.activity_item_icon}>{svgObject.shop}</li>
            <li className={classes.activity_item_description}>
              <h3>{item.mode}</h3>
              <p>{item.date}</p>
            </li>
            <li className={classes.activity_item_icon}>
              {item.mode === "Transfer Out"
                ? svgObject.redIcon
                : svgObject.greenIcon}
            </li>
            <li className={classes.activity_detail}>{item.detail}</li>
            <li className={classes.activity_item_icon}>{svgObject.coins}</li>
            <li className={classes.activity_item_amount}>
              <strong>$</strong>  {item.amount}
            </li>
            <button className={classes.removeItem_button} onClick={removeItemHandler}><h3>X</h3></button> 
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ActivitySummary;
