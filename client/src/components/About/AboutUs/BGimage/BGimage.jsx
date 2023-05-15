import styles from './BGimage.module.scss';
import { useTranslation } from "react-i18next";

export default function BGimage() {

  const [t, i18n] = useTranslation("global");

    return (
        <div className={styles.AboutUsContainer}>
        <div className={styles.TitlesAbout}>
          <h1>{t("About_us.Title")}</h1>
          <h2>{t("About_us.SubTitle")}</h2>
        </div>
      </div>
    )
}