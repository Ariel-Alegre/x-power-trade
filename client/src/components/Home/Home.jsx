import NavBar from "../Regulation/Navbar/NavBar";
import Footer from "../Footer/Footer";
import publicity from "../../image/amazone_women.png";
import styles from "./Home.module.scss";
import Video from "./Video/Video";
import OpenAccount from "./OpenAccount/OpenAccount";
import Platforms from "./Platforms/Platforms";
import DataCompany from "./DataCompany/DataCompany";
import Button from "@mui/material/Button";
import support from "../../icons/Support-icon.png";
import tight from "../../icons/tight-icon.png";
import tech from "../../icons/trading-tools-icon-.png";
import security from "../../icons/security-icon-.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <NavBar />
      <div className={styles.homeContainer}>
        <img src={publicity} alt="Not found" className={styles.image} />
        <div className={styles.dataPublicity}>
          <h1>{t("Home.WITH_X")}</h1>
          <h1>{t("Home.YOU")}</h1>
          <p>{t("Home.Description")}</p>
          <a href="/dashboard">
            <Button variant="contained">{t("Home.START")}</Button>
          </a>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardSuperfast}>
            <img src={support} alt="Not found" />
            <strong>{t("Home.Superfast")}</strong>
            <p>{t("Home.Information")}</p>
          </div>
          <div className={styles.cardTight}>
            <img src={tight} alt="Not found" />
            <strong>{t("Home.Tight")}</strong>
            <p>{t("Home.InformationTight")}</p>
          </div>
          <div className={styles.cardTech}>
            <img src={tech} alt="Not found" />
            <strong> {t("Home.Tech")}</strong>
            <p>{t("Home.InformationTech")}</p>
          </div>
          <div className={styles.cardUltimate}>
            <img src={security} alt="Not found" />
            <strong> {t("Home.Ultimate")}</strong>
            <p>{t("Home.InformationUltimate")}</p>
          </div>
        </div>
        <Video/>
        <OpenAccount />
        <Platforms />
        <DataCompany />
      </div>
      <Footer />
    </div>
  );
}
