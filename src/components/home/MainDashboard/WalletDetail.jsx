import styles from "./WalletOverview.module.css";


const walletDetail = (props) => {
  return (
    <div className={styles.wallet_detail}>
      <div className={styles.wallet_detail_icon}>
       <div>
        {props.svg}
       </div>
      </div>
      <div className={styles.wallet_detail_item}>
        <p className={styles.detail_item_heading}>Total Earnings</p>
        <h1>$12,056</h1>
      </div>
    </div>
  );
};

export default walletDetail;
