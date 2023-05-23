



import Buttons from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.NavBarContainer}>
      <Logo />

      <div className={styles.select}>
        <ul>
        {t("NavBar.ABOUT")}
          <AiOutlineDown className={styles.icon} />
          <li className={styles.list}>
            <a href="/about/about-us">
              <li>{t("NavBar.ABOUT_US")}</li>
              <hr />
            </a>
            <a href="/about/why-xpowertrade">
              <li>{t("NavBar.WHY")}</li>
              <hr />
            </a>
            <a href="/about/contact-us">
              <li>{t("NavBar.CONTACT_US")}</li>
              <hr />
            </a>
            <a href="/about/faq">
              <li>{t("NavBar.FAQ")}</li>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.select}>
        <ul>
        {t("NavBar.TRADING")}
          <AiOutlineDown className={styles.icon} />
          <li className={styles.list}>
            <a href="/trading/trading-accounts">
              <li>{t("NavBar.ACCOUNTS")}</li>
              <hr />
            </a>
            <a href="/trading/professional-traders">
              <li>{t("NavBar.PROFESSIONAL_TRADERS")}</li>
              <hr />
            </a>
            <a href="/trading/safety-of-funds">
              <li>{t("NavBar.SAFETY_OF_FUNDS")}</li>
              <hr />
            </a>
            <a href="/trading/trading-accounts/deposit-withdrawal">
              <li>{t("NavBar.DEPOSITS_&_WITHDRAWALS")}</li>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.select}>
        <ul>
        {t("NavBar.TRADING_INSTRUMENTS")}
          <AiOutlineDown className={styles.icon} />
          <li className={styles.list}>
            <a href="/trading/trading-instruments/trading-forex/">
              <li>{t("NavBar.FOREX")}</li>
              <hr />
            </a>
            <a href="/trading/trading-instruments/trading-indices">
              <li>{t("NavBar.INDICES")}</li>
              <hr />
            </a>
            <a href="/trading/trading-instruments/trading-commodities">
              <li>{t("NavBar.COMMODITIES")}</li>
              <hr />
            </a>
            <a href="/trading/trading-instruments/trading-crypto">
              <li>{t("NavBar.CRYPTO")}</li>
              <hr />
            </a>
            <a href="/trading/trading-instruments/trading-stocks">
              <li>{t("NavBar.STOCK")}</li>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.select}>
        <ul>
        {t("NavBar.REGULATION")}
          <AiOutlineDown className={styles.icon} />
          <li className={styles.list}>
            <a href="/regulation/policies">
              <li>{t("NavBar.POLICIES")}</li>
              <hr />
            </a>
            <a href="/regulation/legal-information">
              <li>{t("NavBar.LEGAL_INFORMATION")}</li>
            </a>
          </li>
        </ul>
      </div>
      <Buttons />

    </div>
  );
} 
 
 