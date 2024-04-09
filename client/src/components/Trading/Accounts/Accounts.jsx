import Footer from "../../Footer/Footer";
import Buttons from "../../Regulation/Button/Button";
import NavBar from "../../Regulation/Navbar/NavBar";
import AccountsCatered from "./AccountsCatered/AccountsCatered";
import BgAccounts from "./BgAccounts/BgAccounts";
import Info from "./Info/Info";
import { useEffect, useState } from "react";
import Logos from '../../../Logos/logo-1.png';
import styles from './Accounts.module.scss'

export default function Accounts() {
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
            <BgAccounts />
            <Info />
            <AccountsCatered />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
