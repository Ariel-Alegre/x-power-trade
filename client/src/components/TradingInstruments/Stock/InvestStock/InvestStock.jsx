import styles from "./InvestStock.module.scss";
import Image from "../../../../image/trading-stocks-1.jpg";
export default function InvestStock() {
  return (
    <div>
      <div className={styles.InvestContainer}>
        <div className={styles.Text}>
          <h6>Invierta en su éxito</h6>
          <h3>Trading de Acciones</h3>
          <p>
          Descubra el potencial al hacer trading con los CFDs de acciones más famosos como por ejemplo Amazon, Alphabet o Apple. Sin ninguna restricción y por medio de un entorno de trading avanzado.
          </p>
          <p>
          Busque ideas para encontrar información completa sobre acciones de diferentes sectores, datos geográficos y rendimiento global con gráficos.
          </p>
        </div>
        <div className={styles.ImgContainer}>
          <img src={Image} alt="Not found" />
        </div>
      </div>
      <div className={styles.BtnContainer}>
        <button>
          <span>COMIENCE A HACER TRADING</span>
        </button>
      </div>
    </div>
  );
}
