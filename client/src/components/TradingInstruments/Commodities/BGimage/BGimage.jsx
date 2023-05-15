import styles from "./BGimage.module.scss";

export default function BGimage() {
  return (
    <div className={styles.BgImageContainer}>
      <div className={styles.TextBg}>
        <h1>
          TRADING DE MATERIAS
          <br />
          PRIMAS
        </h1>
        <h3>TRADING EN LOS MERCADOS MUNDIALES</h3>
      </div>
    </div>
  );
}
