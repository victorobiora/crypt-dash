import classes from "./LiveChartsComponent.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LiveChartsComponent = (props) => {

  const liveCoinsArray = useSelector(state => state.liveChartCoins);
  
  const displayedLiveCoins = liveCoinsArray.slice(0, 3)

  return (
    <section className={classes.container}>
      <div className={classes.liveCharts_heading}>
        <h4> Live Charts </h4>
        <Link href="/">See all</Link>
      </div>
      <ul className={classes.liveCharts_container}>
        {displayedLiveCoins.map((item) => (
          <li className={classes.live_item} key={item.symbol}>
            <div className={classes.live_item_name}>
              <div className={classes.live_item_picture}>
                <img src={item.image} alt={item.symbol} />
              </div>
              <div>
                <h4>{item.name}</h4>
                <h5>{item.symbol.toUpperCase()}</h5>
              </div>
            </div>
            <div className={classes.live_item_chart}></div>
            <div className={classes.live_item_price}><h4>${item.price.toFixed(2)}</h4></div>
          </li>
        ))}
      </ul>
    </section>
  );
};
//symbol, name, image, price
export default LiveChartsComponent;
