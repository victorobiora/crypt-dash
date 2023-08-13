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
        <WalletDetail svg={svgObject.chartUp} />
        <WalletDetail svg={svgObject.shop} />
        <div className={styles.card_image}>
          <img />
        </div>
        <WalletDetail svg={svgObject.chartDown} />
        <WalletDetail svg={svgObject.spending} />
      </section>
    </section>
  );
};

export default WalletOverview;
