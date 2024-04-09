import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import BGimage from "../AboutUs/BGimage/BGimage";
import Accordions from "./Accordion";
import { useEffect, useState } from "react";
import Logos from '../../../Logos/logo-1.png';
import styles from "./Faq.module.scss"

export default function Faq() {
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
          <div>
            <Accordions />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
