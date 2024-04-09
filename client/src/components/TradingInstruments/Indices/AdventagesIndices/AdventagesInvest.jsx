import styles from "./AdventagesInvest.module.scss";
import icons1 from "../../../../icons/trading-indices-1-pkgrv6l7roa9c7y88wfttcs2c00pj59pakwe7mf6dc.png";
import icons2 from "../../../../icons/trading-stocks-2-pkgrv6l7roa9c7y88wfttcs2c00pj59pakwe7mf6dc.png";
import icons3 from "../../../../icons/trading-commodities-2-pkgroaftneuk75yohx6bj3edi9zt31wkcgo7ikn400.png";
import icons4 from "../../../../icons/trading-crypto-4-pkgroaftneuk75yohx6bj3edi9zt31wkcgo7ikn400.png";
import icons5 from "../../../../icons/trading-commodities-3-pkgroaftneuk75yohx6bj3edi9zt31wkcgo7ikn400.png";

export default function AdventagesInvest() {
  return (
    <div className={styles.Advantages}>
      <div className={styles.Text}>
        <h6>Las ventajas de</h6>
        <h3>
          Trading en Forex con <span className={styles.marca}>X</span>{" "}
          <span className={styles.marca1}>POWER</span>{" "}
          <span className={styles.marca2}>TRADE</span>
        </h3>
      </div>
      <div className={styles.IconsContainer}>
        <div>
          <img src={icons1} alt="Not found" />
          <p>
          APALANCAMIENTO
          <br />
          SIGNIFICATIVO Y SPREADS
          <br />
          REDUCIDOS
          </p>
        </div>
        <div>
          <img src={icons2} alt="Not found" />
          <p>
          DISFRUTE DEL
          <br />
          APALANCAMIENTO
          </p>
        </div>
        <div>
          <img src={icons3} alt="Not found" />
          <p>
          HASTA 1:20 EN ÍNDICES
          </p>
        </div>
        <div>
          <img src={icons4} alt="Not found" />
          <p>
          SERVICIO PROFESIONAL DE
          <br />
          ATENCIÓN AL CLIENTE 24/5
          </p>
        </div>
        <div>
          <img src={icons5} alt="Not found" />
          <p>
          HAGA TRADING CON UN
          <br />
          BRÓKER REGLAMENTADO Y
          <br />
          CON LICENCIA GLOBAL
          </p>
        </div>
      </div>
    </div>
  );
}
