import styles from "./AdventagesInvest.module.scss";
import icons1 from "../../../../icons/trading-crypto-1-pkgshwcsxjdpwyydlpx92mf35821jtg6f0gtqcqo00.png";
import icons2 from "../../../../icons/trading-crypto-2.png";
import icons3 from "../../../../icons/trading-crypto-3.png";
import icons4 from "../../../../icons/trading-crypto-4-pkgroaftneuk75yohx6bj3edi9zt31wkcgo7ikn400.png";
import icons5 from "../../../../icons/trading-commodities-3-pkgroaftneuk75yohx6bj3edi9zt31wkcgo7ikn400.png";

export default function AdventagesInvest() {
  return (
    <div className={styles.Advantages}>
      <div className={styles.Text}>
        <h6>Las ventajas de</h6>
        <h3>
        Trading de Criptomonedas
        </h3>
      </div>
      <div className={styles.IconsContainer}>
        <div>
          <img src={icons1} alt="Not found" />
          <p>
          HAGA TRADING CON UNA
          <br />
          SELECCIÓN DE CRIPTOMONEDAS
          <br />
          EN CONTINUO CRECIMIENTO
          </p>
        </div>
        <div>
          <img src={icons2} alt="Not found" />
          <p>
          TASAS REDUCIDAS DE
          <br />
          TRANSACCIÓN PARA EL
          </p>
        </div>
        <div>
          <img src={icons3} alt="Not found" />
          <p>
          MAYOR PROTECCIÓN CONTRA
          <br />
          EL ROBO DE IDENTIDAD
          </p>
        </div>
        <div>
          <img src={icons4} alt="Not found" />
          <p>
          DISPONIBLE PARA HACER
          <br />
          TRADING LAS 24 HORAS DEL DÍA,
          <br />
          LOS SIETE DÍAS DE LA SEMANA
          </p>
        </div>
      </div>
    </div>
  );
}
