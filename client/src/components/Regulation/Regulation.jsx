import React from "react";
import NavBar from "./Navbar/NavBar";
import Image from "./Image/ImageRegulation.jsx";
import Text from "./Text/Text";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Logos from '../../Logos/logo-1.png';
import styles from './Regulation.module.css';

export default function Regulation() {
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
          <Text />
          <Footer />
        </div>
      )}
    </div>
  );
}
