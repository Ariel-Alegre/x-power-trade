import styles from "./Security.module.scss";
import image from "../../../../image/Why-ezinvest-4.jpg";
import { useTranslation } from "react-i18next";

export default function Security() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.PlatformsContainer}>
      <div className={styles.BoxContainer}>
        <div className={styles.Text}>
          <h6> {t("Why_X_POWER_TRADE.New_level")}</h6>
          <h3>{t("Why_X_POWER_TRADE.Security")}</h3>
          <p>
          {t("Why_X_POWER_TRADE.Description_Secrity")}
               </p>
          <div className={styles.BtnContainer}>
            <a href="/dashboard">
              <button>
                <span>

                {t("Why_X_POWER_TRADE.Button")}

                </span>
                </button>
            </a>
          </div>
        </div>
        <div className={styles.ImgContainer}>
          <img src={image} alt="Not found" />
        </div>
      </div>
    </div>
  );
}
