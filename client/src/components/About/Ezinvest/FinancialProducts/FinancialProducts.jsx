import styles from "./FinancialProducts.module.scss";
import image from "../../../../image/Why-ezinvest-2.jpg";
import { useTranslation } from "react-i18next";

export default function FinacialProducts() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.Text}>
        <h6> {t("Why_X_POWER_TRADE.Financial_Products")}</h6>
        <h3>{t("Why_X_POWER_TRADE.Your_needs_undividual")}</h3>
        <p>
        {t("Why_X_POWER_TRADE.Description_Individual")}
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

      <div className={styles.Image}>
        <img src={image} alt="Not found" />
      </div>
    </div>
  );
}
