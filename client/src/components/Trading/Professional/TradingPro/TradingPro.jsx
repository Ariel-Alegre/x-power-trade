import styles from "./TradingPro.module.scss";
import Pro from "../../../../image/trading-professional-1-pkgpz364nr45uc25mg8424n91ksaful77qfyb6txc0.jpg";
import { useTranslation } from "react-i18next";

export default function TradingPro() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <div className={styles.TextImage}>
        <div className={styles.Text}>
          <h3>{t("Professional_traders.TittlePro")}</h3>
          <p>
          {t("Professional_traders.Description1")}
          </p>
          <p>
          {t("Professional_traders.Description2")}

          </p>
        </div>
        <div className={styles.ImgContainer}>
          <img src={Pro} alt="Not Found" />
        </div>
      </div>
      <div className={styles.BtnContainer}>
        <a href="/dashboard">
          <button>
            <span>
            {t("Professional_traders.Button")}

            </span>
            </button>
        </a>
      </div>
    </div>
  );
}
