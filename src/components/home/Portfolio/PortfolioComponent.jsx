import classes from "./PortfolioComponent.module.css";
import FavoritesComponent from "./FavoritesComponent";
import { svgObject } from "../../../svg";

const PortfolioComponent = (props) => {
  return (
    <section className={classes.portfolio_container}>
      <div className={classes.portfolio_heading}>
        <h3>Kanonas Crypto</h3>
        <p>Increase your profit</p>
      </div>
      <div className={classes.portfolio_display}>
        <h4>My Portfolio</h4>
        <h2>$23,578.00</h2>
        <div className={classes.portfolio_buttons}>
          <button>
            <div className={classes.portfolio_svg}>{svgObject.deposit}</div>
            Deposit
          </button>
          <button>
            <div className={classes.portfolio_svg}>{svgObject.withdraw}</div>
            Withdraw
          </button>
        </div>
      </div>
      <FavoritesComponent/>
    </section>
  );
};

export default PortfolioComponent;
