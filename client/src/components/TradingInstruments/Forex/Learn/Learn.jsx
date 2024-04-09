import styles from "./Learn.module.scss";
import Img from '../../../../image/trading-crypto-2.jpg'

export default function Learn() {
  return (
    <div className={styles.LearnContainer}>
      <div className={styles.TextImage}>
        <div className={styles.Text}>
          <h6>Aprenda a</h6>
          <h3>
            Hacer trading en los mercados 
            financieros con{" "}
            <span className={styles.marca}>X</span>{" "}
            <span className={styles.marca1}>POWER</span>{" "}
            <span className={styles.marca2}>TRADE</span>
          </h3>
          <p>
          Hemos diseñado una sólida plataforma educativa en línea y en directo que le ayudará a convertirse en un trader efectivo. Cuadrar todos los componentes correctamente le ayudará a evitar perdidas y mejorar sus resultados.
          </p>
        </div>
        <div className={styles.ImgContainer}>
          <img src={Img} alt="Not found" />
        </div>
      </div>
      <div className={styles.BtnContainer}>
        <button>
          <span>SABER MÁS</span>
        </button>
      </div>
    </div>
  );
}
