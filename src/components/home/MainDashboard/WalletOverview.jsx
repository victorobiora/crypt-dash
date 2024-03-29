import styles from "./WalletOverview.module.css";
import WalletDetail from "./WalletDetail";
import { svgObject } from "../../../svg";
import { useSelector } from "react-redux";

const WalletOverview = (props) => {
  const inComeDetails = useSelector(
    (state) => state.generalDashBoard.dashBoardDetails
  );

  const imgLink = inComeDetails.profilePic;
  return (
    <section className={styles.walletContainer}>
      <div className={styles.greetingContainer}>
        <div className={styles.greeting}>
          <div>
            <img src={imgLink} alt="profile-pic" />
          </div>
          <strong>Good Day, {inComeDetails.name}!</strong>
        </div>
      </div>
      <section className={styles.overview}>
        <WalletDetail
          svg={svgObject.chartUp}
          bColor="rgb(151, 202, 151)"
          text="Monthly Earnings"
          amount={inComeDetails.monthlyIncome.toFixed(2)}
        />
        <WalletDetail
          svg={svgObject.shop}
          bColor="rgb(197, 197, 197)"
          text="Earnings Goal"
          amount={inComeDetails.incomeTarget.toFixed(2)}
        />
        <WalletDetail
          svg={svgObject.chartDown}
          bColor="rgb(241, 170, 130)"
          text="Monthly Expenses"
          amount={inComeDetails.monthlyExpense.toFixed(2)}
        />
        <WalletDetail
          svg={svgObject.spending}
          bColor="rgb(176, 176, 255)"
          text="Expense Goal"
          amount={inComeDetails.expenseTarget.toFixed(2)}
        />
      </section>
    </section>
  );
};

export default WalletOverview;
