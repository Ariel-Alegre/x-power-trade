import styles from "./Invest.module.scss";
import Image from "../../../../image/trading-indices-1.jpg";
export default function Invest() {
  return (
    <div>
      <div className={styles.InvestContainer}>
        <div className={styles.Text}>
          <h6>Invierta en su éxito</h6>
          <h3>Trading de índices</h3>
          <p>
            Existe una gran variedad de mercados de índices disponibles para
            hacer trading con nosotros. Es el momento de acceder a los
            principales índices bursátiles internacionales.
          </p>
        </div>
        <div className={styles.ImgContainer}>
          <img src={Image} alt="Not found" />
        </div>
      </div>
      <div className={styles.BtnContainer}>
        <button>
            <span>
                COMIENCE A HACER TRADING
            </span>
        </button>
      </div>
    </div>
  );
}
