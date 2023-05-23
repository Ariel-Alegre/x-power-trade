import styles from "./Funds.module.scss";
import VisaAndMasterCard from "../../../../image/visa-and-mastercard.png";
import Wire from "../../../../image/wire.png";
import Skrill from "../../../../image/skrill-1.png";
import Other from "../../../../image/other-payment-methods.png";
import { useTranslation } from "react-i18next";

export default function Funds() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.FundsContainer}>
      <div className={styles.TextContainer}>
        <h3>{t("Deposit_withdrawal.FundsTittle")}</h3>
        <p>{t("Deposit_withdrawal.DataFunds")}</p>
      </div>
      <div className={styles.PaymentContainer}>
        <div className={styles.ImgContainer}>
          <img src={VisaAndMasterCard} alt="Not found" />
        </div>
        <div className={styles.PaymentText}>
          <h3> {t("Deposit_withdrawal.PaymentTittle1")}</h3>
          <p> {t("Deposit_withdrawal.DataPayment1")}.</p>
          <div className={styles.BtnContainer}>
            <button>
              <span>{t("Deposit_withdrawal.Button")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
