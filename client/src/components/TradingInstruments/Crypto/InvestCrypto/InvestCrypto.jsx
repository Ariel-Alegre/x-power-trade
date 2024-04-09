import styles from "./InvestCrypto.module.scss";
import Image from "../../../../image/trading-crypto-1.jpg";
export default function InvestCommodities() {
  return (
    <div>
      <div className={styles.InvestContainer}>
        <div className={styles.Text}>
          <h6>Invierta en su éxito</h6>
          <h3>Trading Cripto</h3>
          <p>
            Ofrecemos una selección de CFDs sobre criptomonedas en continuo
            crecimiento en la principal bolsa de criptodivisas del mundo.
          </p>
          <p>
            Como sabrá, hacer trading e invertir en el mercado de las
            criptomonedas se ha vuelto muy popular en los últimos años, y no sin
            razón.
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
