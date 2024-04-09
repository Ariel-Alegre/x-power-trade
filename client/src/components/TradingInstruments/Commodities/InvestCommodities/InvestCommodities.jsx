import styles from "./InvestCommodities.module.scss";
import Image from "../../../../image/trading-instruments-3.jpg";
export default function InvestCommodities() {
  return (
    <div>
      <div className={styles.InvestContainer}>
        <div className={styles.Text}>
          <h6>Invierta en su éxito</h6>
          <h3>Trading de materias primas</h3>
          <p>Invertir en materias primas nunca ha sido tan fácil.</p>
          <p>
            Comience a hacer trading en uno de los mercados más populares, que
            ofrece un abanico de posibilidades y la oportunidad de invertir en
            una amplia gama de productos.
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
