import { useTranslation } from "react-i18next";
import styles from "./Withdraw.module.scss";

export default function Withdraw() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.WithdrawContainer}>
      <div className={styles.TextContainer}>
        <div className={styles.Title}>
          <h3>{t("Deposit_withdrawal.withdrawTitle")}</h3>
          <p>
          {t("Deposit_withdrawal.withdrawData")}
            <br />
            {t("Deposit_withdrawal.withdrawData1")}
          </p>
          <p>
          {t("Deposit_withdrawal.withdrawData2")}
            <br />
            {t("Deposit_withdrawal.withdrawData3")}
          </p>
        </div>
        <div className={styles.StepsContainer}>
          <div className={styles.Step1}>
            <h3>{t("Deposit_withdrawal.StepsTitle1")}</h3>
            <p>
            {t("Deposit_withdrawal.StepsDescription1")}
            </p>
          </div>
          <div className={styles.Step2}>
            <h3>{t("Deposit_withdrawal.StepsTitle2")}</h3>
            <p>
            {t("Deposit_withdrawal.StepsDescription2")} {" "}<a href="/regulation/legal-information">{t("Deposit_withdrawal.Term")}</a> {" "}
            {t("Deposit_withdrawal.StepsExtra")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
