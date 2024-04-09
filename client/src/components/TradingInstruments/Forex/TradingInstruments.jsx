import NavBar from "../../Regulation/Navbar/NavBar";
import Footer from "../../Footer/Footer";
import BgImage from "./BGimage/BGimge";
import ForexTrading from "./ForexTrading/ForexTrading";
import Advantages from "./Advantages/Advantages";
import Learn from "./Learn/Learn";
import QuestionsForex from "./QuestionsForex/QuestionsForex";
import Logos from '../../../Logos/logo-1.png';
import { useEffect, useState } from "react";
import styles from './TradingInstruments.module.scss';

export default function TradingInstruments() {
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
          <div>
            <BgImage />
            <ForexTrading />
            <Advantages />
            <Learn />
            <QuestionsForex />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
