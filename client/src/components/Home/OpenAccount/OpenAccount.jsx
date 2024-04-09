import styles from "./OpenAccount.module.scss";
import { useTranslation } from "react-i18next";

export default function OpenAccount() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.OpenAccountContainer}>
      <div className={styles.infoAccount}>
        <span>{t("OpenAccount.Open_account_in")}</span>
        <h2>{t("OpenAccount.3_Simple_Steps")}</h2>
      </div>
      <div className={styles.typeRegister}>
        <h2>01</h2>
        <div class="d-flex">
          <div class="vr"></div>
        </div>
        <div className={styles.descriptionRegister}>
          <span>{t("OpenAccount.Register")}</span>
          <p>{t("OpenAccount.Step1")}</p>
        </div>

        <h2>02</h2>
        <div class="d-flex">
          <div class="vr"></div>
        </div>
        <div className={styles.descriptionRegister}>
          <span>{t("OpenAccount.Fund")}</span>
          <p>{t("OpenAccount.Step2")}</p>
        </div>

        <h2>03</h2>
        <div class="d-flex">
          <div class="vr"></div>
        </div>
        <div className={styles.descriptionRegister}>
          <span>{t("OpenAccount.Trade")}</span>
          <p>
          {t("OpenAccount.Step3")}
          </p>
        </div>
      </div>
    </div>
  );
}
