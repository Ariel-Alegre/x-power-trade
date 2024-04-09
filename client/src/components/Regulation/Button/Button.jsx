import styles from "./Button.module.scss";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";


import AccountMenu from "../../AccountMenu/AccountMenu";
export default function Buttons() {
  const token = useSelector((state) => state.token);
  return (
    <div className={styles.NavBarContainer}>
      {token && token ? (
        <div className={styles.menus}>
        <div className={styles.deposito}>
        <a href="/my-wallet/deposit">
              <button >Deposito</button>
            </a>
        </div>
          <div>
        <AccountMenu/>
          </div>
        </div>
      ) : (
        <div className={styles.btnContainer}>
          <div className={styles.btnLogin}>
            <a href="/auth/login">
              Iniciar sesión
            </a>
          </div>
          <div className={styles.btnSignUp}>
            <a href="/auth/register">
              <button>Registrarse</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
