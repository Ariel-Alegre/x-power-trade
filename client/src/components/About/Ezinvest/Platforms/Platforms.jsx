import styles from "./Platforms.module.scss";
import image from "../../../../image/Why-ezinvest-3.jpg";
import { useTranslation } from "react-i18next";

export default function Platforms() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.PlatformsContainer}>
      <div className={styles.BoxContainer}>
        <div className={styles.ImgContainer}>
          <img src={image} alt="Not found" />
        </div>
        <div className={styles.Text}>
          <h6> {t("Why_X_POWER_TRADE.Get_More")}</h6>
          <h3> {t("Why_X_POWER_TRADE.Our_Powerful")}</h3>
          <p>
          {t("Why_X_POWER_TRADE.Description_Get_More")}
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
      </div>
    </div>
  );
}
