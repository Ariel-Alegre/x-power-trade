import styles from "./BGImage.module.scss";
import { useTranslation } from "react-i18next";

export default function BgImage() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.BgImageContainer}>
      <div className={styles.TextBg}>
        <h1> {t("Professional_traders.BGtittle")}</h1>
        <h3>{t("Professional_traders.BGsubtittle")}</h3>
      </div>
    </div>
  );
}
