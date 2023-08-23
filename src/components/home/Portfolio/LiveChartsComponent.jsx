import classes from "./LiveChartsComponent.module.css";
import { Link } from "react-router-dom";

const LiveChartsComponent = (props) => {
  const liveArray = [
    {
      name: "Bitcoin",
      shortName: "BTC",
      picture: "https://s2.coinmarketcap.com/static/img/coins/200x200/1.png",
      price: 25750,
      percentageDiff: 13,
    },
    {
      name: "Ethereum",
      shortName: "ETH",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/200px-Ethereum-icon-purple.svg.png",
      price: 1500,
      percentageDiff: 13,
    },
    {
      name: "Solana",
      shortName: "SOL",
      picture:
        "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/VNKJKO74VFFNTBJF7BP4N4YHWI.png",
      price: 20,
      percentageDiff: -33,
    },
  ];

  return (
    <section className={classes.container}>
      <div className={classes.liveCharts_heading}>
        <h4> Live Charts </h4>
        <Link href="/">See all</Link>
      </div>
      <ul className={classes.liveCharts_container}>
        {liveArray.map((item) => (
          <li className={classes.live_item} key={item.shortName}>
            <div className={classes.live_item_name}>
              <div className={classes.live_item_picture}>
                <img src={item.picture} alt={item.shortName} />
              </div>
              <div>
                <h4>{item.name}</h4>
                <h5>{item.shortName}</h5>
              </div>
            </div>
            <div className={classes.live_item_chart}></div>
            <div className={classes.live_item_price}><h4>${item.price}</h4></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LiveChartsComponent;
