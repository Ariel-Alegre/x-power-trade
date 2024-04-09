import styles from "./Description.module.scss";
import Img from '../../../../image/trading-crypto-2.jpg'

export default function Description() {
  return (
    <div className={styles.LearnContainer}>
      <div className={styles.TextImage}>
        <div className={styles.Text}>
          <h6>Cripto</h6>
          <h3>
          ¿Qué es criptomoneda?
          </h3>
          <p>
          Debe saber que una criptomoneda como Bitcoin (XBT), Ethereum (ETH), Litecoin (LTC) entre otras, es un activo digital diseñado para funcionar como medio de intercambio. Utiliza una fuerte criptografía para asegurar las transacciones financieras, controlar la creación de unidades adicionales y verificar la transferencia de activos.
          </p>
          <p>
          Queremos asegurarnos de que tenga respuestas a todas sus preguntas. Si quiere descubrir más sobre las criptomonedas, visite la página de preguntas frecuentes en el siguiente 
         {" "} <a href="/about/faq">
          enlace.
          </a>
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
