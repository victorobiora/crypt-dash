import styles from "./WalletOverview.module.css";


const walletDetail = (props) => {
  return (
    <div className={styles.wallet_detail}>
      <div className={styles.wallet_detail_icon} style={{backgroundColor: props.bColor}}>
       <div>
        {props.svg}
       </div>
      </div>
      <div className={styles.wallet_detail_item}>
        <p className={styles.detail_item_heading}>{props.text}</p>
        <h3>${props.amount}</h3>
      </div>
    </div>
  );
};

export default walletDetail;
