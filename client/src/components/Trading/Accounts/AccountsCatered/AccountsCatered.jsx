import styles from "./AccountsCatered.module.scss";
import Tables from "../Table/Tables";
import { useTranslation } from "react-i18next";

export default function AccountsCatered() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.CateredContainer}>
      <div className={styles.Text}>
        <h6> {t("TRADING_ACCOUNTS.TittleTable")}</h6>
        <h3>{t("TRADING_ACCOUNTS.SubtittleTable")}</h3>
        <p>
          {t("TRADING_ACCOUNTS.Description1")}
          <br />
          {t("TRADING_ACCOUNTS.Description2")}
        </p>
      </div>
      <Tables />
    </div>
  );
}
