import styles from "./Identify.module.scss";
import Logo from '../../Logos/logo-1.png'

export default function Identify() {
  return (
    <div className={styles.IdentifyContainer}>
      
      <div className={styles.IdentifyBox}>
        <div className={styles.textContainer}>
          <div className={styles.activeContainer}>
            <div className={styles.active}></div>
            <span>Número de la cuenta</span>
          </div>
          <strong className={styles.usd}>1303473995</strong>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.activeContainer}>
            <div className={styles.active}></div>
          <span>Divisa</span>
          </div>
          <strong>USD</strong>
          <div class={styles.hr}></div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.activeContainer}>
            <div className={styles.active}></div>
            <span>Tipo</span>
          </div>
          <strong>Real</strong>
          <div class={styles.hr}></div>
        </div>
      </div>
    </div>
  );
}
