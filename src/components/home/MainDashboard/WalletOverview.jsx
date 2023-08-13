import styles from "./WalletOverview.module.css";
import WalletDetail from "./WalletDetail";
import { svgObject } from "../../../svg";

const WalletOverview = (props) => {
  const imgLink =
    "https://media.licdn.com/dms/image/D4D03AQGAnJ5L3FOTDA/profile-displayphoto-shrink_800_800/0/1691094321693?e=2147483647&v=beta&t=uutog5Z0cyq-Gk0af_n0fY8EBRxQjOAucHPmBo_Wx1Q";
  return (
    <section className={styles.walletContainer}>
      <div className={styles.greetingContainer}>
        <div className={styles.greeting}>
          <div>
            <img src={imgLink} alt="profile-pic" />
          </div>
          <strong>Good Morning, Victor!</strong>
        </div>
      </div>
      <section className={styles.overview}>
        <WalletDetail
          svg={svgObject.chartUp}
          bColor="rgb(151, 202, 151)"
          text="Total Earnings"
          amount="12,098.43"
        />
        <WalletDetail
          svg={svgObject.shop}
          bColor="rgb(197, 197, 197)"
          text="Goal for the Month"
          amount="15,000.00"
        />
        <WalletDetail
          svg={svgObject.chartDown}
          bColor="rgb(241, 170, 130)"
          text="Total Spendings"
          amount="10,600.88"
        />
        <WalletDetail
          svg={svgObject.spending}
          bColor="rgb(176, 176, 255)"
          text="Spending Goals"
          amount="12,500.55"
        />
      </section>
    </section>
  );
};

export default WalletOverview;
