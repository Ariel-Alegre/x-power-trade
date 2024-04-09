import styles from "./StartTrading.module.scss";
import Support from "../../../../icons/Support-icon.png";
import Tight from "../../../../icons/tight-icon.png";
import Tech from "../../../../icons/trading-tools-icon-.png";
import Ultimate from "../../../../icons/security-icon-.png";
import Invest from "../../../../icons/why-ezinvest-piggy.png";
import { useTranslation } from "react-i18next";

export default function StartTrading() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.StartTradingContainer}>
      <div className={styles.BoxContainer}>
        <h6> {t("Why_X_POWER_TRADE.Start_Trading")}</h6>
        <h3>{t("Why_X_POWER_TRADE.Profit")}</h3>
        <div className={styles.Cards}>
          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img src={Support} alt="Not found" />
            </div>
            <h5>{t("Why_X_POWER_TRADE.Superfast")} </h5>
            <p>{t("Why_X_POWER_TRADE.Description_superfast")}</p>
          </div>
          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img src={Tight} alt="Not found" />
            </div>
            <h5>{t("Why_X_POWER_TRADE.TIGHT_SPREADS")} </h5>
            <p>{t("Why_X_POWER_TRADE.Description_TIGHT")}</p>
          </div>
          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img src={Tech} alt="Not found" />
            </div>
            <h5> {t("Why_X_POWER_TRADE.Tech")}</h5>
            <p>{t("Why_X_POWER_TRADE.Description_Tech")}</p>
          </div>
          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img src={Ultimate} alt="Not found" />
            </div>
            <h5>{t("Why_X_POWER_TRADE.Ultimate")} </h5>
            <p>{t("Why_X_POWER_TRADE.Description_Ultimate")}</p>
          </div>
          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img src={Invest} alt="Not found" />
            </div>
            <h5> {t("Why_X_POWER_TRADE.Full_control")}</h5>

            <p>
            {t("Why_X_POWER_TRADE.Description_Full_control")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
