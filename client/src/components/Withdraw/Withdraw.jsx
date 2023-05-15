import { useState } from "react";
import styles from "./Withdraw.module.scss";
import SideNavBar from "../SideNavBar/SideNavBar";
import Identify from "../Identify/Identify";
import AccountMenu from "../AccountMenu/AccountMenu";

export default function Withdraw() {
  const [amount, setAmount] = useState(0);

  return (
    <div>
   <SideNavBar/>
       <Identify/>
       <AccountMenu/>
      <div className={styles.withdrawContainer}>
        <h2>Crear nueva solicitud de retiro</h2>
        <div className={styles.withdraw}>
          <p>Quiero retirar fondos</p>
          <input type="text" value={"$" + amount} />
          <p> Recomendado: $ 0.00 • Min: $ 0.00 • Max: $ 0.00</p>
        </div>
        <div className={styles.minAndMax}>
          <input type="range" value={amount} />
          <p>min</p>
        </div>
        <div className={styles.list}>
          <p>Su retiro se dividirá de la siguiente manera:</p>
          <ul>
            <li>
              Si el importe de su retiro es menor o igual al importe total de su
              depósito, recibirá su dinero de vuelta mediante el método de pago
              con el que realizó el depósito.
            </li>
            <li>
              Si el importe de su retiro es mayor que su depósito, el importe de
              su depósito se retribuirá mediante el mismo modo de pago utilizado
              para el depósito y la ganancia se le transferirá mediante métodos
              de pago alternativos.
            </li>
          </ul>
        </div>
        <div className={styles.checkContainer}>
          <div className={styles.check}>
            <input type="checkbox" name="" id="" />
            <label>
              Entiendo que existe la posibilidad de que, si tuviera posiciones
              abiertas, mi retiro pueda causar una interrupción en mi cuenta.
            </label>
          </div>
          <button>Solicitar</button>
        </div>
        <div className={styles.registration}>
          <p>Historial de retiros</p>
          <div className={styles.registrations}>
            <p>No tiene historial de retiros</p>
          </div>
        </div>
      </div>
    </div>
  );
}
