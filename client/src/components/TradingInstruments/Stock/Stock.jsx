import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import AdventageStock from "./AdventageStock/AdventageStock";
import BGImage from "./BGImage/BGImage";
import InvestStock from "./InvestStock/InvestStock";
import Learn from "../Forex/Learn/Learn";
import QuestionStock from "./QuestionStock/QuestionStock";
import { useEffect, useState } from "react";
import Logos from '../../../Logos/logo-1.png';
import styles from './Stock.module.scss';

export default function Stock() {
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
            <BGImage />
            <InvestStock />
            <AdventageStock />
            <Learn />
            <QuestionStock />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
