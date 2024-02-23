import classes from "./FavoritesComponent.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LineChart from "../../charts/LineChart";

const FavoritesComponent = (props) => {
  const favCoins = useSelector(state => state.generalDashBoard.favCoins)
  console.log(favCoins)
  
  return (
    <section className={classes.container}>
      <div className={classes.favorites_heading}>
        <h5>Favorites</h5>
      </div>
      <ul className={classes.favorites_container}>
        {favCoins.map((item) => (
          <li className={classes.favorites_item} key={item.symbol}>
            <div>
                <div className={classes.favorites_item_image}>
                    <img alt={item.symbol} src={item.image.small} /> 
                </div>
      
              <div className={classes.favorites_item_name}>
                <h4>{item.name}</h4>
                <h5>{item.symbol}</h5>
              </div>
            </div>

            <div className={classes.favorites_item_chart}>
            <LineChart chartData={item.chartData} colorCheck={false}/>
            </div>
            <div>
              <h4 className={classes.price}>${item.price}</h4>
              <h5 className={classes.percentageDiff}>{item.percentageDifference}%</h5>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FavoritesComponent;
