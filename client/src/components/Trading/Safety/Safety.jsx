import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import styles from './Safety.module.scss';
import imageSafety from '../../../image/Why-ezinvest-4.jpg';
import { useTranslation } from "react-i18next";

export default function Safety() {

  const [t, i18n] = useTranslation("global");

    return (
        <div>
            <NavBar/>
            <div className={styles.BgImage}>
                <div className={styles.TextBg}>

                <h1>{t("Safety_Of_Funds.BGTitle")}</h1>
                <h3>{t("Safety_Of_Funds.BGSubTitle")}</h3>
                </div>
            </div>
            <div className={styles.SafetyContainer}>
                <div className={styles.Text}>
                    <h6>{t("Safety_Of_Funds.Tittle")}</h6>
                    <h3>{t("Safety_Of_Funds.Subtittle")}</h3>
                    <p>
                    {t("Safety_Of_Funds.Description1")}
                    </p>
                    <p>
                    {t("Safety_Of_Funds.Description2")}
                    </p>
                    <p>
                    {t("Safety_Of_Funds.Description3")}
                    </p>
                    <p>
                    {t("Safety_Of_Funds.Description4")}
                    </p>
                </div>
                <div className={styles.ImgContainer}>
                    <img src={imageSafety} alt="Not found" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}