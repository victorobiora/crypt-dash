import styles from "./WalletOverview.module.css";
import WalletDetail from "./WalletDetail";
import { svgObject } from "../../../svg";
import { useSelector } from "react-redux";

const WalletOverview = (props) => {
const inComeDetails = useSelector(state => state.dashBoardDetails)
console.log(inComeDetails)

  const imgLink =
    "https://media.licdn.com/dms/image/D4D03AQGAnJ5L3FOTDA/profile-displayphoto-shrink_800_800/0/1691094321693?e=2147483647&v=beta&t=uutog5Z0cyq-Gk0af_n0fY8EBRxQjOAucHPmBo_Wx1Q";
  return (
    <section className={styles.walletContainer}>
      <div className={styles.greetingContainer}>
        <div className={styles.greeting}>
          <div>
            <img src={imgLink} alt="profile-pic" />
          </div>
          <strong>Good Morning, {inComeDetails.name}!</strong>
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
          text="Goal for the Month"
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
          text="Spending Goal for the month"
          amount={inComeDetails.expenseTarget.toFixed(2)}
        />
      </section>
    </section>
  );
};

export default WalletOverview;
