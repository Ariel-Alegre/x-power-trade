import styles from "./ForexTrading.module.scss";
import Forex from "../../../../image/trading-forex-1.jpg";

export default function ForexTrading() {
  return (
    <div>
      <div className={styles.TextImage}>
        <div className={styles.Text}>
          <h6>Invierta en su éxito</h6>
          <h3>Trading en Forex</h3>
          <p>
            El trading de divisas es accesible, emocionante, educativo y ofrece
            a los traders muchas oportunidades.
          </p>
          <p>
            Comience a hacer trading con más de 190 pares de divisas al contado,
            en uno de los mercados más dinámicos del mundo en términos de
            transacciones.
          </p>
        </div>
        <div className={styles.ImgContainer}>
          <img src={Forex} alt="Not found" />
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
