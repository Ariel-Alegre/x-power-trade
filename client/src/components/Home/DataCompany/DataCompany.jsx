import styles from "./Info.module.scss";
import Countries from "../../../image/Countries-icon.png";
import Instruments from "../../../image/Instruments-icon.png";
import Experience from "../../../image/Experience-icon.png";
import { useTranslation } from "react-i18next";

export default function DataCompany() {
const [t, i18n] = useTranslation('global')
  return (
    <div className={styles.InfoContainer}>
      <div className={styles.Info}>
        <img src={Countries} alt="Not found" />
        <p>{t("DataCompany.Countries")}</p>
        <h1>45+</h1>
      </div>

      <div className={styles.Info}>
        <img src={Instruments} alt="Not found" />
        <p>{t("DataCompany.Trading_instruments")}</p>
        <h1>400+</h1>
      </div>
      <div className={styles.Info}>
        <img src={Experience} alt="Not found" />
        <p>{t("DataCompany.Experience")}</p>
        <h1>{t("DataCompany.Years")}</h1>
      </div>
    </div>
  );
}
