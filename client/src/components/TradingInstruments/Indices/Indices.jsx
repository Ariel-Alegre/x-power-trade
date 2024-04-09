import NavBar from "../../Regulation/Navbar/NavBar";
import Footer from "../../Footer/Footer";
import BGimage from "./BGimage/BGimage";
import Invest from "./Invest/Invest";
import AdventagesInvest from "./AdventagesIndices/AdventagesInvest";
import Learn from "../Forex/Learn/Learn";
import QuestionsIndices from "./QuestionsIndices/QuestionsIndices";
import { useEffect, useState } from "react";
import Logos from '../../../Logos/logo-1.png';
import styles from './Indices.module.scss';

export default function Indices() {
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
            <BGimage />
            <Invest />
            <AdventagesInvest />
            <Learn />
            <QuestionsIndices />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
