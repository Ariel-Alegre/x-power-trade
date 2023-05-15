import Mobile from "../../../image/mobile-trading.png";
import AppStore from '../../../image/appStore.png';
import PlayStore from '../../../image/PlayStore.png';
import styles from "./MobileTrading.module.scss";

export default function MobileTrading() {
  return (
    <div className={styles.mobileTradingContainer}>
      <div className={styles.dataDownload}>
        <img src={Mobile} alt="Not found" />
        <div className={styles.downloadText}>
        <h6>Trade On The Go</h6>
        <h3>Mobile Trading</h3>
        <p>EZInvest Mobile is a fully-featured app for the trader on the go. With all of the charts and news that you’ll need to trade successfully, EZInvest Mobile offers an excellent trading experience and easier access to actively manage your portfolios, even when you are away from a desktop or laptop. The platform is compatible with Apple and Android devices. Enjoy & Experience one of the best mobile trading apps.</p>
        <div className={styles.stores}>
            <img src={AppStore} alt="Not ound" />
            <img src={PlayStore} alt="Not ound" />

        </div>
        </div>
      </div>
    </div>
  );
}
