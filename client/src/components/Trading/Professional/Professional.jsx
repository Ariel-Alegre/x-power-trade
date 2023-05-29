import Footer from "../../Footer/Footer";
import Buttons from "../../Regulation/Button/Button";
import NavBar from "../../Regulation/Navbar/NavBar";
import BGImage from "./BGImage/BGImage";
import Check from "./Check/Check";
import TakeALook from "./TakeALook/TakeALook";
import TradingPro from "./TradingPro/TradingPro";
import { useEffect, useState } from "react";
import Logos from '../../../Logos/logo-1.png';
import styles from './Professional.module.scss'

export default function Professional() {
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
          <BGImage />
          <div>
            <TradingPro />
            <TakeALook />
            <Check />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
