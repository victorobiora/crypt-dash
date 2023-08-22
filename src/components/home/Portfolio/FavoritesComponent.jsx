import { Link } from "react-router-dom";
import classes from "./FavoritesComponent.module.css";

const FavoritesComponent = (props) => {
  const favArray = [
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
  ];

  return (
    <section>
      <div>
        <h4>Favorites</h4>
        <Link href="/">See all</Link>
      </div>
      <ul className={classes.favorites_container}>
        {favArray.map((item) => (
          <li className={classes.favorites_item}>
            <div>
              <img alt={item.shortName} src={item.picture} />
              <div className={classes.favorites_item_name}>
                <h3>{item.shortName}</h3>
                <h4>{item.name}</h4>
              </div>
            </div>

            <div className={classes.favorites_item_chart}></div>
            <div>
              <h3 className={classes.price}>${item.price}</h3>
              <h4 className={classes.percentageDiff}>{item.percentageDiff}</h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FavoritesComponent;
