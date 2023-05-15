import styles from './Check.module.scss';
import { useTranslation } from "react-i18next";


export default function Check() {
  const [t, i18n] = useTranslation("global");

    return (
        <div className={styles.CheckContainer}>
            <h3>{t("Professional_traders.CheckTittle")}</h3>
            <p>
            {t("Professional_traders.CheckSubTittle")}
            </p>

            <div className={styles.Bg}>
                <div className={styles.Text}>
                {t("Professional_traders.Items1")}

                </div>
            </div>
            <div className={styles.Bg}>
                <div className={styles.Text}>
                {t("Professional_traders.Items2")}

                </div>
            </div>
            <div className={styles.Bg}>
                <div className={styles.Text}>
                {t("Professional_traders.Items3")}

                </div>
            </div>
        </div>
    )
}