import styles from "./BgAccounts.module.scss";
import { useTranslation } from "react-i18next";

export default function BgAccounts() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <div className={styles.BgContainer}>
        <div className={styles.TextBg}>
          <h1> {t("TRADING_ACCOUNTS.Tittle")}</h1>
          <h3> {t("TRADING_ACCOUNTS.Subtittle")}</h3>
        </div>
      </div>
    </div>
  );
}
