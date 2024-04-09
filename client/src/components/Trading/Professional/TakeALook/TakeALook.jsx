import styles from "./TakeALook.module.scss";
import Pro2 from "../../../../image/trading-professional-2.jpg";
import TradingPro from "../../../../icons/trading-professional-3.png";
import TradingPro2 from "../../../../icons/trading-professional-4.png";
import TradingPro3 from "../../../../icons/trading-professional-5.png";
import { useTranslation } from "react-i18next";

export default function TakeALook() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.TakeContainer}>
      <div className={styles.BoxContainer}>
        <div className={styles.Text}>
          <h6> {t("Professional_traders.TakeTittle")}</h6>
          <h3>{t("Professional_traders.TakesubTittle")}</h3>
          <p>{t("Professional_traders.TakeDescription")}</p>
        </div>
        <div className={styles.ImgContainer}>
          <img src={Pro2} alt="Not found" />
        </div>

        <div className={styles.Steps}>
          <div className={styles.StepsCards}>
            <img src={TradingPro} alt="Not found" />
            <h6> {t("Professional_traders.Open_Account")}</h6>
          </div>
          <div className={styles.linea}>..............................</div>
          <div className={styles.StepsCards}>
            <img src={TradingPro2} alt="Not found" />
            <h6>
              {t("Professional_traders.Check")}
              <br />
              {t("Professional_traders.Check1")}
            </h6>
          </div>
          <div className={styles.linea}>..............................</div>

          <div className={styles.StepsCardsTrading}>
            <img src={TradingPro3} alt="Not found" />
            <h6> {t("Professional_traders.Start")} {t("Professional_traders.Trading")}</h6>

          </div>
        </div>
      </div>
    </div>
  );
}
