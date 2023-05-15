import image from "../../image/Trading-1.jpg";
import AccountMenu from "../AccountMenu/AccountMenu";
import Identify from "../Identify/Identify";
import SideNavBar from "../SideNavBar/SideNavBar";
import styles from "./Panel.module.css";
import Button from "@mui/material/Button";

export default function Panel() {
  return (
    <div>
      <SideNavBar/>  
      <Identify/>
      <AccountMenu/>
      <div className={styles.panelContainer}>
        <img src={image} alt="not found" className={styles.img} />
        <div className={styles.ButtonAndTextContainer}>
          <strong>
            <h3 className={styles.text}>
              ¡Cargue documentos y verifique su cuenta para comenzar a invertir!
            </h3>
          </strong>
          <Button variant="contained" className={styles.btn}>
            {" "}
            Suba sus documentos de verificación
          </Button>
        </div>

        <div className={styles.summary}>
          <h5>Resumen financiero de la cuenta</h5>
          <div className={styles.summaryDetail}>
            <div className={styles.balance}>
              <p className={styles.summerFinance}>Saldo</p>
              <p className={styles.summaryNumber}>$0.00</p>
              <div className={styles.linea}></div>
            </div>
            <div class="vr"></div>
            <div className={styles.neto}>
              <p className={styles.summerFinance}>Patrimonio Neto</p>
              <p className={styles.summaryNumber}>$0.00</p>
              <div className={styles.linea}></div>
            </div>
            <div class="vr"></div>
            <div className={styles.margen}>
              <p className={styles.summerFinance}>Margen libre</p>
              <p className={styles.summaryNumber}>$0.00</p>
              <div className={styles.linea}></div>
            </div>
          </div>
        </div>

        <div className={styles.containerButton}>
          <button>Depósito</button>
          <button >Hacer trading ahora</button>
          <button>retirar</button>
        </div>
        <div className={styles.positionClosed}>
          <h4>Posiciones cerradas</h4>
          <div className={styles.notTrading}>
            <p>
              No comenzó a hacer trading, por lo que no tenemos posiciones
              cerradas para presentar aquí.
            </p>
            <Button >
              <span>Haga un depósito y comience a hacer trading!</span>
            </Button>
          </div>
        </div>
        <div className={styles.Transaction}>
          <h4>Transacciones monetarias</h4>
          <div className={styles.detailTransaction}>
            <p>
              Aún no realizó su primer depósito, por lo que no tenemos ninguna
              transacción monetaria para presentar aquí.
            </p>
            <Button>
              <span>Haga un depósito y comience a hacer trading!</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
