import styles from "./AdventageStock.module.scss";
import icons1 from "../../../../icons/trading-stocks-1.png";
import icons2 from "../../../../icons/trading-stocks-2-pkgrv6l7roa9c7y88wfttcs2c00pj59pakwe7mf6dc.png";
import icons3 from "../../../../icons/trading-stocks-3png.png";
import icons4 from "../../../../icons/trading-crypto-3png.png";
import icons5 from "../../../../icons/trading-crypto-4-pkgroaftneuk75yohx6bj3edi9zt31wkcgo7ikn400.png";

export default function AdventageStock() {
  return (
    <div className={styles.Advantages}>
      <div className={styles.Text}>
        <h6>Las ventajas de</h6>
        <h3>
        Trading de acciones con
       {" "} <span className={styles.marca}>X</span>
       {" "} <span className={styles.marca1}>POWER</span>
        {" "}<span className={styles.marca2}>TRADE</span>
        </h3>
      </div>
      <div className={styles.IconsContainer}>
        <div>
          <img src={icons1} alt="Not found" />
          <p>
          ACCEDA A MÁS DE 19,000
          <br />
          ACCIONES EN MERCADOS
          <br />
          CENTRALES Y EMERGENTES
          </p>
        </div>
        <div>
          <img src={icons2} alt="Not found" />
          <p>
          SPREADS REDUCIDOS
          </p>
        </div>
        <div>
          <img src={icons3} alt="Not found" />
          <p>
          EJECUCIÓN DE OPERACIONES
          <br />
          DE TRADING SUPER RÁPIDA
          </p>
        </div>
        <div>
          <img src={icons4} alt="Not found" />
          <p>
          MÁXIMA PROTECCIÓN Y
          <br />
          SEGURIDAD CONTRA RIESGOS
          </p>
        </div>
        <div>
          <img src={icons5} alt="Not found" />
          <p>
          ATENCIÓN AL CLIENTE
          <br />
          PROFESIONAL 24/5
          </p>
        </div>
      </div>
    </div>
  );
}
