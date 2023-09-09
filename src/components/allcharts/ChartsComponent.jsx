import classes from "./ChartsComponent.module.css";
import ChartItem from "./ChartItem";
import { svgObject } from "../../svg";

const ChartsComponent = ({chartsArrray}) => {

    console.log(chartsArrray)
  return (
    <section className={classes.container}>
        <div className={classes.homeHeading}>
            <div className={classes.homeSvg}>
                {svgObject.homeLink}
            </div>
            <h1>Crypt Dash</h1>
        </div>
      <main>
        <ul className={classes.chartItemHeading1}>
          <li className={classes.chartNumber}><h4>#</h4></li>
          <li className={classes.chartCoin}><h4>Coin</h4></li>
          <li><h4>Price</h4></li>
          <li><h4>24h</h4></li>
          <li><h4>all time high</h4></li>
          <li><h4>market cap</h4></li>
        </ul>
        {chartsArrray.map(chartsArrrayData => (
            <ChartItem item={chartsArrrayData}/>
        ))}
      </main>
    </section>
  );
};

export default ChartsComponent;
