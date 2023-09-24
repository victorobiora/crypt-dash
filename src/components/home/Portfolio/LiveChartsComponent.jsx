import classes from "./LiveChartsComponent.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LineChart from "../../charts/LineChart";

const LiveChartsComponent = (props) => {
  const liveCoinsArray = useSelector(state => state.generalDashBoard.liveChartCoins);
  
  const displayedLiveCoins = liveCoinsArray.slice(0, 3);
  console.log(displayedLiveCoins)

  return (
    <section className={classes.container}>
      <div className={classes.liveCharts_heading}>
        <h5> Live Charts </h5>
        <Link to="charts">See all</Link>
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
            <div className={classes.live_item_chart}>
              <LineChart chartData={item.prices} colorCheck = {true}/>
            </div>
            <div className={classes.live_item_price}><h4>${item.price.toFixed(2)}</h4></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LiveChartsComponent;
