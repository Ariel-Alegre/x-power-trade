import NavBar from "../../Regulation/Navbar/NavBar";
import Footer from "../../Footer/Footer";
import DataCompany from "../../Home/DataCompany/DataCompany";
import styles from "./AboutUs.module.scss";
import image from "../../../image/image-video.jpg";
import BGimage from "./BGimage/BGimage";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Logos from '../../../Logos/logo-1.png';

export default function AboutUs() {
  const [t, i18n] = useTranslation("global");
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulación de una tarea asíncrona
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado a "false" después de cierto tiempo
    }, 2000); // Esperar 2 segundos antes de cambiar el estado
  }, []);
  return (
    <div>
        {isLoading ? (
          <div className={styles.loading_container}>
          <img src={Logos} alt="Cargando..." />
          <div className={styles.loading_overlay}></div>
        </div>
      ) : (
        <div>

      <NavBar />
      <BGimage />

      <div className={styles.imgContainer}>
        <img src={image} alt="Not found" />
      </div>
      <div className={styles.Text}>
        <p>{t("About_us.Description1")}</p>
        <br />
        <p>{t("About_us.Descriptio2")}</p>
        <div className={styles.btnContainer}>
          <a href="/dashboard">
            <button> {t("About_us.Button")}</button>
          </a>
        </div>
      </div>
      <div className={styles.TextSecond}>
        <div className={styles.Philosophy}>
          <h6>{t("About_us.Title1")}</h6>
          <h3>{t("About_us.Title2")}</h3>
          <p>{t("About_us.Information")}</p>
        </div>

        <div className={styles.History}>
          <h3> {t("About_us.Title3")}</h3>
          <p>{t("About_us.Information1")}</p>
        </div>
      </div>
      <DataCompany />
      <Footer />
      </div>
      )};
    </div>
  );
}
