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

        <p>World.EZInvest is the trading name of Sanus Financial Services (PTY) Ltd, a</p>
        <br />
        <p>financial services company subject to the regulation and supervision of</p>
        <br />
        <p>the Financial Sector Conduct Authority (FSCA)  with registration</p>
      <br />
      <p>number 2020/659426/07, FSP number 51523 and authorization date</p>
      <br />
      <p>10/6/2021. The offices of Sanus Financial Services (PTY) Ltd are located</p>
      <br />
      <p>at 17 Midas Avenue, Olympus, Pretoria, Gauteng, 0081 South Africa.</p>
        </div>
        <div className={styles.explicity}>

        <p>By prioritizing secure trading, we are committed to providing all our customers with the best online trading experience possible. We invite</p>
        <br />
        <p>you to visit our sections <a href="/regulation">« Regulation »</a>  and <a href="/regulation/policies"> « Policies and Documentation » </a> to obtain more information about our license and our</p>
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
