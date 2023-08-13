import WalletOverview from "./WalletOverview";
import styles from "./WalletOverview.module.css";


const MainDashboard = (props) => {
  return (
    <div className={styles.container}>
      <WalletOverview />
    </div>
  );
};

export default MainDashboard;
