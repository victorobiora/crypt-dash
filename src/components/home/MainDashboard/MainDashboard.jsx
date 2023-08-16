import WalletOverview from "./WalletOverview";
import SummaryComponent from "./Summary/SummaryComponent";
import styles from "./WalletOverview.module.css";


const MainDashboard = (props) => {
  return (
    <div className={styles.container}>
      <WalletOverview />
      <SummaryComponent/>
    </div>
  );
};

export default MainDashboard;
