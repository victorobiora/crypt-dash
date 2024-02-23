import classes from "./ActivitySummary.module.css";
import { svgObject } from "../../../../svg";
import { dashActions } from "../../../../store/cryptStore";
import { useDispatch } from "react-redux";

const ActivityItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemHandler = (event) => {
    event.preventDefault();
    dispatch(dashActions.removefromTransferList(item.id));
  };

  return (
    <ul className={classes.activity_item} key={item.id}>
      <li className={classes.activity_item_icon}>{svgObject.shop}</li>
      <li className={classes.activity_item_description}>
        <h4>{item.mode}</h4>
        <p>{item.date}</p>
      </li>
      <li className={classes.activity_item_icon}>
        {item.mode === "Transfer Out" ? svgObject.redIcon : svgObject.greenIcon}
      </li>
      <li className={classes.activity_detail}>{item.detail}</li>
      <li className={classes.activity_item_icon}>{svgObject.coins}</li>
      <li className={classes.activity_item_amount}>
        <strong>$</strong>
        {item.amount.toFixed(2)}
      </li>
      <button className={classes.removeItem_button} onClick={removeItemHandler}>
        <h3>X</h3>
      </button>
    </ul>
  );
};

export default ActivityItem;
