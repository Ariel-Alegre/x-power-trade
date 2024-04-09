import styles from "./Legal.module.scss";
import NavBar from "../Navbar/NavBar";
import Footer from "../../Footer/Footer";
import Image from "../../Regulation/Image/ImageRegulation";
import { useEffect, useState } from 'react';
import Logos from '../../../Logos/logo-1.png';

export default function Legal() {

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
      <Image />
      <div className={styles.LegalContainer}>
        <h3>Legal Information</h3>
        <div className={styles.information}>
<p>

        X POWER TRADE es el nombre comercial de Sanus Financial Services (PTY) Ltd, una


empresa de servicios financieros sujeta a la regulación y supervisión de


la Autoridad de Conducta del Sector Financiero (FSCA) con registro


número 2020/659426/07, número FSP 51523 y fecha de autorización


6/10/2021. Las oficinas de Sanus Financial Services (PTY) Ltd están ubicadas


en 17 Midas Avenue, Olympus, Pretoria, Gauteng, 0081 Sudáfrica.
</p>

        </div>
        <div className={styles.explicity}>
<p>
        Al priorizar el comercio seguro, nos comprometemos a brindar a todos nuestros clientes la mejor experiencia comercial en línea posible. Nosotros invitamos


le recomendamos visitar nuestras secciones
 <a href="/regulation">« Regulación »</a>  and <a href="/regulation/policies"> « Politicas y documentación » </a>  para obtener más información sobre nuestra licencia y nuestras


autorización.</p>
          <br />
          <p>authorization.</p>
        </div>
      </div>
      <Footer />

      </div>
      )}
    </div>
  );
}
