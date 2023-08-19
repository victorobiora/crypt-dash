import classes from './PortfolioComponent.module.css'
import { svgObject } from '../../../svg';

const PortfolioComponent = props => {
  return <section className={classes.portfolio_container}> 
  <div className={classes.portfolio_heading}>
    <h3>Kanonas Crypto</h3>
    <p>Increase your profit</p>
  </div>
  <div className={classes.portfolio_display}>
    <h4>My  Portfolio</h4>
    <h2>$23,050.00</h2>
    <div className={classes.portfolio_buttons}>
        <button>
            <div>
        
            </div>
            Deposit
        </button>
        <button>
        <div>
               
            </div>
          Withdraw
        </button>
    </div>
  </div>
  </section>
};


export default PortfolioComponent;