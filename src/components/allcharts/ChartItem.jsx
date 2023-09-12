import classes from "./ChartsComponent.module.css";

const ChartItem = ({item}) => {
  return (
    <ul className={classes.chartItemHeading2}>
      <li className={classes.chartNumber}>{item.market_cap_rank}</li>
      <li className={classes.chartCoin}>
        <div className={classes.coin_name}>
          <div className={classes.coin_picture}>
            <img src={item.image} alt={item.symbol} />
          </div>
          <div className={classes.coin_name_and_symbol}>
            <h4>{item.name}</h4>
            <h5>{item.symbol.toUpperCase()}</h5>
          </div>
        </div>
      </li>
      <li>$ {item.current_price}</li>
      <li>{item.price_change_percentage_24h}%</li>
      <li>$ {item.ath}</li>
      <li>${item.market_cap}</li>
    </ul>
  );
};

export default ChartItem;