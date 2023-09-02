import { Link } from "react-router-dom";
import classes from "./FavoritesComponent.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LineChart from "../../charts/LineChart";

const FavoritesComponent = (props) => {
  const favCoins = useSelector(state => state.favCoins)
  console.log(favCoins)
  
  return (
    <section className={classes.container}>
      <div className={classes.favorites_heading}>
        <h4>Favorites</h4>
        <Link href="/">See all</Link>
      </div>
      <ul className={classes.favorites_container}>
        {favCoins.map((item) => (
          <li className={classes.favorites_item} key={item.symbol}>
            <div>
                <div className={classes.favorites_item_image}>
                    <img alt={item.symbol} src={item.image.small} /> 
                </div>
      
              <div className={classes.favorites_item_name}>
                <h3>{item.name}</h3>
                <h4>{item.symbol}</h4>
              </div>
            </div>

            <div className={classes.favorites_item_chart}>
            <LineChart chartData={item.chartData}/>
            </div>
            <div>
              <h3 className={classes.price}>${item.price}</h3>
              <h4 className={classes.percentageDiff}>{item.percentageDifference}%</h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FavoritesComponent;
