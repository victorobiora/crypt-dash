import WalletOverview from "./WalletOverview";
import SummaryComponent from "./Summary/SummaryComponent";
import styles from "./WalletOverview.module.css";


const MainDashboard = (props) => {
  return (
    <section className={styles.container}>
      <WalletOverview />
      <SummaryComponent/>
    </section>
  );
};

export default MainDashboard;
