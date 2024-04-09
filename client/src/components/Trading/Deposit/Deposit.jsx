import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import Carrusel from "./Carrusel/Carrusel";
import styles from "./Deposit.module.scss";
import Funds from "./Funds/Funds";
import Withdraw from "./Withdraw Funds/Withdraw";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Logos from '../../../Logos/logo-1.png';

export default function Deposit() {
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
          <div className={styles.ImgBG}>
            <div className={styles.TextBg}>
              <h1>{t("Deposit_withdrawal.BGTitle")}</h1>
              <h3>{t("Deposit_withdrawal.BGsubtittle")}</h3>
            </div>
          </div>
          <div>
            <Carrusel />
            <Funds />
            <Withdraw />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
