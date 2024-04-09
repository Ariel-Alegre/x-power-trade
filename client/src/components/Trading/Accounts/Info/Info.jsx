import styles from './Info.module.scss';
import { useTranslation } from "react-i18next";
import image from '../../../../image/Trading-accounts.jpg';

export default function Info() {
  const [t, i18n] = useTranslation("global");

    return (
        <div className={styles.TextAndImage}>
        <div className={styles.Text}>
          <p>
          {t("TRADING_ACCOUNTS.Info")}
          </p>
          <p>
          {t("TRADING_ACCOUNTS.Info2")}
          </p>


        </div>
        <div className={styles.ImgContainer}>

            <img src={image} alt="Not found" />
        </div>
      </div>
    )
}