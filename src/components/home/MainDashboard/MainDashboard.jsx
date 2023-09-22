import WalletOverview from "./WalletOverview";
import SummaryComponent from "./Summary/SummaryComponent";
import styles from "./WalletOverview.module.css";
import NightandDayComponent from "../../general/NightandDayComponent";


const MainDashboard = (props) => {
  return (
    <section className={styles.container}>
      <NightandDayComponent/>
      <WalletOverview />
      <SummaryComponent/>
    </section>
  );
};

export default MainDashboard;
