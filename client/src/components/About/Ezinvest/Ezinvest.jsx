import Button from "../../Regulation/Button/Button";
import NavBar from "../../Regulation/Navbar/NavBar";
import styles from "./Ezinvest.module.scss";
import Broker from "../../../image/Why-ezinvest-brokers.jpg";
import Footer from "../../Regulation/../Footer/Footer";
import StartTrading from "./StartTrading/StartTrading";
import FinancialProducts from "./FinancialProducts/FinancialProducts";
import Platforms from "../Ezinvest/Platforms/Platforms";
import Security from "./Security/Security";
import { useTranslation } from "react-i18next";

export default function Ezinvest() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <NavBar />
      <div>
        <div className={styles.EzinvestContainer}>
          <div className={styles.TitlesEzivenvest}>
            <h1>{t("Why_X_POWER_TRADE.Title")}</h1>
            <h2>{t("Why_X_POWER_TRADE.Subtitle")}</h2>
          </div>
        </div>
        <div className={styles.TextImage}>
          <div className={styles.Text}>
            <h6>{t("Why_X_POWER_TRADE.Choosing")}</h6>
            <h3>{t("Why_X_POWER_TRADE.Becoming")}</h3>
            <p>{t("Why_X_POWER_TRADE.Description")}</p>
          </div>
          <div className={styles.ImgContainer}>
            <img src={Broker} alt="Not Found" />
          </div>
        </div>
        <div className={styles.BtnContainer}>
          <a href="/dashboard">
            <button>
               <span>
               {t("Why_X_POWER_TRADE.Button")}
               </span>
               </button>
          </a>
        </div>

        <StartTrading />
        <FinancialProducts />
        <Platforms />
        <Security />
      </div>
      <Footer />
    </div>
  );
}
