import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import Carrusel from "./Carrusel/Carrusel";
import styles from "./Deposit.module.scss";
import Funds from "./Funds/Funds";
import Withdraw from "./Withdraw Funds/Withdraw";
import { useTranslation } from "react-i18next";


export default function Deposit() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <NavBar />
  <div className={styles.ImgBG}>
        <div className={styles.TextBg}>
          <h1>{t("Deposit_withdrawal.BGTitle")}</h1>
          <h3>{t("Deposit_withdrawal.BGsubtittle")}</h3>
        </div>
      </div>
      <div>
        <Carrusel/>
        <Funds/>
        <Withdraw/>
      </div>
      <Footer />
    </div>
  );
}
