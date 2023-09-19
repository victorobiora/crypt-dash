import classes from "./PortfolioComponent.module.css";
import FavoritesComponent from "./FavoritesComponent";
import { svgObject } from "../../../svg";
import LiveChartsComponent from "./LiveChartsComponent";
import { useSelector } from "react-redux";

const PortfolioComponent = (props) => {
  const userDetails = useSelector(state => state.generalDashBoard.dashBoardDetails)
  const portfolioBalance = useSelector(state => state.generalDashBoard.portfolioBalance)
  return (
    <section className={classes.portfolio_container}>
      <div className={classes.portfolio_heading}>
        <h3>{userDetails.name} Crypto</h3>
        <p>Increase your profit</p>
      </div>
      <div className={classes.portfolio_display}>
        <h4>My Portfolio</h4>
        <h3>$ {portfolioBalance.toFixed(2)}</h3>
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
   //   <LiveChartsComponent/>
export default PortfolioComponent;
