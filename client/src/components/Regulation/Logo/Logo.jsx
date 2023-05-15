import styles from "./Logo.module.scss";
import Logo2 from "../../../Logos/logo-2.jpg";

export default function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <a href="/">
        <img src={Logo2} alt="Not found" />
        <span className={styles.x}>X</span> <span className={styles.power}>POWER</span> <span className={styles.trade}>TRADE</span>
      </a>
    </div>
  );
}
