import Carousel from "react-bootstrap/Carousel";
import carrusel1 from "../../../../image/Carrusel/Carrusel-1.jpg";
import carrusel2 from "../../../../image/Carrusel/Carrusel-2.jpg";
import carrusel3 from "../../../../image/Carrusel/Carrusel-3.jpg";
import carrusel4 from "../../../../image/Carrusel/Carrusel4.jpg";
import carrusel5 from "../../../../image/Carrusel/Carrusel-5.jpg";
import carrusel6 from "../../../../image/Carrusel/Carrusel-6.jpg";

import { useTranslation } from "react-i18next";
import styles from "./Carrusel.module.scss";

function Carrusel() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.CarruselContainer}>
      <Carousel fade>
        <Carousel.Item>
          <img src={carrusel1} alt="Not found" className={styles.img} />
          <Carousel.Caption className={styles.Description}>
            <h3>{t("Deposit_withdrawal.CarruselTittle1")}</h3>
            <span>{t("Deposit_withdrawal.CarruselSubtittle1")}</span>
            <p>{t("Deposit_withdrawal.CarruselDescription1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carrusel2} className={styles.img} alt="Not found" />

          <Carousel.Caption className={styles.Description}>
            <h3>{t("Deposit_withdrawal.CarruselTittle2")}</h3>
            <span>{t("Deposit_withdrawal.CarruselSubtittle2")}</span>
            <p>{t("Deposit_withdrawal.CarruselDescription2")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carrusel3} className={styles.img} alt="Not found" />

          <Carousel.Caption className={styles.Description}>
            <h3> {t("Deposit_withdrawal.CarruselTittle3")}</h3>
            <span> {t("Deposit_withdrawal.CarruselSubtittle3")}</span>
            <p>{t("Deposit_withdrawal.CarruselDescription3")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carrusel4} alt="Not found" className={styles.img} />
          <Carousel.Caption className={styles.Description}>
            <h3>{t("Deposit_withdrawal.CarruselTittle4")} </h3>
            <p>{t("Deposit_withdrawal.CarruselDescription4")}</p>
            <p>{t("Deposit_withdrawal.CarruselDescription41")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carrusel5} alt="Not found" className={styles.img} />
          <Carousel.Caption className={styles.Description}>
            <h3>{t("Deposit_withdrawal.CarruselTittle5")} </h3>
            <p>{t("Deposit_withdrawal.CarruselDescription5")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carrusel6} className={styles.img} alt="Not found" />

          <Carousel.Caption className={styles.Description}>
            <h3> {t("Deposit_withdrawal.CarruselTittle6")}</h3>
            <span> {t("Deposit_withdrawal.CarruselSubtittle6")}</span>
            <p>{t("Deposit_withdrawal.CarruselDescription6")}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
